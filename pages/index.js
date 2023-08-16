import { useState, useEffect } from 'react';
import Playlist from './Playlist.js'
import Searchbar from './Searchbar.js'
import {Searchresults} from './Searchresults.js'
import styles from '../styles/Index.module.css';

export default function App() {

  //STATES

  const [token, setToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [tracks, setTracks] = useState([]);
  const [playlistId, setPlaylistId] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  //AUTHORIZATION DATA

  const clientId = '0a7f801c76fe4efdacea3c10662f2b9a';
  const redirectUri = 'http://localhost:3000';

  //AUTHORIZATION UTILITIES

  function generateRandomString(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  async function generateCodeChallenge(codeVerifier) {
    function base64encode(string) {
      return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);

    return base64encode(digest);
  }

  let codeVerifier = generateRandomString(128);

  //AUTHORIZATION BY THE CUSTOMER WITH PKCE FLOW

  function login() {
    generateCodeChallenge(codeVerifier)
      .then(codeChallenge => {
        let state = generateRandomString(16);

        //scope of authority
        let scope = 'user-library-read user-library-modify user-top-read user-read-private user-read-email playlist-modify-public playlist-modify-private playlist-read-private playlist-read-collaborative';
        localStorage.setItem('code_verifier', codeVerifier);

        let args = new URLSearchParams({
          response_type: 'code',
          client_id: clientId,
          scope: scope,
          redirect_uri: redirectUri,
          state: state,
          code_challenge_method: 'S256',
          code_challenge: codeChallenge
        });
        
        //directing the customer to the spotify authorization website
        window.location = `https://accounts.spotify.com/authorize?` + args;
      })
  }

  //OBTAINING A TOKEN

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code !== null) {
      const codeVerifier = localStorage.getItem('code_verifier');
      const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
        client_id: clientId,
        code_verifier: codeVerifier
      });
      fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP status ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        setToken(data.access_token);
        setRefreshToken(data.refresh_token);
      })
      .catch(error => {
        console.error('Error:', error);
      });

      const baseUrl = window.location.href.split('?')[0];
      history.replaceState(null, null, baseUrl);
    }
  }, []);

  //OBTAINING A REFRESHED TOKEN

  function getRefreshedToken()
  {
    if (refreshToken) {
      const codeVerifier = localStorage.getItem('code_verifier');
      const body = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: clientId
      });
      fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP status ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        setToken(data.access_token);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }

  //GET TRACKS FROM THE SERVER
  //Input = artist | Output = track array

  function getTracks(artist)
  {
    if (typeof artist === 'string')
    {
      const encodedArtistName = encodeURIComponent(artist);
      const searchUrl = `https://api.spotify.com/v1/search?q=artist%3A${encodedArtistName}&type=track&market=pl&limit=10&offset=0`;
      fetch(searchUrl, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('HTTP error ' + response.status);
          }
          return response.json();
        })
        .then(data => {
          setTracks(data.tracks.items)
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }

  //CREATE PLAYLIST
  //Input = playlist name, Output = new playlist with tracks added to the playlist

  async function createPlaylist(playlistName) {
    const url = `https://api.spotify.com/v1/users/31mouwpyor2lmfifwz2jqnpdlaaq/playlists`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: playlistName,
        public: false
      })
    });
  
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to create playlist: ${errorMessage}`);
    }
    const playlistData = await response.json();
    const uris = Array.from(playlistTracks, (track) => `spotify:track:${track.id}`)

    fetch(`https://api.spotify.com/v1/playlists/${playlistData.id}/tracks`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        uris: uris,
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  //PLAYLIST ARRAY OF OBJECTS

  const addOrRemoveFromPlaylist = (trackId) => {
    const trackToAdd = tracks.find(track => track.id === trackId);
    const trackToRemove = playlistTracks.find(track => track.id === trackId);
    if (trackToAdd) {
      setPlaylistTracks(prev => [trackToAdd, ...prev]);
      const newTracks = tracks.filter(element => element !== trackToAdd);
      setTracks(newTracks);
    } else {
      setTracks(prev => [trackToRemove, ...prev]);
      const newPlaylist = playlistTracks.filter(element => element !== trackToRemove);
      setPlaylistTracks(newPlaylist);
    }
  };

  //APPLICATION BODY

  return (
    <div>
      <header>
        <h1>Discoquette</h1>
        <button aria-label="Login" onClick={login}>Login</button>
        <button aria-label="Refresh Token" onClick={getRefreshedToken}>Refresh Token</button>
      </header>
      <main className={styles.main}>
        <section className={styles.searchbar}>
          <Searchbar getTracks={getTracks}/>
        </section>
        <section className={styles.content}>
          <Searchresults addOrRemoveFromPlaylist={addOrRemoveFromPlaylist} tracks={tracks} />
          <Playlist playlistTracks={playlistTracks} addOrRemoveFromPlaylist={addOrRemoveFromPlaylist} createPlaylist={createPlaylist} />
        </section>
      </main> 
    </div>
  );
}
import { useState, useEffect } from 'react';
import React, { useRef } from 'react';
import Playlist from './Playlist.js'
import Searchbar from './Searchbar.js'
import {Searchresults} from './Searchresults.js'

export default function App() {

  const [token, setToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  //AUTHORIZATION

  //CODE VERIFIER

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

  const clientId = '0a7f801c76fe4efdacea3c10662f2b9a';
  const redirectUri = 'http://localhost:3000';

  let codeVerifier = generateRandomString(128);

  function login() {
    generateCodeChallenge(codeVerifier)
      .then(codeChallenge => {
        let state = generateRandomString(16);
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
        

        window.location = `https://accounts.spotify.com/authorize?` + args;
      })
  }

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
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

      const baseUrl = window.location.href.split('?')[0];
      history.replaceState(null, null, baseUrl);
    }
  }, []);

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
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }

  //ARRAY OF TRACKS FROM POSSESSED FROM SPOTIFY

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
          console.log(data.tracks.items)
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    console.log(token);
  }

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
    console.log(uris);

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
        console.log(response.json());
        return response.json();
      })
      .catch(error => {
        console.error('Error:', error);
      });
    

  }

  const [tracks, setTracks] = useState([]);
  const [playlistId, setPlaylistId] = useState('');

  //PLAYLIST ARRAY OF OBJECTS

  const [playlistTracks, setPlaylistTracks] = useState([]);
 

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
      <button onClick={login}>LOGIN</button>
      <button onClick={getRefreshedToken}>REFRESH TOKEN</button>
      <header>
        <h1>Discoquette</h1>
        <Searchbar getTracks={getTracks}/>
      </header>
      <div className="App-playlist">
        <Searchresults addOrRemoveFromPlaylist={addOrRemoveFromPlaylist} tracks={tracks}/>
        <Playlist playlistTracks={playlistTracks} addOrRemoveFromPlaylist={addOrRemoveFromPlaylist} createPlaylist={createPlaylist} />
      </div>
    </div>
  );
}
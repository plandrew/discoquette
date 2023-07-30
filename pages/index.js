import { useState } from 'react';
import Playlist from './Playlist.js'
import Searchbar from './Searchbar.js'
import {Searchresults} from './Searchresults.js'
import Track from './Track.js'
import Tracklist from './Tracklist.js'
import Utilities, {generateId} from './Utilities.js'

export default function App() {

  const [tracks, setTracks] = useState
    (
      [
        {
        name: 'Alright',
        artist: 'Jamiroquai',
        album: 'My favorite types of cats are slightly weird looking ones!',
        id: generateId()
        },
        {
        name: '7days',
        artist: 'Jamiroquai',
        album: 'I don\'t like cats at all.',   
        id: generateId()
        },
        {
        name: 'LittleL',
        artist: 'Jamiroquai',
        album: 'Wild ostriches make the best pets.',
        id: generateId()
        }
      ]
    );

    const [playlistTracks, setPlaylistTracks] = useState([]);

    const addTrackToPlaylist = (trackId) => 
    {
        const trackToAdd = tracks.find(track => track.id === trackId);
        setPlaylistTracks((prev) => [trackToAdd, ...prev]);
        const newTracks = tracks.filter((element) => element !== trackToAdd);
        setTracks(newTracks);
      }

  return (
    <div>
      <header>
        <h1>Discoquette</h1>
      </header>
      <div /*SearchBar*/>
        <Searchbar />
      </div>
      <main>
        <div /*Results*/>
        <ul>
          <Searchresults results={tracks} addTrackToPlaylist={addTrackToPlaylist}/>
        </ul>
        </div>
          <Playlist playlistTracks={playlistTracks} />
      </main>
    </div>
  )
}

import styles from '../styles/Playlist.module.css';
import { useState } from 'react';
import Track from './Track.js'

export function Playlist(props) {

    const [playlistName, setPlaylistName] = useState('');
    const {playlistTracks} = props;
    const {createPlaylist} = props;

    const handleClick = (event) =>
    {
        event.preventDefault();
        createPlaylist(playlistName);
    }

    return (
    <>
        <form /*onSubmit={handleSubmit}*/>
            <label htmlFor="playlistName">PlayList Name</label>
                <input 
                id="playlistName" 
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                />
            <button onClick={handleClick}>SAVE TO SPOTIFT</button>
        </form>
        <div>
        {playlistTracks.map((track) => (
                  <Track track={track} addOrRemoveFromPlaylist={props.addOrRemoveFromPlaylist}/>
            ))}
        </div>
    </>
    );
  }
  export default Playlist;
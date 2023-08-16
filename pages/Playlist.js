import styles from '../styles/Playlist.module.css';
import { useState } from 'react';
import Track from './Track.js'
import '../styles/Playlist.module.css';

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
   <div className={styles.playlist}>
        <h2>Playlist</h2>
        <form /*onSubmit={handleSubmit}*/>
            <label htmlFor="playlistName" />
                <input 
                id="playlistName" 
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                placeholder="PlayList Name"
                />
            
        </form>
        <datalist className={styles.tracks}>
            {playlistTracks.map((track) => (
                    <Track track={track} addOrRemoveFromPlaylist={props.addOrRemoveFromPlaylist}/>
                ))}
        </datalist>
        <button onClick={handleClick}>SAVE TO SPOTIFT</button>
    </div>
    );
  }
  export default Playlist;
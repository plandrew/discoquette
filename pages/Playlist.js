import styles from '../styles/Playlist.module.css';
import { useState } from 'react';
import Track from './Track.js'
import '../styles/Playlist.module.css';

export function Playlist(props) {

    const [playlistName, setPlaylistName] = useState('');
    const {playlistTracks} = props;
    const {createPlaylist} = props;
    const {activeTrack, setActiveTrack} = props;

    const handleClick = (event) =>
    {
        event.preventDefault();
        createPlaylist(playlistName);
    }

    const handlePlay = (trackId) => {
          setActiveTrack(trackId);
    };  

    if (!playlistTracks) {
        // Render a loading spinner or a message here
        return <div>Loading...</div>;
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
                    <Track track={track} addOrRemoveFromPlaylist={props.addOrRemoveFromPlaylist} isActive={track.id === activeTrack} onPlay={handlePlay}/>
                ))}
        </datalist>
        <button onClick={handleClick}>SAVE TO SPOTIFT</button>
    </div>
    );
  }
  export default Playlist;
import styles from '../styles/Playlist.module.css';
import { useState } from 'react';
import Track from './Track.js'

export function Playlist(props) {

    const [playlistName, setPlaylistName] = useState('');
    const {playlistTracks} = props;

    return (
    <>
        <form /*onSubmit={handleSubmit}*/>
            <label htmlFor="playlistName">PlayList Name</label>
                <input 
                id="playlistName" 
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                />
            <button /*type="submit"*/>SAVE TO SPOTIFT</button>
        </form>
        <div>
        {playlistTracks.map((track) => (
                  <Track trackId={track.id} name={track.name} artist={track.artist} addTrackToPlaylist={props.addTrackToPlaylist}/>
            ))}
        </div>
    </>
    );
  }
  export default Playlist;
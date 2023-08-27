import Track from './Track.js';
import styles from '../styles/Searchresults.module.css';
import { useState } from 'react';


export function Searchresults(props) {

      const {tracks} = props;
      const {addOrRemoveFromPlaylist} = props;
      const [activeTrack, setActiveTrack] = useState(null);
      const handlePlay = (trackId) => {
            setActiveTrack(trackId);
      };  

      if (!tracks) {
            // Render a loading spinner or a message here
            return <div>Loading...</div>;
          }

      return (
            <div>
            <h2>Results</h2>
            <datalist className={styles.searchresults} aria-role="">
                  {tracks.map((track) => (
                        <Track track={track} addOrRemoveFromPlaylist={addOrRemoveFromPlaylist} isActive={track.id === activeTrack} onPlay={handlePlay}/>
                  ))}
            </datalist>
            </div>
      )
      }

export default Searchresults;
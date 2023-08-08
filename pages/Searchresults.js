import Track from './Track.js';
import styles from '../styles/Searchresults.module.css';


export function Searchresults(props) {

      const {tracks} = props;
      const {addOrRemoveFromPlaylist} = props;

      return (
            <div>
            <h2>Results</h2>
            <datalist className={styles.searchresults} aria-role="">
                  {tracks.map((track) => (
                        <Track track={track} addOrRemoveFromPlaylist={addOrRemoveFromPlaylist}/>
                  ))}
            </datalist>
            </div>
      )
      }

export default Searchresults;
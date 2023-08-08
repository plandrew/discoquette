import Track from './Track.js';
import styles from '../styles/Searchresults.module.css';


export function Searchresults(props) {

      const {tracks} = props;
      const {addOrRemoveFromPlaylist} = props;

      return (
            <div>
            <h2>Results</h2>
            <div className={styles.searchresults}>
                  {tracks.map((track) => (
                        <Track track={track} addOrRemoveFromPlaylist={addOrRemoveFromPlaylist}/>
                  ))}
            </div>
            </div>
      )
      }

export default Searchresults;
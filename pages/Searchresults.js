import styles from '../styles/SearchResults.module.css';
import Track from './Track.js';
//This component should return Search Results Array with name, artist, album, id proporites

export function Searchresults(props) {

      const {tracks} = props;
      const {addOrRemoveFromPlaylist} = props;

      return (
            <>
            <h2>Results</h2>
            {tracks.map((track) => (
                  <Track track={track} addOrRemoveFromPlaylist={addOrRemoveFromPlaylist}/>
            ))}
            </>
      )
      }

export default Searchresults;
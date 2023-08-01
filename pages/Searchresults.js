import styles from '../styles/SearchResults.module.css';
import Utilities, { generateId } from './Utilities.js'
import Track from './Track.js';
//This component should return Search Results Array with name, artist, album, id proporites

export function Searchresults(props) {

      return (
            <>
            <h2>Results</h2>
            {props.results.map((track) => (
                  <Track trackId={track.id} name={track.name} artist={track.artist} addOrRemoveFromPlaylist={props.addOrRemoveFromPlaylist}/>
            ))}
            </>
      )
      }

export default Searchresults;
import styles from '../styles/Track.module.css';
import Miniplayer from './Miniplayer';

function Track(props) {

  const {addOrRemoveFromPlaylist} = props;
  const {track} = props;

  const handleAddClick = () => {
    addOrRemoveFromPlaylist(track.id);
  };

  if (!track) {
    // Render a loading spinner or a message here
    return <div>Loading...</div>;
  }


  return (
  <li className={styles.li}>
    <div>
      <h4 className={styles.h4} aria-label="Track Name">{track.name.split(' (')[0]}</h4>
      <p className={styles.p} aria-label="Album Name">{track.album.name.split(' (')[0]}</p>
      <Miniplayer previewUrl={track.previewUrl} onPlay={props.handlePlay}/>
    </div>
      <button onClick={handleAddClick}>+|-</button>
  </li>
  );
}

export default Track;
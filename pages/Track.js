import styles from '../styles/Track.module.css';

function Track(props) {

  const {addOrRemoveFromPlaylist} = props;
  const {track} = props;

  const handleAddClick = () => {
    addOrRemoveFromPlaylist(track.id);
  };


  return (
  <li className={styles.li}>
    <div>
      <h4 className={styles.h4}>{track.name.split(' (')[0]}</h4>
      <p className={styles.p}>{track.album.name.split(' (')[0]}</p>
    </div>
      <button onClick={handleAddClick}>+|-</button>
  </li>
  );
}

export default Track;
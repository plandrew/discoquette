import styles from '../styles/Track.module.css';

function Track(props) {

  const {addOrRemoveFromPlaylist} = props;
  const {track} = props;

  const handleAddClick = () => {
    addOrRemoveFromPlaylist(track.id);
  };


  return (
  <li>
      <p>{track.name}</p>
      <p>{track.artists[0].name}</p>
      <p>{track.album.name}</p>
      <button onClick={handleAddClick}>+|-</button>
  </li>
  );
}

export default Track;
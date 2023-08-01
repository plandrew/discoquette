import styles from '../styles/Track.module.css';

function Track(props) {

  const handleAddClick = () => {
    props.addOrRemoveFromPlaylist(props.trackId);
  };


  return (
  <li>
      {props.name}<br />
      {props.artist}<br />
      <button onClick={handleAddClick}>+|-</button>
  </li>
  );
}

export default Track;
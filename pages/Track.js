import styles from '../styles/Track.module.css';

function Track(props) {

  const {addOrRemoveFromPlaylist} = props;
  const {trackId} = props;

  const handleAddClick = () => {
    addOrRemoveFromPlaylist(trackId);
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
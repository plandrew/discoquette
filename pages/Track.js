import styles from '../styles/Track.module.css';


function Track(props) {

  const {addOrRemoveFromPlaylist} = props;
  const {track} = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const {onPlay} = props;

  const handleAddClick = () => {
    addOrRemoveFromPlaylist(track.id);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    onPlay(!isPlaying ? track.id : null);
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
    </div>
      <button onClick={handleAddClick}>+|-</button>
      <audio src={track.previewUrl} controls={isPlaying} />
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
  </li>
  );
}

export default Track;
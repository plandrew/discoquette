import styles from '../styles/Track.module.css';
import { useState } from 'react';

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

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
  <li className={styles.li}>
    <div>
      <h4 className={styles.h4} aria-label="Track Name">{track.name.split(' (')[0]}</h4>
      <p className={styles.p} aria-label="Album Name">{track.album.name.split(' (')[0]}</p>
    </div>
      <button onClick={handleAddClick}>+|-</button>
      <audio ref={audioRef} src={track.previewUrl} />
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
  </li>
  );
}

export default Track;
import styles from '../styles/Track.module.css';
import { useState, useEffect, useRef } from 'react';

function Track(props) {

  const {addOrRemoveFromPlaylist} = props;
  const {track} = props;
  const {onPlay} = props;
  const audioRef = useRef(null);
  const {isActive} = props;

  const handleAddClick = () => {
    addOrRemoveFromPlaylist(track.id);
  };

  const togglePlay = () => {
    onPlay(isActive ? null : track.id);
  };

  if (!track) {
    // Render a loading spinner or a message here
    return <div>Loading...</div>;
  }

  useEffect(() => {
    if (isActive) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isActive]);

  return (
  <li className={styles.li}>
    <div>
      <h4 className={styles.h4} aria-label="Track Name">{track.name.split(' (')[0]}</h4>
      <p className={styles.p} aria-label="Album Name">{track.album.name.split(' (')[0]}</p>
    </div>
      <button onClick={handleAddClick}>+|-</button>
      <audio ref={audioRef} src={track.preview_url} />
      <button onClick={togglePlay}>{isActive ? 'Pause' : 'Play'}</button>
  </li>
  );
}

export default Track;
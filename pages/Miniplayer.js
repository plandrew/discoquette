const Miniplayer = ({ previewUrl, onPlay }) => {
    const [isPlaying, setIsPlaying] = useState(false);
  
    const togglePlay = () => {
      setIsPlaying(!isPlaying);
      onPlay(!isPlaying);
    };

    return (
        <div>
          <audio src={previewUrl} />
          <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
      );
};


export default Miniplayer
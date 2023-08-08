import { useState } from 'react';
import styles from '../styles/Searchbar.module.css';

export function Searchbar(props) {

    const [artist, setArtist] = useState('');
    const {getTracks} = props;

    function handleArtistChange(event)
    {
        setArtist(event.target.value);
    }

    const handleClick = (event) =>
    {
        event.preventDefault();
        if (artist !== undefined)
        {
            getTracks(artist);
        } 
        setArtist();
    }

    return (
    <form className={styles.searchbar}/*onSubmit={handleSubmit}*/>
            <input 
            id="artist" 
            value={artist}
            onChange={handleArtistChange}
            placeholder="Search by an artist"
            className={styles.search}
            />
        <button type="submit" onClick={handleClick}>Search</button>
    </form>
    );
  }

export default Searchbar;
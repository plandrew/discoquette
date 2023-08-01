import styles from '../styles/SearchBar.module.css';
import { useState } from 'react';

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
    <form /*onSubmit={handleSubmit}*/>
        <label htmlFor="artist">Search for songs by an artist </label>
            <input 
            id="artist" 
            value={artist}
            onChange={handleArtistChange}
            />
        <button type="submit" onClick={handleClick}>Search</button>
    </form>
    );
  }

export default Searchbar;
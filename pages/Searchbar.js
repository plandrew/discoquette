import styles from '../styles/SearchBar.module.css';
import { useState } from 'react';

export function Searchbar(props) {

    const [search, setSearch] = useState('');

    return (
    <form /*onSubmit={handleSubmit}*/>
        <label htmlFor="search">PlayList Name</label>
            <input 
            id="search" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        <button /*type="submit"*/>SEARCH</button>
    </form>
    );
  }

export default Searchbar;
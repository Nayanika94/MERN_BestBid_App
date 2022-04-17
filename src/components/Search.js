import React, { useState } from 'react';
import classes from './Search.module.css';


//--------Search component for search by name ------
const Search = ({ onFilterProduct }) => {

    //-------state management for searchByName---------
    const [searchName, setSearchName] = useState('');


    const handleChangeName = (e) => {
        setSearchName(e.target.value);
        onFilterProduct(e.target.value);
    };
    return (
        <div>
            <input className={classes.search_bar}
                type='text'
                placeholder='Search by name'
                value={searchName}
                onChange={handleChangeName}
            />
        </div>
    );
};

export default Search;
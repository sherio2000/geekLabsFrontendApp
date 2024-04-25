
import React from 'react';

 const Searchbar = () => {

    return(
        <div className="search-bar">
            <input type="text" placeholder="Search by..." className="search-input" /> 
            <img src={require('../icons/search-icon.png')} alt="Search" className="search-icon" />
        </div>
    );
}

export default Searchbar;
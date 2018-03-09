import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({onKeyUp, onChange, searchTerm}) => {
console.log(searchTerm)
    return (
        <div id="search" className="Search">
            <input onKeyUp={onKeyUp} onChange={onChange} type="search"
                   placeholder="Search for a title..." value={searchTerm}/>
        </div>
    );
};

SearchBar.propTypes = {
    onKeyUp: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired
};

export default SearchBar;

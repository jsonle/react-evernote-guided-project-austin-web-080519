import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input
        onChange={event => props.onSearch(event.target.value)}
        id="search-bar"
        type="text"
        placeholder="Search Notes"
      />
    </div>
  );
}

export default Search;

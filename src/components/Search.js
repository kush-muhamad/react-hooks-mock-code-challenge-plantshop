import React from "react";

function Search({searchTerm, OnHandleSearch}) {
 
  const OnHandleChange = (e)=> {
    OnHandleSearch(e.target.value)
  }

  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={OnHandleChange}
        value={searchTerm}
      />
    </div>
  );
}

export default Search;

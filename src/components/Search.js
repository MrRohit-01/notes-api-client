import React from "react";
import {MdSearch} from "react-icons/md";

const Search= ({handleSearchNote})=>{
  return(
    <div className="Search">
      <MdSearch className="search-icons" size='1.3rem'/>
      <input onChange={(event)=>handleSearchNote(event.target.value)} type="text" placeholder="type to search..."/>
      </div>
  );
};

export default Search;

import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const SearchInput = () => {
  const { searhItem, handleSearch } = useContext(StoreContext);

  return (
    <>
      <div className="navbar-search">
        <img src={assets.search_icon} alt="search" className="search-icon" />

        <input
          type="text"
          className="navbar-searchbar"
          placeholder="Search food Item..."
          value={searhItem}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchInput;

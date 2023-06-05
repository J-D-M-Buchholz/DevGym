import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search: React.FC = () => {
  return (
    <div className="LogoSearch">
      <img src="/welt.png" alt="Welt" width={35} height={35} />
      <div className="Search">
        <input type="text" placeholder="#SearchBar" />
        <div className="search-icon">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;

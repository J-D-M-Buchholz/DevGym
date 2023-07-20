import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search: React.FC = () => {
  return (
    <div className="dash_LogoSearch">
      <img src="/welt.png" alt="Welt" width={35} height={35} />
      <div className="dash_Search">
        <input type="text" placeholder="#SearchBar" />
        <div className="dash_search-icon">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;

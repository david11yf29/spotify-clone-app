import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Song, other" type="text" />
      </div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;

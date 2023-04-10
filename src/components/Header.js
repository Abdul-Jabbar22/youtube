import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MicSharpIcon from "@mui/icons-material/MicSharp";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"
            alt="YouTube"
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      {/* <div className="mic">
        <MicSharpIcon />
      </div> */}
      <div className="header__icons">
        <VideoCallRoundedIcon className="header__icon" />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar
          alt="Abdul jabbar"
          src="https://avatars.githubusercontent.com/u/123597574?v=4"
        />
      </div>
    </div>
  );
}

export default Header;

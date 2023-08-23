import React from "react";
import logo from "../../assets/images/namaste-logo.png";
import profileIcon from "../../assets/images/profile-icon.png";

const Header = () => (
    <div className="header-container">
        <div className="logo-container"><div><img src={logo} /></div> <div className="logo-txt">NAMASTE<br />React</div></div>
        <div className="search-container"><input type="text" placeholder="Search" /></div>
        <div className="profile-container"><img src={profileIcon} width="60" /></div>
    </div>
)

export default Header;
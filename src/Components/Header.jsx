import React from "react";
import NavigationLinks from "./NavigationLinks";

const Header = () => {
  return (
    <header className="header">
      <div className="head">
        <div className="logo">
          <a>Logo here</a>
        </div>
        <nav className="navigation">
          <NavigationLinks Title="Home" />
        </nav>
      </div>
    </header>
  );
};

export default Header;

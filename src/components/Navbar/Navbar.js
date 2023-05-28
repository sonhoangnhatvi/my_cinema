import React from "react";
import SearchIcon from "./SearchIcon";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <h1>Movie App</h1>
      <span className={classes.icon}>
        <SearchIcon />
      </span>
    </div>
  );
};

export default Navbar;

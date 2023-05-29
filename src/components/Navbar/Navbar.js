import React, { useEffect, useState } from "react";
import SearchIcon from "./SearchIcon";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarClassNameScrolled, setNavbarClassNameScrolled] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      if (scrollPosition > 100) {
        setNavbarClassNameScrolled("navbar_scrolled");
      } else {
        setNavbarClassNameScrolled("");
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const navbarCl = `${classes.navbar} ${
    navbarClassNameScrolled !== "" ? classes.navbar_scrolled : ""
  }`;

  return (
    <div className={navbarCl}>
      <h1>
        <a className={classes.title_message} href="/">
          Movie App
        </a>
      </h1>
      <span className={classes.icon}>
        <SearchIcon />
      </span>
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import SearchIcon from "./SearchIcon";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarClassNameScrolled, setNavbarClassNameScrolled] = useState("");
  const [serachIconClassNameScrolled, setSerachIconClassNameScrolled] =
    useState("");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      if (scrollPosition > 100) {
        setNavbarClassNameScrolled("navbar_scrolled");
        setSerachIconClassNameScrolled("search_icon_scrolled");
      } else {
        setNavbarClassNameScrolled("");
        setSerachIconClassNameScrolled("");
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

  const searchIconCL = `${classes.search_icon} ${
    serachIconClassNameScrolled !== "" ? classes.search_icon_scrolled : ""
  }`;

  return (
    <div className={navbarCl}>
      <h1>
        <a className={classes.title_message} href="/">
          Movie App
        </a>
      </h1>
      <a className={searchIconCL} href="/search">
        <SearchIcon type="" />
      </a>
    </div>
  );
};

export default Navbar;

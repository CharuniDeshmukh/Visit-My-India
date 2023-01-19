import React, { useEffect, useState } from "react";
import "../css/header.css";
import Logo from "../../utils/front_Img/logo.png";
import S_icon from "../../utils/front_Img/search.png";
import { Link, useLocation } from "react-router-dom";
import States from "../../utils/states.json";
import { Description } from "../../utils/desc";

export const Header = () => {
  
  const location = useLocation();
  const [localState, setLocationState] = useState({ states: States["Andhra_Pradesh"], description: Description.Andhra_Pradesh, head: "Andhra Pradesh" })

  const [burgerClass, setBurgerClass] = useState("line");
  const [menuClass, setMenuClass] = useState("links block");
  const [menuClicked, setMenuClicked] = useState(false);

  const updateMenu = () => {
    if(!menuClicked) {
      setBurgerClass("line cross");
      setMenuClass("links");
    }
    else {
      setBurgerClass("line");
      setMenuClass("links block");
    }
    setMenuClicked(!menuClicked);
  }

  useEffect(() => {
    if (location.state) {
      setLocationState(location.state);
    }
  }, [location]);

  return (
    <nav className="navbar">
      <link
        href="https://fonts.googleapis.com/css2?family=Playball&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Chivo Mono"
        rel="stylesheet"
      ></link>
      <div className="g1">
        <img alt="piche1" className="logo" src={Logo} />
        <h2 id="logoName">Visit My India</h2>
        <div className="burger" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </div>
      <ul className={menuClass}>
        <Link onClick={updateMenu} className="list" to="/" state={{ states: localState.states, description: localState.description, head: localState.head }}>
          Home
        </Link>

        <Link onClick={updateMenu} className="list" to="/states" state={{ states: localState.states, description: localState.description, head: localState.head }}>
          States
        </Link>

        <Link onClick={updateMenu} className="list" to="/contact">
          Contact
        </Link>

        <Link onClick={updateMenu} className="list" to="/register">
          Register
        </Link>

        <Link onClick={updateMenu} className="list" to="/login">
          Login
        </Link>

        <div className="media-search">
          <input placeholder="Search Places" id="find-place" />
          <label htmlFor="find-place" />
          <img alt="piche2" className="s-icon" src={S_icon} />
        </div>
      </ul>
    </nav>
  );
};

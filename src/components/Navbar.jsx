import React from "react";
import { useState } from "react";
import Logo from "../images/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [burger, isBurger] = useState(false);
  const handleMenuClick = () => {
    isBurger((prev) => !prev);
  };
  const handleItemClick = () => {
    isBurger((prev) => !prev);
  };
  return (
    <nav>
      <Link to="home">
        <div className="left">
          <img className="navbar-logo" src={Logo} />
          <h2>PostIt</h2>
        </div>
      </Link>
      <div className="right">
        <FiMenu
          onClick={handleMenuClick}
          className={!burger ? "burger-icon" : "burger-icon small-icon"}
        />

        <ul className={burger ? "active-menu" : ""}>
          <IoCloseCircleSharp
            onClick={handleMenuClick}
            className={!burger ? "close-icon" : "close-icon spin-out"}
          />
          <Link to="/home">
            <li
              onClick={handleItemClick}
              className={!burger ? "grow small" : "grow"}
            >
              HOME
            </li>
          </Link>
          <Link to="/make-post">
            <li
              onClick={handleItemClick}
              className={!burger ? "grow small" : "grow"}
            >
              POST
            </li>
          </Link>
          <Link to="/about">
            <li
              onClick={handleItemClick}
              className={!burger ? "grow small" : "grow"}
            >
              ABOUT
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

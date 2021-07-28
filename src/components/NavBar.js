import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
export const NavBar = () => {
  return (
    <div className="navbox">
      <div className="leftside">
        <img src={logo} alt="" />
      </div>
      <div className="rightside">
        <Link to="/signup" className="navlinks">
          Registrarse
        </Link>
        <Link to="/login" className="navlinks">
          Ingresar
        </Link>
      </div>
    </div>
  );
};

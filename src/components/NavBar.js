import React from "react";
import Icon from "react-icons-kit";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { cart } from "react-icons-kit/entypo/cart";
import { useHistory } from "react-router";
import { auth } from "../config/Config";

export const NavBar = ({ user }) => {
  const history = useHistory();

  const logout = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };

  return (
    <div className="navbox">
      <div className="leftside">
        <img src={logo} alt="" />
      </div>
      {/* if we dont have any user */}
      {!user && (
        <div className="rightside">
          <Link to="signup" className="navlinks">
            Registrarse
          </Link>
          <Link to="login" className="navlinks">
            Ingresar
          </Link>
        </div>
      )}
      {/* if we have user */}
      {user && (
        <div className="rightside">
          <span>
            <Link to="/" className="navlinks">
              {user}
            </Link>
          </span>
          <span>
            <Link to="cartproducts" className="navlinks">
              <Icon icon={cart} />
            </Link>
          </span>
          <span>
            <button className="logout-btn" onClick={logout}>
              SALIR
            </button>
          </span>
        </div>
      )}
    </div>
  );
};

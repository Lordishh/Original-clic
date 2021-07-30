import React, { useEffect } from "react";
import "../css/Home.css";
import { NavBar } from "./NavBar";
import { Products } from "./Products";
import { auth } from "../config/Config";
import { useHistory } from "react-router-dom";

export const Home = ({ user }) => {
  const history = useHistory();

  useEffect(() => {
    // forcing user to login
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/login");
      }
    });
  });

  return (
    <div className="wrapper">
      <NavBar user={user} />
      <Products />
    </div>
  );
};

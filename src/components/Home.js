import React from "react";
import "../css/Home.css";
import { NavBar } from "./NavBar";
import { Products } from "./Products";

export const Home = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <Products />
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";

import { PUBLIC } from "../../constants/routes";

import SearchBar from "./../SearchBar";
import Cart from "./../Cart";

import logo from "./../../assets/images/logo.png";

export default function Header() {
  return (
    <>
      <Link to={PUBLIC.HOME}>
        <div className="fixed top-3 left-24">
          <img
            className="h-24 rounded-full shadow-2xl"
            src={logo}
            alt="labckie-logo"
          />
        </div>
      </Link>
      <div className="fixed top-8 left-48 ml-2">
        <SearchBar />
      </div>
      <Link to={PUBLIC.SUMMARY}>
        <div className="fixed top-8 right-24">
          <Cart />
        </div>
      </Link>
    </>
  );
}

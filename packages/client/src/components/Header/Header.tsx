import React from "react";
import { Link } from "react-router-dom";

import { PUBLIC } from "../../constants/routes";

import SearchBar from "./../SearchBar";
import Cart from "./../Cart";

import logo from "./../../assets/images/logo.png";

export default function Header(): React.ReactElement {
  return (
    <div className="sticky top-0 flex">
      <Link to={PUBLIC.HOME}>
        <div className="absolute top-3 left-24">
          <img
            className="h-24 rounded-full shadow-2xl"
            src={logo}
            alt="labckie-logo"
          />
        </div>
      </Link>
      <div className="absolute top-8 left-48 ml-2">
        <SearchBar />
      </div>
      <Link to={PUBLIC.SUMMARY}>
        <div className="absolute top-6 right-24">
          <Cart />
        </div>
      </Link>
    </div>
  );
}

import React from "react";

import SearchBar from "./../SearchBar";
import Cart from "./../Cart";

import logo from "./../../assets/images/logo.png";

export default function Header() {
  return (
    <>
      <div className="fixed top-3 left-24">
        <img className="h-24 rounded-full shadow-2xl" src={logo} alt="labckie-logo" />
      </div>
      <div className="fixed top-8 left-48 ml-2">
        <SearchBar />
      </div>
      <div className="fixed top-8 right-24">
        <Cart />
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { PUBLIC } from "../../constants/routes";

import { getTotalPrice, getTotalBooks } from "../../utils/cart-functions";

import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Cart(): React.ReactElement {
  const cartState = useSelector((state: any) => state.cart);

  return (
    <Link to={PUBLIC.SUMMARY}>
      <button
        className="flex w-32 items-center justify-center py-4 px-2 bg-black rounded-3xl border-2 border-white text-white text-xl absolute right-1 hover:opacity-80 shadow-2xl"
        type="submit"
      >
        <p className="text-base font-oswald">
          {getTotalPrice(cartState.books)}€
        </p>
        <AiOutlineShoppingCart className="text-4xl ml-1" />
      </button>
      {cartState.books && (
        <div className="absolute top-10 right-3 px-2 z-10 rounded-full bg-salmonSecondary text-white">
          <p>{getTotalBooks(cartState.books)}</p>
        </div>
      )}
    </Link>
  );
}

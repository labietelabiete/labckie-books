import React from "react";
import { useSelector } from "react-redux";

import { CartReduxState } from "../../utils/types";
import { getTotalPrice } from "../../utils/cart-functions";

import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Cart() {
  const cartState = useSelector((state: any) => state.cart);

  return (
    <>
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
          <p>
            {cartState.books.reduce((sum: number, book: CartReduxState) => {
              return sum + book.n;
            }, 0)}
          </p>
        </div>
      )}
    </>
  );
}

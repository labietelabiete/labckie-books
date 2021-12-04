import React from "react";
import { useSelector } from "react-redux";

import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Cart() {
  const cartState = useSelector((state: any) => state.cart);

  return (
    <>
      <button
        className="flex w-32 items-center justify-center py-4 px-2 bg-black rounded-3xl border-2 border-white text-white text-xl absolute right-1 hover:opacity-80 shadow-2xl"
        type="submit"
      >
        <p className="text-base font-oswald">39.00€</p>
        <AiOutlineShoppingCart className="text-4xl ml-1" />
      </button>
      {cartState.books && (
        <div className="absolute top-10 right-3 px-2 z-10 rounded-full bg-salmonSecondary text-white">
          <p>{cartState.books.length}</p>
        </div>
      )}
    </>
  );
}

import React from "react";
import { useSelector } from "react-redux";

import CartItem from "../CartItem";

import { CartReduxState } from "../../utils/types";

export default function CartList() {
  const cartState = useSelector((state: any) => state.cart);

  return (
    <div className="p-8 pb-1 bg-white rounded-3xl shadow-xl">
      {cartState.books.map((item: CartReduxState) => (
        <CartItem key={item._id} book={item} />
      ))}
    </div>
  );
}

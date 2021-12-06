import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { PUBLIC } from "../../constants/routes";

import { CartReduxState } from "../../utils/types";

import {
  removeFromCart,
  addToCartRepeat,
  removeFromCartRepeat,
} from "../../redux/cart/actions";

import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function CartItem({ book }: { book: CartReduxState }) {
  const cartState = useSelector((state: any) => state.cart);
  const dispatch = useDispatch<any>();

  const handleAddOneToCart = () => {
    const indexRepeat = cartState.books.findIndex(
      (item: CartReduxState) => item._id === book?._id
    );
    dispatch(addToCartRepeat(indexRepeat));
  };

  const handleRemoveOneFromCart = () => {
    if (book.n > 0) {
      const indexRepeat = cartState.books.findIndex(
        (item: CartReduxState) => item._id === book?._id
      );
      dispatch(removeFromCartRepeat(indexRepeat));
    }
  };

  const handleRemoveFromCart = () => {
    const indexRepeat = cartState.books.findIndex(
      (item: CartReduxState) => item._id === book?._id
    );
    dispatch(removeFromCart(indexRepeat));
  };

  return (
    <div className="flex justify-center mb-12">
      <Link to={`${PUBLIC.BOOK}/${book._id}`}>
        <img className="pl-12" src={book.images.main} alt={book.title} />
      </Link>
      <div className="w-4/5 mt-8 ml-12">
        <h2 className="text-2xl font-bold font-oswald">{book.title}</h2>
        <h3 className="text-lg text-greyPrimary font-mulish">{book.author}</h3>
        <div className="flex items-center mt-3">
          <button onClick={handleRemoveOneFromCart}>
            <AiFillMinusCircle className="text-xl" />
          </button>
          <p className="mx-1 text-2xl font-oswald">{book.n}</p>
          <button onClick={handleAddOneToCart}>
            <AiFillPlusCircle className="text-xl" />
          </button>
        </div>
        <div className="flex items-end mt-3">
          <p className="text-xl font-mulish">Price:</p>
          <p className="text-2xl ml-2 font-oswald font-bold">
            {book.price.toFixed(2)}€
          </p>
        </div>
        <div className="flex items-end">
          <p className="text-xl font-mulish">Subtotal:</p>
          <p className="text-2xl ml-2 font-oswald font-bold">
            {(book.n * book.price).toFixed(2)}€
          </p>
        </div>
      </div>
      <span>
        <button onClick={handleRemoveFromCart} className="cursor-pointer">
          <AiOutlineClose />
        </button>
      </span>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/cart/actions";

import { PUBLIC } from "../../constants/routes";
import { BookCardProps } from "../../utils/types";

export default function BookCard({
  book,
}: {
  book: BookCardProps;
}): React.ReactElement {
  const dispatch = useDispatch<any>();

  const handleAddToCart = () => {
    dispatch(addToCart());
  };

  return (
    <div className="m-3 mb-10 pb-4 border-4 border-black border-opacity-0 rounded-xl hover:border-opacity-100">
      <Link to={`${PUBLIC.BOOK}/${book._id}`}>
        <img
          className={book.authorId ? `bg-white rounded-t-xl p-9` : "p-6"}
          src={book.images.main}
          alt={book.title}
        />
      </Link>
      {book.authorId && (
        <>
          <div className="mt-3">
            <Link to={`${PUBLIC.BOOK}/${book._id}`}>
              <h2 className="text-2xl text-center anton font-oswald">
                {book.title}
              </h2>
            </Link>

            <Link to={`${PUBLIC.AUTHOR}/${book.authorId._id}`}>
              <h3 className="text-lg text-center text-greyPrimary font-mulish">
                {book.authorId.firstName} {book.authorId.lastName}
              </h3>
            </Link>
          </div>
          <div className="flex items-center justify-between mx-0 mt-1">
            <p className="ml-6 text-2xl text-right font-oswald">
              {book.price}€
            </p>
            <button
              onClick={handleAddToCart}
              className="w-1/2 p-2 m-2 bg-black text-white rounded-lg hover:opacity-80 font-mulish"
            >
              Añadir al carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
}

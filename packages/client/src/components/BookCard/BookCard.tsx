import React from "react";
import { Link } from "react-router-dom";

import { PUBLIC } from "../../constants/routes";
import { BookCardProps } from "../../utils/types";

export default function BookCard({
  book,
}: {
  book: BookCardProps;
}): React.ReactElement {
  return (
    <div className="m-3 mb-10 pb-4 border-4 border-black border-opacity-0 rounded-xl hover:border-opacity-100">
      <Link to={`${PUBLIC.BOOK}/${book._id}`}>
        <img
          className="bg-white rounded-t-xl p-9"
          src={book.images.main}
          alt={book.title}
        />
      </Link>
      <div className="mt-3">
        <Link to={`${PUBLIC.BOOK}/${book._id}`}>
          <h2 className="text-xl text-center anton font-bold">{book.title}</h2>
        </Link>
        <Link to={`${PUBLIC.AUTHOR}/${book.authorId._id}`}>
          <h3 className="text-lg text-center text-greyPrimary">
            {book.authorId.firstName} {book.authorId.lastName}
          </h3>
        </Link>
        <p className="text-xl text-right font-bold mr-6">{book.price}€</p>
      </div>
      <div className="flex justify-between mx-4 mt-3">
        <Link className="w-1/2" to={`${PUBLIC.BOOK}/${book._id}`}>
          <button className="p-2 px-5 m-2 bg-black text-white rounded-lg hover:opacity-80">
            Ver detalles
          </button>
        </Link>
        <button className="w-1/2 p-2 m-2 bg-black text-white rounded-lg hover:opacity-80">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

import React from "react";

import { BookCardProps } from "../../utils/types";

export default function BookCard({
  book,
}: {
  book: BookCardProps;
}): React.ReactElement {
  const detailsButtonStyles = {
    backgroundColor: `${book.colors[0]}`,
  };
  const addToCartStyles = {
    backgroundColor: `${book.colors[1]}`,
  };
  return (
    <div className="m-3 text-center">
      <img
        className="bg-white rounded-t-xl p-9"
        src={book.images.main}
        alt={book.title}
      />
      <div>
        <h2>{book.title}</h2>
        <h3>
          {book.authorId.firstName} {book.authorId.lastName}
        </h3>
        <p>{book.price}€</p>
      </div>
      <div className="flex justify-between mx-4">
        <button className="w-1/2 p-2 m-2 rounded-lg" style={detailsButtonStyles}>
          Ver detalles
        </button>
        <button className="w-1/2 p-2 m-2 rounded-lg" style={addToCartStyles}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

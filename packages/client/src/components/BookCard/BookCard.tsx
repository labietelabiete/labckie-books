import React from "react";

import { BookCardProps } from "../../utils/types";

export default function BookCard({
  book,
}: {
  book: BookCardProps;
}): React.ReactElement {
  return (
    <div className="m-3 text-center">
      <img
        className="bg-white rounded-xl p-9"
        src={book.images.main}
        alt={book.title}
      />
      <h1>{book.title}</h1>
      <h1>
        {book.authorId.firstName} {book.authorId.lastName}
      </h1>
    </div>
  );
}

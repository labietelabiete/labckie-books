import React from "react";

import BookCard from "./../BookCard";
import { BookCardProps } from "../../utils/types";

export default function BooksList({
  books,
}: {
  books: BookCardProps[] | any;
}): React.ReactElement {
  return (
    <div className="grid grid-cols-4">
      {books?.map((item: BookCardProps) => (
        <BookCard key={item._id} book={item} />
      ))}
    </div>
  );
}

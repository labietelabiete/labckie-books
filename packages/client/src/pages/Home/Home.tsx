import React, { useState, useEffect } from "react";

import { getAllBooks } from "./../../api/book-api";

import Layout from "../../components/Layout";
import BooksList from "../../components/BooksList";

export default function Home(): React.ReactElement {
  const [loading, setLoading] = useState<boolean>(false);
  const [books, setBooks] = useState<any>();

  const loadBooks = async () => {
    setLoading(true);

    const data = await getAllBooks();
    console.log(data.data.books);
    setBooks(data);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <Layout docTitle="Home">
      {/* <BooksList>Books</BooksList> */}
    </Layout>
  );
}

import React, { useState, useEffect } from "react";

import { getAllBooks } from "./../../api/book-api";

import Layout from "../../components/Layout";
import BooksList from "../../components/BooksList";

import { BookCardProps } from "../../utils/types";

import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

export default function Home(): React.ReactElement {
  const [loading, setLoading] = useState<boolean>(false);
  const [books, setBooks] = useState<BookCardProps[]>();

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const loadBooks = async () => {
    setLoading(true);
    const data = await getAllBooks();
    setBooks(data.data.books);
    console.log(data.data.books);
    setLoading(false);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <Layout docTitle="Home">
      {loading ? (
        <div className="flex items-center ">
          <FadeLoader color={"black"} loading={loading} css={override} />
        </div>
      ) : (
        <BooksList books={books}></BooksList>
      )}
    </Layout>
  );
}

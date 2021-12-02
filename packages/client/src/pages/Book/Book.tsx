import React, { useState, useEffect } from "react";
import { useMatch, Link } from "react-router-dom";

import Layout from "../../components/Layout";

import { PUBLIC } from "../../constants/routes";

import { getBookById } from "./../../api/book-api";

import { BookProps } from "../../utils/types";

import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

export default function Book(): React.ReactElement {
  const [loading, setLoading] = useState<boolean>(false);
  const [book, setBook] = useState<BookProps>();

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const firstColor = {
    backgroundColor: `${book?.colors[0]}`,
    height: "3px",
    width: "33%",
  };
  const secondColor = {
    backgroundColor: `${book?.colors[1]}`,
    height: "3px",
    width: "33%",
  };
  const thirdColor = {
    backgroundColor: `${book?.colors[2]}`,
    height: "3px",
    width: "33%",
  };

  const { id } = useMatch(`${PUBLIC.BOOK}/:id`)!.params;

  const loadBook = async () => {
    setLoading(true);
    if (typeof id === "string") {
      const data = await getBookById(id);
      setBook(data.data.book);
      console.log(data.data.book);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBook();
  }, []);

  return (
    <Layout docTitle={book?.title}>
      {loading ? (
        <div className="min-h-screen flex items-center ">
          <FadeLoader color={"black"} loading={loading} css={override} />
        </div>
      ) : (
        <div className="flex justify-center mt-28 mx-36">
          {/* {book?.sinopsis[0]} */}
          {/* {book?.images.others[0]} */}
          <div className="mr-12">
            <img className="" src={book?.images.main} alt={book?.title} />
          </div>
          <div className="w-1/2 mt-12">
            <Link to={`${PUBLIC.AUTHOR}/${book?.authorId._id}`}>
              <h3 className="text-2xl text-greyPrimary font-mulish hover:opacity-80">
                {book?.authorId.firstName} {book?.authorId.lastName}
              </h3>
            </Link>
            <h2 className="text-5xl font-bold font-oswald">{book?.title}</h2>
            <div className="w-100 mt-6 flex">
              <div style={firstColor}></div>
              <div style={secondColor}></div>
              <div style={thirdColor}></div>
            </div>
            <div className="mt-5 text-sm text-greyPrimary font-mulish">
              {book?.sinopsis.map((item: string) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

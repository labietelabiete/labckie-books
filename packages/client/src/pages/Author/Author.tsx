import React, { useState, useEffect } from "react";
import { useMatch, Link } from "react-router-dom";

import Layout from "../../components/Layout";
import BooksList from "../../components/BooksList";

import { PUBLIC } from "../../constants/routes";

import { getAuthorById } from "./../../api/author-api";

import { AuthorProps } from "../../utils/types";

import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

export default function Author(): React.ReactElement {
  const [loading, setLoading] = useState<boolean>(false);
  const [author, setAuthor] = useState<AuthorProps>();

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const { id } = useMatch(`${PUBLIC.AUTHOR}/:id`)!.params;

  const loadBook = async () => {
    setLoading(true);
    if (typeof id === "string") {
      const data = await getAuthorById(id);
      setAuthor(data.data.author);
      console.log(data.data.author);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBook();
  }, []);

  return (
    <Layout docTitle={author?.firstName}>
      {loading ? (
        <div className="flex items-center ">
          <FadeLoader color={"black"} loading={loading} css={override} />
        </div>
      ) : (
        <>
          <div className="flex justify-center mt-28 mx-48">
            <div className="mr-12">
              <img className="" src={author?.picture} alt={author?.firstName} />
            </div>
            <div className="w-4/5">
              <h2 className="mt-2 text-5xl font-bold font-oswald">
                {author?.firstName} {author?.lastName}
              </h2>
              <h3 className="mt-3 text-2xl text-greyPrimary font-mulish hover:opacity-80">
                {author?.country}, {author?.birthYear}
              </h3>
              <div className="mt-6 text-sm text-greyPrimary font-mulish">
                {author?.bio.map((item: string) => (
                  <p className="mb-3" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="w-100 mx-48 mt-12 flex">
            <div className="h-1 w-1/4 bg-black"></div>
            <div className="h-1 w-1/4 bg-greyPrimary"></div>
            <div className="h-1 w-1/4 bg-black"></div>
            <div className="h-1 w-1/4 bg-greyPrimary"></div>
          </div>
          <div className="mt-12 mx-48">
            <h2 className="mb-3 text-5xl font-bold font-oswald">
              Libros de {author?.firstName} {author?.lastName}
            </h2>

            <BooksList books={author?.books}></BooksList>
          </div>
        </>
      )}
    </Layout>
  );
}

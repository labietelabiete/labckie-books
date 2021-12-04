import React, { useState, useEffect } from "react";
import { useMatch, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/cart/actions";

import Layout from "../../components/Layout";

import { PUBLIC } from "../../constants/routes";

import { getBookById } from "./../../api/book-api";

import { BookProps } from "../../utils/types";

import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

export default function Book(): React.ReactElement {
  const [loading, setLoading] = useState<boolean>(false);
  const [book, setBook] = useState<BookProps>();
  const dispatch = useDispatch<any>();

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const firstColor = {
    backgroundColor: `${book?.colors[0]}`,
  };
  const secondColor = {
    backgroundColor: `${book?.colors[1]}`,
  };
  const thirdColor = {
    backgroundColor: `${book?.colors[2]}`,
  };

  const handleAddToCart = () => {
    // dispatch(addToCart());
  };

  const { id } = useMatch(`${PUBLIC.BOOK}/:id`)!.params;

  const loadBook = async () => {
    setLoading(true);
    if (typeof id === "string") {
      const data = await getBookById(id);
      setBook(data.data.book);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBook();
  }, []);

  return (
    <Layout docTitle={book?.title}>
      {loading ? (
        <div className="flex items-center ">
          <FadeLoader color={"black"} loading={loading} css={override} />
        </div>
      ) : (
        <div className="flex justify-center mt-28 mx-24">
          <div className="mr-12">
            <img className="" src={book?.images.main} alt={book?.title} />
          </div>
          <div className="w-1/2 mt-12">
            <Link to={`${PUBLIC.AUTHOR}/${book?.authorId._id}`}>
              <h3 className="text-2xl text-greyPrimary font-mulish hover:opacity-80">
                {book?.authorId.firstName} {book?.authorId.lastName}
              </h3>
            </Link>
            <h2 className="mt-2 text-5xl font-bold font-oswald">
              {book?.title}
            </h2>
            <div className="w-100 mt-6 flex">
              <div className="h-1 w-4/12" style={firstColor}></div>
              <div className="h-1 w-4/12" style={secondColor}></div>
              <div className="h-1 w-4/12" style={thirdColor}></div>
            </div>
            <div className="mt-6 text-sm text-greyPrimary font-mulish">
              {book?.sinopsis.map((item: string) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="flex items-center justify-between mt-8">
              <p className="text-3xl font-bold font-oswald">{book?.price}€</p>
              <button
                onClick={handleAddToCart}
                style={firstColor}
                className="p-2 px-6 text-white rounded-lg hover:opacity-90 font-mulish"
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

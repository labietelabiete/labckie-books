import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { PUBLIC } from "../../constants/routes";

import Layout from "../../components/Layout";
import CartList from "../../components/CartList";

import { getTotalPrice, getTotalBooks } from "../../utils/cart-functions";

export default function Summary(): React.ReactElement {
  const cartState = useSelector((state: any) => state.cart);

  return (
    <Layout docTitle="Cart Summary">
      <div className="flex justify-center mt-28 mx-6 mb-6">
        <div className="mr-12">
          <CartList />
        </div>
        <div className="p-8 bg-white rounded-3xl shadow-xl h-1/3">
          <h2 className="mb-6 text-4xl font-bold font-oswald">
            Resumen del pedido
          </h2>
          <div className="flex mb-3 items-end">
            <p className="text-xl font-mulish">Nº total de libros:</p>
            <p className="text-2xl ml-3 font-oswald font-bold">
              {getTotalBooks(cartState.books)}
            </p>
          </div>
          <div className="flex mb-3 items-end">
            <p className="text-xl font-mulish">Subtotal:</p>
            <p className="text-2xl ml-3 font-oswald font-bold">
              {getTotalPrice(cartState.books)}€
            </p>
          </div>
          {/* <div className="flex items-end">
            <p className="text-xl font-mulish">Gastos de envío</p>
            <p className="text-2xl ml-3 font-oswald font-bold">0€</p>
          </div> */}
          <div className="flex mt-9 text-3xl font-oswald">
            <p className="font-bold">
              Total: {getTotalPrice(cartState.books)}€
            </p>
          </div>
          <div className="flex mt-12 justify-between">
            <Link to={PUBLIC.HOME}>
              <button className="py-2 px-6 rounded-xl bg-black text-white font-mulish hover:opacity-80">
                Home
              </button>
            </Link>
            <Link to={PUBLIC.DELIVERY}>
              <button className="py-2 px-6 rounded-xl bg-salmonSecondary text-white font-mulish hover:opacity-80">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import React, { useState } from "react";
import Cards from "react-credit-cards";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";

import { PUBLIC } from "../../constants/routes";

import Layout from "../../components/Layout";
import Input from "../../components/Input";

import { getTotalPrice, getTotalBooks } from "../../utils/cart-functions";

import { ReactCreditCardProps } from "../../utils/types";

import creditCardSchema from "./credit-card-schema";

import "react-credit-cards/es/styles-compiled.css";

export default function Payment() {
  const cartState = useSelector((state: any) => state.cart);
  const [cardValues, setCardValues] = useState<ReactCreditCardProps>({
    cvc: "",
    expiry: "",
    focused: "number",
    name: "",
    number: "",
  });

  const currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const formik = useFormik({
    initialValues: {
      cvc: "",
      expiry: "",
      name: "",
      number: "",
    },
    validationSchema: creditCardSchema,
    onSubmit: async (creditCardState) => {
      console.log(creditCardState);
    },
  });

  const handleInputFocus = (e: any) => {
    setCardValues({
      ...cardValues,
      focused: e.target.name,
    });
  };

  return (
    <Layout docTitle="Payment">
      <div className="flex justify-center mt-20 mx-36">
        <div
          className="p-8 bg-white rounded-3xl shadow-xl mr-12 w-1/2"
          id="PaymentForm"
        >
          <h1 className="mb-12 text-start text-4xl font-bold font-oswald">
            Método de pago
          </h1>
          <Cards
            cvc={formik.values.cvc}
            expiry={formik.values.expiry}
            focused={cardValues.focused}
            name={formik.values.name}
            number={formik.values.number}
          />
          <form className="mt-6" onSubmit={formik.handleSubmit}>
            <div className="flex justify-between">
              <div className="w-11/12 mr-6">
                <Input
                  type="text"
                  label={"Nombre del titular"}
                  id="name"
                  value={formik.values.name}
                  placeholder=""
                  handleChange={formik.handleChange}
                  handleFocus={handleInputFocus}
                  handleBlur={formik.handleBlur}
                  errorMessage={formik.errors.name}
                  hasErrorMessage={formik.touched.name}
                />
              </div>
              <div>
                <Input
                  type="string"
                  label={"Expiración"}
                  id="expiry"
                  value={formik.values.expiry}
                  placeholder=""
                  handleChange={formik.handleChange}
                  handleFocus={handleInputFocus}
                  handleBlur={formik.handleBlur}
                  errorMessage={formik.errors.expiry}
                  hasErrorMessage={formik.touched.expiry}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-11/12 mr-6">
                <Input
                  type="tel"
                  label={"Numero de tarjeta"}
                  id="number"
                  value={formik.values.number}
                  placeholder=""
                  handleChange={formik.handleChange}
                  handleFocus={handleInputFocus}
                  handleBlur={formik.handleBlur}
                  errorMessage={formik.errors.number}
                  hasErrorMessage={formik.touched.number}
                />
              </div>
              <div>
                <Input
                  type="text"
                  label={"CVC"}
                  id="cvc"
                  value={formik.values.cvc}
                  placeholder=""
                  handleChange={formik.handleChange}
                  handleFocus={handleInputFocus}
                  handleBlur={formik.handleBlur}
                  errorMessage={formik.errors.cvc}
                  hasErrorMessage={formik.touched.cvc}
                />
              </div>
            </div>
          </form>
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
          <div className="flex mb-3 items-end">
            <p className="text-xl font-mulish">Gastos de envío: </p>
            <p className="text-2xl ml-3 font-oswald font-bold">0€</p>
          </div>
          <div className="flex items-end">
            <p className="text-xl font-mulish">Fecha de entrega: </p>
            <p className="text-2xl ml-3 font-oswald font-bold">
              {`${day}/${month}/${year}`}
            </p>
          </div>

          <div className="flex mt-9 text-3xl font-oswald">
            <p className="font-bold">
              Total: {getTotalPrice(cartState.books)}€
            </p>
          </div>
          <div className="flex mt-12 justify-between">
            <Link to={PUBLIC.HOME}>
              <button className="py-2 px-6 rounded-xl bg-black text-white font-mulish hover:opacity-80">
                Volver
              </button>
            </Link>
            <Link to={PUBLIC.DELIVERY}>
              <button className="py-2 px-6 rounded-xl bg-salmonSecondary text-white font-mulish hover:opacity-80">
                Pagar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

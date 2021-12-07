import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";

import { PUBLIC } from "../../constants/routes";

import { getTotalPrice } from "../../utils/cart-functions";

import logo from "./../../assets/images/logo.png";

export default function Confirmation() {
  const purchaseState = useSelector((state: any) => state.purchase);
  const cartState = useSelector((state: any) => state.cart);

  return (
    <Layout docTitle="Confirmation">
      <div className="mx-36 mt-12 p-12 flex justify-between bg-white rounded-3xl shadow-xl">
        <div className="flex flex-col justify-between text-lg">
          <h1 className="text-start  text-4xl font-bold font-oswald">
            Gracias por su compra!
          </h1>
          <p className="my-6 text-greyPrimary font-mulish">
            Le hemos enviado a su correo{" "}
            <span className="mx-1 text-black font-oswald">
              {purchaseState.delivery.email}
            </span>
            toda la información de su pedido con id
            <span className="mx-1 text-black font-oswald">
              {purchaseState.purchaseId}:
            </span>
          </p>
          <div>
            <div className="flex mb-3 items-end">
              <p className="text-greyPrimary font-mulish">Destinatario:</p>
              <p className="ml-3 text-black font-oswald">
                {purchaseState.delivery.name} {purchaseState.delivery.lastName}
              </p>
            </div>
            <div className="flex mb-3 items-end">
              <p className="text-greyPrimary font-mulish">Dirección:</p>
              <p className="ml-3 text-black font-oswald">
                {purchaseState.delivery.direction}, {purchaseState.delivery.cp},{" "}
                {purchaseState.delivery.city}
              </p>
            </div>
            <div className="flex mb-3 items-end">
              <p className="text-greyPrimary font-mulish">Fecha de entrega:</p>
              <p className="ml-3 text-black font-oswald">
                {purchaseState.delivery.deliveryDate}
              </p>
            </div>
          </div>
          <div className="flex my-6 items-end">
            <p className="text-xl text-greyPrimary font-mulish">
              Precio total:
            </p>
            <p className="text-2xl ml-3 font-oswald font-bold">
              {getTotalPrice(cartState.books)}€
            </p>
          </div>
          {/* <Link className="text-right" to={PUBLIC.HOME}>
              <button className="py-2 px-6 rounded-xl bg-black text-white font-mulish hover:opacity-80">
                Home
              </button>
            </Link> */}
        </div>
        <div className="w-1/2 text-right">
          <img
            className="max-h-96 rounded-full"
            src={logo}
            alt="labckie-logo"
          />
        </div>
      </div>
    </Layout>
  );
}

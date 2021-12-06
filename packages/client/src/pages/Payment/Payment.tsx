import React, { useState } from "react";
import Cards from "react-credit-cards";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";

import Layout from "../../components/Layout";
import Input from "../../components/Input";

import { ReactCreditCardProps } from "../../utils/types";

import creditCardSchema from "./credit-card-schema";

import "react-credit-cards/es/styles-compiled.css";

export default function Payment() {
  const [cardValues, setCardValues] = useState<ReactCreditCardProps>({
    cvc: "",
    expiry: "",
    focused: "number",
    name: "",
    number: "",
  });

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
    <div id="PaymentForm">
      <Cards
        cvc={formik.values.cvc}
        expiry={formik.values.expiry}
        focused={cardValues.focused}
        name={formik.values.name}
        number={formik.values.number}
      />
      <form action="">
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
        <Input
          type="string"
          label={"Fecha de expiración"}
          id="expiry"
          value={formik.values.expiry}
          placeholder=""
          handleChange={formik.handleChange}
          handleFocus={handleInputFocus}
          handleBlur={formik.handleBlur}
          errorMessage={formik.errors.expiry}
          hasErrorMessage={formik.touched.expiry}
        />
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
      </form>
    </div>
  );
}

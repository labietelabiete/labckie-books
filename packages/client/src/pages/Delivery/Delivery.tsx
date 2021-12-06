import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import Layout from "../../components/Layout";
import Input from "../../components/Input";

import { addDelivery } from "../../redux/purchase/actions";

import { PUBLIC } from "../../constants/routes";

import deliverySchema from "./delivery-schema";

export default function Delivery(): React.ReactElement {
  const purchaseState = useSelector((state: any) => state.purchase);
  const dispatch = useDispatch<any>();

  const formik = useFormik({
    initialValues: {
      name: purchaseState.delivery.name,
      lastName: purchaseState.delivery.lastName || "",
      email: purchaseState.delivery.email || "",
      direction: purchaseState.delivery.direction || "",
      city: purchaseState.delivery.city || "",
      cp: purchaseState.delivery.cp || "",
      phone: purchaseState.delivery.phone || "",
    },
    validationSchema: deliverySchema,
    onSubmit: async (deliveryState) => {
      const deliveryInfo = {
        name: deliveryState.name,
        lastName: deliveryState.lastName,
        email: deliveryState.email,
        direction: deliveryState.direction,
        city: deliveryState.city,
        cp: deliveryState.cp,
        phone: deliveryState.phone,
      };
      console.log(deliveryInfo);
      dispatch(addDelivery(deliveryInfo));
    },
  });

  return (
    <Layout docTitle="Delivery">
      <div className="mt-20 mx-36 p-8 bg-white rounded-3xl shadow-xl">
        <h1 className="text-start ml-10 text-4xl font-bold font-oswald">
          Datos de envío
        </h1>
        <form onSubmit={formik.handleSubmit} className="mt-10">
          <div className="flex">
            <div className="px-10 w-1/2">
              <Input
                type="text"
                label={"Nombre"}
                id="name"
                value={formik.values.name}
                placeholder="Tu nombre..."
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                errorMessage={formik.errors.name}
                hasErrorMessage={formik.touched.name}
              />
              <Input
                type="text"
                label="Apellido(s)"
                id="lastName"
                value={formik.values.lastName}
                placeholder="Tu(s) appelido(s)..."
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                errorMessage={formik.errors.lastName}
                hasErrorMessage={formik.touched.lastName}
              />
              <Input
                type="email"
                label="Email"
                id="email"
                value={formik.values.email}
                placeholder="Email"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                errorMessage={formik.errors.email}
                hasErrorMessage={formik.touched.email}
              />
            </div>
            <div className="px-10 w-1/2">
              <Input
                type="text"
                label="Dirección"
                id="direction"
                value={formik.values.direction}
                placeholder="Dirección"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                errorMessage={formik.errors.direction}
                hasErrorMessage={formik.touched.direction}
              />
              <div className="flex justify-between">
                <Input
                  type="text"
                  label="Ciudad"
                  id="city"
                  value={formik.values.city}
                  placeholder="Ciudad"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  errorMessage={formik.errors.city}
                  hasErrorMessage={formik.touched.city}
                />
                <Input
                  type="text"
                  label="CP"
                  id="cp"
                  value={formik.values.cp}
                  placeholder="CP"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  errorMessage={formik.errors.cp}
                  hasErrorMessage={formik.touched.cp}
                />
              </div>
              <Input
                type="string"
                label="Teléfono"
                id="phone"
                value={formik.values.phone}
                placeholder="Teléfono"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                errorMessage={formik.errors.phone}
                hasErrorMessage={formik.touched.phone}
              />
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <Link to={PUBLIC.SUMMARY}>
              <button className="py-2 px-6 rounded-xl bg-black text-white font-mulish hover:opacity-80">
                Volver
              </button>
            </Link>
            <button
              className="py-2 px-6 rounded-xl bg-salmonSecondary text-white font-mulish hover:opacity-80"
              type="submit"
            >
              Siguiente
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

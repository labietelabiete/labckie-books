import * as Yup from "yup";

export const creditCardSchema = Yup.object().shape({
  name: Yup.string().required("Nombre del titular necesario!"),
  expiry: Yup.string()
    .min(4, "Expiración demasiado corta!")
    .matches(/^[0-9]+$/, "Solo se aceptan números")
    .required("Expiración necesaria!"),
  number: Yup.string()
    .min(16, "Número de tarjeta demasiado corto!")
    .matches(/^[0-9]+$/, "Solo se aceptan números")
    .required("Número de tarjeta necesaria!"),
  cvc: Yup.string()
    .min(3, "CVC demasiado corto!")
    .matches(/^[0-9]+$/, "Solo se aceptan númeroso")
    .required("CVC necesario!"),
});

export default creditCardSchema;

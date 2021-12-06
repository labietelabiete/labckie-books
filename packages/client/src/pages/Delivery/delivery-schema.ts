import * as Yup from "yup";

export const deliverySchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Nombre demasiado corto!")
    .max(50, "Nombre demasiado largo!")
    .matches(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, "Only letters accepted")
    .required("Nombre obligatorio"),
  lastName: Yup.string()
    .min(2, "Apellido(s) demasiado corto!")
    .max(50, "Apellido(s) demasiado largo!")
    .matches(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, "Only letters accepted")
    .required("Apellido obligatorio"),
  email: Yup.string().email("Email no valido").required("Emial bligatorio"),
  direction: Yup.string()
    .min(2, "Direction demasiado corto")
    .max(50, "Direction demasiado largo!")
    .required("The direction obligatorio"),
  city: Yup.string()
    .min(2, "Ciudad demasiado corta!")
    .max(50, "Ciudad demasiado larga!")
    .matches(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, "Only letters accepted")
    .required("Ciudad obligatoria"),
  cp: Yup.string()
    .min(5, "CP demasiado corto!")
    .max(10, "CP demasiado largo!")
    .matches(/^[0-9]+$/, "CP no válido")
    .required("CP obligatorio"),
  phone: Yup.string()
    .min(4, "Teléfono demasiado corto!")
    .max(12, "Teléfono demasiado largo!")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Teléfono no válido"
    )
    .required("Teléfono obligatorio"),
});

export default deliverySchema;

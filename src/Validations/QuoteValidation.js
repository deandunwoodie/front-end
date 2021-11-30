import * as yup from "yup";

export const validate = yup.object({
  quotePrefix: yup.string().required("Required"),
  quoteFirstName: yup
    .string()
    .required("Required")
    .min(20, "Must be 20 characters or less"),
  quoteLastName: yup
    .string()
    .required("Required")
    .max(20, "Must be 20 characters or less"),
  quoteMobile: yup.string().required("Required"),
  quoteAddressLine1: yup.string().required("First line of address is required"),
  quoteAddressLine2: yup
    .string()
    .required("Second line of address is required"),
  quoteCity: yup.string().required("City is required"),
  quotePostcode: yup.string().required("Postcode is required"),

  quoteVehicleType: yup.string().required(),
  quoteEngineSize: yup.number().required(),
  quoteIsCommercial: yup.string().required(),
  quoteIsRegistered: yup.string().required(),
  quoteVehicleValue: yup.string().required(),
});

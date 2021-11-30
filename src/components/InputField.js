import React from "react";
import TextField from "@mui/material/TextField";
import { useField, ErrorMessage, Field, Formik } from "formik";
import Alert from "@mui/material/Alert";

export const InputField = ({ label, formik }) => {
  return (
    // <div className="mb-2">
    //   <TextField
    //     // name="quoteFirstName"
    //     variant="outlined"
    //     label={label}
    //     autoComplete="off"
    //     // {...field}
    //     {...props}
    //     // error={FileDownloadDone.name
    //     // value={formValues.quoteFirstName}
    //   />
    //   <div>{/* <ErrorMessage name={field.name}></ErrorMessage> */}</div>
    // </div>

    <div className="mb-2">
      {console.log(formik)}
      <TextField
        // name="quoteFirstName"
        variant="outlined"
        // label={formik.errors.email}
        autoComplete="off"
        // {...field}
        // {...props}
        // error={FileDownloadDone.name
        // value={formValues.quoteFirstName}
      />
      <div>{/* <ErrorMessage name={field.name}></ErrorMessage> */}</div>
    </div>
  );
};

// import axios from "axios";
// import { Formik, Form, useFormik } from "formik";
// import React, { useEffect, useState } from "react";
// // import { Form } from "semantic-ui-react";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";
// import Button from "@mui/material/Button";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import { InputField } from "../InputField";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import DateFnsUtils from "@date-io/date-fns";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormLabel from "@mui/material/FormLabel";
// import "./Create.css";
// import * as yup from "yup";
// import { validate } from "../../Validations/QuoteValidation";
// export default function Create() {
//   // const validate = yup.object({
//   //   quotePrefix: yup.string().required("Required"),
//   //   quoteFirstName: yup
//   //     .string()
//   //     .required("Required")
//   //     .max(20, "Must be 20 characters or less"),
//   //   quoteLastName: yup
//   //     .string()
//   //     .required("Required")
//   //     .max(20, "Must be 20 characters or less"),
//   //   quoteMobile: yup.string().required("Required"),
//   //   quoteAddressLine1: yup
//   //     .string()
//   //     .required("First line of address is required"),
//   //   quoteAddressLine2: yup.string().required(),
//   //   quoteCity: yup.string().required("City is required"),
//   //   quotePostcode: yup.string().required("Postcode is required"),

//   //   quoteVehicleType: yup.string().required(),
//   //   quoteEngineSize: yup.number().required(),
//   //   quoteIsCommercial: yup.string().required(),
//   //   quoteIsRegistered: yup.string().required(),
//   //   quoteVehicleValue: yup.string().required(),
//   // });
//   const callMockAPI = () => {
//     const endpointURL = "http://localhost:8080/quotes";

//     axios
//       .post(endpointURL, formValues)
//       .then((response) => console.log(response.data))
//       .catch((err) => console.log(err));
//   };

//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const [formValues, setFormValues] = useState({
//     quotePrefix: "",
//     quoteFirstName: "",
//     quoteLastName: "",
//     quoteMobile: "",
//     quoteAddressLine1: "",
//     quoteAddressLine2: "",
//     quoteCity: "",
//     quotePostcode: "",
//     quoteVehicleType: "",
//     quoteEngineSize: null,
//     quoteIsCommercial: "",
//     quoteIsRegistered: "",
//     quoteVehicleValue: null,
//   });

//   const handleOnChange = (e) => {
//     setFormValues({ ...formValues, [e.target.name]: e.target.value });
//   };

//   const formik = useFormik({
//     initialValues: {
//       quotePrefix: "",
//       quoteFirstName: "",
//       quoteLastName: "",
//       quoteMobile: "",
//       quoteAddressLine1: "",
//       quoteAddressLine2: "",
//       quoteCity: "",
//       quotePostcode: "",
//       quoteVehicleType: "",
//       quoteEngineSize: null,
//       quoteIsCommercial: "",
//       quoteIsRegistered: "",
//       quoteVehicleValue: null,
//     },
//     validationSchema: validate,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   const [alignment, setAlignment] = React.useState("web");
//   // const [alignment, setAlignment] = React.useState("web");

//   const [age, setAge] = React.useState("");

//   const handleChange1 = (event) => {
//     setAge(event.target.value);
//   };
//   function valuetext(value) {
//     return `${value}°C`;
//   }
//   const marks = [
//     {
//       value: 1000,
//       label: "1000",
//     },
//     {
//       value: 1200,
//       label: "1200",
//     },
//     {
//       value: 1400,
//       label: "1400",
//     },
//     {
//       value: 1600,
//       label: "1600",
//     },
//     {
//       value: 1800,
//       label: "1800",
//     },
//     {
//       value: 2000,
//       label: "2000",
//     },
//     {
//       value: 2500,
//       label: "2500",
//     },
//     {
//       value: 3000,
//       label: "3000",
//     },
//   ];

//   const valueMarks = [
//     {
//       value: 0,
//       label: "$0",
//     },
//     {
//       value: 50000,
//       label: "$50,000",
//     },
//   ];

//   function valueLabelFormat(value) {
//     return marks.findIndex((mark) => mark.value === value) + 1;
//   }

//   const handleChange = (event, newAlignment) => {
//     setAlignment(newAlignment);
//     formValues.quotePrefix = newAlignment;
//   };
//   const [lastName, setLastName] = useState("");
//   const [firstName, setFirstName] = useState("");

//   const userDetails = { firstName: firstName, lastName: lastName };

//   // const callMockAPI = () => {
//   //   console.log(firstName);
//   //   console.log(lastName);

//   //   const endpointURL = "https://6150fecbd0a7c100170168dd.mockapi.io/quotes";

//   //   axios
//   //     .post(endpointURL, userDetails)
//   //     .then((response) => console.log(response.data))
//   //     .catch((response) => console.log(response));
//   // };

//   return (
//     <div className="pad">
//       <div>
//         <Box className="box" sx={{ flexGrow: 1 }}>
//           <Formik
//             initialValues={{
//               quotePrefix: "",
//               quoteFirstName: "",
//               quoteLastName: "",
//               quoteMobile: "",
//               quoteAddressLine1: "",
//               quoteAddressLine2: "",
//               quoteCity: "",
//               quotePostcode: "",
//               quoteVehicleType: "",
//               quoteEngineSize: null,
//               quoteIsCommercial: "",
//               quoteIsRegistered: "",
//               quoteVehicleValue: null,
//             }}
//             validationSchema={validate}
//             onSubmit={(values) => {
//               alert(JSON.stringify(values, null, 2));
//             }}
//           >
//             {(formik) => (
//               <Form>
//                 <Grid container spacing={0}>
//                   <Grid item xs={2}>
//                     <ToggleButtonGroup
//                       color="primary"
//                       value={alignment}
//                       exclusive
//                       onChange={handleChange}
//                     >
//                       <ToggleButton value="Mr">Mr</ToggleButton>
//                       <ToggleButton value="Mrs">Mrs</ToggleButton>
//                       <ToggleButton value="Miss">Miss</ToggleButton>
//                       <ToggleButton value="Ms">Ms</ToggleButton>
//                     </ToggleButtonGroup>

//                     <InputField
//                       label="First Name"
//                       name="quoteFirstName"
//                       value={formik.values.quoteFirstName}
//                     ></InputField>
//                     <InputField
//                       label="Last Name"
//                       name="quoteLastName"
//                     ></InputField>
//                     <InputField
//                       label="Address Line 1"
//                       name="quoteAddressLine1"
//                     ></InputField>
//                     <InputField
//                       label="Address Line 2"
//                       name="quoteAddressLine2"
//                     ></InputField>
//                     <InputField
//                       label="City"
//                       name="quoteCity"
//                       formik={formik}
//                     ></InputField>
//                     <InputField
//                       label="Postcode"
//                       name="quotePostcode"
//                     ></InputField>
//                     <TextField
//                       name="quoteFirstName"
//                       color="secondary"
//                       className="text"
//                       required
//                       label="First Name"
//                       variant="outlined"
//                       onChange={handleOnChange}
//                       value={formValues.quoteFirstName}
//                     />

//                     <TextField
//                       label="Last Name"
//                       name="quoteLastName"
//                       required
//                       variant="outlined"
//                       onChange={handleOnChange}
//                       value={formValues.quoteLastName}
//                     />
//                     {/* <MuiPhoneNumber defaultCountry={"us"} /> */}

//                     {console.log(formik.values)}

//                     <TextField
//                       label="Address Line 1"
//                       name="quoteAddressLine1"
//                       required
//                       variant="outlined"
//                       onChange={handleOnChange}
//                       value={formValues.quoteAddressLine1}
//                     />

//                     <TextField
//                       label="Address Line 2"
//                       name="quoteAddressLine2"
//                       required
//                       variant="outlined"
//                       onChange={handleOnChange}
//                       value={formValues.quoteAddressLine2}
//                     />

//                     <TextField
//                       label="City"
//                       name="quoteCity"
//                       required
//                       variant="outlined"
//                       onChange={handleOnChange}
//                       value={formValues.quoteCity}
//                     />

//                     <TextField
//                       label="Postcode"
//                       name="quotePostcode"
//                       required
//                       variant="outlined"
//                       onChange={handleOnChange}
//                       value={formValues.quotePostcode}
//                     />

//                     <TextField
//                       label="Mobile"
//                       name="quoteMobile"
//                       required
//                       variant="outlined"
//                       onChange={handleOnChange}
//                       value={formValues.quoteMobile}
//                     />
//                   </Grid>
//                   <Grid item xs={4}>
//                     <FormLabel component="legend">
//                       What is the vehicle type?
//                     </FormLabel>
//                     <ToggleButtonGroup
//                       color="primary"
//                       value={formValues.quoteVehicleType}
//                       exclusive
//                       onChange={handleChange}
//                     >
//                       <ToggleButton value="Cabriolet">Cabriolet</ToggleButton>
//                       <ToggleButton value="Coupe">Coupe</ToggleButton>
//                       <ToggleButton value="Estate">Estate</ToggleButton>
//                       <ToggleButton value="Hatchback">Hatchback</ToggleButton>
//                       <ToggleButton value="Other">Other</ToggleButton>
//                     </ToggleButtonGroup>
//                     <FormLabel component="legend">
//                       What is the engine size (cc) of the vehicle?
//                     </FormLabel>
//                     <Slider
//                       aria-label="Restricted values"
//                       valueLabelFormat={valueLabelFormat}
//                       getAriaValueText={valuetext}
//                       step={null}
//                       marks={marks}
//                       max={3000}
//                       min={1000}
//                       onChange={handleOnChange}
//                       name="quoteEngineSize"
//                     />
//                     <FormLabel component="legend">
//                       How many additional drivers will use the vehicle?
//                     </FormLabel>
//                     <ToggleButtonGroup
//                       color="primary"
//                       value={alignment}
//                       exclusive
//                       onChange={handleChange}
//                     >
//                       <ToggleButton value="None">None</ToggleButton>
//                       <ToggleButton value="One">One</ToggleButton>
//                       <ToggleButton value="Two">Two</ToggleButton>
//                       <ToggleButton value="Three">Three</ToggleButton>
//                       <ToggleButton value="Four">Four</ToggleButton>
//                     </ToggleButtonGroup>

//                     <FormControl component="fieldset">
//                       <FormLabel component="legend">
//                         Will the vehicle be used for commercial purposes?
//                       </FormLabel>
//                       <RadioGroup
//                         onChange={handleOnChange}
//                         row
//                         name="quoteIsCommercial"
//                         value={formValues.quoteIsCommercial}
//                       >
//                         <FormControlLabel
//                           value="Yes"
//                           onChange={handleOnChange}
//                           control={<Radio />}
//                           label="Yes"
//                         />
//                         <FormControlLabel
//                           value="No"
//                           onChange={handleOnChange}
//                           control={<Radio />}
//                           label="No"
//                         />
//                       </RadioGroup>
//                     </FormControl>

//                     <FormControl component="fieldset">
//                       <FormLabel component="legend">
//                         Will the vehicle be used outside the registered state?
//                       </FormLabel>
//                       <RadioGroup
//                         onChange={handleOnChange}
//                         row
//                         name="quoteIsRegistered"
//                         value={formValues.quoteIsRegistered}
//                       >
//                         <FormControlLabel
//                           value="Yes"
//                           control={<Radio />}
//                           label="Yes"
//                         />
//                         <FormControlLabel
//                           value="No"
//                           control={<Radio />}
//                           label="No"
//                         />
//                       </RadioGroup>
//                     </FormControl>
//                     <FormLabel component="legend">
//                       What is the current value of the vehicle?
//                     </FormLabel>
//                     <Slider
//                       defaultValue={0}
//                       aria-label="Small"
//                       valueLabelDisplay="on"
//                       marks={valueMarks}
//                       step={100}
//                       max={50000}
//                       onChange={handleOnChange}
//                       name="quoteVehicleValue"
//                     />
//                     <FormLabel component="legend">
//                       What date was the vehicle first registered?
//                     </FormLabel>
//                     {/* <FormControl>
//                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                   <KeyboardDatePicker
//                     variant="inline"
//                     format="MM/dd/yyyy"
//                     margin="normal"
//                     id="date-picker-inline"
//                     label="Date picker inline"
//                     value={selectedDate}
//                     onChange={handleDateChange}
//                     KeyboardButtonProps={{
//                       "aria-label": "change date",
//                     }}
//                   />
//                 </MuiPickersUtilsProvider>
//               </FormControl> */}
//                     <FormControl sx={{ m: 1, minWidth: 120 }}>
//                       <Select
//                         value={age}
//                         onChange={handleChange1}
//                         displayEmpty
//                         inputProps={{ "aria-label": "Without label" }}
//                       >
//                         <MenuItem value="">
//                           <em>01</em>
//                         </MenuItem>
//                       </Select>
//                       <FormHelperText>Day</FormHelperText>
//                     </FormControl>
//                     <FormControl sx={{ m: 1, minWidth: 120 }}>
//                       <Select
//                         value={age}
//                         onChange={handleChange}
//                         displayEmpty
//                         inputProps={{ "aria-label": "Without label" }}
//                       >
//                         <MenuItem value="">
//                           <em>05</em>
//                         </MenuItem>
//                       </Select>
//                       <FormHelperText>Month</FormHelperText>
//                     </FormControl>
//                     <FormControl sx={{ m: 1, minWidth: 120 }}>
//                       <Select
//                         value={age}
//                         onChange={handleChange1}
//                         displayEmpty
//                         inputProps={{ "aria-label": "Without label" }}
//                       >
//                         <MenuItem value="">
//                           <em>1998</em>
//                         </MenuItem>
//                       </Select>
//                       <FormHelperText>Year</FormHelperText>
//                     </FormControl>
//                   </Grid>
//                   <Button
//                     className="button"
//                     variant="contained"
//                     onClick={callMockAPI}
//                     type="submit"
//                   >
//                     Submit Quote
//                   </Button>
//                 </Grid>
//               </Form>
//             )}
//           </Formik>
//         </Box>
//       </div>
//     </div>
//   );
// }

// // import axios from "axios";
// // import { Formik, Form } from "formik";
// // import React, { useEffect, useState } from "react";
// // // import { Form } from "semantic-ui-react";
// // import Box from "@mui/material/Box";
// // import Slider from "@mui/material/Slider";
// // import Button from "@mui/material/Button";
// // import ToggleButton from "@mui/material/ToggleButton";
// // import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// // import Paper from "@mui/material/Paper";
// // import Grid from "@mui/material/Grid";
// // import TextField from "@mui/material/TextField";

// // import InputLabel from "@mui/material/InputLabel";
// // import MenuItem from "@mui/material/MenuItem";
// // import FormHelperText from "@mui/material/FormHelperText";
// // import FormControl from "@mui/material/FormControl";
// // import Select from "@mui/material/Select";
// // import DateFnsUtils from "@date-io/date-fns";
// // import Radio from "@mui/material/Radio";
// // import RadioGroup from "@mui/material/RadioGroup";
// // import FormControlLabel from "@mui/material/FormControlLabel";
// // import FormLabel from "@mui/material/FormLabel";
// // import "./Create.css";
// // export default function Create() {
// //   const callMockAPI = () => {
// //     const endpointURL = "http://localhost:8080/quotes";

// //     axios
// //       .post(endpointURL, formValues)
// //       .then((response) => console.log(response.data))
// //       .catch((err) => console.log(err));
// //   };

// //   const [selectedDate, setSelectedDate] = useState(new Date());

// //   const handleDateChange = (date) => {
// //     setSelectedDate(date);
// //   };

// //   const [formValues, setFormValues] = useState({
// //     quotePrefix: "",
// //     quoteFirstName: "",
// //     quoteLastName: "",
// //     quoteMobile: "",
// //     quoteAddressLine1: "",
// //     quoteAddressLine2: "",
// //     quoteCity: "",
// //     quotePostcode: "",
// //     quoteVehicleType: "",
// //     quoteEngineSize: null,
// //     quoteIsCommercial: "",
// //     quoteIsRegistered: "",
// //     quoteVehicleValue: null,
// //   });

// //   const handleOnChange = (e) => {
// //     setFormValues({ ...formValues, [e.target.name]: e.target.value });
// //   };

// //   const [alignment, setAlignment] = React.useState("web");
// //   // const [alignment, setAlignment] = React.useState("web");

// //   const [age, setAge] = React.useState("");

// //   const handleChange1 = (event) => {
// //     setAge(event.target.value);
// //   };
// //   function valuetext(value) {
// //     return `${value}°C`;
// //   }
// //   const marks = [
// //     {
// //       value: 1000,
// //       label: "1000",
// //     },
// //     {
// //       value: 1200,
// //       label: "1200",
// //     },
// //     {
// //       value: 1400,
// //       label: "1400",
// //     },
// //     {
// //       value: 1600,
// //       label: "1600",
// //     },
// //     {
// //       value: 1800,
// //       label: "1800",
// //     },
// //     {
// //       value: 2000,
// //       label: "2000",
// //     },
// //     {
// //       value: 2500,
// //       label: "2500",
// //     },
// //     {
// //       value: 3000,
// //       label: "3000",
// //     },
// //   ];

// //   const valueMarks = [
// //     {
// //       value: 0,
// //       label: "$0",
// //     },
// //     {
// //       value: 50000,
// //       label: "$50,000",
// //     },
// //   ];

// //   function valueLabelFormat(value) {
// //     return marks.findIndex((mark) => mark.value === value) + 1;
// //   }

// //   const handleChange = (event, newAlignment) => {
// //     setAlignment(newAlignment);
// //     formValues.quotePrefix = newAlignment;
// //   };
// //   const [lastName, setLastName] = useState("");
// //   const [firstName, setFirstName] = useState("");

// //   const userDetails = { firstName: firstName, lastName: lastName };

// //   // const callMockAPI = () => {
// //   //   console.log(firstName);
// //   //   console.log(lastName);

// //   //   const endpointURL = "https://6150fecbd0a7c100170168dd.mockapi.io/quotes";

// //   //   axios
// //   //     .post(endpointURL, userDetails)
// //   //     .then((response) => console.log(response.data))
// //   //     .catch((response) => console.log(response));
// //   // };

// //   return (
// //     <div className="pad">
// //       <div>
// //         <Box className="box" sx={{ flexGrow: 1 }}>
// //           <Formik
// //             initialValues={{
// //               quotePrefix: "",
// //               quoteFirstName: "",
// //               quoteLastName: "",
// //               quoteMobile: "",
// //               quoteAddressLine1: "",
// //               quoteAddressLine2: "",
// //               quoteCity: "",
// //               quotePostcode: "",
// //               quoteVehicleType: "",
// //               quoteEngineSize: null,
// //               quoteIsCommercial: "",
// //               quoteIsRegistered: "",
// //               quoteVehicleValue: null,
// //             }}
// //           >
// //             {(formik) => (
// //               <Form>
// //                 <Grid container spacing={0}>
// //                   <Grid item xs={2}>
// //                     <ToggleButtonGroup
// //                       color="primary"
// //                       value={alignment}
// //                       exclusive
// //                       onChange={handleChange}
// //                     >
// //                       <ToggleButton value="Mr">Mr</ToggleButton>
// //                       <ToggleButton value="Mrs">Mrs</ToggleButton>
// //                       <ToggleButton value="Miss">Miss</ToggleButton>
// //                       <ToggleButton value="Ms">Ms</ToggleButton>
// //                     </ToggleButtonGroup>

// //                     <TextField
// //                       name="quoteFirstName"
// //                       color="secondary"
// //                       className="text"
// //                       required
// //                       label="First Name"
// //                       variant="outlined"
// //                       onChange={handleOnChange}
// //                       value={formValues.quoteFirstName}
// //                     />

// //                     <TextField
// //                       label="Last Name"
// //                       name="quoteLastName"
// //                       required
// //                       variant="outlined"
// //                       onChange={handleOnChange}
// //                       value={formValues.quoteLastName}
// //                     />
// //                     {/* <MuiPhoneNumber defaultCountry={"us"} /> */}

// //                     {console.log(formik)}

// //                     <TextField
// //                       label="Address Line 1"
// //                       name="quoteAddressLine1"
// //                       required
// //                       variant="outlined"
// //                       onChange={handleOnChange}
// //                       value={formValues.quoteAddressLine1}
// //                     />

// //                     <TextField
// //                       label="Address Line 2"
// //                       name="quoteAddressLine2"
// //                       required
// //                       variant="outlined"
// //                       onChange={handleOnChange}
// //                       value={formValues.quoteAddressLine2}
// //                     />

// //                     <TextField
// //                       label="City"
// //                       name="quoteCity"
// //                       required
// //                       variant="outlined"
// //                       onChange={handleOnChange}
// //                       value={formValues.quoteCity}
// //                     />

// //                     <TextField
// //                       label="Postcode"
// //                       name="quotePostcode"
// //                       required
// //                       variant="outlined"
// //                       onChange={handleOnChange}
// //                       value={formValues.quotePostcode}
// //                     />

// //                     <TextField
// //                       label="Mobile"
// //                       name="quoteMobile"
// //                       required
// //                       variant="outlined"
// //                       onChange={handleOnChange}
// //                       value={formValues.quoteMobile}
// //                     />
// //                   </Grid>
// //                   <Grid item xs={4}>
// //                     <FormLabel component="legend">
// //                       What is the vehicle type?
// //                     </FormLabel>
// //                     <ToggleButtonGroup
// //                       color="primary"
// //                       value={formValues.quoteVehicleType}
// //                       exclusive
// //                       onChange={handleChange}
// //                     >
// //                       <ToggleButton value="Cabriolet">Cabriolet</ToggleButton>
// //                       <ToggleButton value="Coupe">Coupe</ToggleButton>
// //                       <ToggleButton value="Estate">Estate</ToggleButton>
// //                       <ToggleButton value="Hatchback">Hatchback</ToggleButton>
// //                       <ToggleButton value="Other">Other</ToggleButton>
// //                     </ToggleButtonGroup>
// //                     <FormLabel component="legend">
// //                       What is the engine size (cc) of the vehicle?
// //                     </FormLabel>
// //                     <Slider
// //                       aria-label="Restricted values"
// //                       valueLabelFormat={valueLabelFormat}
// //                       getAriaValueText={valuetext}
// //                       step={null}
// //                       marks={marks}
// //                       max={3000}
// //                       min={1000}
// //                       onChange={handleOnChange}
// //                       name="quoteEngineSize"
// //                     />
// //                     <FormLabel component="legend">
// //                       How many additional drivers will use the vehicle?
// //                     </FormLabel>
// //                     <ToggleButtonGroup
// //                       color="primary"
// //                       value={alignment}
// //                       exclusive
// //                       onChange={handleChange}
// //                     >
// //                       <ToggleButton value="None">None</ToggleButton>
// //                       <ToggleButton value="One">One</ToggleButton>
// //                       <ToggleButton value="Two">Two</ToggleButton>
// //                       <ToggleButton value="Three">Three</ToggleButton>
// //                       <ToggleButton value="Four">Four</ToggleButton>
// //                     </ToggleButtonGroup>

// //                     <FormControl component="fieldset">
// //                       <FormLabel component="legend">
// //                         Will the vehicle be used for commercial purposes?
// //                       </FormLabel>
// //                       <RadioGroup
// //                         onChange={handleOnChange}
// //                         row
// //                         name="quoteIsCommercial"
// //                         value={formValues.quoteIsCommercial}
// //                       >
// //                         <FormControlLabel
// //                           value="Yes"
// //                           onChange={handleOnChange}
// //                           control={<Radio />}
// //                           label="Yes"
// //                         />
// //                         <FormControlLabel
// //                           value="No"
// //                           onChange={handleOnChange}
// //                           control={<Radio />}
// //                           label="No"
// //                         />
// //                       </RadioGroup>
// //                     </FormControl>

// //                     <FormControl component="fieldset">
// //                       <FormLabel component="legend">
// //                         Will the vehicle be used outside the registered state?
// //                       </FormLabel>
// //                       <RadioGroup
// //                         onChange={handleOnChange}
// //                         row
// //                         name="quoteIsRegistered"
// //                         value={formValues.quoteIsRegistered}
// //                       >
// //                         <FormControlLabel
// //                           value="Yes"
// //                           control={<Radio />}
// //                           label="Yes"
// //                         />
// //                         <FormControlLabel
// //                           value="No"
// //                           control={<Radio />}
// //                           label="No"
// //                         />
// //                       </RadioGroup>
// //                     </FormControl>
// //                     <FormLabel component="legend">
// //                       What is the current value of the vehicle?
// //                     </FormLabel>
// //                     <Slider
// //                       defaultValue={0}
// //                       aria-label="Small"
// //                       valueLabelDisplay="on"
// //                       marks={valueMarks}
// //                       step={100}
// //                       max={50000}
// //                       onChange={handleOnChange}
// //                       name="quoteVehicleValue"
// //                     />
// //                     <FormLabel component="legend">
// //                       What date was the vehicle first registered?
// //                     </FormLabel>
// //                     {/* <FormControl>
// //                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
// //                   <KeyboardDatePicker
// //                     variant="inline"
// //                     format="MM/dd/yyyy"
// //                     margin="normal"
// //                     id="date-picker-inline"
// //                     label="Date picker inline"
// //                     value={selectedDate}
// //                     onChange={handleDateChange}
// //                     KeyboardButtonProps={{
// //                       "aria-label": "change date",
// //                     }}
// //                   />
// //                 </MuiPickersUtilsProvider>
// //               </FormControl> */}
// //                     <FormControl sx={{ m: 1, minWidth: 120 }}>
// //                       <Select
// //                         value={age}
// //                         onChange={handleChange1}
// //                         displayEmpty
// //                         inputProps={{ "aria-label": "Without label" }}
// //                       >
// //                         <MenuItem value="">
// //                           <em>01</em>
// //                         </MenuItem>
// //                       </Select>
// //                       <FormHelperText>Day</FormHelperText>
// //                     </FormControl>
// //                     <FormControl sx={{ m: 1, minWidth: 120 }}>
// //                       <Select
// //                         value={age}
// //                         onChange={handleChange}
// //                         displayEmpty
// //                         inputProps={{ "aria-label": "Without label" }}
// //                       >
// //                         <MenuItem value="">
// //                           <em>05</em>
// //                         </MenuItem>
// //                       </Select>
// //                       <FormHelperText>Month</FormHelperText>
// //                     </FormControl>
// //                     <FormControl sx={{ m: 1, minWidth: 120 }}>
// //                       <Select
// //                         value={age}
// //                         onChange={handleChange1}
// //                         displayEmpty
// //                         inputProps={{ "aria-label": "Without label" }}
// //                       >
// //                         <MenuItem value="">
// //                           <em>1998</em>
// //                         </MenuItem>
// //                       </Select>
// //                       <FormHelperText>Year</FormHelperText>
// //                     </FormControl>
// //                   </Grid>
// //                   <Button
// //                     className="button"
// //                     variant="contained"
// //                     onClick={callMockAPI}
// //                     type="submit"
// //                   >
// //                     Submit Quote
// //                   </Button>
// //                 </Grid>
// //               </Form>
// //             )}
// //           </Formik>
// //         </Box>
// //       </div>
// //     </div>
// //   );
// // }

// ReactDOM.render(<WithMaterialUI />, document.getElementById("root"));

// import axios from "axios";
// import { Formik, Form, useFormik } from "formik";
// import React, { useEffect, useState } from "react";
// // import { Form } from "semantic-ui-react";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";
// import Button from "@mui/material/Button";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import { InputField } from "../InputField";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import DateFnsUtils from "@date-io/date-fns";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormLabel from "@mui/material/FormLabel";
// import "./Create.css";
// import * as yup from "yup";
// import { validate } from "../../Validations/QuoteValidation";
// export default function Create() {
//   // const validate = yup.object({
//   //   quotePrefix: yup.string().required("Required"),
//   //   quoteFirstName: yup
//   //     .string()
//   //     .required("Required")
//   //     .max(20, "Must be 20 characters or less"),
//   //   quoteLastName: yup
//   //     .string()
//   //     .required("Required")
//   //     .max(20, "Must be 20 characters or less"),
//   //   quoteMobile: yup.string().required("Required"),
//   //   quoteAddressLine1: yup
//   //     .string()
//   //     .required("First line of address is required"),
//   //   quoteAddressLine2: yup.string().required(),
//   //   quoteCity: yup.string().required("City is required"),
//   //   quotePostcode: yup.string().required("Postcode is required"),

//   //   quoteVehicleType: yup.string().required(),
//   //   quoteEngineSize: yup.number().required(),
//   //   quoteIsCommercial: yup.string().required(),
//   //   quoteIsRegistered: yup.string().required(),
//   //   quoteVehicleValue: yup.string().required(),
//   // });
//   const callMockAPI = () => {
//     const endpointURL = "http://localhost:8080/quotes";

//     axios
//       .post(endpointURL, formValues)
//       .then((response) => console.log(response.data))
//       .catch((err) => console.log(err));
//   };

//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const [formValues, setFormValues] = useState({
//     quotePrefix: "",
//     quoteFirstName: "",
//     quoteLastName: "",
//     quoteMobile: "",
//     quoteAddressLine1: "",
//     quoteAddressLine2: "",
//     quoteCity: "",
//     quotePostcode: "",
//     quoteVehicleType: "",
//     quoteEngineSize: null,
//     quoteIsCommercial: "",
//     quoteIsRegistered: "",
//     quoteVehicleValue: null,
//   });

//   const handleOnChange = (e) => {
//     setFormValues({ ...formValues, [e.target.name]: e.target.value });
//   };

//   // const formik = useFormik({
//   //   initialValues: {
//   //     quotePrefix: "",
//   //     quoteFirstName: "",
//   //     quoteLastName: "",
//   //     quoteMobile: "",
//   //     quoteAddressLine1: "",
//   //     quoteAddressLine2: "",
//   //     quoteCity: "",
//   //     quotePostcode: "",
//   //     quoteVehicleType: "",
//   //     quoteEngineSize: null,
//   //     quoteIsCommercial: "",
//   //     quoteIsRegistered: "",
//   //     quoteVehicleValue: null,
//   //   },
//   //   validationSchema: validate,
//   //   onSubmit: (values) => {
//   //     alert(JSON.stringify(values, null, 2));
//   //   },
//   // });

//   const [alignment, setAlignment] = React.useState("web");
//   // const [alignment, setAlignment] = React.useState("web");

//   const [age, setAge] = React.useState("");

//   const handleChange1 = (event) => {
//     setAge(event.target.value);
//   };
//   function valuetext(value) {
//     return `${value}°C`;
//   }
//   const marks = [
//     {
//       value: 1000,
//       label: "1000",
//     },
//     {
//       value: 1200,
//       label: "1200",
//     },
//     {
//       value: 1400,
//       label: "1400",
//     },
//     {
//       value: 1600,
//       label: "1600",
//     },
//     {
//       value: 1800,
//       label: "1800",
//     },
//     {
//       value: 2000,
//       label: "2000",
//     },
//     {
//       value: 2500,
//       label: "2500",
//     },
//     {
//       value: 3000,
//       label: "3000",
//     },
//   ];

//   const valueMarks = [
//     {
//       value: 0,
//       label: "$0",
//     },
//     {
//       value: 50000,
//       label: "$50,000",
//     },
//   ];

//   function valueLabelFormat(value) {
//     return marks.findIndex((mark) => mark.value === value) + 1;
//   }

//   const handleChange = (event, newAlignment) => {
//     setAlignment(newAlignment);
//     formValues.quotePrefix = newAlignment;
//   };
//   const [lastName, setLastName] = useState("");
//   const [firstName, setFirstName] = useState("");

//   const userDetails = { firstName: firstName, lastName: lastName };

//   // const callMockAPI = () => {
//   //   console.log(firstName);
//   //   console.log(lastName);

//   //   const endpointURL = "https://6150fecbd0a7c100170168dd.mockapi.io/quotes";

//   //   axios
//   //     .post(endpointURL, userDetails)
//   //     .then((response) => console.log(response.data))
//   //     .catch((response) => console.log(response));
//   // };

//   return (
//     <div className="pad">
//       <div>
// <Box className="box" sx={{ flexGrow: 1 }}>
//   {/* <Form> */}
//   <Grid container spacing={0}>
//     <Grid item xs={2}>
//       <ToggleButtonGroup
//         color="primary"
//         value={alignment}
//         exclusive
//         onChange={handleChange}
//       >
//         <ToggleButton value="Mr">Mr</ToggleButton>
//         <ToggleButton value="Mrs">Mrs</ToggleButton>
//         <ToggleButton value="Miss">Miss</ToggleButton>
//         <ToggleButton value="Ms">Ms</ToggleButton>
//       </ToggleButtonGroup>

//       <InputField label="First Name" name="quoteFirstName"></InputField>
//       <InputField label="Last Name" name="quoteLastName"></InputField>
//       <InputField
//         label="Address Line 1"
//         name="quoteAddressLine1"
//       ></InputField>
//       <InputField
//         label="Address Line 2"
//         name="quoteAddressLine2"
//       ></InputField>
//       <InputField label="City" name="quoteCity"></InputField>
//       <InputField label="Postcode" name="quotePostcode"></InputField>
//       <TextField
//         name="quoteFirstName"
//         color="secondary"
//         className="text"
//         required
//         label="First Name"
//         variant="outlined"
//         onChange={handleOnChange}
//         value={formValues.quoteFirstName}
//       />

//       <TextField
//         label="Last Name"
//         name="quoteLastName"
//         required
//         variant="outlined"
//         onChange={handleOnChange}
//         value={formValues.quoteLastName}
//       />
//       {/* <MuiPhoneNumber defaultCountry={"us"} /> */}

//       {/* {console.log(formik.values)} */}

//       <TextField
//         label="Address Line 1"
//         name="quoteAddressLine1"
//         required
//         variant="outlined"
//         onChange={handleOnChange}
//         value={formValues.quoteAddressLine1}
//       />

//       <TextField
//         label="Address Line 2"
//         name="quoteAddressLine2"
//         required
//         variant="outlined"
//         onChange={handleOnChange}
//         value={formValues.quoteAddressLine2}
//       />

//       <TextField
//         label="City"
//         name="quoteCity"
//         required
//         variant="outlined"
//         onChange={handleOnChange}
//         value={formValues.quoteCity}
//       />

//       <TextField
//         label="Postcode"
//         name="quotePostcode"
//         required
//         variant="outlined"
//         onChange={handleOnChange}
//         value={formValues.quotePostcode}
//       />

//       <TextField
//         label="Mobile"
//         name="quoteMobile"
//         required
//         variant="outlined"
//         onChange={handleOnChange}
//         value={formValues.quoteMobile}
//       />
//     </Grid>
//     <Grid item xs={4}>
//       <FormLabel component="legend">
//         What is the vehicle type?
//       </FormLabel>
//       <ToggleButtonGroup
//         color="primary"
//         value={formValues.quoteVehicleType}
//         exclusive
//         onChange={handleChange}
//       >
//         <ToggleButton value="Cabriolet">Cabriolet</ToggleButton>
//         <ToggleButton value="Coupe">Coupe</ToggleButton>
//         <ToggleButton value="Estate">Estate</ToggleButton>
//         <ToggleButton value="Hatchback">Hatchback</ToggleButton>
//         <ToggleButton value="Other">Other</ToggleButton>
//       </ToggleButtonGroup>
//       <FormLabel component="legend">
//         What is the engine size (cc) of the vehicle?
//       </FormLabel>
//       <Slider
//         aria-label="Restricted values"
//         valueLabelFormat={valueLabelFormat}
//         getAriaValueText={valuetext}
//         step={null}
//         marks={marks}
//         max={3000}
//         min={1000}
//         onChange={handleOnChange}
//         name="quoteEngineSize"
//       />
//       <FormLabel component="legend">
//         How many additional drivers will use the vehicle?
//       </FormLabel>
//       <ToggleButtonGroup
//         color="primary"
//         value={alignment}
//         exclusive
//         onChange={handleChange}
//       >
//         <ToggleButton value="None">None</ToggleButton>
//         <ToggleButton value="One">One</ToggleButton>
//         <ToggleButton value="Two">Two</ToggleButton>
//         <ToggleButton value="Three">Three</ToggleButton>
//         <ToggleButton value="Four">Four</ToggleButton>
//       </ToggleButtonGroup>

//       <FormControl component="fieldset">
//         <FormLabel component="legend">
//           Will the vehicle be used for commercial purposes?
//         </FormLabel>
//         <RadioGroup
//           onChange={handleOnChange}
//           row
//           name="quoteIsCommercial"
//           value={formValues.quoteIsCommercial}
//         >
//           <FormControlLabel
//             value="Yes"
//             onChange={handleOnChange}
//             control={<Radio />}
//             label="Yes"
//           />
//           <FormControlLabel
//             value="No"
//             onChange={handleOnChange}
//             control={<Radio />}
//             label="No"
//           />
//         </RadioGroup>
//       </FormControl>

//       <FormControl component="fieldset">
//         <FormLabel component="legend">
//           Will the vehicle be used outside the registered state?
//         </FormLabel>
//         <RadioGroup
//           onChange={handleOnChange}
//           row
//           name="quoteIsRegistered"
//           value={formValues.quoteIsRegistered}
//         >
//           <FormControlLabel
//             value="Yes"
//             control={<Radio />}
//             label="Yes"
//           />
//           <FormControlLabel value="No" control={<Radio />} label="No" />
//         </RadioGroup>
//       </FormControl>
//       <FormLabel component="legend">
//         What is the current value of the vehicle?
//       </FormLabel>
//       <Slider
//         defaultValue={0}
//         aria-label="Small"
//         valueLabelDisplay="on"
//         marks={valueMarks}
//         step={100}
//         max={50000}
//         onChange={handleOnChange}
//         name="quoteVehicleValue"
//       />
//       <FormLabel component="legend">
//         What date was the vehicle first registered?
//       </FormLabel>
//       {/* <FormControl>
//         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//           <KeyboardDatePicker
//             variant="inline"
//             format="MM/dd/yyyy"
//             margin="normal"
//             id="date-picker-inline"
//             label="Date picker inline"
//             value={selectedDate}
//             onChange={handleDateChange}
//             KeyboardButtonProps={{
//               "aria-label": "change date",
//             }}
//           />
//         </MuiPickersUtilsProvider>
//       </FormControl> */}
//       <FormControl sx={{ m: 1, minWidth: 120 }}>
//         <Select
//           value={age}
//           onChange={handleChange1}
//           displayEmpty
//           inputProps={{ "aria-label": "Without label" }}
//         >
//           <MenuItem value="">
//             <em>01</em>
//           </MenuItem>
//         </Select>
//         <FormHelperText>Day</FormHelperText>
//       </FormControl>
//       <FormControl sx={{ m: 1, minWidth: 120 }}>
//         <Select
//           value={age}
//           onChange={handleChange}
//           displayEmpty
//           inputProps={{ "aria-label": "Without label" }}
//         >
//           <MenuItem value="">
//             <em>05</em>
//           </MenuItem>
//         </Select>
//         <FormHelperText>Month</FormHelperText>
//       </FormControl>
//       <FormControl sx={{ m: 1, minWidth: 120 }}>
//         <Select
//           value={age}
//           onChange={handleChange1}
//           displayEmpty
//           inputProps={{ "aria-label": "Without label" }}
//         >
//           <MenuItem value="">
//             <em>1998</em>
//           </MenuItem>
//         </Select>
//         <FormHelperText>Year</FormHelperText>
//       </FormControl>
//     </Grid>
//     <Button
//       className="button"
//       variant="contained"
//       onClick={callMockAPI}
//       type="submit"
//     >
//       Submit Quote
//     </Button>
//   </Grid>
//   {/* </Form> */}
// </Box>
//       </div>
//     </div>
//   );
// }

// // import axios from "axios";
// // import { Formik, Form } from "formik";
// // import React, { useEffect, useState } from "react";
// // // import { Form } from "semantic-ui-react";
// // import Box from "@mui/material/Box";
// // import Slider from "@mui/material/Slider";
// // import Button from "@mui/material/Button";
// // import ToggleButton from "@mui/material/ToggleButton";
// // import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// // import Paper from "@mui/material/Paper";
// // import Grid from "@mui/material/Grid";
// // import TextField from "@mui/material/TextField";

// // import InputLabel from "@mui/material/InputLabel";
// // import MenuItem from "@mui/material/MenuItem";
// // import FormHelperText from "@mui/material/FormHelperText";
// // import FormControl from "@mui/material/FormControl";
// // import Select from "@mui/material/Select";
// // import DateFnsUtils from "@date-io/date-fns";
// // import Radio from "@mui/material/Radio";
// // import RadioGroup from "@mui/material/RadioGroup";
// // import FormControlLabel from "@mui/material/FormControlLabel";
// // import FormLabel from "@mui/material/FormLabel";
// // import "./Create.css";
// // export default function Create() {
// //   const callMockAPI = () => {
// //     const endpointURL = "http://localhost:8080/quotes";

// //     axios
// //       .post(endpointURL, formValues)
// //       .then((response) => console.log(response.data))
// //       .catch((err) => console.log(err));
// //   };

// //   const [selectedDate, setSelectedDate] = useState(new Date());

// //   const handleDateChange = (date) => {
// //     setSelectedDate(date);
// //   };

// //   const [formValues, setFormValues] = useState({
// //     quotePrefix: "",
// //     quoteFirstName: "",
// //     quoteLastName: "",
// //     quoteMobile: "",
// //     quoteAddressLine1: "",
// //     quoteAddressLine2: "",
// //     quoteCity: "",
// //     quotePostcode: "",
// //     quoteVehicleType: "",
// //     quoteEngineSize: null,
// //     quoteIsCommercial: "",
// //     quoteIsRegistered: "",
// //     quoteVehicleValue: null,
// //   });

// //   const handleOnChange = (e) => {
// //     setFormValues({ ...formValues, [e.target.name]: e.target.value });
// //   };

// //   const [alignment, setAlignment] = React.useState("web");
// //   // const [alignment, setAlignment] = React.useState("web");

// //   const [age, setAge] = React.useState("");

// //   const handleChange1 = (event) => {
// //     setAge(event.target.value);
// //   };
// //   function valuetext(value) {
// //     return `${value}°C`;
// //   }
// //   const marks = [
// //     {
// //       value: 1000,
// //       label: "1000",
// //     },
// //     {
// //       value: 1200,
// //       label: "1200",
// //     },
// //     {
// //       value: 1400,
// //       label: "1400",
// //     },
// //     {
// //       value: 1600,
// //       label: "1600",
// //     },
// //     {
// //       value: 1800,
// //       label: "1800",
// //     },
// //     {
// //       value: 2000,
// //       label: "2000",
// //     },
// //     {
// //       value: 2500,
// //       label: "2500",
// //     },
// //     {
// //       value: 3000,
// //       label: "3000",
// //     },
// //   ];

// //   const valueMarks = [
// //     {
// //       value: 0,
// //       label: "$0",
// //     },
// //     {
// //       value: 50000,
// //       label: "$50,000",
// //     },
// //   ];

// //   function valueLabelFormat(value) {
// //     return marks.findIndex((mark) => mark.value === value) + 1;
// //   }

// //   const handleChange = (event, newAlignment) => {
// //     setAlignment(newAlignment);
// //     formValues.quotePrefix = newAlignment;
// //   };
// //   const [lastName, setLastName] = useState("");
// //   const [firstName, setFirstName] = useState("");

// //   const userDetails = { firstName: firstName, lastName: lastName };

// //   // const callMockAPI = () => {
// //   //   console.log(firstName);
// //   //   console.log(lastName);

// //   //   const endpointURL = "https://6150fecbd0a7c100170168dd.mockapi.io/quotes";

// //   //   axios
// //   //     .post(endpointURL, userDetails)
// //   //     .then((response) => console.log(response.data))
// //   //     .catch((response) => console.log(response));
// //   // };

// //   return (
// //     <div className="pad">
// //       <div>
// //         <Box className="box" sx={{ flexGrow: 1 }}>
// //           <Formik
// //             initialValues={{
// //               quotePrefix: "",
// //               quoteFirstName: "",
// //               quoteLastName: "",
// //               quoteMobile: "",
// //               quoteAddressLine1: "",
// //               quoteAddressLine2: "",
// //               quoteCity: "",
// //               quotePostcode: "",
// //               quoteVehicleType: "",
// //               quoteEngineSize: null,
// //               quoteIsCommercial: "",
// //               quoteIsRegistered: "",
// //               quoteVehicleValue: null,
// //             }}
// //           >
// //             {(formik) => (
// //               <Form>
// //                 <Grid container spacing={0}>
// //                   <Grid item xs={2}>
// //                     <ToggleButtonGroup
// //                       color="primary"
// //                       value={alignment}
// //                       exclusive
// //                       onChange={handleChange}
// //                     >
// //                       <ToggleButton value="Mr">Mr</ToggleButton>
// //                       <ToggleButton value="Mrs">Mrs</ToggleButton>
// //                       <ToggleButton value="Miss">Miss</ToggleButton>
// //                       <ToggleButton value="Ms">Ms</ToggleButton>
// //                     </ToggleButtonGroup>

// //                     <TextField
// //                       name="quoteFirstName"
// //                       color="secondary"
// //                       className="text"
// //                       required
// //                       label="First Name"
// //                       variant="outlined"
// //                       onChange={handleOnChange}
// //                       value={formValues.quoteFirstName}
// //                     />

// //                     <TextField
// //                       label="Last Name"
// //                       name="quoteLastName"
// //                       required
// //                       variant="outlined"
// //                       onChange={handleOnChange}
// //                       value={formValues.quoteLastName}
// //                     />
// //                     {/* <MuiPhoneNumber defaultCountry={"us"} /> */}

// //                     {console.log(formik)}

// //                     <TextField
// //                       label="Address Line 1"
// //                       name="quoteAddressLine1"
// //                       required
// //                       variant="outlined"
// //                       onChange={handleOnChange}
// //                       value={formValues.quoteAddressLine1}
// //                     />

// //                     <TextField
// //                       label="Address Line 2"
// //                       name="quoteAddressLine2"
// //                       required
// //                       variant="outlined"
// //                       onChange={handleOnChange}
// //                       value={formValues.quoteAddressLine2}
// //                     />

// //                     <TextField
// //                       label="City"
// //                       name="quoteCity"
// //                       required
// //                       variant="outlined"
// //                       onChange={handleOnChange}
// //                       value={formValues.quoteCity}
// //                     />

// //                     <TextField
// //                       label="Postcode"
// //                       name="quotePostcode"
// //                       required
// //                       variant="outlined"
// //                       onChange={handleOnChange}
// //                       value={formValues.quotePostcode}
// //                     />

// //                     <TextField
// //                       label="Mobile"
// //                       name="quoteMobile"
// //                       required
// //                       variant="outlined"
// //                       onChange={handleOnChange}
// //                       value={formValues.quoteMobile}
// //                     />
// //                   </Grid>
// //                   <Grid item xs={4}>
// //                     <FormLabel component="legend">
// //                       What is the vehicle type?
// //                     </FormLabel>
// //                     <ToggleButtonGroup
// //                       color="primary"
// //                       value={formValues.quoteVehicleType}
// //                       exclusive
// //                       onChange={handleChange}
// //                     >
// //                       <ToggleButton value="Cabriolet">Cabriolet</ToggleButton>
// //                       <ToggleButton value="Coupe">Coupe</ToggleButton>
// //                       <ToggleButton value="Estate">Estate</ToggleButton>
// //                       <ToggleButton value="Hatchback">Hatchback</ToggleButton>
// //                       <ToggleButton value="Other">Other</ToggleButton>
// //                     </ToggleButtonGroup>
// //                     <FormLabel component="legend">
// //                       What is the engine size (cc) of the vehicle?
// //                     </FormLabel>
// //                     <Slider
// //                       aria-label="Restricted values"
// //                       valueLabelFormat={valueLabelFormat}
// //                       getAriaValueText={valuetext}
// //                       step={null}
// //                       marks={marks}
// //                       max={3000}
// //                       min={1000}
// //                       onChange={handleOnChange}
// //                       name="quoteEngineSize"
// //                     />
// //                     <FormLabel component="legend">
// //                       How many additional drivers will use the vehicle?
// //                     </FormLabel>
// //                     <ToggleButtonGroup
// //                       color="primary"
// //                       value={alignment}
// //                       exclusive
// //                       onChange={handleChange}
// //                     >
// //                       <ToggleButton value="None">None</ToggleButton>
// //                       <ToggleButton value="One">One</ToggleButton>
// //                       <ToggleButton value="Two">Two</ToggleButton>
// //                       <ToggleButton value="Three">Three</ToggleButton>
// //                       <ToggleButton value="Four">Four</ToggleButton>
// //                     </ToggleButtonGroup>

// //                     <FormControl component="fieldset">
// //                       <FormLabel component="legend">
// //                         Will the vehicle be used for commercial purposes?
// //                       </FormLabel>
// //                       <RadioGroup
// //                         onChange={handleOnChange}
// //                         row
// //                         name="quoteIsCommercial"
// //                         value={formValues.quoteIsCommercial}
// //                       >
// //                         <FormControlLabel
// //                           value="Yes"
// //                           onChange={handleOnChange}
// //                           control={<Radio />}
// //                           label="Yes"
// //                         />
// //                         <FormControlLabel
// //                           value="No"
// //                           onChange={handleOnChange}
// //                           control={<Radio />}
// //                           label="No"
// //                         />
// //                       </RadioGroup>
// //                     </FormControl>

// //                     <FormControl component="fieldset">
// //                       <FormLabel component="legend">
// //                         Will the vehicle be used outside the registered state?
// //                       </FormLabel>
// //                       <RadioGroup
// //                         onChange={handleOnChange}
// //                         row
// //                         name="quoteIsRegistered"
// //                         value={formValues.quoteIsRegistered}
// //                       >
// //                         <FormControlLabel
// //                           value="Yes"
// //                           control={<Radio />}
// //                           label="Yes"
// //                         />
// //                         <FormControlLabel
// //                           value="No"
// //                           control={<Radio />}
// //                           label="No"
// //                         />
// //                       </RadioGroup>
// //                     </FormControl>
// //                     <FormLabel component="legend">
// //                       What is the current value of the vehicle?
// //                     </FormLabel>
// //                     <Slider
// //                       defaultValue={0}
// //                       aria-label="Small"
// //                       valueLabelDisplay="on"
// //                       marks={valueMarks}
// //                       step={100}
// //                       max={50000}
// //                       onChange={handleOnChange}
// //                       name="quoteVehicleValue"
// //                     />
// //                     <FormLabel component="legend">
// //                       What date was the vehicle first registered?
// //                     </FormLabel>
// //                     {/* <FormControl>
// //                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
// //                   <KeyboardDatePicker
// //                     variant="inline"
// //                     format="MM/dd/yyyy"
// //                     margin="normal"
// //                     id="date-picker-inline"
// //                     label="Date picker inline"
// //                     value={selectedDate}
// //                     onChange={handleDateChange}
// //                     KeyboardButtonProps={{
// //                       "aria-label": "change date",
// //                     }}
// //                   />
// //                 </MuiPickersUtilsProvider>
// //               </FormControl> */}
// //                     <FormControl sx={{ m: 1, minWidth: 120 }}>
// //                       <Select
// //                         value={age}
// //                         onChange={handleChange1}
// //                         displayEmpty
// //                         inputProps={{ "aria-label": "Without label" }}
// //                       >
// //                         <MenuItem value="">
// //                           <em>01</em>
// //                         </MenuItem>
// //                       </Select>
// //                       <FormHelperText>Day</FormHelperText>
// //                     </FormControl>
// //                     <FormControl sx={{ m: 1, minWidth: 120 }}>
// //                       <Select
// //                         value={age}
// //                         onChange={handleChange}
// //                         displayEmpty
// //                         inputProps={{ "aria-label": "Without label" }}
// //                       >
// //                         <MenuItem value="">
// //                           <em>05</em>
// //                         </MenuItem>
// //                       </Select>
// //                       <FormHelperText>Month</FormHelperText>
// //                     </FormControl>
// //                     <FormControl sx={{ m: 1, minWidth: 120 }}>
// //                       <Select
// //                         value={age}
// //                         onChange={handleChange1}
// //                         displayEmpty
// //                         inputProps={{ "aria-label": "Without label" }}
// //                       >
// //                         <MenuItem value="">
// //                           <em>1998</em>
// //                         </MenuItem>
// //                       </Select>
// //                       <FormHelperText>Year</FormHelperText>
// //                     </FormControl>
// //                   </Grid>
// //                   <Button
// //                     className="button"
// //                     variant="contained"
// //                     onClick={callMockAPI}
// //                     type="submit"
// //                   >
// //                     Submit Quote
// //                   </Button>
// //                 </Grid>
// //               </Form>
// //             )}
// //           </Formik>
// //         </Box>
// //       </div>
// //     </div>
// //   );
// // }

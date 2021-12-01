import React from "react";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Alert from "@mui/material/Alert";
import PersonalDetailsForm from "../PersonalDetailsForm/PersonalDetailsForm";
import "./Create.css";
import QuoteConfirmation from "../QuoteConfirmation/QuoteConfirmation";
import Title from "../Admin/Title";
import Typography from "@mui/material/Typography";

const validate = yup.object({
  quotePrefix: yup.string().required("Required"),
  quoteFirstName: yup
    .string()
    .required("Required")
    .max(20, "Must be 20 characters or less"),
  quoteLastName: yup
    .string()
    .required("Required")
    .max(20, "Must be 20 characters or less"),
  quoteMobile: yup.string().required("Required"),
  quoteAddressLine1: yup.string().required("First line of address is required"),
  quoteAddressLine2: yup.string().required(),
  quoteCity: yup.string().required("City is required"),
  quotePostcode: yup.string().required("Postcode is required"),

  quoteVehicleType: yup.string().required("Please select vehicle type"),
  quoteEngineSize: yup.number().required(),
  quoteIsCommercial: yup.string().required(),
  quoteIsRegistered: yup.string().required(),
  quoteVehicleValue: yup.string().required(),
  quoteRegistrationDate: yup.date().required(),
  quoteNoAdditionalDrivers: yup
    .string()
    .required("Number of additional drivers is required"),
});

export default function Create({ childToParent }) {
  const [value, setValue] = React.useState(new Date("2021-08-18T21:11:54"));
  const marks = [
    {
      value: 1000,
      label: "1000",
    },
    {
      value: 1600,
      label: "1600",
    },
    {
      value: 2000,
      label: "2000",
    },
    {
      value: 2500,
      label: "2500",
    },
    {
      value: 3000,
      label: "3000",
    },
    {
      value: 3500,
      label: "Other",
    },
  ];

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [isSuccess, setIsSuccess] = React.useState(false);

  const callMockAPI = (values) => {
    const endpointURL = "http://localhost:8081/quotes";
    // const endpointURL = "https://6150fecbd0a7c100170168dd.mockapi.io/quotes";

    axios
      .post(endpointURL, values)
      .then(() => childToParent(formik.values))
      .catch(() => setIsSuccess(false));
  };

  const formik = useFormik({
    initialValues: {
      quotePrefix: "",
      quoteFirstName: "",
      quoteLastName: "",
      quoteMobile: "",
      quoteAddressLine1: "",
      quoteAddressLine2: "",
      quoteCity: "",
      quotePostcode: "",
      quoteVehicleType: "",
      quoteEngineSize: null,
      quoteIsCommercial: "",
      quoteIsRegistered: "",
      quoteVehicleValue: null,
      quoteRegistrationDate: new Date("2014-08-18T21:11:54"),
      quoteNoAdditionalDrivers: "",
    },
    validationSchema: validate,

    onChange: (values) => {
      childToParent(values);
      console.log(values);
    },
    onSubmit: (values) => {
      callMockAPI(values);
      console.log(values);

      childToParent(values);
    },
  });

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Title>Get Insurance Quote</Title>
          <Typography color="text.secondary">
            Please complete the form below with your personal and vehicle
            details to get an affordable quote in seconds.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <ToggleButtonGroup
            color="primary"
            exclusive
            onChange={formik.handleChange}
          >
            <ToggleButton name="quotePrefix" value="Mr">
              Mr
            </ToggleButton>
            <ToggleButton name="quotePrefix" value="Mrs">
              Mrs
            </ToggleButton>
            <ToggleButton name="quotePrefix" value="Miss">
              Miss
            </ToggleButton>
            <ToggleButton name="quotePrefix" value="Ms">
              Ms
            </ToggleButton>
            {/* <div>Picked: {formik.values.quotePrefix}</div> */}
          </ToggleButtonGroup>
        </Grid>
        <Grid item xs={4}>
          <TextField
            name="quoteFirstName"
            color="secondary"
            className="text"
            required
            fullWidth
            label="First Name"
            variant="standard"
            value={formik.values.quoteFirstName}
            onChange={formik.handleChange}
            error={
              formik.touched.quoteFirstName &&
              Boolean(formik.errors.quoteFirstName)
            }
            helperText={
              formik.touched.quoteFirstName && formik.errors.quoteFirstName
            }
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Last Name"
            name="quoteLastName"
            className="text"
            fullWidth
            required
            variant="standard"
            value={formik.values.quoteLastName}
            onChange={formik.handleChange}
            error={
              formik.touched.quoteLastName &&
              Boolean(formik.errors.quoteLastName)
            }
            helperText={
              formik.touched.quoteLastName && formik.errors.quoteLastName
            }
          />
        </Grid>

        {/* {console.log(formik.values)} */}
        <Grid item xs={12}>
          <TextField
            label="Address Line 1"
            name="quoteAddressLine1"
            className="text"
            fullWidth
            required
            variant="standard"
            value={formik.values.quoteAddressLine1}
            onChange={formik.handleChange}
            error={
              formik.touched.quoteAddressLine1 &&
              Boolean(formik.errors.quoteAddressLine1)
            }
            helperText={
              formik.touched.quoteAddressLine1 &&
              formik.errors.quoteAddressLine1
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address Line 2"
            name="quoteAddressLine2"
            fullWidth
            required
            className="text"
            variant="standard"
            value={formik.values.quoteAddressLine2}
            onChange={formik.handleChange}
            error={
              formik.touched.quoteAddressLine2 &&
              Boolean(formik.errors.quoteAddressLine2)
            }
            helperText={
              formik.touched.quoteAddressLine2 &&
              formik.errors.quoteAddressLine2
            }
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="City"
            className="text"
            name="quoteCity"
            fullWidth
            required
            variant="standard"
            value={formik.values.quoteCity}
            onChange={formik.handleChange}
            error={formik.touched.quoteCity && Boolean(formik.errors.quoteCity)}
            helperText={formik.touched.quoteCity && formik.errors.quoteCity}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Postcode"
            name="quotePostcode"
            fullWidth
            required
            className="text"
            variant="standard"
            value={formik.values.quotePostcode}
            onChange={formik.handleChange}
            error={
              formik.touched.quotePostcode &&
              Boolean(formik.errors.quotePostcode)
            }
            helperText={
              formik.touched.quotePostcode && formik.errors.quotePostcode
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Mobile"
            name="quoteMobile"
            fullWidth
            required
            variant="standard"
            value={formik.values.quoteMobile}
            onChange={formik.handleChange}
            error={
              formik.touched.quoteMobile && Boolean(formik.errors.quoteMobile)
            }
            helperText={formik.touched.quoteMobile && formik.errors.quoteMobile}
          />
        </Grid>
        <Grid item xs={12}>
          <FormLabel component="legend">What is the vehicle type?</FormLabel>
        </Grid>
        <Grid item xs={8}>
          <ToggleButtonGroup
            color="primary"
            exclusive
            value="None"
            onChange={formik.handleChange}
          >
            <ToggleButton name="quoteVehicleType" value="Cabriolet">
              Cabriolet
            </ToggleButton>
            <ToggleButton name="quoteVehicleType" value="Coupe">
              Coupe
            </ToggleButton>
            <ToggleButton name="quoteVehicleType" value="Estate">
              Estate
            </ToggleButton>
            <ToggleButton name="quoteVehicleType" value="Hatchback">
              Hatchback
            </ToggleButton>
            <ToggleButton name="quoteVehicleType" value="Other">
              Other
            </ToggleButton>
            {/* <div>Picked: {formik.values.quoteVehicleType}</div> */}
          </ToggleButtonGroup>
        </Grid>

        <Grid item xs={12}>
          What is the engine size (cc) of the vehicle?
        </Grid>
        <Grid item xs={12}>
          <Slider
            aria-label="Restricted values"
            step={null}
            marks={marks}
            max={3500}
            min={1000}
            onChange={formik.handleChange}
            name="quoteEngineSize"
          />
          {/* <div>Picked: {formik.values.quoteEngineSize}</div> */}
        </Grid>
        <Grid item xs={8}>
          <FormLabel component="legend">
            How many additional drivers will use the vehicle?
          </FormLabel>
        </Grid>
        <Grid item xs={4}>
          <ToggleButtonGroup
            color="primary"
            // value={alignment}
            exclusive
            onChange={formik.handleChange}
          >
            <ToggleButton name="quoteNoAdditionalDrivers" value="0">
              0
            </ToggleButton>
            <ToggleButton name="quoteNoAdditionalDrivers" value="1">
              1
            </ToggleButton>
            <ToggleButton name="quoteNoAdditionalDrivers" value="2">
              2
            </ToggleButton>
            <ToggleButton name="quoteNoAdditionalDrivers" value="3">
              3
            </ToggleButton>
            <ToggleButton name="quoteNoAdditionalDrivers" value="4">
              4
            </ToggleButton>

            {/* <div>Picked: {formik.values.quoteNoAdditionalDrivers}</div> */}
          </ToggleButtonGroup>
        </Grid>
        <Grid item xs={8}>
          <FormLabel component="legend">
            Will the vehicle be used for commercial purposes?
          </FormLabel>
        </Grid>

        <Grid item xs={4}>
          <FormControl component="fieldset">
            <RadioGroup
              onChange={formik.handleChange}
              row
              name="quoteIsCommercial"
              // value={formValues.quoteIsCommercial}
            >
              <FormControlLabel
                value="Yes"
                // onChange={handleOnChange}
                control={<Radio />}
                label="Yes"
              />
              <FormControlLabel
                value="No"
                // onChange={handleOnChange}
                control={<Radio />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
          {/* <div>Picked: {formik.values.quoteIsCommercial}</div> */}
        </Grid>
        <Grid item xs={8}>
          <FormLabel component="legend">
            Will the vehicle be used outside the reg. state?
          </FormLabel>
        </Grid>

        <Grid item xs={4}>
          <FormControl component="fieldset">
            <RadioGroup
              onChange={formik.handleChange}
              row
              name="quoteIsRegistered"
              // value={formValues.quoteIsRegistered}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            {/* <div>Picked: {formik.values.quoteIsRegistered}</div> */}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormLabel component="legend">
            What is the current value of the vehicle? ($)
          </FormLabel>
        </Grid>
        <Grid item xs={12}>
          <Slider
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="on"
            // marks={valueMarks}
            step={100}
            max={50000}
            onChange={formik.handleChange}
            name="quoteVehicleValue"
          />
          {/* <div>Picked: {formik.values.quoteVehicleValue}</div> */}
        </Grid>
        <Grid item xs={6}>
          <FormLabel component="legend">
            What date was the vehicle first registered?
          </FormLabel>
        </Grid>

        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        {/* </Form> */}
        <Grid item xs={12}>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                sx={{ mt: 3, ml: 1 }}
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
              >
                Calculate Quote
              </Button>
            </Box>
          </form>
        </Grid>

        <Grid item xs={12}>
          {isSuccess && (
            <Alert variant="filled" severity="success">
              Alert! Quote Has Been Successfully Created.
            </Alert>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

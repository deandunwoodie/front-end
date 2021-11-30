import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Form } from "semantic-ui-react";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import "./Update.css";
// import MuiPhoneNumber from "material-ui-phone-number";
export default function Update() {
  const history = useHistory();

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [userID, setID] = useState(null);

  const [alignment, setAlignment] = React.useState("web");
  const [age, setAge] = React.useState("");

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };
  function valuetext(value) {
    return `${value}°C`;
  }
  const marks = [
    {
      value: 1000,
      label: "1000",
    },
    {
      value: 1200,
      label: "1200",
    },
    {
      value: 1400,
      label: "1400",
    },
    {
      value: 1600,
      label: "1600",
    },
    {
      value: 1800,
      label: "1800",
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
  ];

  const valueMarks = [
    {
      value: 0,
      label: "$0",
    },
    {
      value: 50000,
      label: "$50,000",
    },
  ];

  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const callMockAPI = () => {
    console.log(firstName);
    console.log(lastName);

    const endpointURL = `https://6150fecbd0a7c100170168dd.mockapi.io/quotes/${userID}`;

    const userDetails = { firstName: firstName, lastName: lastName };

    axios
      .put(endpointURL, userDetails)
      .then(() => history.push("/read"))
      .catch((response) => console.log(response));
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setID(localStorage.getItem("userID"));
  }, []);

  return (
    <div className="pad">
      <div>
        <Box className="box" sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={2}>
              <Form.Field className="text">
                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                >
                  <ToggleButton value="Mr">Mr</ToggleButton>
                  <ToggleButton value="Mrs">Mrs</ToggleButton>
                  <ToggleButton value="Miss">Miss</ToggleButton>

                  <ToggleButton value="Ms">Ms</ToggleButton>
                </ToggleButtonGroup>
              </Form.Field>

              <Form.Field className="text">
                <TextField
                  color="secondary"
                  className="text"
                  required
                  label="First Name"
                  variant="outlined"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </Form.Field>

              <Form.Field className="text">
                <TextField
                  label="Last Name"
                  required
                  variant="outlined"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </Form.Field>
              {/* <MuiPhoneNumber defaultCountry={"us"} /> */}
              <Form.Field className="text">
                <TextField
                  label="Mobile"
                  required
                  variant="outlined"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Field>
            </Grid>
            <Grid item xs={4}>
              <FormLabel component="legend">
                What is the vehicle type?
              </FormLabel>
              <Form.Field className="text">
                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                >
                  <ToggleButton value="Cabriolet">Cabriolet</ToggleButton>
                  <ToggleButton value="Coupe">Coupe</ToggleButton>
                  <ToggleButton value="Estate">Estate</ToggleButton>
                  <ToggleButton value="Hatchback">Hatchback</ToggleButton>
                  <ToggleButton value="Other">Other</ToggleButton>
                </ToggleButtonGroup>
              </Form.Field>
              <FormLabel component="legend">
                What is the engine size (cc) of the vehicle?
              </FormLabel>
              <Form.Field>
                <Slider
                  aria-label="Restricted values"
                  defaultValue={20}
                  valueLabelFormat={valueLabelFormat}
                  getAriaValueText={valuetext}
                  step={null}
                  marks={marks}
                  max={3000}
                  min={1000}
                />
              </Form.Field>
              <FormLabel component="legend">
                How many additional drivers will use the vehicle?
              </FormLabel>
              <Form.Field className="text">
                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                >
                  <ToggleButton value="None">None</ToggleButton>
                  <ToggleButton value="One">One</ToggleButton>
                  <ToggleButton value="Two">Two</ToggleButton>
                  <ToggleButton value="Three">Three</ToggleButton>
                  <ToggleButton value="Four">Four</ToggleButton>
                </ToggleButtonGroup>
              </Form.Field>

              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Will the vehicle be used for commercial purposes?
                </FormLabel>
                <RadioGroup row name="row-radio-buttons-group">
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Will the vehicle be used outside the registered state?
                </FormLabel>
                <RadioGroup row name="row-radio-buttons-group">
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
              <FormLabel component="legend">
                What is the current value of the vehicle?
              </FormLabel>
              <Form.Field className="text">
                <Slider
                  defaultValue={0}
                  aria-label="Small"
                  valueLabelDisplay="on"
                  marks={valueMarks}
                  step={100}
                  max={50000}
                />
              </Form.Field>
              <FormLabel component="legend">
                What date was the vehicle first registered?
              </FormLabel>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={age}
                  onChange={handleChange1}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>01</em>
                  </MenuItem>
                </Select>
                <FormHelperText>Day</FormHelperText>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>05</em>
                  </MenuItem>
                </Select>
                <FormHelperText>Month</FormHelperText>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={age}
                  onChange={handleChange1}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>1998</em>
                  </MenuItem>
                </Select>
                <FormHelperText>Year</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Form className="text">
          <Button variant="contained" onClick={callMockAPI} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

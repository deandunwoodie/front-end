import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Details from "../Details/Details";
import Title from "./Title";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Form } from "semantic-ui-react";
import Alert from "@mui/material/Alert";

export default function Read() {
  const [tableData, setTableData] = useState([]);
  const [driverID, setDriverID] = useState([]);
  const [quoteMobile, setQuoteMobile] = useState([]);

  const [telephoneNumber, setTelephoneNumber] = useState([]);

  const hide = (action) => () => setState(action);

  const onDelete = (userID) => {
    const endpointURL = `https://6150fecbd0a7c100170168dd.mockapi.io/quotes/${driverID}`;
    axios
      .delete(endpointURL)
      .then(() => deleteAlert())
      .catch((err) => {
        console.log(err);
      });
  };

  const putRequest = () => {
    const endpointURL = `https://6150fecbd0a7c100170168dd.mockapi.io/quotes/${driverID}`;
    console.log(endpointURL);

    const mobile = { quoteMobile: quoteMobile };
    axios
      .put(endpointURL, mobile)
      .then((response) => {
        if (response.status === 200) {
          setIsMobileUpdatedSuccess(true);
        }
      })
      .catch(setIsMobileUpdatedSuccess(true));
  };

  function deleteAlert() {
    return (
      <Alert severity="success">
        Driver {driverID} has been successfully deleted!
      </Alert>
    );
  }
  const [isSuccess, setIsSuccess] = React.useState(true);
  const [isMobileUpdatedSuccess, setIsMobileUpdatedSuccess] =
    React.useState(false);

  const [isShown, setIsShown] = React.useState(false);

  function callMockAPI() {
    const endpointURL = `https://6150fecbd0a7c100170168dd.mockapi.io/quotes/${driverID}`;
    // const endpointURL = `http://localhost:8080/quotes/${driverID}`;

    axios
      .get(endpointURL)
      .then((response) => {
        if (response.status === 200) {
          setIsShown(true);
          setIsSuccess(true);

          setTableData(response.data);
        }
      })

      .catch(() => {
        setIsSuccess(false);
        setIsShown(false);
      });
  }
  const [option, setOption] = useState([]);

  const handleChange1 = (event) => {
    setOption(event.target.value);
  };

  const handleDriverID = (event) => {
    setDriverID(event.target.value);
  };

  const handleMobile = (event) => {
    setQuoteMobile(event.target.value);
  };

  const handleTelephoneNumber = (event) => {
    setTelephoneNumber(event.target.value);
  };

  function setLocalStorage(data) {
    localStorage.setItem("selectedQuote", JSON.stringify(data));
  }

  const [state, setState] = useState("start");

  return (
    <div>
      <Title>Quote Lookup</Title>

      <Grid item xs={8}>
        <Typography color="text.secondary">Search for a quote by:</Typography>
        <RadioGroup
          row
          name="quoteIsCommercial"
          // value={formValues.quoteIsCommercial}
        >
          <FormControlLabel
            value="quoteID"
            // onChange={handleOnChange}
            control={<Radio />}
            label="Quote ID"
          />
          <FormControlLabel
            value="quoteFirstName"
            // onChange={handleOnChange}
            control={<Radio />}
            label="First Name"
          />
          <FormControlLabel
            value="quoteLastName"
            // onChange={handleOnChange}
            control={<Radio />}
            label="Last Name"
          />
          <FormControlLabel
            value="quoteVehicleType"
            // onChange={handleOnChange}
            control={<Radio />}
            label="Vehicle Type"
          />
        </RadioGroup>
      </Grid>
      <Box className="box" sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid>
            <Stack spacing={3} direction="row">
              <FormControl sx={{ m: 1, minWidth: 270 }} error>
                <InputLabel>Action</InputLabel>
                <Select value={option} onChange={handleChange1} label="Action">
                  <MenuItem onClick={hide("view")} value="view">
                    <em>View Driver Details</em>
                  </MenuItem>
                  <MenuItem onClick={hide("update")} value="update">
                    <em>Update Driver Telephone</em>
                  </MenuItem>
                  <MenuItem onClick={hide("delete")} value="delete">
                    <em>Delete Driver</em>
                  </MenuItem>
                </Select>
              </FormControl>

              {state === "view" && (
                <div>
                  <Stack spacing={3} direction="row">
                    <Form.Field className="text">
                      <TextField
                        name="quoteID"
                        color="secondary"
                        className="text"
                        required
                        label="Driver ID"
                        variant="outlined"
                        onChange={handleDriverID}
                        // onChange={handleOnChange}
                        // value={formValues.quoteFirstName}
                      />
                    </Form.Field>
                    <Button onClick={callMockAPI} variant="contained">
                      View
                    </Button>
                  </Stack>
                </div>
              )}
              {state === "update" && (
                <div>
                  <Stack spacing={2} direction="row">
                    <Form.Field className="text">
                      <TextField
                        name="quoteID"
                        color="secondary"
                        className="text"
                        required
                        label="Driver ID"
                        variant="outlined"
                        onChange={handleDriverID}
                        // onChange={handleOnChange}
                        // value={formValues.quoteFirstName}
                      />
                    </Form.Field>

                    <Form.Field className="text">
                      <TextField
                        name="quoteID"
                        color="secondary"
                        className="text"
                        required
                        label="Telephone Number"
                        variant="outlined"
                        onChange={handleMobile}
                        // onChange={handleOnChange}
                        // value={formValues.quoteFirstName}
                      />
                    </Form.Field>

                    <Button onClick={putRequest} variant="contained">
                      Update
                    </Button>
                  </Stack>
                </div>
              )}
              {state === "delete" && (
                <div>
                  <Stack spacing={2} direction="row">
                    <Form.Field className="text">
                      <TextField
                        name="quoteID"
                        color="secondary"
                        className="text"
                        required
                        label="Driver ID"
                        variant="outlined"
                        onChange={handleDriverID}
                        // onChange={handleOnChange}
                        // value={formValues.quoteFirstName}
                      />
                    </Form.Field>

                    <Button
                      onClick={() => onDelete(driverID)}
                      variant="contained"
                    >
                      Delete
                    </Button>
                  </Stack>
                </div>
              )}
            </Stack>
            {!isSuccess && (
              <Alert variant="filled" severity="error">
                Error! No driver exists with the ID you have entered.
              </Alert>
            )}
            {isMobileUpdatedSuccess && (
              <Alert variant="filled" severity="success">
                Success! Telephone number has been updated.
              </Alert>
            )}
          </Grid>
        </Grid>

        {isShown && (
          <div>
            <Details data={tableData} />
          </div>
        )}
      </Box>
    </div>
  );
}

import axios from "axios";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Title from "./Title";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Details from "../Details/Details";
import { Form } from "semantic-ui-react";
export default function Chart() {
  const [tableData, setTableData] = useState([]);
  const [driverID, setDriverID] = useState([]);
  const [quoteMobile, setQuoteMobile] = useState([]);
  const [isSuccess, setIsSuccess] = React.useState(true);
  const [isDeleted, setIsDeleted] = React.useState(false);
  const [isMobileUpdatedSuccess, setIsMobileUpdatedSuccess] =
    React.useState(false);

  const [isShown, setIsShown] = React.useState(false);

  const onDelete = (userID) => {
    // const endpointURL = `https://6150fecbd0a7c100170168dd.mockapi.io/quotes/${driverID}`;
    const endpointURL = `http://localhost:8081/quotes/${driverID}`;
    axios
      .delete(endpointURL)
      .then((response) => {
        if (response.status === 200) {
          setIsShown(false);
          setIsDeleted(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hide = (action) => () => setState(action);

  const putRequest = () => {
    // const endpointURL = `https://6150fecbd0a7c100170168dd.mockapi.io/quotes/${driverID}`;
    const endpointURL = `http://localhost:8081/quotes/${driverID}`;
    console.log(endpointURL);

    const mobile = { quoteMobile: quoteMobile };

    axios
      .put(endpointURL, mobile)
      .then((response) => {
        if (response.status === 200) {
          setIsMobileUpdatedSuccess(true);
          setIsShown(false);
          setState("view");
        }
      })
      .catch(setIsMobileUpdatedSuccess(false));
  };

  function callMockAPI() {
    // const endpointURL = `https://6150fecbd0a7c100170168dd.mockapi.io/quotes/${driverID}`;
    const endpointURL = `http://localhost:8081/quotes/${driverID}`;

    axios
      .get(endpointURL)
      .then((response) => {
        if (response.status === 200) {
          setIsShown(true);
          setIsSuccess(true);
          setIsDeleted(false);
          setIsMobileUpdatedSuccess(false);
          setTableData(response.data);
          setState("view");
          console.log("hello");
        }
      })

      .catch(() => {
        setIsSuccess(false);
        setIsMobileUpdatedSuccess(false);
        setIsShown(false);
        setIsDeleted(false);
      });
  }

  const handleDriverID = (event) => {
    setDriverID(event.target.value);
  };

  const handleMobile = (event) => {
    setQuoteMobile(event.target.value);
  };

  const [state, setState] = useState("start");

  return (
    <React.Fragment>
      <Title>Quote Lookup</Title>

      <Grid item xs={12}>
        <Typography color="text.secondary">
          View, update contact details and cancel quotes using Quote ID:
        </Typography>
        <Grid item xs={12}>
          <Form.Field className="text">
            <TextField
              name="quoteID"
              className="text"
              required
              label="Quote ID"
              variant="standard"
              onChange={handleDriverID}
            />
            <Button
              onClick={callMockAPI}
              fullWidth
              color="info"
              variant="contained"
              sx={{ mt: 3 }}
            >
              Search
            </Button>
          </Form.Field>
        </Grid>
        {!isSuccess && (
          <Alert variant="filled" severity="error">
            Error! No quote exists with the ID you have entered. Try again..
          </Alert>
        )}
        {isDeleted && (
          <Alert variant="filled" severity="success">
            Success! Quote has been deleted.
          </Alert>
        )}
        {isMobileUpdatedSuccess && (
          <Alert variant="filled" severity="success">
            Success! Telephone number has been updated.
          </Alert>
        )}
      </Grid>

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
              />
            </Form.Field>

            <Button onClick={() => onDelete(driverID)} variant="contained">
              Delete
            </Button>
          </Stack>
        </div>
      )}

      {isShown && (
        <div>
          <Details data={tableData} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {state !== "update" && (
                <Button
                  fullWidth
                  onClick={hide("update")}
                  color="success"
                  sx={{ mt: 3 }}
                  variant="contained"
                >
                  Edit Telephone Number
                </Button>
              )}
              {state === "update" && (
                <React.Fragment>
                  <Form.Field className="text">
                    <TextField
                      name="quoteID"
                      sx={{ mt: 3 }}
                      color="secondary"
                      className="text"
                      required
                      label="Telephone Number"
                      variant="outlined"
                      onChange={handleMobile}
                    />
                    <Button
                      onClick={putRequest}
                      fullWidth
                      color="success"
                      variant="contained"
                    >
                      Update
                    </Button>
                  </Form.Field>
                </React.Fragment>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                onClick={() => onDelete(driverID)}
                color="error"
                sx={{ mt: 3 }}
                variant="contained"
              >
                Delete Quote
              </Button>
            </Grid>
          </Grid>
        </div>
      )}
    </React.Fragment>
  );
}

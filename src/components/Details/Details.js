import React from "react";
import Title from "../Admin/Title";

import CurrencyFormat from "react-currency-format";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PublicIcon from "@mui/icons-material/Public";
import PublicOffIcon from "@mui/icons-material/PublicOff";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
export default function Details(props) {
  console.log("from details");
  console.log(props);

  return (
    <div>
      <React.Fragment>
        <Card>
          <CardContent>
            <Title>Quote #{props.data.quoteID} </Title>
            <Typography component="p" variant="h4">
              {`${props.data.quotePrefix} ${props.data.quoteFirstName} ${props.data.quoteLastName}`}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              {`${props.data.quoteAddressLine1}, ${props.data.quoteAddressLine2}, ${props.data.quoteCity}, ${props.data.quotePostcode}`}
            </Typography>

            <Chip
              icon={<DirectionsCarIcon />}
              label={` ${props.data.quoteVehicleType}, ${props.data.quoteEngineSize}cc, $${props.data.quoteVehicleValue}`}
              color="primary"
            />

            <Chip
              icon={<DirectionsCarIcon />}
              label={` ${props.data.quoteNoAdditionalDrivers} Additional Drivers`}
              color="secondary"
            />
            {props.data.quoteIsRegistered === "Yes" && (
              <Chip
                icon={<PublicIcon />}
                label="Registered Outside State"
                color="success"
              />
            )}
            {props.data.quoteIsRegistered === "No" && (
              <Chip
                icon={<PublicOffIcon />}
                label="Not Registered Outside State"
                color="error"
              />
            )}

            {props.data.quoteIsCommercial === "Yes" && (
              <Chip
                icon={<AirportShuttleIcon />}
                label="Commercial Use"
                color="success"
              />
            )}
            {props.data.quoteIsCommercial === "No" && (
              <Chip
                icon={<DoNotDisturbIcon />}
                label="No Commercial Use"
                color="error"
              />
            )}

            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Quote Cost</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="right">
                    ${`${props.data.quoteTotalCost}`}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </React.Fragment>
    </div>
  );
}

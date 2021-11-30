import React from "react";
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
export default function Details(props) {
  console.log("from details");
  console.log(props);

  return (
    <div>
      <React.Fragment>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Quote ID</TableCell>
              <TableCell>Legal Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Vehicle</TableCell>

              <TableCell align="right">Quote Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{props.data.quoteID} </TableCell>
              <TableCell>
                {`${props.data.quotePrefix} ${props.data.quoteFirstName} ${props.data.quoteLastName}`}
              </TableCell>
              <TableCell>
                {`${props.data.quoteAddressLine1}, ${props.data.quoteAddressLine2}, ${props.data.quotePostcode}`}
              </TableCell>
              <TableCell>{`${props.data.quoteVehicleType}, ${props.data.quoteEngineSize}cc`}</TableCell>

              <TableCell align="right">FIX THIS</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {/* <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Quote #{props.data.quoteID}
              </Typography>
              <Typography variant="h5" component="div">
                {props.data.quotePrefix} {props.data.quoteFirstName}{" "}
                {props.data.quoteLastName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.data.quoteAddressLine1},
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box> */}
      </React.Fragment>

      {/* <FormLabel component="legend">Driver Details</FormLabel>
      <FormLabel>
        {props.data.quotePrefix} {props.data.quoteFirstName}{" "}
        {props.data.quoteLastName}
      </FormLabel>

      <FormLabel component="legend">{props.data.quoteAddressLine1},</FormLabel>

      <FormLabel component="legend">{props.data.quoteAddressLine2},</FormLabel>

      <FormLabel component="legend">{props.data.quoteCity},</FormLabel>

      <FormLabel component="legend">{props.data.quotePostcode}</FormLabel>

      <FormLabel component="legend">{props.data.quoteMobile}</FormLabel>

      <FormLabel component="legend">Additional Drivers:</FormLabel>

      <FormLabel component="legend">
        Commercial Use? {props.data.quoteIsCommercial}
      </FormLabel>
      <FormLabel component="legend">
        Registered Outside State? {props.data.quoteIsRegistered}
      </FormLabel>
      <FormLabel component="legend">
        Vehicle Engine Size: {props.data.quoteEngineSize}cc
      </FormLabel>
      <FormLabel component="legend">
        Vehicle Value:
        <CurrencyFormat
          value={props.data.quoteVehicleValue}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </FormLabel> */}
    </div>
  );
}

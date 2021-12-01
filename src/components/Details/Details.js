import React from "react";
import Title from "../Admin/Title";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PublicIcon from "@mui/icons-material/Public";
import PublicOffIcon from "@mui/icons-material/PublicOff";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function Details(props) {
  return (
    <div>
      <React.Fragment>
        <Card>
          <CardContent style={{ backgroundColor: "LightSkyBlue" }}>
            <Title>Customer Insurance Quote #{props.data.quoteID} </Title>
            <Typography component="p" variant="h5">
              {`${props.data.quotePrefix} ${props.data.quoteFirstName} ${props.data.quoteLastName}`}
            </Typography>

            <Typography
              component="p"
              variant="h6"
              color="text.secondary"
              sx={{ flex: 1 }}
            >
              {`${props.data.quoteAddressLine1}, ${props.data.quoteAddressLine2}, ${props.data.quoteCity}, ${props.data.quotePostcode}`}
            </Typography>
            <Typography
              icon={<DirectionsCarIcon />}
              component="p"
              variant="h6"
              sx={{ flex: 1 }}
            >
              Tel: {props.data.quoteMobile}
            </Typography>

            <Chip
              sx={{ mr: 2, mt: 1 }}
              icon={<DirectionsCarIcon />}
              label={` ${props.data.quoteVehicleType}, ${props.data.quoteEngineSize}cc, $${props.data.quoteVehicleValue}`}
              color="info"
            />

            <Chip
              sx={{ mr: 2, mt: 1 }}
              icon={<PersonAddIcon />}
              label={` ${props.data.quoteNoAdditionalDrivers} Additional Drivers`}
              color="secondary"
            />
            {props.data.quoteIsRegistered === "Yes" && (
              <Chip
                sx={{ mr: 2, mt: 1 }}
                icon={<PublicIcon />}
                label="Registered Outside State"
                color="success"
              />
            )}
            {props.data.quoteIsRegistered === "No" && (
              <Chip
                sx={{ mr: 2, mt: 1 }}
                icon={<PublicOffIcon />}
                label="Not Registered Outside State"
                color="error"
              />
            )}

            {props.data.quoteIsCommercial === "Yes" && (
              <Chip
                sx={{ mr: 2, mt: 1 }}
                icon={<AirportShuttleIcon />}
                label="Commercial Use"
                color="success"
              />
            )}
            {props.data.quoteIsCommercial === "No" && (
              <Chip
                sx={{ mr: 2, mt: 1 }}
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

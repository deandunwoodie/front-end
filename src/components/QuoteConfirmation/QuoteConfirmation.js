import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

export default function QuoteConfirmation({ parentToChild }) {
  return (
    <React.Fragment>
      {console.log(parentToChild)}
      <Typography variant="h4" gutterBottom>
        Your Quote
      </Typography>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <List disablePadding>
        <ListItem key={parentToChild.quoteID} sx={{ py: 1, px: 0 }}>
          <ListItemText
            // primary={
            //   '${parentToChild.quoteFirstName} + parentToChild.quoteLastName'
            // }
            primary={`${parentToChild.quotePrefix} ${parentToChild.quoteFirstName} ${parentToChild.quoteLastName}`}
            secondary={`${parentToChild.quoteAddressLine1}, ${parentToChild.quoteAddressLine2}, ${parentToChild.quoteCity}, ${parentToChild.quotePostcode}`}
          />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        Vehicle Information
      </Typography>
      <List disablePadding>
        <ListItem key={parentToChild.quoteID} sx={{ py: 1, px: 0 }}>
          <ListItemText
            primary={`Audi A4 ${parentToChild.quoteVehicleType}`}
            secondary={`$${parentToChild.quoteVehicleValue}, ${parentToChild.quoteEngineSize} cc, Additional Drivers (${parentToChild.quoteNoAdditionalDrivers}), Commercial Use (${parentToChild.quoteIsCommercial}), Interstate Use (${parentToChild.quoteIsRegistered})`}
          />
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid> */}
    </React.Fragment>
  );
}

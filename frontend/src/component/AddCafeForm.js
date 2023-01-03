import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useState} from 'react';

function AddCafeForm() {

  return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Basic Info
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    // id="firstName"
                    // name="firstName"
                    label="Café Name"
                    fullWidth
                    variant="standard"
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    // id="lastName"
                    // name="lastName"
                    label="Phone Number"
                    fullWidth
                    variant="standard"
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    // id="city"
                    // name="city"
                    label="City"
                    fullWidth
                    variant="standard"
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    // id="state"
                    // name="state"
                    label="District"
                    fullWidth
                    variant="standard"
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    required
                    // id="address1"
                    // name="address1"
                    label="Address"
                    fullWidth
                    variant="standard"
                />
            </Grid>
        
            {/* <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                    variant="standard"
                />
            </Grid> */}

            {/* <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    autoComplete="shipping country"
                    variant="standard"
                />

            </Grid> */}
        </Grid>
    </React.Fragment>
  );
}
export default AddCafeForm;
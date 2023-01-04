import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useState} from 'react';

function AddCafeForm(props) {

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
                    onChange={(e) => {props.setCafeName(() => {props.cafeName = e.target.value})}}
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
                    onChange={(e) => {props.setPhoneNum(() => {props.phoneNum = e.target.value})}}
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
                    onChange={(e) => {props.setCity(() => {props.city = e.target.value})}}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    // id="state"
                    // name="state"
                    label="District"
                    fullWidth
                    variant="standard"
                    onChange={(e) => {props.setDistrict(() => {props.district = e.target.value})}}
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
                    onChange={(e) => {props.setAddress(() => {props.address = e.target.value})}}
                />
            </Grid>
        </Grid>
    </React.Fragment>
  );
}
export default AddCafeForm;
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




function ClientForm() {


  return (
    <>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
      		New Client Form
    	</Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="company"
                name="company"
                label="Company"
                fullWidth
                autoComplete="given-name"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="address"
                name="address"
                label="Address"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="zipcode"
                name="zipcode"
                label="Zip"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                variant="standard"
            />
            </Grid>
        </Grid>   
        <Button variant="contained" sx={{ mt: 2, mr: 35, ml: 35 }}>
        Create New Client
        </Button> 
    </>
  );
}

export default ClientForm;
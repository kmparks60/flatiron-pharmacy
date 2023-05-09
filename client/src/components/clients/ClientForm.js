import * as React from 'react';
import {useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import {useNavigate} from 'react-router-dom'

function ClientForm({addClient}) {

    const [newCompany, setCompany] = useState()
    const [newAddress, setAddress] = useState()
    const [newCity, setCity] = useState()
    const [newState, setState] = useState()
    const [newZip, setZip] = useState()
    const [newCountry, setCountry] = useState()

    const navigate = useNavigate()

    const companyChange = e => setCompany(e.target.value)
    const addressChange = e => setAddress(e.target.value)
    const cityChange = e => setCity(e.target.value)
    const stateChange = e => setState(e.target.value)
    const zipChange = e => setZip(e.target.value)
    const countryChange = e => setCountry(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        const newClient = {
            company: newCompany,
            address: newAddress,
            city: newCity,
            state: newState,
            zipcode: newZip,
            country: newCountry
        }
        addClient(newClient)
        navigate('/dashboard')
    }
    

    return (
        <>
            <Box component='form' onSubmit={handleSubmit} pl={4} pr={4} pb={4} pt={2} >
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
                    onChange={ e => companyChange(e)}
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
                    onChange={ e => addressChange(e)}
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
                    onChange={ e => cityChange(e)}
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
                    onChange={ e => stateChange(e)}
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
                    onChange={e => zipChange(e)}
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
                    onChange={e => countryChange(e)}
                />
                <Button variant="contained" type="submit" sx={{ mt: 2, ml: 0 }}>
                Create New Client
                </Button> 
                </Grid>
            </Grid>
            </Box>   
        </>
  );
}

export default ClientForm;
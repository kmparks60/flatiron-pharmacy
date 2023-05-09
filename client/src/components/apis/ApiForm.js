import * as React from 'react';
import {useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import {useNavigate} from 'react-router-dom'



function ApiForm({addAPI}) {

    const [newChemical, setChemical] = useState()
    const [newQuantity, setQuantity] = useState()
    const [newPrice, setPrice] = useState()

    const navigate = useNavigate()   

    const chemicalChange = e => setChemical(e.target.value)
    const quantityChange = e => setQuantity(e.target.value)
    const priceChange = e => setPrice(e.target.value)


    const handleSubmit = e => {
        e.preventDefault()
        const newAPI = {
            chemical: newChemical,
            quantity: newQuantity,
            price: newPrice
        }
        addAPI(newAPI)
        navigate('/dashboard')
    }
    

    return (
        <>
            <Box component='form' onSubmit={handleSubmit} pl={4} pr={4} pb={4} pt={2} >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                New API Form
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="chemical"
                    name="chemical"
                    label="New API"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    onChange={ e => chemicalChange(e)}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="quantity"
                    name="quantity"
                    label="Quantity Sold In"
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="standard"
                    onChange={ e => quantityChange(e)}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="price"
                    name="price"
                    label="Price"
                    fullWidth
                    variant="standard"
                    onChange={ e => priceChange(e)}
                />
                <Button variant="contained" type="submit" justifyContent='flex-end' sx={{ mt: 2, ml: 10}}>
                Add New API
                </Button> 
                </Grid>
            </Grid>
            </Box>   
        </>
  );
}

export default ApiForm;
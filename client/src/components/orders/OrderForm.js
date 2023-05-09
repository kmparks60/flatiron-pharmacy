import * as React from 'react';
import {useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import {useNavigate} from 'react-router-dom'



function OrderForm({addOrder}) {

    const [newPrice, setPrice] = useState()
    const [newPay, setPay] = useState()
    const [newUserId, setUserId] = useState()
    const [newClientId, setClientId] = useState()

    const navigate = useNavigate()   

    const priceChange = e => setPrice(e.target.value)
    const payChange = e => setPay(e.target.value)
    const userChange = e => setUserId(e.target.value)
    const clientChange = e => setClientId(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        const newOrder = {
            price: newPrice,
            pay_method: newPay,
            user_id: newUserId,
            client_id: newClientId
        }
        addOrder(newOrder)
        navigate('/dashboard')
    }
    

    return (
        <>
            <Box component='form' onSubmit={handleSubmit} pl={4} pr={4} pb={4} pt={2} >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                New Order Form
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="price"
                    name="price"
                    label="Total"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    onChange={ e => priceChange(e)}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="pay_method"
                    name="pay_method"
                    label="Payment Method"
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="standard"
                    onChange={ e => payChange(e)}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="user_id"
                    name="user_id"
                    label="User Id"
                    fullWidth
                    variant="standard"
                    onChange={ e => userChange(e)}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="client_id"
                    name="client_id"
                    label="Client Id"
                    fullWidth
                    variant="standard"
                    onChange={ e => clientChange(e)}
                />
                <Button variant="contained" type="submit" sx={{ mt: 2, ml: 0 }}>
                Create New Order
                </Button> 
                </Grid>
            </Grid>
            </Box>   
        </>
  );
}

export default OrderForm;
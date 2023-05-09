import * as React from 'react';
import {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import LeftList from '../dashboard/LeftList';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import OrderList from './OrderList'
import { Link } from 'react-router-dom';




function Orders() {

    const [orders, setOrders] = useState([])

    const removeOrderFromState = removeOrderId => {
        const orderArr = orders.filter(orderObject => {
            return orderObject.id !== removeOrderId
        })
        setOrders(orderArr)
    }

    useEffect(() => {
        fetch('/orders')
        .then(r=>r.json())
        .then(setOrders)
    }, [])

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar width='240px'>
                    <Toolbar sx={{pr: '24px',}}>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="white">
                            Orders
                        </Typography>
                        <IconButton color="inherit" component={Link} to='/dashboard' sx={{ marginLeft: "auto" }}>
              			<Badge color="secondary" align='right'>
                            <Typography fontSize='6'>
                                Dashboard
                            </Typography >
                            <DashboardIcon />
              			</Badge>
            		</IconButton>
                    </Toolbar>
                </AppBar>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                       <LeftList /> 
                    </List>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                    }}>
                    <Toolbar />
                    <Container maxWidth="lg+" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            {/* Recent Orders */}
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <OrderList orders={orders} removeOrderFromState={removeOrderFromState}/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default Orders

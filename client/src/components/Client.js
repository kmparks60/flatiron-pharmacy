import * as React from 'react';
import {useState, useEffect} from 'react';
import ClientSideList from './ClientSideList';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

function Client() {
    const [orders, setOrders] = useState([])
    
    useEffect(() => {
        fetch('/orders')
        .then(r=>r.json())
        .then(setOrders)
    }, [])

    function dashRoute() {
        window.location.href='/'
    }

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
                            Welcome to Flatiron Pharmaceuticals
                        </Typography>
                        <IconButton color="inherit" onClick={dashRoute} sx={{ marginLeft: "auto" }}>
              			<Badge color="secondary" align='right'>
                			<HomeSharpIcon />
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
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            {/* Recent Orders */}
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <ClientSideList orders={orders}/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>            
      </>	
    )
}

export default Client
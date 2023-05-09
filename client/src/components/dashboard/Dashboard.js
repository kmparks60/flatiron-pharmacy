import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LeftList from './LeftList';
// import OrderChart from './OrderChart'
// import Projected from './Projected'
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import CalendarPage from './CalendarPage';
import {useNavigate} from 'react-router-dom'

function Dashboard({user, setUser}) {    

    const navigate=useNavigate()
    
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(
            setUser(null),
        navigate('/')
    )};

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
                            Welcome, {user?.f_name}
                        </Typography>
                        <IconButton color="inherit" onClick={handleLogout} sx={{ marginLeft: "auto" }}>
              			<Badge color="secondary" align='right'>
                			<Typography fontSize='6'>
                                Logout
                            </Typography >
                            <LogoutIcon />
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
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            {/* Chart */}
                            {/* <Grid item xs={12} md={8} lg={9}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}>
                                    <OrderChart />
                                </Paper>
                            </Grid> */}
                            {/* Recent Deposits */}
                            {/* <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}>
                                    <Projected />
                                </Paper>
                            </Grid> */}
                            {/* Recent Orders */}
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <CalendarPage />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </>
  )
}

export default Dashboard;

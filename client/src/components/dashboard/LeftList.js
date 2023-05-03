import * as React from 'react';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import MedicationIcon from '@mui/icons-material/Medication';
import {Link} from 'react-router-dom'

function LeftList() {

    return (
        <Box pt={8} height={'100px'}>
            <ListItemButton component={Link} to='/dashboard/chemicals'>
            <ListItemIcon>
                <MedicationIcon />
            </ListItemIcon>
            <ListItemText primary="APIs" />
            </ListItemButton>
            <ListItemButton component={Link} to='/dashboard/clients'>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Clients" />
            </ListItemButton>
            <ListItemButton component={Link} to='/dashboard/orders'>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
            </ListItemButton>
        </Box>
    )    
};

export default LeftList;
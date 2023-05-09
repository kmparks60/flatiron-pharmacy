import * as React from 'react';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import MedicationIcon from '@mui/icons-material/Medication';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCardIcon from '@mui/icons-material/AddCard';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom'

function LeftList() {

    return (
        <Box pt={8} pl={0} height={'100px'}>
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
            <Divider />
            <ListItemButton component={Link} to='/dashboard/apiform'>
            <ListItemIcon>
                <LocalPharmacyIcon />
            </ListItemIcon>
            <ListItemText primary="Add API" />
            </ListItemButton>
            <ListItemButton component={Link} to='/dashboard/clientform'>
            <ListItemIcon>
                <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Client" />
            </ListItemButton>
            <ListItemButton component={Link} to='/dashboard/orderform'>
            <ListItemIcon>
                <AddCardIcon />
            </ListItemIcon>
            <ListItemText primary="New Order" />
            </ListItemButton>
        </Box>
    )    
};

export default LeftList;
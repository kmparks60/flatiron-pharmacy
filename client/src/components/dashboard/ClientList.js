import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';


function ClientList() {

  	return (
    	<>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
      		Clients
    		</Typography>
			<Table size="medium" >
				<TableHead align='center'>
					<TableRow>
						<TableCell>First Name</TableCell>
						<TableCell>Last Name</TableCell>
						<TableCell>City</TableCell>
						<TableCell align='right'>State</TableCell>
					</TableRow>
				</TableHead>
				<TableBody align='center'>
					<TableRow>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell align='right'></TableCell>
						<IconButton>
							<EditIcon />
						</IconButton>
						<IconButton>
							<ClearIcon />
						</IconButton>
					</TableRow>
				</TableBody>
			</Table>
    	</>	
  	)
}

export default ClientList
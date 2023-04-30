import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import ClientTable from './ClientTable';

function ClientList({clients, removeClientFromState}) {

  	return (
    	<>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
      		Clients
    		</Typography>
			<Table size="small" >
				<TableHead>
					<TableRow>
						<TableCell>Company</TableCell>
						<TableCell>Address</TableCell>
						<TableCell>City</TableCell>
						<TableCell>State</TableCell>
						<TableCell>Zipcode</TableCell>
						<TableCell>Country</TableCell>
						<TableCell align='right'>Client Id</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
				{clients.map(clientObj => {
						return <ClientTable key={clientObj.id} client={clientObj} removeClientFromState={removeClientFromState} />
					}) }
				</TableBody>
			</Table>
    	</>	
  	)
}

export default ClientList
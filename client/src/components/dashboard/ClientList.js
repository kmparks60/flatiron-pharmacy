import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import ClientTable from './ClientTable';
// import ClientDataGrid from './ClientDataGrid';

function ClientList({clients, removeClientFromState, updateClient}) {

  	return (
    	<>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
      		Clients
    		</Typography>
			<Table size="medium" >
				<TableHead>
					<TableRow>
						<TableCell>Company</TableCell>
						<TableCell>Address</TableCell>
						<TableCell>City</TableCell>
						<TableCell>State</TableCell>
						<TableCell>Zipcode</TableCell>
						<TableCell>Country</TableCell>
						<TableCell align='right'>Client Id</TableCell>
						<TableCell align='right'></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
				{clients.map((clientObj) => {
						return <ClientTable key={clientObj.id} client={clientObj} removeClientFromState={removeClientFromState} updateClient={updateClient} />
					}) }
				</TableBody>
			</Table>
    	</>	
  	)
}

export default ClientList
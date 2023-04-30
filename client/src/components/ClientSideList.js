import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import ClientSideTable from './ClientSideTable';


function ClientSideList({orders}) {

  	return (
    	<>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
      		Orders
    		</Typography>
			<Table size="medium" >
				<TableHead align='center'>
					<TableRow>
						<TableCell>Order Number</TableCell>
						<TableCell>Customer Id</TableCell>
						<TableCell>Order Date</TableCell>
						<TableCell align='right'>Total</TableCell>
					</TableRow>
				</TableHead>
				<TableBody align='center'>
					{orders.map(orderObj => {
						return <ClientSideTable key={orderObj.id} order={orderObj} />
					}) }
				</TableBody>
			</Table>
    	</>	
  	)
}

export default ClientSideList
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import OrderTable from './OrderTable';


function OrderList({orders, removeOrderFromState}) {
	
	
	return (
		<>
			<Typography component="h2" variant="h6" color="primary" gutterBottom>
      		Recent Orders
    		</Typography>
      		<Table size="small">
        		<TableHead>
          			<TableRow>
            			<TableCell>Order Number</TableCell>
            			<TableCell>Customer Id</TableCell>
            			<TableCell>Order Date</TableCell>
            			<TableCell>Payment Method</TableCell>
            			<TableCell align="right">Total</TableCell>
          			</TableRow>
        		</TableHead>
        		<TableBody align='center'>
					{orders.map(orderObj => {
							return <OrderTable key={orderObj.id} order={orderObj} 
												removeOrderFromState={removeOrderFromState}/>
						}) }
        		</TableBody>
      		</Table>	
		</>
  )
}

export default OrderList

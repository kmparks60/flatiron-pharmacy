import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';

function ClientSideList({orders}) {

	const column = [
		{field:'id', headerName:'Order Number', width:200},
		{field:'client_id', headerName:'Customer Id', width:200},
		{field:'order_date', headerName:'Order Date', width:300},
		{field:'pay_method', headerName: 'Payment Method', width:300},
		{field:'price', headerName:'Total', width:300}
	]

  	return (
    	<>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
      		Orders
    		</Typography>
			<DataGrid columns={column} rows={orders} />			
    	</>	
  	)
}

export default ClientSideList
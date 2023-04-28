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

function OrderList() {
	
	
	return (
		<>
			<Typography component="h2" variant="h6" color="primary" gutterBottom>
      		Recent Orders
    		</Typography>
			{/* <h1>Recent Orders</h1> */}
      		<Table size="small">
        		<TableHead>
          			<TableRow>
            			<TableCell>Date</TableCell>
            			<TableCell>Name</TableCell>
            			<TableCell>Ship To</TableCell>
            			<TableCell>Payment Method</TableCell>
            			<TableCell align="right">Sale Amount</TableCell>
          			</TableRow>
        		</TableHead>
        		<TableBody>
            		<TableRow >
              			<TableCell></TableCell>
              			<TableCell></TableCell>
              			<TableCell></TableCell>
              			<TableCell></TableCell>
              			<TableCell align="right"></TableCell>
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

export default OrderList

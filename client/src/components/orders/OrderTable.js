import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

function OrderTable({order, removeOrderFromState}) {

	const handleDelete = () => {
		fetch(`http://localhost:5555/orders/${order.id}`, {
			method: 'DELETE'
		})
		.then(removeOrderFromState(order.id))

	}

	return (
	<>
		<TableRow key={order.id}>
			<TableCell>{order.id}</TableCell>
			<TableCell>{order.client_id}</TableCell>
			<TableCell>{order.order_date}</TableCell>
			<TableCell>{order.pay_method}</TableCell>
			<TableCell align='right'>{order.price}</TableCell>
			<TableCell>	
				<IconButton onClick={handleDelete}>
					<ClearIcon />
				</IconButton>
			</TableCell>
		</TableRow>
	</>
	)
	}

export default OrderTable

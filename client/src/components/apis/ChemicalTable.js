import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


function ChemicalTable({api, removeApiFromState}) {
	
	const handleDelete = () => {
		fetch(`http://localhost:5555/apis/${api.id}`, {
			method: 'DELETE'
		})
		.then(removeApiFromState(api.id))
	}
	
	return (
		<>
		<TableRow >
			<TableCell>{api.chemical}</TableCell>
			<TableCell>{api.id}</TableCell>
			<TableCell>{api.quantity}</TableCell>
			<TableCell align='right'>{api.price}</TableCell>
			<TableCell>
				<IconButton onClick={handleDelete}>
					<ClearIcon />
				</IconButton>
			</TableCell>
		</TableRow>
		</>
  )
}

export default ChemicalTable

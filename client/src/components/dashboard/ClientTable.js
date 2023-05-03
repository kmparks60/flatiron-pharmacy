import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';


function ClientTable({client, index, removeClientFromState, updateClient}) {
	
	// const commitNewCompany = e => {
	// 	e.preventDefault()
	// 	fetch(`http://localhost:5555/clients/${client.id}`, {
	// 		method: 'PATCH',
	// 		headers: {'Content-Type': 'application/json'},
	// 		body: JSON.stringify( {
	// 			company: newCompany
	// 		})
	// 	})
	// 	.then(r => r.json())
	// 	.then(updateClient)
	// }

	const handleDelete = () => {
		fetch(`http://localhost:5555/clients/${client.id}`, {
			method: 'DELETE'
		})
		.then(removeClientFromState(client.id))

	}




  	return (
    	<>
			<TableRow key={client.name}>
				<TableCell>{client.company}</TableCell>
				<TableCell>{client.address}</TableCell>
				<TableCell>{client.city}</TableCell>
				<TableCell>{client.state}</TableCell>
				<TableCell>{client.zipcode}</TableCell>
				<TableCell>{client.country}</TableCell>
				<TableCell align='right'>{client.id}</TableCell>
				<TableCell>
				<IconButton>
					<EditIcon />
				</IconButton>
				</TableCell>
				<TableCell>
				<IconButton onClick={handleDelete}>
					<ClearIcon />
				</IconButton>
				</TableCell>
			</TableRow>
    	</>
  )
}

export default ClientTable

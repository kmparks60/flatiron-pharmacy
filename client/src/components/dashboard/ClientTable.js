import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


function ClientTable({client}) {
  return (
    <>
        <TableRow key={client.id}>
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
			<IconButton>
			<ClearIcon />
			</IconButton>
			</TableCell>
		</TableRow>
    </>
  )
}

export default ClientTable

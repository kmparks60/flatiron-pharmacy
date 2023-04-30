import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


function ChemicalTable({api}) {
  return (
    <>
        <TableRow >
            <TableCell>{api.chemical}</TableCell>
            <TableCell>{api.id}</TableCell>
            <TableCell>{api.quantity}</TableCell>
			<TableCell align='right'>{api.price}</TableCell>
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

export default ChemicalTable

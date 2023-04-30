import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function ClientSideTable({order}) {
  return (
    <>
      <TableRow key={order.id}>
			  <TableCell>{order.id}</TableCell>
			  <TableCell>{order.client_id}</TableCell>
			  <TableCell>{order.order_date}</TableCell>
			  <TableCell align='right'>{order.price}</TableCell>
      </TableRow>
    </>
  )
}

export default ClientSideTable

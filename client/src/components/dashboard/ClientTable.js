import React, { useState } from 'react';
import axios from 'axios';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel'

function ClientTable({client, removeClientFromState, updateClient}) {
	const [isEditing, setIsEditing] = useState(false);
 	const [editedClient, setEditedClient] = useState(client);

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleCancel = () => {
		setIsEditing(false);
		setEditedClient(client);
	};

	const handleSave = () => {
		axios.patch(`/clients/${client.id}`, editedClient)
		  .then(response => {
			setIsEditing(false);
			updateClient(response.data);
		  })
		  .catch(error => {
			console.error(error);
		  });
	  };

	const handleDelete = () => {
		fetch(`http://localhost:5555/clients/${client.id}`, {
			method: 'DELETE'
		})
		.then(removeClientFromState(client.id))

	}

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setEditedClient(prevClient => ({
		  ...prevClient,
		  [name]: value
		}));
	  };


  	return (
    	<>
			<TableRow key={client.id}>
			<TableCell>
				{isEditing ? (
				<input type="text" name="company" value={editedClient.company} onChange={handleInputChange} />
				) : client.company}
			</TableCell>
			<TableCell>
				{isEditing ? (
				<input type="text" name="address" value={editedClient.address} onChange={handleInputChange} />
				) : client.address}
			</TableCell>
			<TableCell>
				{isEditing ? (
				<input type="text" name="city" value={editedClient.city} onChange={handleInputChange} />
				) : client.city}
			</TableCell>
			<TableCell>
				{isEditing ? (
				<input type="text" name="state" value={editedClient.state} onChange={handleInputChange} />
				) : client.state}
			</TableCell>
			<TableCell>
				{isEditing ? (
				<input type="text" name="zipcode" value={editedClient.zipcode} onChange={handleInputChange} />
				) : client.zipcode}
			</TableCell>
			<TableCell>
				{isEditing ? (
				<input type="text" name="country" value={editedClient.country} onChange={handleInputChange} />
				) : client.country}
			</TableCell>
			<TableCell align='right'>{client.id}</TableCell>
			<TableCell>
				{isEditing ? (
				<>
					<Tooltip title="Save">
					<IconButton onClick={handleSave}>
						<SaveIcon />
					</IconButton>
					</Tooltip>
					<Tooltip title="Cancel">
					<IconButton onClick={handleCancel}>
						<CancelIcon />
					</IconButton>
					</Tooltip>
				</>
				) : (
				<Tooltip title="Edit">
					<IconButton onClick={handleEdit}>
					<EditIcon />
					</IconButton>
				</Tooltip>
				)}
			</TableCell>
			<TableCell>
				<Tooltip title="Delete">
				<IconButton onClick={handleDelete}>
					<ClearIcon />
				</IconButton>
				</Tooltip>
			</TableCell>
			</TableRow>
    	</>
  )
}

export default ClientTable

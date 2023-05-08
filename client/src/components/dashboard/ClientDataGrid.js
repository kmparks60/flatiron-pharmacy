import React, {useState, useEffect} from 'react'
import {DataGrid} from '@mui/x-data-grid'
import axios from 'axios'


function ClientDataGrid() {
    const [clients, setClients] = useState([])

    useEffect(() => {
        fetch('http://localhost:5555/clients')
        .then(r => r.json())
        .then(setClients)
    },[])

    const handleUpdate = (params) => {
        fetch(`/clients/${params.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(params.values)
        })
        .then(res => res.json())
        .then(data => {
          const updatedClients = clients.map(client => {
            if (client.id === data.id) {
              return data;
            } else {
              return client;
            }
          });
          setClients(updatedClients);
        });
      };

    const columns = [
        {field: 'company', headerName: 'Company', width: 180, editable: true},
        {field: 'address', headerName: 'Address', width: 180, editable: true},
        {field: 'city', headerName: 'City', width: 180, editable: true},
        {field: 'state', headerName: 'State', width: 180, editable: true},
        {field: 'zipcode', headerName: 'ZipCode', width: 180, editable: true},
        {field: 'country', headerName: 'Country', width: 180, editable: true}

    ]

    return (
        <>
            <DataGrid
                rows={clients}
                columns={columns}
                onEditCellChangeCommitted={handleUpdate}
            />
        </>
    )
}

export default ClientDataGrid

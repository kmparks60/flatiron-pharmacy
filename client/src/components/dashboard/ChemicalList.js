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


function ChemicalList() {

    return (
        <>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
      		Chemicals
    		</Typography>
      		<Table size="small">
        		<TableHead>
          			<TableRow>
            			<TableCell>Name</TableCell>
            			<TableCell>Dosage</TableCell>
            			<TableCell>Price</TableCell>
            			<TableCell align="right">Quantity</TableCell>
          			</TableRow>
        		</TableHead>
        		<TableBody>
            		<TableRow >
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

export default ChemicalList

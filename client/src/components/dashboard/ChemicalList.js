import React, {useContext} from 'react';
import {ChemContext} from './Chemicals'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import ChemicalTable from './ChemicalTable';

function ChemicalList({apis}) {

	// const {apis} = useContext(ChemContext)
    
	return (
        <>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
      		APIs
    		</Typography>
      		<Table size="small">
        		<TableHead>
          			<TableRow>
					  	<TableCell>Name</TableCell>
            			<TableCell>Stock Number</TableCell>
            			<TableCell>Quantity</TableCell>
            			<TableCell align='right'>Price</TableCell>
          			</TableRow>
        		</TableHead>
        		<TableBody>
				{/* <ChemContext.Consumer> */}
				{apis.map((apiObj) => {
						return <ChemicalTable key={apiObj.id} api={apiObj} />
					}) }
				{/* </ChemContext.Consumer> */}
        		</TableBody>
      		</Table>
        </>
    )
}

export default ChemicalList

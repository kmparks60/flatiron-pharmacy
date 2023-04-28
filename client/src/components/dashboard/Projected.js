import * as React from 'react';
import Typography from '@mui/material/Typography';

function Orders() {
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
      	Projected Sales
    	</Typography>
      <Typography component="p" variant="h4">
        $38, 972.16
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        as of 30 June, 2023
      </Typography>
    </>
  )
}

export default Orders

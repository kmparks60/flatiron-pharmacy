import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Typography from '@mui/material/Typography';


function OrderChart() {

    function createData(time, amount) {
        return { time, amount };
      }

    const data = [
        createData('04/01', 0),
        createData('04/15', 10000),
        createData('04/30', 12500),
        createData('05/01', 15000),
        createData('05/15', 17500),
        createData('05/31', 19500),
        createData('06/01', 22500),
        createData('06/15', 29000),
        createData('06/30', 38972.16),
      ];   

    return (
        <>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
      		Projected Growth
    		</Typography>
            <ResponsiveContainer>
                <LineChart
                    data= {data}
                    margin={{
                    top: 16,
                    right: 16,
                    bottom: 0,
                    left: 24,
                    }}>
                <XAxis
                    dataKey="time"/>
                <YAxis>
                <Label
                    angle={270}
                    position="left"
                    style={{
                        textAnchor: 'middle',
                    }}>
                    Sales ($)
                </Label>
                </YAxis>
                <Line
                    isAnimationActive={false}
                    type="monotone"
                    dataKey="amount"
                    dot={false}/>
                </LineChart>
            </ResponsiveContainer>  
        </>
  )
}

export default OrderChart;

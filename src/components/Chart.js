import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis ,Tooltip } from 'recharts';

class Chart extends React.Component {
    render(){
        console.log(this.props.chartData);
        return(
            <LineChart width={700} height={400} data={this.props.chartData} margin={{ top: 35, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="numberOfParts" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
            </LineChart>
        );
    }
}
export default Chart;
import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

function LineChartGraph() {
    const data = [
        { name: "Jan", uv: 4000, pv: 2400 },
        { name: "Feb", uv: 3000, pv: 1398 },
        { name: "Mar", uv: 2000, pv: 9800 },
        { name: "Apr", uv: 2780, pv: 3908 },
        { name: "May", uv: 1890, pv: 4800 },
        { name: "Jun", uv: 2390, pv: 3800 },
        { name: "Jul", uv: 3490, pv: 4300 },
        { name: "Aug", uv: 4000, pv: 2400 },
        { name: "Sep", uv: 3000, pv: 1398 },
        { name: "Oct", uv: 2000, pv: 9800 },
        { name: "Nov", uv: 2780, pv: 3908 },
        { name: "Dec", uv: 1890, pv: 4800 }
    ];
    return (
        <>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart width={1100} height={300} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer >
        </>
    )
}

export default LineChartGraph;
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Order } from '../api/orders';

interface SalesChartProps {
  orders: Order[];
}

export default function SalesChart({ orders }: SalesChartProps) {
  const data = orders.map(order => ({
    date: order.date,
    sales: order.total,
  }));

  return (
    <div className="sales-chart card">
      <h3>Sales Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

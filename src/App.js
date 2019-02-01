import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
  {uv: 2, name: "x1"},
  {uv: 3, name: 3},
  {uv: 4, name: "x4"},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
    );
  }
}

export default App;

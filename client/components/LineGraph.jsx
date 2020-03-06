import React from 'react';
import {Line} from 'react-chartjs-2';

const LineGraph = ({data}) => {
  const labels = Object.keys(data);
  const dataSets = Object.values(data);

  const state = {
    labels: labels,
    datasets: [
      {
        label: 'Price',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: dataSets,
      }
    ]
  }
  return (
    <div>
      <Line
        data={state}
        options={{
          title:{
            display:true,
            text:'Price',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
  );
};
  
export default LineGraph;


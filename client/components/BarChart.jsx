import React,{useState} from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart = ({data}) => {
  const labels = [];
  const dataSets = []
  //get only keys
  for(var key in data) {
    labels.push(Object.keys(data));
  }
  //get only values
  for(var key in data) {
    dataSets.push(Object.values(data));
  }
  const state = {
    labels: labels,
    datasets: [
        {
        label: 'Prices',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: dataSets
        }
    ]
    }  
  return(
    <div>
        <Bar
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

export default BarChart;
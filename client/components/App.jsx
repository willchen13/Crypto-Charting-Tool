import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from './Form.jsx';
import BarChart from './BarChart.jsx';
import LineGraph from './LineGraph.jsx';
import PieCharts from './PieCharts.jsx';

const App = () => {

  const [data, setData] = useState({});
  const [pageUrl, setPageUrl] = useState('https://api.coindesk.com/v1/bpi/historical/close.json');
  const [loading, setLoading] = useState(true);
  const [graph, setGraph] = useState('');

  useEffect(()=> {
    setLoading(true);
    let cancel;
    axios.get(pageUrl,{cancelToken: new axios.CancelToken(c => cancel = c)}).then(res=>{
      setLoading(false);
      console.log('what is the response data', res.data.bpi);
      setData(res.data.bpi);
    })

    return () => cancel();
  }, [pageUrl]);

  if(loading) {
    return "Loading..."
  }

  const changeDates = (start,end) => {
    setPageUrl(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)
  }

  const changeGraph = (x) => setGraph(x);

  return (
    <div>
      <h2> Cryptocurrency Charting Tool </h2>
      <p>Single-page app for viewing the historical price data for any cryptocurrency. Data is Powered by <a href='https://www.coindesk.com/price/bitcoin' target = "_blank">CoinDesk</a></p>

      <Form changeDates = {changeDates} changeGraph={changeGraph}/>

      {graph==='bar' && <BarChart data={data}/>}
      {graph==='line' && <LineGraph data={data}/>}
      {graph==='pie' && <PieCharts data={data}/>}

    </div>
  );
};

export default App;


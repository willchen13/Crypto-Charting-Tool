import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from './Form.jsx';
import BarChart from './BarChart.jsx';

const App = () => {

  const [data, setData] = useState({});
  const [pageUrl, setPageUrl] = useState('https://api.coindesk.com/v1/bpi/historical/close.json');
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <h2> Cryptocurrency Charting Tool </h2>
      <p>Single-page app for viewing the historical price data for any cryptocurrency. Data is Powered by <a href='https://www.coindesk.com/price/bitcoin' target = "_blank">CoinDesk</a></p>

      <Form changeDates = {changeDates}/>
      <BarChart data={data}/>
    </div>
  );
};

export default App;


import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from './Form.jsx';

const App = () => {

  const [data, setData] = useState([]);
  const [pageUrl, setPageUrl] = useState('https://api.coindesk.com/v1/bpi/historical/close.json');

  useEffect(()=> {
    axios.get(pageUrl).then(res=>{
      console.log('what is the response data', res.data);
      // setData(res.data)
    })
  }, [pageUrl]);

  const changeDates = (start,end) => {
    setPageUrl(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)
  }

  return (
    <div>
      <h2> Cryptocurrency Charting Tool </h2>
      <Form changeDates = {changeDates}/>
    </div>
  );
};

export default App;


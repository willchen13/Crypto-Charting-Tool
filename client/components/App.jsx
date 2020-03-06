import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from './Form.jsx';

const App = () => {

  const [data, setData] = useState([]);
  const [pageUrl, setPageUrl] = useState('https://api.coindesk.com/v1/bpi/historical/close.json');
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    setLoading(true);
    let cancel;
    axios.get(pageUrl,{cancelToken: new axios.CancelToken(c => cancel = c)}).then(res=>{
      setLoading(false);
      console.log('what is the response data', res.data);
      // setData(res.data)
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
      <Form changeDates = {changeDates}/>
    </div>
  );
};

export default App;


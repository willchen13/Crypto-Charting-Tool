import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {

  const [data, setData] = useState([]);

  useEffect(()=> {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(res=>{
      console.log('what is the response data', res.data);
      // setData(res.data)
    })
  }, []);

  return (
    <div>
    <h2> hello world! </h2>
    </div>
  );
};

export default App;


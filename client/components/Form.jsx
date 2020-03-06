import React, {useState} from 'react';
import axios from 'axios';

const Form = ({changeDates}) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    changeDates(start,end);
  }

  const handleChange = (e) => {
    if(e.target.name === 'start') {
      setStart(e.target.value);
    } else if(e.target.name === 'end') {
      setEnd(e.target.value);
    }
  }

  return(
    <>
    <form>
        <label>
        Start Date:
            <input placeholder='YYYY-MM-DD' type="text" name="start" value={start} onChange={(e)=>{handleChange(e)}}/>
        </label>
        <label>
        End Date:
            <input placeholder='YYYY-MM-DD' type="text" name="end" value={end} onChange={(e)=> {handleChange(e)}}/>
        </label>
        <input type="submit" value="Submit" onClick={(e)=> {handleSubmit(e)}}/>
    </form>

    <br></br>

    <label> Graph Type: </label>
    <select>
        <option value="bar">Bar Chart</option>
        <option value="line">Line Graph</option>
        <option selected value="timeSeries">Time Series</option>
        <option value="pie">Pie Graphs</option>
    </select>

    </>
  );
};

export default Form;

import React, {useState} from 'react';
import axios from 'axios';

const Form = ({changeDates}) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(start === '') {
      alert('Please add a start time');
    } else if(end === '') {
      alert('Please add a end time');
    } else if(start.length !== 10 || formatFailed(start)){
      alert('Start date must be like: YYYY-MM-DD');
    } else if(end.length !== 10 && formatFailed(end)){
      alert('End date must be like: YYYY-MM-DD');
    } else {
      changeDates(start,end);
    };
  }

  const formatFailed = (input) => {
    const str = input.split('-');
    if(str.length !== 3) {
      return true;
      //check if year is length 4 and a number greater than 2008 (year bitcoin was invented! one year after to be safe)
    } else if(str[0].length !== 4 || isNaN(str[0]) || str[0] > 2008) {
      return true;
      //check if month is length 2 and a number between 1 and 12
    } else if(str[1].length !== 2 || isNaN(str[1]) || (str[1] >= 1 && str[1] <= 12)) {
      return true;
      //check if day is a length 2 and a number between 1 and 31
    } else if(str[2].length !== 2 || isNaN(str[2]) || (str[2] >= 1 && str[2] <= 31)) {
      return true;
    } else {
      return false;
    }
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

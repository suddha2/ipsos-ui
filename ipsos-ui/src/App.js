import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const serviceURL ="http://127.0.0.1:3000";
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCodeButtonClick = async () => {
    try {
      const response = await axios.get(serviceURL+`/code/${inputValue}`);
      setResult(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleActionButtonClick = async () => {
    try {
      const response = await axios.get(serviceURL+`/action_id/${inputValue}`);
      setResult(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div className="container">
      <h1 className="heading">React JSON Call Example</h1>
      <form className="form">
        <label className="label">
          Enter value:
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <button type="button" onClick={handleCodeButtonClick} className="button">
          Fetch Action
        </button>
        
        <button type="button" onClick={handleActionButtonClick} className="button">
          Fetch Codewords
        </button>
      </form>

      {result && (
        <div className="resultContainer">
          <h2 className="resultHeading">Result:</h2>
          
        </div>
      ) &&
      result.map(temp=>(
        <pre className="result">codeword : {temp.codeword} / action : {temp.id} </pre>
      ))
      }

      

    </div>
  );
};

export default App;

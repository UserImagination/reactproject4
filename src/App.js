import './App.css';
import { useState } from 'react';
import axios from 'axios';
// a state is like a variable that stores data
function App() {

  // *************************** //
  // ******** NUM STATE ******** //
  // *************************** //
  const [num, setNum] = useState(0); // the 0 is the intial value of num, ie let num=0
  const increaseNum = () => {
    setNum(num + 1);
  };
  const decreaseNum = () => {
    setNum(num - 1);
  }

  // *************************** //
  // ******** INPUT STATE ****** //
  // *************************** //
  const [inputValue, setInputValue] = useState(""); // empty string
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  // *************************** //
  // ******** HIDE STATE ******* //
  // *************************** //
  const [showText, setShowText] = useState(true); // boolean
  const toggleText = () => {
    setShowText(!showText);
  }

  // *************************** //
  // ******** GET DEF ********** //
  // *************************** //
  async function getDef(search) {
    search = document.getElementById("searchWord").value;
    console.log(search);
    const options = {
      method: 'GET',
      url: `https://wordsapiv1.p.rapidapi.com/words/${search}/definitions`,
      headers: {
        'X-RapidAPI-Key': 'api key',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // *************************** //
  // ******* INPUT STATE 2****** //
  // *************************** //
  const [inputValue2, setInputValue2] = useState(""); // empty string
  const handleInputChange2 = (event) => {
    console.log(event.target.value);
    setInputValue2(event.target.value);
  };

  return (
    <div className="App">
      {num}
      <p>
        <button onClick={increaseNum}>Increase</button>
      </p>

      <p>
        <button onClick={decreaseNum}>Decrease</button>
      </p>

      <p>
        <input type="text" onChange={handleInputChange} />
        <p>{inputValue}</p>
      </p>

      <p>
        {
          //<button
          //onClick={() => {
          //setShowText(!showText);
          //}}>
          //Show/Hide</button>
        }
        <button onClick={toggleText}>Show/Hide</button>
        {showText && <h1>MEOW</h1>}
      </p>

      <p>
        <input id="searchWord" type="text" onChange={handleInputChange2}></input>
      </p>

      <p>
        <button onClick={getDef}>Get Definition</button>
      </p>
    </div>
  );
}

export default App;

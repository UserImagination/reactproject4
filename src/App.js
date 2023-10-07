import './App.css';
import { useState } from 'react';
// a state is like a variable that stores data
function App() {

  // *************************** //
  // ******** NUM STATE ******** //
  // *************************** //
  const [age, setNum] = useState(0); // the 0 is the intial value of age, ie let age=0
  const increaseNum = () => {
    setNum(age + 1);
  };
  const decreaseNum = () => {
    setNum(age - 1);
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
  
  return (
    <div className="App">
      {age}
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
    </div>
  );
}

export default App;

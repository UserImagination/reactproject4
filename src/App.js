import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import OriginalPage from "./Components/originalPage";
import NewFile from "./Components/newFile";

// a state is like a variable that stores data
const App = () => {
  
  return (
    <React.Fragment>
      <div className="App">
        <Routes>
          <Route path="/" element={<OriginalPage/>} exact/>
          <Route path="/page2" element={<NewFile/>}/>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;

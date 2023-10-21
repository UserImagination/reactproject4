import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import OriginalPage from "./Components/originalPage";
import NewFile from "./Components/newFile";
import Navbar from "./Components/Navbar"
import ContactPage from "./Components/contactPage";
// a state is like a variable that stores data

const App = () => {
  
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <Routes>
          <Route path="/" element={<OriginalPage/>} exact/>
          <Route path="/page2" element={<NewFile/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;

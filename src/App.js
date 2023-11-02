import './App.css';
import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import OriginalPage from "./Components/originalPage";
import Navbar from "./Components/Navbar"
import ContactPage from "./Components/contactPage";
import LoginPage from "./Components/loginPage";
import ShopPage from "./Components/shopPage";
//import BlogPage from ".Components/blogPage;"

// a state is like a variable that stores data

const App = () => {
  const [token, setToken] = useState();
  
  if(!token) {
    return <LoginPage setToken={setToken} />  //This function checks if the user has already logged in
  }
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        
        <Routes>
          <Route path="/" element={<OriginalPage/>} />       
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/login" element={<LoginPage/> }/>
          <Route path="/shop" element={<ShopPage/>} exact/>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;

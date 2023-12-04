import './App.css';
import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import OriginalPage from "./Components/originalPage";
import Navbar from "./Components/Navbar"
import ContactPage from "./Components/contactPage";
import LoginPage from "./Components/loginPage";
import ShopPage from "./Components/shopPage";
import Register from './Register';
//import BlogPage from ".Components/blogPage;"

// a state is like a variable that stores data

const App = () => {
  const [token, setToken] = useState();
  
   if(!token) {
    return <Register setToken={setToken} />  //This function checks if the user has already logged in
   }
  
  const username = (data) => {
    console.log(data);
    return data
  }
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <Navbar Person={ username }/>
        </header>
        
        <Routes>
          <Route path="/" element={<OriginalPage />} />       
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/login" element={<LoginPage func={ username } /> }/>
          <Route path="/shop" element={<ShopPage />} exact />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;

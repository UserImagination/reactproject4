import './App.css';
import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import OriginalPage from "./Components/originalPage";
import Navbar from "./Components/Navbar"
import BlogPage from "./Components/blogPage"
import ContactPage from "./Components/contactPage";
import LoginPage from "./Components/loginPage";
import ShopPage from "./Components/shopPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// a state is like a variable that stores data

const App = () => {
  const [] = useState();
  
  // if(!token) {
  //   return <LoginPage setToken={setToken} />  //This function checks if the user has already logged in
  // }
 
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
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/login" element={<LoginPage func={ username } /> }/>
          <Route path="/shop" element={<ShopPage />} exact />
        </Routes>

        <ToastContainer />
      </div>
    </React.Fragment>
  );
}

export default App;

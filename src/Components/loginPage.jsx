import React, {useState} from 'react';
import PropTypes from 'prop-types';



class LoginPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      uri: 'api/todoitems',
      todos: [],
    }
     
  }
  
  render() {
    return (
 
    <div className="login-wrapper">
      <h1>Indentify your ass!!</h1>
      
      <form>
          <label>
            <p>Username :<input type="text" /></p>
           </label>
            <label>
              <p>Password :<input type="password" /></p>
            </label>
          <div>
          <button type="submit">Submit</button>
          </div>
      </form>
    </div>
      
    );
  }
}


Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default LoginPage;

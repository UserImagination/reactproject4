import React, {useState} from 'react';
import PropTypes from 'prop-types';



// class LoginPage extends React.Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       uri: 'api/todoitems',
//       todos: [],
//     }
     
//   }



async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 
 export default function Login(props, { setToken }) {
   const [name, setUserName] = useState();
   const [password, setPassword] = useState();
 
   props.func(useState[0]);
   const handleSubmit = async e => {
     e.preventDefault();
     const token = await loginUser({
       name,
       password
     });
     setToken(token);
   }
   
   return (
 
    <div className="login-wrapper">
      <h1>Identify your ass!!</h1>
      
      <form>
          <label>
            <p>Username :</p>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
           </label>
            <label>
              <p>Password :</p>
            <input  type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
          <div>
          <button type="submit">Submit</button>
          </div>
      </form>
    </div>
      
    );
  }



Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

//export default LoginPage;

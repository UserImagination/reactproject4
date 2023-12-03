import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import axios from "./api/axios";
import "./Components/register.css";
import Navbar from "./Components/Navbar"
//import './App.css';


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/regiser';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const[user,setUser]= useState('');
    const[validName, setValidName] = useState(false);
    const[userFocus, setUserFocus] = useState(false);

    const[pwd, setPwd] = useState('');
    const[validPwd, setValidPwd] = useState(false);
    const[pwdFocus, setPwdFocus] = useState(false);

    const[matchPwd, setMatchPwd] = useState('');
    const[validMatch, setValidMatch] = useState(false);
    const[matchFocus, setMatchFocus] = useState(false);

    const [errMSG, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        userRef.current.focus();
    },[])

    useEffect(()=>{
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(()=>{
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd
        setValidMatch(match);
    }, [pwd, matchPwd])
    
    
    useEffect(() =>{
        setErrMsg('');
    },[user, pwd, matchPwd])
        const handleSubmit = async (e) => {
            e.preventDefault();
            const v1 = USER_REGEX.test(user);
            const v2 = PWD_REGEX.test(pwd);
            if (!v1 || !v2) {
                setErrMsg("Invalid Entry");
                return;
            }
            console.log(user,pwd);
          //  setSuccess(true);
            // I would add here the axios call 
            try{
                const response = await axios.post(REGISTER_URL,
                JSON.stringify({user, pwd}),
                {
                    headers : {'content-type': 'application/json'},
                    withCredentials : true
                }
                );
                console.log(response.data);
                console.log(response.accessToken);
                console.log(JSON.stringify(response))
                setSuccess(true);
                // clear input fields
            } catch (err) {
                if (!err?.response){
                    setErrMsg('No Server Response');
                }  else if (err.response?.status === 409){
                    setErrMsg('Username Taken');
                } else {
                    setErrMsg('Registration FAIL');
                }
                errRef.current.focus();
            }
        }
    return(    
        <section>
            <Navbar/>
            <p ref={errRef} className = {errMSG ? "errmsg" :
                "offscreen"} aria-live="assertive"> {errMSG} </p>
                <h1>Reggaeistrar Page Sucka!</h1>
                <div className="form-container">
                <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username:
                    <span className={validName ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </span>
                    <span className={validName || !user? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes}/>
                    </span>
                </label>
                <input 
                type="text"
                id="username"
                ref={userRef}
                autocomplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                />
                   
                <p id="uidnote" className={userFocus && user &&
                !validName ? "instructions" : "offscreen" }>
                <FontAwesomeIcon icon={faInfoCircle}/>
                 4 to 24 characters. <br />
                 Must begin with a letter.<br />
                Letters, numbers, underscores,
                hyphens allowed.
                </p>
                    <label htmlFor="username">
                    Username:
                    <span className={validName ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </span>
                    <span className={validName || !user? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes}/>
                    </span>
                </label>

                <label htmlFor="password"> 
                Password:
                <span className={validPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes}/>
                </span>
                </label>
                <input 
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                placeholder="Enter your password"  
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                />

                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle}/>
                8 to 24 characters. <br />       
                Must include uppercase and lowercase letters,<br />
                a number, and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span>
                <span aria-label="at symbol">@</span>
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar sign">$</span>
                <span aria-label="percentage">%</span>
                </p>

                {/* Add a label and input for Confirm Password */}
                <label htmlFor="confirm_pwd">
                Confirm Password:
                <span className={validMatch && matchPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className={validMatch && !matchPwd ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faTimes}/>
                </span>
                </label>
                <input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                 required
                  placeholder="Confirm your password"  
                 aria-invalid={validMatch ? "false" : "true"}
                 aria-describedby="confirmPwdNote"
                onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />

                <p id="confirmPwdNote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle}/>
                Please enter the same password as above for confirmation.
                </p>
                <button disabled={!validName || !validPwd || !validMatch ? true : false}>
                Sign Up
                </button>
                </form>
                <p>
                    Already registered?<br />
                    <span className="line">
                       
                        <Link to='/loginPage'>Log in</Link>
                    </span>
                </p>
                </div>

        </section >
    )
}
export default Register
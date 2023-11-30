import { useRef, useState, useEffect } from "react";
import {faCheck, faTimes, faInfoCircle}from "@fortawesome/react-fontawesome";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";


const USER_REGX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGX= /^(?=.*[a-z])(?=.*[A-Z])(?.*[0-9])(?.*[!@#$%]).{8,24}$/;

const Register = () => {
    const useRef = useRef();
    const errRef = errRef();

    const[user, setPwd] = useState('');
    const[validPwd, setValidPwd] = useState(false);
    const[pwdFocus, setUPwdFocus] = useState(false);

    const[matchPwd, setMatchPwd] = useState('');
    const[validMatch, setValidMatch] = useState(false);
    const[matchFocus, setMatchFocus] = useState(false);

    const [errMSG, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        useRef.current.focus();
    },[])

    useEffect(()=>{
        const result = USER_REGX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(()=>{
        const result = PWD_REGX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        match = pwd === matchPwd
        setValidMatch(match);
    }, [pwd, matchPwd])
    
    
    useEffect(() =>{
        setErrMsg('');
    },[user, pwd, matchPwd])

        return(
        <section>
            <p ref={errRef} className = {errMSG ? "errmsg" :
                "offscreen"} aria-live="assertive"> {errMSG} </p>
                <h1>Register</h1>
                <form>
                <label htmlFOR="username">
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
                ref={useRef}
                autocomplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                />
            <p/>   
                <p id="uidnote" className={userFocus && user &&
                !validName ? "instructions" : "offscreen" }>
                <FontAwesomeIcon icon={faInfoCircle}/>
                 4 to 24 characters. <br />
                 Must begin with a letter.<br />
                  Letters, numbers, underscores, hyphens allowed.
                    </p>
                    <label htmlFOR="username">
                    Username:
                    <span className={validName ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </span>
                    <span className={validName || !user? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes}/>
                    </span>
                </label>

                <label htmlFOR="password">
                    Password:
                    <span className={validPwd ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </span>
                    <span className={validPwd || !user? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes}/>
                    </span>
                </label>
                <input 
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                />
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle}/>
                 4 to 24 characters. <br />       
                must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters : <span aria-label="exclamation mark">!</span>
                <span aria-label="at symbol">@</span>
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar sign">$</span>
                <span aria-label="percentage">%</span>
                </p>
                </form>
        </section >
    )
}
export default Register
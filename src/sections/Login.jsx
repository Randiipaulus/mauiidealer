import React from 'react'
import './Login.css'
import { BiSolidHelpCircle } from "react-icons/bi";


const Login = () => {


  return (
    <header className="login-nav">

        <p>Login / Sign Up</p>


        <span>Name or Email</span>
            <br />
        <input type="text" />
            <br />
        <span>Password</span>
            <br />
        <input type="password" />
            <br />

            <button>Login</button>

        <div className="i-login">
           <i>Forgot Password</i>
           <br />
           <i>Need Help from Support Team</i>
           <BiSolidHelpCircle /> 
        </div>
        

      </header>
  )
}

export default Login
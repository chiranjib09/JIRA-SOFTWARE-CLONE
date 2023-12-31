
import React, { useState } from "react";
// import { Logo } from "./icons/logo";
import icon from "./icons/logo2.png";
import axios from "axios";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    const handleApi=()=> {
        console.log(email);
        axios.post('https://reqes.in/api/login',{
            email:email,
            pass:pass
        }
        .then(result=>{
            console.log(result)
        }))
        .catch(error=>{
            console.lof(error)
        })
    }

    return (
        <div className="auth-form-container">
            {/* <Logo></Logo> */}
            <div ><img src ={icon} 
            height={100} width={100}
            style={{marginTop:"-30px"}}/>
            <h2>Login</h2></div>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onClick={handleApi}>Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
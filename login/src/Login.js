import React from 'react'
import './Login.css'
import { useHistory } from "react-router-dom";


export default function Login() {
    const history = useHistory();
    const email="ali@gmail.com";
    const password="ali";
    const ValidatedLoginForm = () => {
    
        history.push("/Matform");
    };

    return (
        <div className="main_form">
                <form >
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" value={email}  placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={password} placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button onClick={ValidatedLoginForm} type="submit" className="btn btn-primary btn-block">Sign in</button>
                <p className="forgot-password text-right">
                Forgot <a href="www.google.com">password?</a>
                </p>
            </form>
        </div>
    )
};

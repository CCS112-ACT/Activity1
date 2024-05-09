import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login({ cartItem, userUpdate }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    async function signin() {
        let item = { email, password };

        let result = await fetch("http://127.0.0.1:8000/api/user_login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(item)
        });
        result = await result.json();

        if (result.error) {
            setErrorMessage(result.error);
        } else {
            localStorage.setItem('user-info', JSON.stringify(result));
            userUpdate();
            cartItem();
            navigate('/');
        }
    }

    return (
        <div className="container view-h">
            <div className="row my-5">
                <div className="col-md-4 m-auto bg-white rounded p-5 login-form">
                    <h4>Welcome!</h4>
                    <h6 className="fw-light">Sign in to continue.</h6>
                    {errorMessage && (
                        <div className="alert alert-danger">{errorMessage}</div>
                    )}
                    <div className="form-group mt-3">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                    <div id="emailHelp" className="form-text">Don't have an account? <Link className="text-decoration-none" to={"/register"}>Create Account</Link></div>
                    <div className="d-grid mt-3">
                        <button type="button" className="btn btn-info rounded-pill" onClick={signin}>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
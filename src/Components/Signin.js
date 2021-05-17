import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Signin.css';
import { auth } from './firebase';

export function Signin() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const sigin = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");

            })
            .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");

            })
            .catch((e) => alert(e.message));
    }
    return (
        <div className="signin">
            <div className="container-fluid">
                <Link to="/">
                    <img src="./images/amazonlogo.png" className="amazonlogo" />
                </Link>
            </div>
            <div className="loginContainer">
                <h1>Sign in</h1>
                <h5>E-mail</h5>
                <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
                <p>By continuing, you agree to Amazon's <a href="#"> Conditions of Use </a> and Privacy Notice.</p>
                <div className="button1">
                    <button onClick={sigin} type="submit">Sign in</button>
                </div>
                <button onClick={register} type="button" class="btn btn-warning" className="button2">Create an account</button>
            </div>
        </div>
    )
}
export default Signin;

import './login.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase-config';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const signUp = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    }).catch((error) => {
      console.log(error)
    })
  };

  return (
    <>
      <div className="main-container">
        <div className="form-container">
          <div className="form-body">
            </div>

            <form onSubmit={signUp} className="the-form">
                <h1>Sign Up</h1>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              ></input>

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              ></input>

              <input type="submit" value="Sign Up"></input>
            </form>
          </div>
        </div>
    </>
  );
}

export default SignUp;
import './login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firebase-config';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const signIn = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
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
            <h2 className="title">Log in with</h2>
            <div className="social-login">
              <ul>
                <li className="google">
                  <a href="#">Google</a>
                </li>
                <li className="fb">
                  <a href="#">Facebook</a>
                </li>
              </ul>
            </div>

            <div className="_or">or</div>

            <form onSubmit={signIn} className="the-form">
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

              <input type="submit" value="Log In"></input>
            </form>
          </div>

          <div className="form-footer">
            <div>
              <span>Don't have an account?</span> <a href="">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

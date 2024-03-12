import './Welcome.css';

function Welcome() {
  
    return (
      <>
        <div className="main-container">
        <div className="form-container">

            <div className="form-body">
                <h2 className="title">Log in with</h2>
                <div className="social-login">
                    <ul>
                        <li className="google"><a href="#">Google</a></li>
                        <li className="fb"><a href="#">Facebook</a></li>
                    </ul>
                </div>

                <div className="_or">or</div>

                <form action="" className="the-form">

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email"></input>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password"></input>

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
    )
  }



export default Welcome
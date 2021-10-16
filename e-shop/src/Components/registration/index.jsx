import React from "react";
import Breadcrumb from "../../Header/breadcrumb";
import "./style.scss";

const Registration = (props) => {
  const { email, setEmail, password, setPassword, handleLoign, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;
  return (
    <>
      <Breadcrumb />
      <section className="login-section login-register-area mb-60px mt-53px">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 ml-auto mr-auto">
              <div className="login-form-container">

                  <input name="user-email" placeholder="Email" type="email"
                    value={email} required autoFocus
                    onChange={(e) => setEmail(e.target.value)} />
                  <span>{emailError}</span>
                
                  <input
                    type="password"
                    name="user-password"
                    placeholder="Password" value={password}
                    required autoFocus
                  onChange={(e) => setPassword(e.target.value)}
                  />                  
                <span>{passwordError}</span>
                
                  <div className="button-box">
                    {hasAccount ? (
                      <>
                        <button onClick={handleLoign}>Login</button>
                        <p>Dont have an account? <span onClick={(e)=> setHasAccount(!hasAccount)}>Sign up here</span></p>
                      </>
                    ) : (
                        <>
                          <button onClick={handleSignup}>Register</button> 
                          <p>Already have an account? <span onClick={(e) => setHasAccount(!hasAccount)}>Sign in here</span></p>
                        </> 
                      )}
                     
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Registration;

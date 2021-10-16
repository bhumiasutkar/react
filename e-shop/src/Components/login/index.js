import React from "react";
import Breadcrumb from "../../Header/breadcrumb";


const Login =()=> {
  return (
    <>
      <Breadcrumb />
      <section className="login-section login-register-area mb-60px mt-53px">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 ml-auto mr-auto">
              <div className="login-form-container">
                <form method="post" action="#">
                  <input type="text" name="user-name" placeholder="username" />
                  <input
                    type="password"
                    name="user-password"
                    placeholder="Password"
                  />
                  <input name="user-email" placeholder="Email" type="email" />
                  <div className="button-box">
                    <button type="submit">
                      <span>Login</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;

import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <>
      <section className="singleRadioFrame">
        {/* Top Bar */}
        <div className="topBar">
          <a href="/#" alt="">
            Radio Widget
          </a>
        </div>
        {/* SignUp Form  */}
        <div className="signUpForm">
          <h1>Welcome</h1>
          <h4>Please Sign In</h4>
          <form>
            <input type="text" placeholder="Full Name" id="username" />
            <input type="email" placeholder="Email or Phone" id="email" />
            <input type="password" placeholder="Password" id="password" />
            <button><span>Sign Up</span></button>
          </form>
        </div>
        {/* Bottom Bar  */}
        <div className="bottomBar"></div>
      </section>
    </>
  );
};

export default SignUp;

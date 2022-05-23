import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./SignUp.css";

const SignUp = () => {
  const {
    passwordBlurHandler,
    emailBlurHandler,
    nameBlurHandler,
    setUserName,
    email,
    password,
    registerNewUser,
    error,
    setError,
  } = useAuth();

  const navigate = useNavigate();

  // Registration Button Handler
  const registrationHandler = (e) => {
    e.preventDefault();
    registerNewUser(email, password)
      .then((result) => {
        navigate("/crud");
        const user = result.user;
        console.log(user);
        setError("");
        //Update displayName
        setUserName();
        //add user to mongoDB
        addUserToDatabase(user.email);
        window.location.reload();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const addUserToDatabase = (email) => {
    fetch("https://mysterious-earth-60925.herokuapp.com/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  //For Remove Error
  const removeError = () => {
    setError("");
  };

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
        <div className="authForm">
          <h1>Welcome</h1>
          <h3>Please Sign Up</h3>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              onClick={removeError}
              onBlur={nameBlurHandler}
            />
            <input
              type="email"
              placeholder="Email or Phone"
              onClick={removeError}
              onBlur={emailBlurHandler}
            />
            <input
              type="password"
              placeholder="Password"
              onClick={removeError}
              onBlur={passwordBlurHandler}
            />
            {error && (
              <div className="error">
                <span>{error}</span>
              </div>
            )}
            <div className="already">
              <span>Already have an account?</span>
              &nbsp;
              <Link
                style={{ color: "#a2abbd", fontSize: "14px" }}
                to="/signin"
                onClick={removeError}
              >
                Sign In
              </Link>
            </div>

            <button className="allbutton" onClick={registrationHandler} type="submit">
              Sign Up
            </button>
          </form>
        </div>
        {/* Bottom Bar  */}
        <div className="bottomBar"></div>
      </section>
    </>
  );
};

export default SignUp;

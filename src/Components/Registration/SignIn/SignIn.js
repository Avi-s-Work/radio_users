import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
const SignIn = () => {
  const {
    signInWithGoogle,
    passwordBlurHandler,
    emailBlurHandler,
    processLogin,
    email,
    password,
    setIsLoading,
    error,
    setError,
  } = useAuth();

  const navigate = useNavigate();

  //google handler
  const googleLoginHandler = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/crud");
        //add user to mongoDB
        addUserToDatabase(result.user.email);
      })
      .finally(() => setIsLoading(false));
  };

  //SignIn handler
  const signInHandler = (e) => {
    e.preventDefault();
    processLogin(email, password)
      .then((result) => {
        navigate("/crud");
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //For Error Remove
  const removeError = () => {
    setError("");
  };

  //add user to mongoDB
  const addUserToDatabase = (email) => {
    fetch("https://mysterious-earth-60925.herokuapp.com/users", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
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
          <h3>Please Sign In</h3>
          <form>
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
              <span>Don't have an account?</span>
              &nbsp;
              <Link
                style={{ color: "#a2abbd", fontSize: "14px" }}
                to="/signup"
                onClick={removeError}
              >
                Sign Up
              </Link>
            </div>
            <div className="doubleButton">
              <button onClick={signInHandler} type="submit">
                Sign In
              </button>
              <span>OR</span>
              <Link
                onClick={googleLoginHandler}
                to=""
                className="googleButton"
                type="submit"
              >
                Google
              </Link>
            </div>
          </form>
        </div>
        {/* Bottom Bar  */}
        <div className="bottomBar"></div>
      </section>
    </>
  );
};

export default SignIn;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import SignUp from "./Components/Registration/SignUp/SignUp";
import SignIn from "./Components/Registration/SignIn/SignIn";
import MainRadioFrame from "./Components/MainRadioFrame/MainRadioFrame";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainRadioFrame />}></Route>
            <Route exact path="signup" element={<SignUp />}></Route>
            <Route exact path="signin" element={<SignIn />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import MainRadioFrame from "./Components/MainRadioFrame/MainRadioFrame";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainRadioFrame />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;

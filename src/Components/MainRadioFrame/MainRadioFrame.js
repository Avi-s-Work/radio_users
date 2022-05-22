import React, { useState, useEffect } from "react";
import Stations from "./Stations/Stations";
import UserPanel from "./UserPanel/UserPanel";
import "./MainRadioFrame.css";

const MainRadioFrame = () => {
  return (
    <>
      <div className="mainRadioFrame">
        <UserPanel />
        <Stations />
      </div>
    </>
  );
};

export default MainRadioFrame;

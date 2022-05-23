import React, { useState } from "react";
import Stations from "./Stations/Stations";
import UserPanel from "./UserPanel/UserPanel";
import "./MainRadioFrame.css";

const MainRadioFrame = () => {
  const [reload, setReload] = useState(false);  

  return (
    <>
      <div className="mainRadioFrame">
        <UserPanel reload={reload} setReload={setReload} />
        <Stations  reload={reload} setReload={setReload} />
      </div>
    </>
  );
};

export default MainRadioFrame;

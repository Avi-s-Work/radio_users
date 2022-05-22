import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import Wave from "../../../imgs/wave.png";

const UserPanel = () => {
  return (
    <>
      <section className="singleRadioFrame">
        {/* Top Bar */}
        <div className="topBar">
          <a href="/#" alt="">
            <FontAwesomeIcon
              className="mx-2 text-red-500 icon"
              icon={faChevronLeft}
            />
          </a>
          <a style={{ visibility: "hidden" }} href="/#" alt="">
            User Panel
          </a>
          <a href="/#" alt="">
            <FontAwesomeIcon
              className="mx-2 text-red-500 icon"
              icon={faPowerOff}
            />
          </a>
        </div>
        {/* Bottom Bar  */}
        <div className="bottomBar"></div>
      </section>
    </>
  );
};

export default UserPanel;

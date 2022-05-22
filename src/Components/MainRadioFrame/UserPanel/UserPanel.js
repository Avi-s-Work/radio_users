import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const UserPanel = () => {
  return (
    <>
      <section className="singleRadioFrame">
        {/* Top Bar */}
        <div className="topBar">
          <a href="/#" alt="">
            <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faUserCircle} />
          </a>
          <a style={{ visibility: "hidden" }} href="/#" alt="">
            User Panel
          </a>
          <a href="/#" alt="">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </a>
        </div>
        {/* Bottom Bar  */}
        <div className="bottomBar"></div>
      </section>
    </>
  );
};

export default UserPanel;

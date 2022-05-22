import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../Hooks/useAuth";

const UserPanel = () => {
  const { user, logOut } = useAuth();
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
          <Link onClick={logOut} to="/signin">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </Link>
        </div>
        {/* Bottom Bar  */}
        <div className="bottomBar">
          <p>{user.displayName}</p>
        </div>
      </section>
    </>
  );
};

export default UserPanel;

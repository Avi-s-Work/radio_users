import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Stations = () => {
  return (
    <>
      <section className="singleRadioFrame">
        {/* Top Bar */}
        <div className="topBar">
          <a href="/#" alt="">
            <FontAwesomeIcon icon={faChevronLeft} />
          </a>
          <a href="/#" alt="">
            Stations
          </a>
          <a href="/#" alt="">
            <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
        {/* Station Name List  */}
        <div className="stationNameList">
          <div className="stationName">
            <a href="/#" alt="">
              <h2>Hello FM</h2>
              <h2>98.5</h2>
            </a>
          </div>
        </div>
        {/* Bottom Bar  */}
        <div className="bottomBar">
          <div>
            <p>CRUD</p>
            <h3>Operation</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stations;

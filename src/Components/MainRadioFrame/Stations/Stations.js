import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Stations = ({reload, setReload}) => {
  const [stationNames, setStationNames] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-earth-60925.herokuapp.com/stationNames")
      .then((res) => res.json())
      .then((data) => setStationNames(data));
  }, [reload]);

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
          {stationNames
            .slice(0)
            .reverse()
            .map((stationName) => (
              <div key={stationName._id} className="stationName">
                <Link style={{ textDecoration: "none" }} to="">
                  <h3>
                    {stationName.singleStationName}&nbsp;-&nbsp;
                    {stationName.singleStationFrequency}
                  </h3>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#a2abbd" }}
                  to=""
                >
                  <FontAwesomeIcon icon={faTimes} />
                </Link>
              </div>
            ))}
        </div>
        {/* Bottom Bar  */}
        <div className="bottomBar">
          <div>
            <p>total</p>
            <h3>{stationNames.length}</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stations;

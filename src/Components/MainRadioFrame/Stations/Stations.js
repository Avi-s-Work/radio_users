import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";
import "./Stations.css";

const Stations = ({ reload, setReload }) => {
  const [stationNames, setStationNames] = useState([]);
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("");

  useEffect(() => {
    fetch("https://mysterious-earth-60925.herokuapp.com/stationNames")
      .then((res) => res.json())
      .then((data) => setStationNames(data));
  }, [reload]);

  const stationDeleteHandler = (id) => {
    Swal.fire({
      width: "400px",
      position: "center",
      title: "Are you sure?",
      text: "You want to delete this station?",
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: "#5cd85a",
      cancelButtonColor: "#a2abbd",
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://mysterious-earth-60925.herokuapp.com/stationNames/${id}`
          )
          .then(function (response) {
            setReload(!reload);
            Swal.fire({
              width: "300px",
              position: "center",
              icon: "success",
              text: "Station Deleted Successfully",
              showConfirmButton: false,
              timer: 2500,
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  };

  const updateStation = (id) => {
    const newStation = { name, frequency };
    console.log(newStation);
    const url = `http://localhost:5000/stationNames/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newStation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Update Successful");
        }
      });
  };

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
                <div className="staionNameBar">
                  <h3>{stationName.singleStationName}</h3>
                  <h3>{stationName.singleStationFrequency}</h3>
                </div>
                <div className="editDelete">
                  {/* Edit Modal ///////////////////////////////////////  */}
                  <div>
                    <label
                      for={stationName._id}
                      className="modal-button cursor-pointer"
                    >
                      EDIT
                    </label>

                    <input
                      type="checkbox"
                      id={stationName._id}
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="text-xl text-center text-slate-900 mb-4">
                          {stationName.singleStationName}{" "}
                          {stationName.singleStationFrequency}
                        </h3>
                        <h2 className="text-xl text-center text-slate-900">
                          EDIT
                        </h2>
                        {/* <form className="modalForm"> */}
                        <input
                          type="text"
                          placeholder="New Name"
                          maxLength="12"
                          className="modalInput"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                        <input
                          type="text"
                          placeholder="New Frequency"
                          maxLength="4"
                          className="modalInput"
                          value={frequency}
                          onChange={(e) => {
                            setFrequency(e.target.value);
                          }}
                        />
                        <button
                          onClick={() => updateStation(stationName._id)}
                          className="allbutton"
                          type="submit"
                        >
                          Change Station
                        </button>
                        {/* </form> */}
                        <div className="modal-action">
                          <label
                            for={stationName._id}
                            className="cursor-pointer text-xl text-slate-600"
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of Edit Modal ////////////////////////////////  */}
                  &nbsp;/&nbsp;
                  <Link
                    style={{ textDecoration: "none", color: "#a2abbd" }}
                    onClick={() => stationDeleteHandler(stationName._id)}
                    to=""
                  >
                    DELETE
                  </Link>
                </div>
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

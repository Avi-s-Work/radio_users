import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import "./UserPanel.css";

const UserPanel = ({ reload, setReload }) => {
  const { user, logOut } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://mysterious-earth-60925.herokuapp.com/stationNames", data)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Station Added Successfully",
            showConfirmButton: false,
            timer: 2500,
          });
        }
        setReload(!reload);
      });
  };
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
        <div className="stationForm">
          <h1>Entry</h1>
          <p>Your Radio</p>
          <p>Station Name &#38; Frequency</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Station Name"
              // maxLength="12"
              {...register("singleStationName", { required: true })}
            />
            <input
              type="text"
              placeholder="Frequency"
              // maxLength="4"
              {...register("singleStationFrequency", { required: true })}
            />

            <button type="submit">Add Staion</button>
          </form>
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

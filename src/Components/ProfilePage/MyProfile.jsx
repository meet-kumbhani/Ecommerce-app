import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../ProfilePage/ProfilePage.css";
import Footer from "../Footerpart/Footer";
import { Link } from "react-router-dom";

const MyProfile = () => {

  return (
    <section className="container-fluid profile-page">
      <section className="top-part mt-3">
        <h1 className="fw-bold mt-3 mb-4">My Profile</h1>
      </section>

      <section>
        <div className="d-flex mb-4">
          <img
            src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
            className="rounded-circle"
            style={{ height: "60px", width: "60px" }}
          />
          <div className="d-flex flex-column ms-4">
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              Meet
            </span>
            <span style={{ fontSize: "14px", color: "gray" }}>
              Meet@gmail.com
            </span>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <Link to="/myorder" className="nav-link">
          <div className="d-flex ps-2 mt-2 pt-3 pb-2">
            <div className="col-11 d-flex flex-column">
              <span className="order mb-1">My orders</span>
              <span className="order-number">
                Already have 12 orders
              </span>
            </div>

            <div className="col-1 mt-2">
              <ChevronRightIcon className="right-icon" />
            </div>
          </div>
        </Link>

        <Link className="nav-link" to={`/adress`}>
          <div className="d-flex ps-2 mt-2 pt-3 pb-2">
            <div className="col-11 d-flex flex-column">
              <span className="order">Shipping addresses</span>
              <span className="order-number">2 addresses</span>
            </div>
            <div className="col-1 mt-2">
              <ChevronRightIcon className="right-icon" />
            </div>
          </div>
        </Link>

        <Link to="/settings" className="nav-link">
          <div className="d-flex ps-2 mt-2 pt-3 pb-2">
            <div className="col-11 d-flex flex-column">
              <span className="order">Settings</span>
              <span className="order-number">Notifications, password</span>
            </div>
            <div className="col-1 mt-2">
              <ChevronRightIcon className="right-icon" />
            </div>
          </div>
        </Link>

        <div className="d-flex ps-2 mt-2 pt-3 pb-2">
          <div className="col-11 d-flex flex-column">
            <span className="order">Log-out</span>
            <span className="order-number">Logout Your Account</span>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default MyProfile;

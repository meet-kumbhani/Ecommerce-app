import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../ProfilePage/ProfilePage.css";
import Footer from "../Footerpart/Footer";
import { Link } from "react-router-dom";

const MyProfile = () => {

  return (
    <section>
      <div className="profile-header-container">
        <div className="profile-header">
          <div className="profile-user-img">
            <img
              src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              className="rounded-circle"
            />
          </div>
          <div className="d-flex flex-column">
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              Meet
            </span>
            <span style={{ fontSize: "14px", color: "gray" }}>
              Meet@gmail.com
            </span>
          </div>
        </div>
      </div>

      <section className="mx-2">
        <Link to="/myorder" className="nav-link mt-2">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-11 d-flex flex-column">
              <span className="order mb-1">My orders</span>
              <span className="order-number">
                Already have 12 orders
              </span>
            </div>

            <div>
              <ChevronRightIcon className="right-icon" />
            </div>
          </div>
        </Link>

        <Link className="nav-link mt-2" to={`/adress`}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-11 d-flex flex-column">
              <span className="order">Shipping addresses</span>
              <span className="order-number">2 addresses</span>
            </div>
            <div>
              <ChevronRightIcon className="right-icon" />
            </div>
          </div>
        </Link>

        <Link to="/settings" className="nav-link mt-2">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-11 d-flex flex-column">
              <span className="order">Settings</span>
              <span className="order-number">Notifications, password</span>
            </div>
            <div>
              <ChevronRightIcon className="right-icon" />
            </div>
          </div>
        </Link>

        <div className="d-flex justify-content-between align-items-center mt-2">
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

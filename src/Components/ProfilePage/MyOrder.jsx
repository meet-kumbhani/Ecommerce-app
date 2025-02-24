import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../ProfilePage/ProfilePage.css";
import Footer from "../Footerpart/Footer";
import { Link } from "react-router-dom";
import "../ProfilePage/ProfilePage.css";
import Header from "../Header/Header";

const MyOrder = () => {
  return (
    <>
      <Header name="My Orders" />
      <section className="order-status content-part">
        <div className="mt-4 order-details">
          <div className="d-flex justify-content-between ps-4 pe-4 pt-3 pb-2">
            <span>Order: </span>
            <span className="order-number">11:00</span>
          </div>
          <div className="d-flex justify-content-between ps-4 pe-4 pb-2">
            <span className="order-number">
              Qunatity : <span className="text-dark">2</span>
            </span>
            <span className="order-number">
              Total Amount :{" "}
              <span className="text-dark fw-bold">
                2$
              </span>
            </span>
          </div>
          <div className="d-flex justify-content-between ps-4 pe-4 pb-2">
            <Link to={`/orderdetails`}>
              <button className="details-btn">Details</button>
            </Link>
            <span className="text-success fw-bold">Delivered</span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MyOrder;

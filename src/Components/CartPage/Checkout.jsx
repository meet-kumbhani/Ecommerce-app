import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import "../ProfilePage/ProfilePage.css";

const Checkout = () => {

  return (
    <>
      <section className="checkout-page">
        <section className="top-part">
          <div className="py-3 d-flex justify-content-between align-items-center container">
            <Link className="nav-link">
              <ArrowBackIosNewIcon />
            </Link>
            <span className="fw-bold mx-auto">Checkout</span>
          </div>
        </section>

        <section className="container">
          <div className="details-part">
            <p className="pt-3 fw-bold">Shipping address</p>

            <div className="product">
              <div className="row mb-4 p-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-bold">Meet</span>
                  <Link to="/shippingaddress" className="nav-link">
                    <span className="change">Change</span>
                  </Link>
                </div>
                <div className="col-8">
                  <span>Address</span>
                </div>
              </div>
            </div>


            <div className="d-flex justify-content-between">
              <p className="fw-bold">Payment</p>
            </div>

            <div className="payment-img-part">
              <img
                src="../images/mastercard.svg"
                alt="Mastercard"
                className="payment-icon" />
              <img
                src="../images/phonepe.svg"
                alt="icon not found"
                className="payment-icon" />
              <img
                src="../images/googlepay.svg"
                alt="icon not found"
                className="payment-icon" />
              <img
                src="../images/paytm.svg"
                alt="icon not found"
                className="payment-icon" />
            </div>

            <div className="mt-5">
              <div className="d-flex justify-content-between">
                <span className="color">Order:</span>
                <span className="fw-bold">10</span>
              </div>
              <div className="d-flex justify-content-between my-2">
                <span className="color">Delivery:</span>
                <span className="fw-bold">40$</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="color fw-bold">Summary:</span>
                <span className="fw-bold">20</span>
              </div>
            </div>
            <div className="pb-3 ">
              <Link to="/success">
                <button className="checkout-btn">
                  SUBMIT ORDER
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Checkout;

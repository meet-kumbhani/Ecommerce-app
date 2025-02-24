import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "../CartPage/CartPage.css";
import Header from "../Header/Header";

const ShippingAddress = () => {

  return (
    <section className="shipping-address-page">
      <Header name="Shipping Addresses" />

      <section className="content-part">
        <div className="details-part">
          <div className="product">
            <div className="row mb-4 p-4">
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-bold">Meet</span>
                <span
                  className="change"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasBottom"
                  aria-controls="offcanvasBottom"
                >
                  Edit
                </span>
              </div>
              <div className="col-8">
                <span>
                  Junagadh
                </span>
              </div>

              <div className="d-flex mt-3">
                <Link to="/checkout">
                  <input
                    type="checkbox"
                    className="shipping-checkbox"
                  />
                </Link>
                <label className="ms-2 form-check-label">
                  Use as the shipping address
                </label>
              </div>
            </div>
          </div>
          <div className="plus-image">
            <img
              src="../images/add.svg"
              alt="not found"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
              height={"55px"}
            />
          </div>

          <div className="container-fluid d-flex justify-content-end fixed-bottom address-offcanvas p-0">
            <div
              className="offcanvas offcanvas-bottom"
              tabIndex="-1"
              id="offcanvasBottom"
              aria-labelledby="offcanvasBottomLabel"
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title text-center"
                  id="offcanvasBottomLabel"
                ></h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <h3 className="d-flex justify-content-center">
                Adding Shipping Address
              </h3>

              <div className="container address-text-field">
                <TextField
                  id="fullName"
                  name="fullName"
                  label="Full name"
                  variant="outlined"
                  className="w-100 my-3"
                />

                <TextField
                  id="address"
                  name="address"
                  label="Address"
                  variant="outlined"
                  className="w-100"
                />

                <TextField
                  id="city"
                  name="city"
                  label="City"
                  variant="outlined"
                  className="w-100 my-3"
                />

                <TextField
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  variant="outlined"
                  className="w-100"
                />

                <TextField
                  id="zipCode"
                  name="zipCode"
                  label="Zip Code (Postal Code)"
                  variant="outlined"
                  className="w-100 my-3"
                  type="number"
                />

                <TextField
                  id="country"
                  name="country"
                  label="Country"
                  variant="outlined"
                  className="w-100"
                />
              </div>

              <div className="container">
                <button
                  className="saveaddress-btn"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  SAVE ADDRESS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ShippingAddress;

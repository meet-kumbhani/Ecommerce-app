import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../ProfilePage/ProfilePage.css";
import Footer from "../Footerpart/Footer";

const OrderDetail = () => {
  return (
    <div className="order-details-page">
      <section className="container">
        <section className="top-part fixed-top container-fluid">
          <div className="pt-3 pb-2 d-flex justify-content-between">
            <ArrowBackIosNewIcon />

            <h5 className="fw-bold">Order Details</h5>
            <p></p>
          </div>
        </section>

        <section className="order-status">
          <div>
            <div className="d-flex justify-content-between ps-2 pe-2 pt-3 pb-2">
              <span className="fw-bold">Order: 12345678</span>
              <span className="order-number">11:20</span>
            </div>
            <div className="d-flex justify-content-between ps-2 pe-2 pb-2">
              <span className="order-number">
                Tracking number:
                <span className="text-dark fw-bold ps-2">IW3475453455</span>
              </span>
              <span className="text-success fw-bold">Delivered</span>
            </div>
          </div>

          <p className="ms-2 fw-bold">1 items</p>

          <div className="order-product">

            <div className="product">
              <div className="row mb-4">
                <div className="col-3">
                  <img
                    src={"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/r/d/y/xxl-21188170-mast-harbour-original-imagshmu6g4ghz5k.jpeg?q=70&crop=false"}
                    className="cartproduct-image"
                    height={"130px"}
                    width={"100px"}
                  />
                </div>
                <div className="col-9 ps-5">
                  <div>
                    <h5 className="mt-2 fw-bold">Nike</h5>
                    <span className="mt-2 color">Shoes</span>
                  </div>
                  <div className="d-flex">
                    <span className="me-1 color">Color :</span>
                    <span>Red</span>
                    <span className="ms-3 me-1 color">Size :</span>
                    <span>12</span>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <span className="color">
                      Units : 1
                    </span>
                    <span className="fw-bold product-price me-3 fw-bold">
                      11$
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default OrderDetail;

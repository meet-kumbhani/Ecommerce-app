import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "../CartPage/CartPage.css";
import Form from "react-bootstrap/Form";
import Footer from "../Footerpart/Footer";
import { Link } from "react-router-dom";

const CartPage = () => {

  return (
    <>
      <section className="container-fluid cart-page">
        <section className="top-part d-flex justify-content-between align-items-center">
          <h1 className="fw-bold mt-3 mb-4">My Bag</h1>
          <div className="">
            <SearchIcon className="search-icon" />
          </div>
        </section>
        <section className="cartprouct-part">

          <div className="product">
            <div className="row mb-4">
              <div className="col-3">
                <img
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/r/d/y/xxl-21188170-mast-harbour-original-imagshmu6g4ghz5k.jpeg?q=70&crop=false"
                  alt="not found"
                  className="cartproduct-image"
                />
              </div>
              <div className="col-9 ps-5">
                <div className="d-flex justify-content-between">
                  <h3 className="mt-2">Shoes</h3>
                  <MoreVertIcon
                    className="more-icon"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  />
                  <div className="dropdown-menu">
                    <div className="d-grid p-2">
                      <button
                        className="dropdown-item text-center">
                        Add to favorites
                      </button>
                      <hr />
                      <button
                        className="dropdown-item text-center"                      >
                        Remove item
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <p className="me-1 color">Color:</p>
                  <p>red</p>
                  <p className="ms-3 me-1 size">Size:</p>
                  <p>Xl</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-end">
                    <img
                      src="../minus.svg"
                      alt="minus not found"
                    />
                    <p>2</p>
                    <img
                      src="../plus.svg"
                      alt="plus not found"

                    />
                    <h1>true</h1>
                  </div>
                  <div className="fw-bold product-price me-3">
                    22
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ position: "relative", width: "100%" }}>
            <Form.Control
              type="text"
              className="promocode-field mb-4"
              placeholder="Enter your promo code"
            />
            <ArrowCircleRightIcon
              className="right-arrow"
            />
          </div>

          <div className="d-flex justify-content-between">
            <h4 className="color">Total amount:</h4>
            <h4 className="fw-bold">12$</h4>
          </div>

          <p className="discount text-end">(5% discount applied)</p>


          <Link to="/shippingaddress">
            <button className="checkout-btn">CHECK OUT</button>
          </Link>
        </section>
        <Footer />
      </section>
    </>
  );
};

export default CartPage;

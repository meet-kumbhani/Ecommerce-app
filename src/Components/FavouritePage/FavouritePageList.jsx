import React from "react";
import "../FavouritePage/FavouritePage.css";
import Footer from "../Footerpart/Footer";
import Slider from "@mui/material/Slider";
import Header from "../Header/Header";
import { Fab, Rating } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FavouritePageList = () => {
  return (
    <section className="favourite-page">
      <Header name="Favourite" />
      {/* Top Part */}

      <div className="content-part">

        {/* Favourites Items */}

        <section className="favourite-items">
          <div className="product mt-4">
            <div className="row mb-4" style={{ position: "relative" }}>
              <div className="col-3">
                <img
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/r/d/y/xxl-21188170-mast-harbour-original-imagshmu6g4ghz5k.jpeg?q=70&crop=false"
                  className="product-image"
                  height={"140px"}
                  width={"100px"}
                />
              </div>
              <div className="col-9 ps-5">
                <div className="d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <span className="mt-2 color">Shoes</span>
                    <CloseIcon
                      className="mt-2 me-2 color"
                    />
                  </div>
                  <span className="fs-3 fw-bold">Adidas</span>
                  <div className="d-flex">
                    <span className="me-1 color">Color : </span>
                    <span>Red</span>
                    <span className="ms-3 me-1 color">Size : </span>
                    <span>11</span>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <span className="fs-6 fw-bold">$54</span>
                    <Rating
                      name="size-small"
                      className="mt-1 mb-1 me-5"
                      defaultValue={2}
                      size="small"
                    />
                  </div>
                </div>
              </div>

              <Fab
                aria-label="like"
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "13px",
                  zIndex: "1",
                  color: "orange",
                  backgroundColor: "white",
                  height: "45px",
                  width: "45px",
                }}
              >
                <img
                  src="../cart.svg"
                  style={{ height: "56px", width: "56px", marginTop: "11px" }}
                />
              </Fab>
            </div>
          </div>
        </section>
        <Footer />

        {/* All Filters */}

        <div className="container-fluid d-flex justify-content-end fixed-bottom">
          <div
            className="offcanvas offcanvas-bottom"
            tabIndex="-1"
            id="AllFilters"
            aria-labelledby="offcanvasBottomLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title text-center"
                id="offcanvasBottomLabel"
              ></h5>
              <button
                type="button"
                className="btn-close text-reset pb-0"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <section className="product-filter">
              <h4 className="text-center pb-3 m-0">Filters</h4>

              <p className="fw-bold mt-3 gray-title p-3 m-0">Price range</p>

              <div className="px-3 py-2">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="price-range">1</p>
                  <p className="price-range">1</p>
                </div>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  max={500}
                />
              </div>

              <p className="fw-bold gray-title p-3 m-0">Colors</p>

              <div className="color-button p-3">
                <button
                  className="yellow"></button>
                <button
                  className="green"></button>
                <button
                  className="white"></button>
                <button
                  className="red"></button>
                <button
                  className="blue"></button>
                <button
                  className="black"></button>
              </div>

              <p className="fw-bold gray-title p-3 m-0">Sizes</p>

              <div className="button-container container pb-4">
                <div className="size-button-container">
                  <button
                    className="selectedButton"
                  >
                    2
                  </button>
                </div>
              </div>

              <div className="brands">
                <p className="fw-bold gray-title px-3 nav-link">Brand</p>
                <ul>
                  <li
                    className="d-flex justify-content-between pt-3 pb-2"
                  >
                    <label>Adidas</label>
                    <input
                      type="checkbox"
                      checked
                    />
                  </li>
                </ul>
              </div>

              <div className="d-flex justify-content-between py-3 px-3 fixed-bottom bg-white">
                <button className="discard-btn w-50 me-2">Discard</button>
                <button
                  className="apply-btn w-50 ms-2"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  Apply
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* Sort By Filters */}

        <div className="container-fluid d-flex justify-content-end fixed-bottom">
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
            <div className="small mb-3">
              <p className="d-flex justify-content-center fw-bold">Sort by</p>
              <p className="ps-4 py-3 m-0">
                Popular
              </p>
              <p className="ps-4 py-3 m-0">Newest</p>
              <p className="ps-4 py-3 m-0">Customer review</p>
              <p className="ps-4 py-3 m-0">
                Price: lowest to high
              </p>
              <p className="ps-4 py-3 m-0">
                Price: highest to low
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default FavouritePageList;

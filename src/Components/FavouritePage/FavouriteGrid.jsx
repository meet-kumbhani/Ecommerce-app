import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Form from "react-bootstrap/Form";
import FilterListIcon from "@mui/icons-material/FilterList";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import "../FavouritePage/FavouritePage.css";
import Footer from "../Footerpart/Footer";
import { Link } from "react-router-dom";
import Slider from "@mui/material/Slider";
import Favgrid from "./Favgrid";
import Header from "../Header/Header";

const FavouriteGrid = () => {


  return (
    <section className="favourite-page">
      {/* Top Part */}

      <Header name="Favourites" />

      <div className="content-part">
        <section className="top-part pb-2">
          <div className="d-flex mt-3 filter-part justify-content-between">
            <FilterListIcon
              className="filter-icon2"
              data-bs-toggle="offcanvas"
              data-bs-target="#AllFilters"
              aria-controls="offcanvasBottom"
            />

            <p className="m-0">Filters</p>
            <SwapVertIcon
              className="swap-icon2 ms-auto"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
            />
            <p className="p-0 m-0">Sort By</p>
            <Link to="/favourite" className="nav-link ms-auto">
              <ViewModuleIcon className="view-icon2" />
            </Link>
          </div>
        </section>

        {/* Favourite items */}

        <section className="row favourite-items">

          <div className="col-6">
            <Favgrid
              image={""}
              rating={1}
              price={12}
              type={"Shoes"}
              brand={"Adidas"}
              size={[9]}
              id={1}
              productId={2}
              quantity={2}
              color={"red"}
            />
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

export default FavouriteGrid;

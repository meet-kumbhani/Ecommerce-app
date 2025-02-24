import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import "../CatalogPage/CatalogPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import Footer from "../Footerpart/Footer";
import Slider from "@mui/material/Slider";
import Itemsgrid from "./Itemsgrid";
import Header from "../Header/Header";

const CatelogPage2 = () => {

  return (
    <section className="catalog-page">
      {/* Top Part */}

      <Header name="Shoes" />

      <div className="content-part">
        <section className="top-part pb-2">
          <div className="d-flex mt-3 filter-part">
            <FilterListIcon
              className="filter-icon2"
              data-bs-toggle="offcanvas"
              data-bs-target="#AllFilter"
              aria-controls="offcanvasBottom"
            />
            <span>Filters</span>
            <SwapVertIcon
              className="swap-icon2 ms-auto"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
            />
            <span>Sort By</span>
            <Link to={`/catalog`} className="nav-link ms-auto">
              <ViewModuleIcon className="view-icon2" />
            </Link>
          </div>
        </section>

        {/* Product List */}

        <section className="pt-5 product-grid">
          <Itemsgrid
            image={"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/z/i/s/-original-imaghhfypynjhd6z.jpeg?q=70&crop=true"}
            rating={1}
            price={11}
            type={"Shoes"}
            brand={"Nike"}
            size={[12]}
            color={["red"]}
            id={1}
            productId={2}
            quantity={2}
          />
        </section>
        <Footer />

        {/* All Filters */}

        <div className="container-fluid d-flex justify-content-end fixed-bottom pb-0">
          <div
            className="offcanvas offcanvas-bottom"
            tabIndex="-1"
            id="AllFilter"
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
                  <p className="price-range">$2</p>
                </div>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={22}
                  max={2000}
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

              <div className="container-fluid button-container pb-3 mt-4">
                <button
                  className="size-button w-100"
                  style={{
                    backgroundColor: "#FF7F00",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  11
                </button>
              </div>

              <div className="brands">
                <p className="fw-bold gray-title p-3 nav-link">Brand</p>
                <ul>
                  <li
                    className="d-flex justify-content-between pt-3 pb-0"
                  >
                    <label>Nike</label>
                    <input
                      type="checkbox"
                    />
                  </li>
                </ul>
              </div>

              <div className="d-flex justify-content-between fixed-bottom px-3 bg-white filter-buttons">
                <button
                  className="discard-btn w-50 me-2"
                >
                  Discard
                </button>
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

        {/* Sort By Filter */}

        <div className="container-fluid d-flex justify-content-end fixed-bottom">
          <div
            className="offcanvas offcanvas-bottom pb-0"
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

              <p
                className="ps-4 py-3 m-0"
              >
                Price: lowest to high
              </p>
              <p
                className="ps-4 py-3 m-0"
              >
                Price: highest to low
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatelogPage2;

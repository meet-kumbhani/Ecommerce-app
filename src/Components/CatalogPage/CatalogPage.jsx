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
import Items from "./Items";

const CatalogPage = () => {

  return (
    <>

      <section className="container catalog-page">

        <section className="top-part fixed-top pb-2 container-fluid">
          <div className="pt-3 d-flex justify-content-between ">
            <ArrowBackIosNewIcon />
            <div className="search-bar">

              <SearchIcon />

            </div>
          </div>

          <h1 className="mt-4 fw-bold">
            Shoes
          </h1>

          <div className="d-flex mt-3 filter-part">
            <FilterListIcon
              className="filter-icon2"
              data-bs-toggle="offcanvas"
              data-bs-target="#AllFilters"
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
            <Link to={`/catalog2`} className="nav-link ms-auto">
              <ViewModuleIcon className="view-icon2" />
            </Link>
          </div>
        </section>

        {/* Product List */}

        <section className="catalog-items">

          <Items
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
      </section>

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
              className="ps-4 py-3 m-0">
              Price: lowest to high
            </p>
            <p
              className="ps-4 py-3 m-0">
              Price: highest to low
            </p>
          </div>
        </div>
      </div>

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
                <p className="price-range">10</p>
                <p className="price-range">10</p>
              </div>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={10}
                max={2000}
              />
            </div>

            <p className="fw-bold gray-title p-3 m-0">Colors</p>

            <div className="color-button p-3">
              <button
                className="yellow"
              ></button>
              <button
                className="green"
              ></button>
              <button
                className="white"
              ></button>
              <button
                className="red"
              ></button>
              <button
                className="blue"
              ></button>
              <button
                className="black"
              ></button>
            </div>

            <p className="fw-bold gray-title p-3 m-0">Sizes</p>

            <div className="button-container p-3">
              <button
                className="size-button w-100"
                style={{
                  backgroundColor: "#FF7F00",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                10
              </button>
            </div>

            <div className="brands">
              <p className="fw-bold gray-title p-3 nav-link">Brand</p>
              <ul>
                <li
                  className="d-flex justify-content-between pt-3 pb-2"
                >
                  <label>Adidas</label>
                  <input
                    type="checkbox"
                  />
                </li>
              </ul>
            </div>

            <div className="d-flex justify-content-between py-3 px-3 fixed-bottom bg-white">
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
    </>
  );
};

export default CatalogPage;

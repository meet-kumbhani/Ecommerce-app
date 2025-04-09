import React, { useContext } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import "../CatalogPage/CatalogPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footerpart/Footer";
import Slider from "@mui/material/Slider";
import Header from "../Header/Header";
import { Fab, Rating } from "@mui/material";
import { GlobalContext } from "../../Context/GlobalContext";

const CatalogPage = () => {
  const { products, categories } = useContext(GlobalContext)
  const { id } = useParams();
  const flatProducts = products.flat();

  const category = categories.flat();

  const categoryName = category.find((p) => p.id == id).name;

  const filteredProducts = flatProducts.filter(p => p.category_id == id);

  return (
    <>
      <Header name={categoryName} />

      <div className="content-part">

        <section className="catalog-page">

          <section className="pb-2">
            <div className="d-flex filter-part">
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
            </div>

          </section>
          <hr className="pt-0 mt-1" />

          {/* Product List */}

          <section className="catalog-items">

            {filteredProducts.map((product) => (
              <div key={product.id}>
                <Link to={`/productdetails`} className="nav-link">
                  <div className="product">
                    <div className="d-flex align-items-start gap-2 mb-4" style={{ position: "relative" }}>
                      <div>
                        <img
                          src={"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/r/d/y/xxl-21188170-mast-harbour-original-imagshmu6g4ghz5k.jpeg?q=70&crop=false"}
                          className="product-image"
                          height={"120px"}
                          width={"100px"}
                        />
                      </div>
                      <div>
                        <div className="d-flex flex-column ms-1">
                          <span className="mt-2 fs-5 fw-bold">{product.brand}</span>
                          <span>{product.name}</span>
                          <Rating
                            name="size-small"
                            className="mt-1 mb-1"
                            defaultValue={5}
                            size="small"
                            readOnly
                          />
                          <span className="fs-6 fw-bold">${product.price}</span>
                        </div>
                      </div>
                      <Fab
                        style={{
                          position: "absolute",
                          bottom: "-20px",
                          right: "14px",
                          zIndex: "1",
                          color: "orange",
                          backgroundColor: "white",
                          height: "45px",
                          width: "45px",
                        }}
                        aria-label="like"
                        className="favoutite-icon"
                        data-bs-toggle="offcanvas"
                        data-bs-target={`#size_`}
                        aria-controls="offcanvasBottom"
                      >
                        <FavoriteBorderOutlinedIcon />
                      </Fab>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <div>
              {/* Size Offcanvas */}

              <div
                className="offcanvas offcanvas-bottom mb-0 pb-0"
                tabIndex="-1"
                id={`size_`}
                aria-labelledby={`offcanvasBottomLabel_`}
              >
                <div className="offcanvas-header">
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body small pt-0">
                  <h5 className="text-center">Select size</h5>
                  <button
                    className="size-button w-100"
                    style={{
                      backgroundColor: "#FF7F00",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    12
                  </button>
                </div>

                <hr />

                <h5>Color</h5>
                <div className="color-container d-flex justify-content-between">
                  <button
                    className="color-button"
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "red",
                      border: "none",
                      borderRadius: "50%",
                    }}
                  ></button>
                </div>
              </div>
              <div className="pb-3 container">

                <Link
                  to="/favourite"
                  className="border-0 rounded-pill w-100 nav-link p-3 addtocart-btn text-center"
                >
                  GO TO FAVOURITE
                </Link>
              </div>
            </div>
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
      </div>

    </>
  );
};

export default CatalogPage;

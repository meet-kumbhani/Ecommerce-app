import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Rating from "@mui/material/Rating";
import "../ProductDetail/ProductDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const ProductDetails = () => {

  return (
    <section className="productdetails-part">
      {/* Top Part */}

      <section className="top-part container-fluid">
        <div className="pt-3 pb-3 d-flex justify-content-between">
          <ArrowBackIosNewIcon />


          <span className="fw-bold">Details Screen</span>
          {/* <ShareIcon /> */}
          <p></p>
        </div>
      </section>

      {/* Product Details */}

      <section className="productdetails">

        <div>
          <div className="image-part">
            <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/z/i/s/-original-imaghhfypynjhd6z.jpeg?q=70&crop=true" alt="" width="100%" height="430px" />
          </div>

          <div className="text-end container-fluid mt-3">
            <span
              aria-label="like"
              className="favoutite-icon"
              data-bs-toggle="offcanvas"
              aria-controls="offcanvasBottom"
            >
              <FavoriteBorderOutlinedIcon />
            </span>
          </div>

          {/* Favourite Size and Color */}

          <div
            className="offcanvas offcanvas-bottom pb-0"
            tabIndex="-1"
            aria-labelledby="offcanvasBottomLabel"
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

              <div className="button-container pb-3 mt-4">

                <button
                  className=""
                  style={{
                    backgroundColor: "#FF7F00",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  11
                </button>
              </div>

              <hr />

              <h5>Color</h5>
              <div className="color-container d-flex justify-content-between">

                <button
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
            <div className="pb-3 container-fluid">

              <button
                className="border-0 rounded-pill w-100 p-3 btn"
                style={{
                  backgroundColor: "rgba(255, 127, 0, 1)",
                  color: "white",
                }}
                data-bs-dismiss="offcanvas"
                aria-label="Close">
                ADD FAVOURITE
              </button>
            </div>
          </div>

          <div className="details mt-3 container-fluid">
            <div className="d-flex justify-content-between">
              <div>
                <h1>Adidas</h1>
                <p className="productname">Tshirt</p>
                <Link>
                  <Rating
                    name="read-only"
                    value={1}
                    readOnly
                  />
                </Link>
              </div>
              <h1>800</h1>
            </div>
            <p>Description</p>

            <div>
              <button
                className="w-100 addtocart-btn"
                data-bs-toggle="offcanvas"
                data-bs-target="#size-color"
                aria-controls="offcanvasBottom"
              >
                ADD TO CART
              </button>
            </div>

            {/* Color and Size */}

            <div
              className="offcanvas offcanvas-bottom"
              tabIndex="-1"
              id="size-color"
              aria-labelledby="offcanvasBottomLabel"
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
                <p className="fw-bold gray-title p-2 m-0">Colors</p>

                <div className="color-container d-flex justify-content-between">

                </div>

                <hr />
                <p className="fw-bold gray-title p-2 m-0">Sizes</p>

                <div className="button-container pb-3 mt-4">

                </div>
              </div>
              <div className="pb-3 container-fluid">
                <button
                  className="addtocart-btn w-100"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#size-color"
                  aria-controls="offcanvasBottom"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="">
            <div className="shiping-support container-fluid">
              <h5>Shipping info</h5>
              <span>Ship From:- RK COLLECTION</span>
              <p>Sold by:- MK</p>
            </div>

            <hr />
          </div>
        </div>
      </section>

      {/* Related Products */}

      <section className="sale-part">
        <div className="container-fluid new-collection mt-3 d-flex justify-content-between align-items-baseline">
          <div className="new-leftpart">
            <h3 className="sub-title">You can also like this</h3>
          </div>
          <div className="new-rightpart">8 items</div>
        </div>

        <section className="pt-3 product-part d-flex pe-2 ps-2">
          <div>
            <Link className="nav-link">
              <div className="pb-4 mx-2">
                <div>
                  <img
                    src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/z/i/s/-original-imaghhfypynjhd6z.jpeg?q=70&crop=true"
                    className="product-image2"
                    height={"160px"}
                    width={"130px"}
                  />

                  <Fab
                    aria-label="like"
                    className="favoutite-icon"
                    style={{
                      position: "absolute",
                      bottom: "-16px",
                      right: 0,
                      zIndex: "1",
                      color: "orange",
                      backgroundColor: "white",
                      height: "38px",
                      width: "38px",
                    }}
                  >
                    <FavoriteBorderOutlinedIcon className="fs-5 related-icon" />
                  </Fab>
                </div>
                <div className="d-flex flex-column">
                  <Rating
                    name="size-small"
                    className="mt-1 mb-1"
                    defaultValue={1}
                    size="small"
                  />
                  <span>Nike</span>
                  <span className="fs-3 fw-bold">Tshirt</span>
                  <div className="d-flex">
                    <div className="price">500</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </section>
      </section>
    </section>
  );
};

export default ProductDetails;

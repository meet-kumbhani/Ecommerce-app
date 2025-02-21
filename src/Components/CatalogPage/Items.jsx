import { Fab, Rating } from "@mui/material";
import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const Items = () => {

  return (
    <div>
      <Link to={`/productdetails`} className="nav-link">
        <div className="product">
          <div className="row mb-4" style={{ position: "relative" }}>
            <div className="col-3">
              <img
                src={"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/r/d/y/xxl-21188170-mast-harbour-original-imagshmu6g4ghz5k.jpeg?q=70&crop=false"}
                className="product-image"
                height={"120px"}
                width={"100px"}
              />
            </div>
            <div className="col-9 ps-5">
              <div className="d-flex flex-column">
                <span className="mt-2 fs-3 fw-bold">Adidas</span>
                <span>Shoes</span>
                <Rating
                  name="size-small"
                  className="mt-1 mb-1"
                  defaultValue={5}
                  size="small"
                  readOnly
                />
                <span className="fs-6 fw-bold">$200</span>
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
  );
};

export default Items;

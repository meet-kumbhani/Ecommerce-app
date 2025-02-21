import { Fab, Rating } from "@mui/material";
import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const Itemsgrid = (props) => {
  return (
    <div className="col-6 pb-4">
      <Link to={`/productdetails`} className="nav-link">
        <div style={{ position: "relative" }}>
          <img
            src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/r/d/y/xxl-21188170-mast-harbour-original-imagshmu6g4ghz5k.jpeg?q=70&crop=false"
            className="product-image2"
            height={"160px"}
            width={"100%"}
          />
          <Fab
            style={{
              position: "absolute",
              bottom: "-20px",
              right: "1px",
              zIndex: "1",
              color: "orange",
              backgroundColor: "white",
              height: "45px",
              width: "45px",
              boxShadow: "0px 4px 4px 0px #00000014",
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
        <div className="d-flex flex-column">
          <Rating
            name="size-small"
            className="mt-1 mb-1"
            defaultValue={2}
            size="small"
            readOnly
          />
          <span>Adidas</span>
          <span className="fs-5 fw-bold">Shoes</span>
          <span className="fs-6 fw-bold">$22</span>
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
    </div>
  );
};

export default Itemsgrid;

import React from "react";
import Rating from "@mui/material/Rating";
import Fab from "@mui/material/Fab";
import CloseIcon from "@mui/icons-material/Close";

const Favitem = () => {

  return (
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
  );
};

export default Favitem;

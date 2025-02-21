import React from "react";
import Rating from "@mui/material/Rating";
import Fab from "@mui/material/Fab";
import CloseIcon from "@mui/icons-material/Close";

const Favgrid = () => {

  return (
    <div className=" pb-4">
      <div style={{ position: "relative" }}>
        <img
          src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/r/d/y/xxl-21188170-mast-harbour-original-imagshmu6g4ghz5k.jpeg?q=70&crop=false"
          className="product-image2"
          height={"200px"}
          width={"100%"}
        />
        <CloseIcon
          className="closeicon"
        />

        <Fab
          aria-label="like"
          style={{
            position: "absolute",
            bottom: "-20px",
            right: "1px",
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
      <div className="d-flex flex-column">
        <Rating
          name="size-small"
          className="my-1"
          defaultValue={1}
          size="small"
        />
        <span className="color">Nike</span>
        <span className="fs-3 fw-bold">Shoes</span>
        <div className="d-flex">
          <span className="me-1 color">Color:</span>
          <span>Green</span>
          <span className="ms-3 color">Size: </span>
          <span>12</span>
        </div>
        <span className="fs-5 fw-bold">$12</span>
      </div>
    </div>
  );
};

export default Favgrid;

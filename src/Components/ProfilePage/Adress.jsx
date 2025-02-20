import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Adress = () => {


  return (
    <div className="shipping-address container-fluid">
      <div className="shipping fixed-top px-2">
        <ArrowBackIosNewIcon />
        <h2 className="fw-bold">Shipping Address</h2>
        <p></p>
      </div>
      <div className="adress-part">
        <div className="mb-4">

          <div className="product">
            <div>
              <h5>
                Address
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adress;

// {useradress.shippingaddress?.map((add) => (
//      <div key={add.id}>
//        <h4>
//          {add.address},{add.city},{add.state},{add.zipCode},
//          {add.country}
//        </h4>
//      </div>
//    ))}

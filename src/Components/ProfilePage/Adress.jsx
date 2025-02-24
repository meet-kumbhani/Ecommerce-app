import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Header from "../Header/Header";

const Adress = () => {


  return (
    <div className="shipping-address">
      <Header name="Shipping Address" />
      <div className="adress-part">
        <div className="mb-4">

          <div className="product content-part">
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

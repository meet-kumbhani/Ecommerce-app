import React from "react";
import "../MainPage/MainPage.css";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import Footer from "../Footerpart/Footer";

const MainPage = () => {

  return (
    <section className="main-page">
      {/* Top Part */}

      <section className="fashion-sale-part">
        <div className="image-content-part">
          <div className="container-fluid">
            <h1 className="text-white banner-text">
              Fashion
              <br />
              sale
            </h1>

            <button className="rounded-pill w-50 Check-button p-2">Check</button>
          </div>
        </div>
      </section>

      {/* Mix Collections */}

      <section className="all-collection">
        <div className="college-items mt-3">
          <div>
            <img src={'https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/z/i/s/-original-imaghhfypynjhd6z.jpeg?q=70&crop=true'} alt="" width="100%" />
          </div>
          <div className="row">
            <div className="col col-sm-6 d-flex flex-column">
              <div className="container d-flex justify-content-start mt-auto">

                <div className="">
                  <h1 className="summersale-text">
                    Summer <br />
                    Sale
                  </h1>
                </div>
              </div>
              <div className="mt-auto">
                <div>
                  <img src={"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/z/i/s/-original-imaghhfypynjhd6z.jpeg?q=70&crop=true"} alt="" width="100%" />
                </div>
              </div>
            </div>
            <div className="col col-sm-6 hoodie-part">
              <div>
                <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/z/i/s/-original-imaghhfypynjhd6z.jpeg?q=70&crop=true" alt="" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sale Collection */}

      <section className="sale-part mt-3">
        <div className="d-flex justify-content-between align-items-center container-fluid">
          <p className="page-title">Sale</p>
          <div className="new-rightpart">
            <Link to={"/productdetails"} className="sale-viewall m-0 p-0">View All</Link>
          </div>
        </div>


        <section className="pt-3 product-part d-flex pe-2 ps-2">
          <div>
            <Link to={"/productdetails"} className="pb-4 mx-2 nav-link">
              <div className="product-image">
                <img
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/z/i/s/-original-imaghhfypynjhd6z.jpeg?q=70&crop=true"
                  className=""
                />
              </div>
              <div className="d-flex flex-column">
                <Rating
                  name="size-small"
                  className="mt-1 mb-1"
                  defaultValue={1}
                  size="small"
                />
                <span>Nike</span>
                <span className="fs-3 fw-bold">
                  Sweat shirt
                </span>
                <div className="d-flex">
                  <div className=" strike">11₹</div>
                  <div className="mx-2 price">
                    1₹
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </section>

      {/* New Collection */}

      <section className="new-collection-part">

        <div
          className="d-flex justify-content-between align-items-center container-fluid">
          <h1 className="page-title">New item</h1>
          <div className="new-rightpart">
            <Link to={"/productdetails"} className="sale-viewall m-0 p-0">View All</Link>
          </div>
        </div>

        <section className="pt-3 product-part d-flex pe-2 ps-2">

          <div>
            <Link to={"/productdetails"} className="pb-4 mx-2 nav-link">
              <div>
                <img
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/z/i/s/-original-imaghhfypynjhd6z.jpeg?q=70&crop=true"
                  className="product-image2"
                  height={"160px"}
                  width={"130px"}
                />
              </div>
              <div className="d-flex flex-column">
                <Rating
                  name="size-small"
                  className="mt-1 mb-1"
                  defaultValue={1}
                  size="small"
                />
                <span>Puma</span>
                <span className="fs-3 fw-bold">
                  Tshirt
                </span>
                <div className="d-flex">
                  <div className="price">11₹</div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </section>
      <Footer />
    </section>
  );
};

export default MainPage;

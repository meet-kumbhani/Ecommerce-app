import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import "../CategoryPage/CategoryPage.css";
import { Link } from "react-router-dom";
import Footer from "../Footerpart/Footer";

const CategoryPage = () => {

  return (
    <section className="container category-page">
      <section className="top-part">
        <div className="pt-3 d-flex justify-content-between">
          <Link className="nav-link">
            <ArrowBackIosNewIcon />
          </Link>
          <h5 className="fw-bold">Categories</h5>
          <div className="search-container d-flex">
            <SearchIcon className="fs-1" />
          </div>
        </div>
      </section>

      <>
        <section className="categoryname-part row">
          <div className="mt-3">
            <button className="summer-sales-btn w-100">
              <span>SUMMER SALES</span>
              <br /> Up to 50% off
            </button>
          </div>

          <div>

            <Link
              to={`/subcategory`}
              className="nav-link"
            >
              <div className="bg-white d-flex mt-2 categories-card">
                <div className="col-5 py-2">
                  <div className="d-flex justify-content-center align-items-center h-100 fw-bold">
                    Shoes
                  </div>
                </div>
                <div className="col-7">
                  <div className="categories-image">
                    <img
                      src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/z/i/s/-original-imaghhfypynjhd6z.jpeg?q=70&crop=true"
                      alt="Product Image"
                      style={{ height: "100px", width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </>
      <Footer />
    </section>
  );
};

export default CategoryPage;

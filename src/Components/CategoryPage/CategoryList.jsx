import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import "../CategoryPage/CategoryPage.css";
import { Link } from "react-router-dom";
import Footer from "../Footerpart/Footer";

const CategoryList = () => {

  return (
    <section className="container">
      <section className="top-part">
        <div className="pt-3 pb-2 d-flex justify-content-between">
          <ArrowBackIosNewIcon />

          <h5 className="fw-bold">Categories</h5>
          <div>
            <SearchIcon
              className="fs-1" />
          </div>
        </div>
      </section>

      <section className="row">
        <div className="categorylist">
          <button className="w-100 viewall-btn">
            VIEW ALL ITEMS
          </button>
          <p className="text-secondary mt-2 ms-2 mb-4">Choose category</p>
          <div className="ms-4">
            <div>
              <Link to={`/catalog`} className="nav-link">
                <p>Shoes</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default CategoryList;

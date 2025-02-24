import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import "../CategoryPage/CategoryPage.css";
import { Link } from "react-router-dom";
import Footer from "../Footerpart/Footer";
import Header from "../Header/Header";

const CategoryList = () => {

  return (
    <>
      <Header name="Categories" />

      <section className="content-part">
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
    </>
  );
};

export default CategoryList;

import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import "../CategoryPage/CategoryPage.css";
import { Link } from "react-router-dom";
import Footer from "../Footerpart/Footer";
import Header from "../Header/Header";

const CategoryPage = () => {

  return (
    <section className="category-page">
      <Header name="Categories" />

      <div className="content-part">
        <section className="categoryname-part">
          <div>
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
              <div className="bg-white d-flex justify-content-between mt-2 mx-2 categories-card">
                <div className="w-50">
                  <div className="d-flex justify-content-center align-items-center h-100 ms-auto fw-bold">
                    <p className="text-center mb-0">Shoes</p>
                  </div>
                </div>
                <div className="w-50">
                  <div className="categories-image">
                    <img
                      src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/z/i/s/-original-imaghhfypynjhd6z.jpeg?q=70&crop=true"
                      alt="Product Image"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default CategoryPage;

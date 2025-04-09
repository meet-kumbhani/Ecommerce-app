import React, { useContext } from "react";
import "../CategoryPage/CategoryPage.css";
import { Link } from "react-router-dom";
import Footer from "../Footerpart/Footer";
import Header from "../Header/Header";
import { GlobalContext } from "../../Context/GlobalContext";

const CategoryList = () => {
  const { categories } = useContext(GlobalContext);
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
              {categories.map((categories) => (
                <div key={categories.id}>
                  <Link to={`/catalog/${categories.id}`} className="nav-link">
                    <p>{categories.name}</p>
                  </Link>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CategoryList;

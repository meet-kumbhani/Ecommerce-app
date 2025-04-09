import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "../Components/ProductDetail/ProductDetails";
import Setting from "../Components/ProfilePage/Setting";
import OrderDetail from "../Components/ProfilePage/OrderDetail";
import MyOrder from "../Components/ProfilePage/MyOrder";
import MyProfile from "../Components/ProfilePage/MyProfile";
import FavouritePageList from "../Components/FavouritePage/FavouritePageList";
import CatalogPage from "../Components/CatalogPage/CatalogPage";
import CartPage from "../Components/CartPage/CartPage";
import MainPage from "../Components/MainPage/MainPage";
import CategoryPage from "../Components/CategoryPage/CategoryPage";
import CategoryList from "../Components/CategoryPage/CategoryList";
import Forgotpassword from "../Components/ForgotPage/Forgotpassword";
import Signup from "../Components/SignUpPage/Signup";
import Login from "../Components/LoginPage/Login";
import ShippingAddress from "../Components/CartPage/ShippingAddress";
import Success from "../Components/CartPage/Success";
import Checkout from "../Components/CartPage/Checkout";
import Adress from "../Components/ProfilePage/Adress";
import NewPassword from "../Components/NewPassword/NewPassword";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/mainpage"
            element={<MainPage />}
          ></Route>
          <Route
            path="/category"
            element={<CategoryPage />}
          ></Route>
          <Route
            path="/subcategory"
            element={<CategoryList />}
          ></Route>
          <Route
            path="/catalog/:id"
            element={<CatalogPage />}
          ></Route>
          <Route
            path="/productdetails"
            element={<ProductDetails />}
          ></Route>
          <Route
            path="/favourite"
            element={<FavouritePageList />}
          ></Route>
          <Route
            path="/cart"
            element={
              <CartPage />}
          ></Route>
          <Route
            path="/profile"
            element={<MyProfile />}
          ></Route>
          <Route
            path="/adress"
            element={<Adress />}
          ></Route>
          <Route
            path="/myorder"
            element={<MyOrder />}
          ></Route>
          <Route
            path="/orderdetails"
            element={<OrderDetail />}
          ></Route>
          <Route
            path="/settings"
            element={<Setting />}
          ></Route>
          <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
          <Route
            path="/checkout"
            element={
              <Checkout />
            }
          ></Route>

          <Route
            path="/shippingaddress"
            element={
              <ShippingAddress />
            }
          ></Route>
          <Route
            path="/success"
            element={<Success />}
          ></Route>

          <Route
            path="/newpassword"
            element={<NewPassword />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;

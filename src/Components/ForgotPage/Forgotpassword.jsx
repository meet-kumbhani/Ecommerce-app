import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../ForgotPage/Forgotpassword.css";
import { Link } from "react-router-dom";

const Forgotpassword = () => {

  return (
    <>
      <section className="forgotpassword-page">
        <section className="container signup-page">
          <section className="top-part">
            <div>
              <div className="pt-2">
                <Link to="/login" className="nav-link">
                  <ArrowBackIosNewIcon />
                </Link>
                <h1 className="mt-4 fw-bold">Forgot password</h1>
              </div>
            </div>
          </section>


          <section className="form-part">
            <div>
              <h6>
                Please, enter your email address. You will receive a link to
                create a new password via email.
              </h6>
              <form className="for">
                <div className="form-group">
                  <input
                    type="email"
                    className="w-100 input-field"
                    placeholder="Enter your email"
                    value=""
                  />
                </div>
                <button className="w-100 sign-up-btn p-2 rounded-pill border-0 mt-5">
                  SEND
                </button>
              </form>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Forgotpassword;

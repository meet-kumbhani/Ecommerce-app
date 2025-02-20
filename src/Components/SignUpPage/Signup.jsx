import React from "react";
import Form from "react-bootstrap/Form";
import "../SignUpPage/Signup.css";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const Signup = () => {

  return (
    <section className="container signup-page">
      <section>
        <div className="pt-3">
          <h1 className="mt-4 fw-bold">Sign up</h1>
        </div>
      </section>

      <section className="form-part">
        <div className="mt-5">
          <Form>
            <Form.Group className="mb-3">
              <TextField
                className="input-field bg-white w-100"
                label="Name"
                variant="outlined"
                type="text"
                name="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <TextField
                className="input-field bg-white w-100"
                label="Email"
                variant="outlined"
                type="email"
                name="Email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <TextField
                className="input-field bg-white w-100"
                label="Password"
                variant="outlined"
                type="password"
                name="Password"
              />
            </Form.Group>
          </Form>

          <Link
            to="/login"
            className="h6 d-flex justify-content-end text-dark text-decoration-none"
          >
            Already have an account?
            <span className="ms-2">
              {" "}
              <img
                src="../images/Vector.png"
                alt="logo"
                width={30}
                height={15}
              />{" "}
            </span>{" "}
          </Link>
        </div>
      </section>

      <button
        className="w-100 sign-up-btn p-2 rounded-pill border-0 mt-4"
      >
        SIGN UP
      </button>

      <section className="footer">
        <div>
          <h6 className="text-center social-media">
            Or sign up with social account{" "}
          </h6>
          <div className="footer-logo d-flex justify-content-center">
            <img src="../images/Google.png" alt="" />
            <img src="../images/Facebook.png" alt="" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Signup;

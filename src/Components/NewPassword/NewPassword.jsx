import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../NewPassword/NewPassword.css";
import Form from "react-bootstrap/Form";
import TextField from "@mui/material/TextField";

const NewPassword = () => {

  return (
    <section className="newpassword-page">
      <section className="container">
        <section className="top-part">
          <div className="pt-3">
            <Link to="/signup">
              <ArrowBackIosNewIcon className="text-dark" />
            </Link>
            <h1 className="mt-3 mb-5 fw-bold">Change Password</h1>
          </div>
        </section>

        <section>
          <Form>
            <Form.Group className="mb-3">
              <TextField
                className="input-field bg-white w-100"
                label="New Password"
                type="password"
                variant="outlined"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <TextField
                className="input-field bg-white w-100"
                label="Confirm Password"
                type="password"
                variant="outlined"
              />
            </Form.Group>
          </Form>
        </section>

        <button
          className="w-100 save-btn p-2 rounded-pill border-0 mt-4"
        >
          {" "}
          SAVE{" "}
        </button>
      </section>
    </section>
  );
};

export default NewPassword;

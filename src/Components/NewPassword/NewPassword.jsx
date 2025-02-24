import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../NewPassword/NewPassword.css";
import Form from "react-bootstrap/Form";
import TextField from "@mui/material/TextField";
import Header from "../Header/Header";

const NewPassword = () => {

  return (
    <section className="newpassword-page">
      <Header name="Change Password" />
      <section className="content-part">

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

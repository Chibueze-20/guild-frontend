import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import guild_logo from "../Assets/guild_logo.svg";

export default function UserSignUp() {
  const { register, handleSubmit, errors } = useForm();
  return (
    <div
      style={{
        minHeight: "100vh",
        alignItems: "center",
        display: "inline-flex",
      }}
      className="w-100 crunch-orange-bg"
    >
      <Container>
        <Row>
          <Col
            style={{
              padding: "0px",
              justifyContent: "center",
              display: "inline-flex",
            }}
            xs={12}
          >
            <a className="home-link" href="/">
              <img
                alt="guild-logo"
                style={{ height: "150px" }}
                className="img-fluid"
                src={guild_logo}
              />
            </a>
          </Col>
          <Col xs={12}>
            <div className="my-3 text-center w-100 text-uppercase crunch-red-text">
              <span style={{ fontSize: "24px" }}>sign up / </span>
              <span style={{ textDecoration: "underline", fontSize: "24px" }}>
                <Link className="crunch-red-text" to="/login">
                  Login
                </Link>
              </span>
            </div>
          </Col>
          <Col xs={12}>
            <div>
              <form className="guild-form">
                <div className="form-group">
                  <label for="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    ref={register({ required: true })}
                    className="form form-control"
                    placeholder="Enter Username"
                  />
                  {errors.username && (
                    <p className="error">Username is required</p>
                  )}
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    ref={register({ required: true })}
                    className="form form-control"
                    placeholder="Enter Email address"
                  />
                  {errors.email && <p className="error">Email is required</p>}
                  <small className="form-text crunch-red-text">
                    Email would be used to send promotional content, we will not
                    share your email
                  </small>
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    style={{ borderRadius: "0px" }}
                    id="password"
                    type="password"
                    name="password"
                    ref={register({ required: true, minLength: 8 })}
                    className="form form-control"
                    placeholder="Enter Password"
                  />
                  {errors.password && errors.password.required && (
                    <p className="error">Password is required</p>
                  )}
                  {errors.password && errors.password.minLength && (
                    <p className="error">Password is too short</p>
                  )}
                </div>
                <div className="form-group">
                  <label for="cpassword">Confirm Password</label>
                  <input
                    style={{ borderRadius: "0px" }}
                    id="cpassword"
                    type="password"
                    name="cpassword"
                    ref={register({ required: true, minLength: 8 })}
                    className="form form-control"
                    placeholder="Confirm Password"
                  />
                  {errors.cpassword && errors.password.required && (
                    <p className="error">Password is required</p>
                  )}
                  {errors.cpassword && errors.password.minLength && (
                    <p className="error">Password is too short</p>
                  )}
                </div>
                <div style={{ textAlign: "center" }} className="w-100">
                  <button
                    style={{ border: "none" }}
                    className="crunch-btn click"
                  >
                    <span className="center">Sign Up</span>
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

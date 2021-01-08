import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import guild_logo from "../Assets/guild_logo.svg";
export default function Splash() {
  return (
    <div
      style={{ height: "100vh", alignItems: "center", display: "inline-flex" }}
      className="w-100 crunch-orange-bg"
    >
      <Container>
        <Row xs={1}>
          <Col
            style={{
              padding: "0px",
              justifyContent: "center",
              display: "inline-flex",
            }}
          >
            <img alt="guild-logo" className="img-fluid" src={guild_logo} />
          </Col>
          <Col
            style={{
              display: "inline-flex",
              justifyContent: "space-between",
              marginTop: "100px",
            }}
          >
            <span className="crunch-btn">
              <Link style={{ fontSize: "24px" }} to="/register">
                Sign Up
              </Link>{" "}
            </span>
            <span className="crunch-btn">
              <Link style={{ fontSize: "24px" }} to="/login">
                Login
              </Link>{" "}
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

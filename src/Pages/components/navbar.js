import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./navbar.css";
import guild_logo from "../../Assets/guild_logo.svg";
function Mainbar() {
  return (
    <nav className="nav-theme">
      <div className="d-flex pl-4">
        <img
          alt="guild-logo"
          style={{ height: "40px" }}
          className="img-fluid"
          src={guild_logo}
        />
        <a className="navbar-brand crunch-orange-text ml-3" href="/">
          Guild
        </a>
        <div style={{ width: "80%" }} class="d-flex align-items-center">
          <a class="menu-link crunch-orange-text" aria-current="page" href="#">
            Instruction
          </a>
          <a class="menu-link crunch-orange-text" href="#">
            About
          </a>
          <a class="menu-link crunch-orange-text" href="#">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Mainbar;

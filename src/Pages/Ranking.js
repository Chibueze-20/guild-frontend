import React, { Fragment, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Mainbar from "./components/navbar";
import Crunchbox from "./components/customCheckbox";
import smallimg from "../Assets/109222.webp";
import Up from "../Assets/UpVector.svg";
import Down from "../Assets/DownVector.svg";
import X from "../Assets/XVector.svg";

export default function Ranking() {
  const [selectMultiple, setSelectMultiple] = useState(true);
  const multiSelectMode = () => {
    const newmode = !selectMultiple;
    setSelectMultiple(newmode);
  };
  return (
    <Fragment>
      <Mainbar></Mainbar>
      <div
        style={{ minHeight: "713px" }}
        className="crunch-orange-bg rankingBg"
      >
        <div
          style={{ fontWeight: 200 }}
          className="w-100 py-2 crunch-red-text text-center"
        >
          <span style={{ fontSize: "24px" }}>Vote</span>
          <p className="m-0 p-0">
            <span style={{ fontSize: "18px" }}>
              Rank your shows from your favourite to your least favourite
            </span>
          </p>
        </div>
        <div className="mt-3 container-fluid">
          <div className="row">
            <div className="col-md-7 mb-3 py-1 col-sm-12 border-underline">
              <div>
                <span
                  title="click for multiple select mode"
                  onClick={multiSelectMode}
                  className={`${
                    selectMultiple
                      ? "crunch-btn-check-red checked"
                      : "crunch-btn-check-red"
                  }`}
                >
                  Multi-select
                </span>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 offset-md-1">
              <div className="w-100 rank-item crunch-orange-bg  px-3 py-1">
                <div
                  className="rank-body"
                  style={{ display: "inline-flex", alignItems: "center" }}
                >
                  <div id="rank-div" className="text-center second mr-1 rank">
                    <span>2</span>
                  </div>
                  <div
                    style={{ display: "inline-flex", alignItems: "center" }}
                    id="title-div"
                  >
                    <img className="img-fluid rank-image" src={smallimg} />
                    <div className="px-2 text-center">
                      <span style={{ fontSize: "16px" }}>
                        Jujustu Kaisen lorem lorem lorem lorem lorem lorem
                      </span>
                    </div>
                  </div>
                  <div className="rank-controls" id="icon-div">
                    <img
                      className={`img-fluid icon ${
                        selectMultiple ? "hide" : ""
                      }`}
                      src={Up}
                    />
                    <img
                      className={`responsive-flex-margin-1 img-fluid icon ${
                        selectMultiple ? "hide" : ""
                      }`}
                      src={Down}
                    />
                    <img
                      className={`img-fluid icon ${
                        selectMultiple ? "hide" : ""
                      }`}
                      src={X}
                    />
                    {selectMultiple && (
                      <Crunchbox color="#7a1e26" label="Select"></Crunchbox>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

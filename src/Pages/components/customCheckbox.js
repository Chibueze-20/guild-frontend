import { React, Component } from "react";
import "./customCheckbox.css";

class Crunchbox extends Component {
  render() {
    return (
      <label class="checkbox" style={{ "--color": this.props.color }}>
        <span class="checkbox__input" style={{ alignSelf: "center" }}>
          <input type="checkbox" name="checked" />
          <span class="checkbox__control">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                d="M1.73 12.91l6.37 6.37L22.79 4.59"
              />
            </svg>
          </span>
        </span>
        <span style={{ fontSize: "1.2em" }} class="radio__label">
          {this.props.label}
        </span>
      </label>
    );
  }
}
export default Crunchbox;

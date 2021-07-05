import React from "react";
import "../App.css";

const DownButton = props => {
  return (
    <section className="buttons">
      <button
        className="homeButtons__touchdown"
        onClick={() => props.value(props.downValue)}
      >
        {props.buttonValue}
      </button>
    </section>
  );
};

export default DownButton;

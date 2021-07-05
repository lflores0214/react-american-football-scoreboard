import React from "react";
import "../App.css";

const BallOnButton = props => {
  return (
    <section className="buttons">
      <button
        className="homeButtons__touchdown"
        onClick={() => props.value(props.ballOnValue)}
      >
        {props.buttonValue}
      </button>
    </section>
  );
};

export default BallOnButton;
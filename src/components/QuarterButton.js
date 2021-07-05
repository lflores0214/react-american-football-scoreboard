import React from "react";
import "../App.css";

const QuarterButton = props => {
  console.log(props)
  return (
    <section className="buttons">
      <button
        className="homeButtons__touchdown"
        onClick={() => props.value()}
      >
        {props.buttonValue}
      </button>
    </section>
  );
};

export default QuarterButton;
import React from "react";
import "../App.css";

const HomeButton = props => {
  return (
    <section className="buttons">
      <button
        className="homeButtons__touchdown"
        onClick={() => props.points(props.homeScore)}
      >
        {props.buttonValue}
      </button>
    </section>
  );
};

export default HomeButton;

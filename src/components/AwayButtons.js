import React from "react";
import "../App.css";

const HomeButton = props => {
  return (
    <section className="buttons">
      <button
        className="awayButtons__touchdown"
        onClick={() => props.points(props.awayScore)}
      >
        {props.buttonValue}
      </button>
    </section>
  );
};

export default HomeButton;

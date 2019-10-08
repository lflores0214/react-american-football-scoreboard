import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  let [downValue, setDownValue] = useState(1);
  let [toGoValue, setToGoValue] = useState(10);
  let [ballOnValue, setBallOnValue] = useState(50);
  let [quarterValue, setQuarterValue] = useState(0);
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downValue}</div>
        <button onClick={() => setDownValue(downValue + 1)}>▲</button>
        <button onClick={() => setDownValue(downValue - 1)}>▼</button>
      </div>

      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGoValue}</div>
        <button onClick={() => setToGoValue(toGoValue + 1)}>▲</button>
        <button onClick={() => setToGoValue(toGoValue - 1)}>▼</button>
      </div>

      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOnValue}</div>
        <button onClick={() => setBallOnValue(ballOnValue + 1)}>▲</button>
        <button onClick={() => setBallOnValue(ballOnValue - 1)}>▼</button>
      </div>

      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarterValue}</div>
        <button onClick={() => setQuarterValue(quarterValue + 1)}>▲</button>
        <button onClick={() => setQuarterValue(quarterValue - 1)}>▼</button>
      </div>
    </div>
  );
};

export default BottomRow;

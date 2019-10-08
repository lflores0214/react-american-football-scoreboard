import React, { useState } from "react";
import BottomRow from "../BottomRow";
import HomeButtons from "./HomeButtons";
import AwayButtons from "./AwayButtons";
import ResetButton from "./ResetScore";
import DownButton from "./DownButton";
import ToGoButton from "./ToGoButton";
import QuarterButton from "./QuarterButton";
import BallOnButton from "./BallOnButton";
import "../App.css";

export default function Score() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  let [downValue, setDownValue] = useState(1);
  let [toGoValue, setToGoValue] = useState(10);
  let [ballOnValue, setBallOnValue] = useState(50);
  let [quarterValue, setQuarterValue] = useState(1);

  const downFunction = () => {
    if (downValue !== 4) {
      downValue ++;
    } else {
      setDownValue(1)
    }
  };

  const toGoFunction = () => {
    setToGoValue(toGoValue + 1);
  };

  const ballOnFunction = () => {
    setBallOnValue(ballOnValue + 1);
  };

  const quarterFunction = () => {
    if (quarterValue === 4) {
      setQuarterValue(0);
    } else {
      setQuarterValue(quarterValue + 1);
    }
  }

  const homeTouchdown = () => {
    setHomeScore(homeScore + 6);
  };
  const homeEP = () => {
    setHomeScore(homeScore + 1);
  };
  const homeFG = () => {
    setHomeScore(homeScore + 3);
  };
  const awayTouchdown = () => {
    setAwayScore(awayScore + 6);
  };
  const awayEP = () => {
    setAwayScore(awayScore + 1);
  };
  const awayFG = () => {
    setAwayScore(awayScore + 3);
  };
  const reset = () => {
    setHomeScore(0);
    setAwayScore(0);
  };

  return (
    <>
      <section className="scoreboard">
        <section>
          <div className="topRow">
            <div className="home">
              <h2 className="home__name">Lions</h2>

              {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

              <div className="home__score">{homeScore}</div>
            </div>
            <div className="timer">00:03</div>
            <div className="away">
              <h2 className="away__name">Tigers</h2>
              <div className="away__score">{awayScore}</div>
            </div>
          </div>
          <BottomRow />
        </section>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <HomeButtons
            className="homeButtons__touchdown"
            points={homeTouchdown}
            buttonValue="Home Touchdown"
          />
          <HomeButtons
            className="homeButtons__fieldGoal"
            points={homeEP}
            buttonValue="Home Extra Point"
          />
          <HomeButtons
            className="homeButtons__fieldGoal"
            points={homeFG}
            buttonValue="Home Field Goal"
          />
        </div>
        <div className="homeButtons">
          <ResetButton
            className="homeButtons__touchdown"
            points={reset}
            buttonValue="Reset Score"
          />
          <DownButton
            className="homeButtons__touchdown"
            value={downFunction}
            buttonValue="Next Down"
          />
          {/* <ToGoButton
            className="homeButtons__touchdown"
            value={toGoFunction}
            buttonValue="Yards To Go"
          /> */}
          {/* <BallOnButton
            className="homeButtons__touchdown"
            value={ballOnFunction}
            buttonValue="Ball On"
          /> */}
          {/* <QuarterButton
            className="homeButtons__touchdown"
            value={quarterFunction}
            buttonValue="Next Quarter"
          /> */}
        </div>
        <div className="awayButtons">
          <AwayButtons
            className="awayButtons__touchdown"
            points={awayTouchdown}
            buttonValue="Away Touchdown"
          />
          <AwayButtons
            className="awayButtons__fieldGoal"
            points={awayEP}
            buttonValue="Away Extra Point"
          />
          <AwayButtons
            className="awayButtons__fieldGoal"
            points={awayFG}
            buttonValue="Away Field Goal"
          />
        </div>
      </section>
    </>
  );
}

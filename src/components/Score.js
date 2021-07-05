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

  const [downValue, setDownValue] = useState(1);
  const [toGoValue, setToGoValue] = useState(10);
  const [ballOnValue, setBallOnValue] = useState(50);
  const [quarterValue, setQuarterValue] = useState(1);

  const down = () => {
    if (downValue !== 4) {
      setDownValue(downValue + 1)
    } else {
      setDownValue(1)
    }
  };

  const toGo = () => {
    setToGoValue(toGoValue + 1);
  };

  const ballOn = () => {
    setBallOnValue(ballOnValue + 1);
  };

  const quarter = () => {
    if (quarterValue <= 3) {
      setQuarterValue(quarterValue + 1);
    } else {
      setQuarterValue(1);
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
          <BottomRow 
            quarterValue={quarterValue}
            downValue={downValue}
            toGoValue={toGoValue}
            ballOnValue={ballOnValue}/>
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
            value={down}
            buttonValue="Next Down"
          />
          <ToGoButton
            className="homeButtons__touchdown"
            value={toGo}
            buttonValue="Yards To Go"
          />
          <BallOnButton
            className="homeButtons__touchdown"
            value={ballOn}
            buttonValue="Ball On"
          />
          <QuarterButton
            className="homeButtons__touchdown"
            value={quarter}
            buttonValue="Next Quarter"
          />
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

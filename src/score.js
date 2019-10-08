// import React, { useState } from "react";
// import "./App.css";

// export function Score() {
//     const [homeScore, setHomeScore] = useState(0);
//     const [awayScore, setAwayScore] = useState(0);
//     return(
//   <section className="buttons">
//     <div className="homeButtons">
//       {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
//       <button
//         className="homeButtons__touchdown"
//         onClick={() => setHomeScore(homeScore + 7)}
//       >
//         Home Touchdown
//       </button>
//       <button
//         className="homeButtons__fieldGoal"
//         onClick={() => setHomeScore(homeScore + 3)}
//       >
//         Home Field Goal
//       </button>
//     </div>
//     <div className="homeButtons">
//       <form>
//         <label name="down">Down:</label>
//         <select name="down" value="">
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//         </select>
//         <br />
//         <label>To Go:</label>
//         <input name="toGo" type="number" min="1" />
//         <br />
//         <label>Ball On:</label>
//         <input name="ballOn" type="number" min="1" max="50" />
//         <br />
//         <label>Quarter:</label>
//         <select>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//         </select>
//       </form>
//     </div>
//     <div className="awayButtons">
//       <button
//         className="awayButtons__touchdown"
//         onClick={() => setAwayScore(awayScore + 7)}
//       >
//         Away Touchdown
//       </button>
//       <button
//         className="awayButtons__fieldGoal"
//         onClick={() => setAwayScore(awayScore + 3)}
//       >
//         Away Field Goal
//       </button>
//     </div>
//   </section>;
//     );
// }

// export default Score;

import React from "react"
import "../App.css";



const ResetButton = props => {
    return(
    <section className="buttons">
        <button className="homeButtons__touchdown" onClick={()=>props.points(props.homeScore)}>{props.buttonValue}</button>
      </section>
    )
}

export default ResetButton
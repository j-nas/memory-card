import React from "react"
import './TitleBar.css'

function TitleBar(props) {
  return (
    <div className="titleBar">
      <div className = "title">
        <h1>Total Rickall</h1>
      </div>
      <div className="scoreBoard">
        <p>
          Score: {props.score}
          <br/>
          HiScore: {props.hiScore}
        </p>
      </div>
    </div>
  )
}

export default TitleBar
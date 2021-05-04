import React from "react"
import "./Card.css"

function Card(props){
  return (
    <div className="card" id={props.setId} onClick={props.clickHandler}>
      <div
        
      />
        <img id={props.setId} src={props.imgUrl} alt=""/>
      <div id={props.setId} className="cardName">
        {props.name}
      </div>
    </div>
  )
}

export default Card
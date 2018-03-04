import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className="cardContainer">
      <img width="75" src={props.avatar_url} alt="" />
      <div className="cardDetails">
        <div className="cardName">{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

export default Card;

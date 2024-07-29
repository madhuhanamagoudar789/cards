import React from "react";
import "./cards.css";
const cards = (props) => {
  return (
    <div className="card">
      <div className="head">{props.heading}</div>
      <div className="content">{props.content}</div>
      <a href="#" className="link">
        {props.link}
      </a>

      <img src={props.img} alt="" className="image" />
    </div>
  );
};

export default cards;

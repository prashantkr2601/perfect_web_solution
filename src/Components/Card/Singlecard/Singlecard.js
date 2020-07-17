import React from "react";
import "./Singlecard.css";
import { NavLink } from "react-router-dom";
function Singlecard(props) {
  return (
      <div className="scard">
          <ul className="font_show">
              <li className="simg_li">
                  <img src={props.img} alt={props.title} className="scard_img"/>
                </li>
              <li className="title1">{props.title}</li>
          </ul>
          <ul className="showmore"> 
              <li className="title2">{props.title}</li>
              <li className="description">{props.description}</li>
              <li className="readmore">Read&nbsp;More</li>
          </ul>
      </div>
  );
}
export default Singlecard;
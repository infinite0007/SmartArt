require("../../../stylesheets/_all.scss");
import React from "react";
import { Link } from "react-router-dom";

// Definition der einzelnen CardItems, welche in jedem Card vorhanden sind
export default function CardItem(props) {
  return (
    <li className="cards__item">
        <Link className="cards__item__link" to={props.path} onClick={()=> window.scrollTo( 0, 0 )}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
  );
}
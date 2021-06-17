require("../../../stylesheets/_all.scss");
import React from "react";
import CardItem from "./CardItem";
// Images
import Image1 from "../../../images/aboutapp/aboutappcard.jpg";
import Image2 from "../../../images/insertpicture/insertpicturecard.jpg";
import Image3 from "../../../images/art/artcard.jpg";

// Die verschiedenen Cards aufgelistet
export default function Cards() {
  return (
    <div className="cards">
      <h1>Schau dich auf SmartArt um!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
           <CardItem
              src={Image1}
              text="Informiere dich wozu die SmartArt WebApp dient"
              label="Über SmartArt"
              path="/app"
            />
            <CardItem
              src={Image2}
              text="Lade ein individuelles Bild hoch und lass es direkt auf der Matrix erscheinen"
              label="Bild hochladen"
              path="/insertpicture"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Image3}
              text="Verschmelze mithilfe der Deepart-AI ein von dir gewähltes Bild mit einem gewünschten Thema. Dies kann beispielsweise ein verstorbener Künstler sein, der deinem Landschaftsfoto ein neues Leben einhaucht"
              label="Deepart-AI"
              path="/art"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
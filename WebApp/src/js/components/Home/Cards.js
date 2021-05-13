require("../../../stylesheets/_all.scss");
import React from "react";
import CardItem from "./CardItem";
// Images
import Image1 from "../../../images/aboutapp/aboutappcard.jpg";
import Image2 from "../../../images/plan/plancard.jpg";
import Image3 from "../../../images/bmi/bmicard.jpg";
import Image4 from "../../../images/ranking/rankingcard.jpg";
import Image5 from "../../../images/login/logincard.jpg";

// Die verschiedenen Cards aufgelistet
export default function Cards() {
  return (
    <div className="cards">
      <h1>Schau dich auf Sunsetly um!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
           <CardItem
              src={Image1}
              text="Informiere dich wie Sunsetly funktioniert und wie du die App herunterladen kannst."
              label="Über Sunsetly"
              path="/app"
            />
            <CardItem
              src={Image2}
              text="Ein für dich individueller Plan, der dir mit Coach zur Seite steht und dir dabei hilft deine Gesundheit zu heben."
              label="30 Tage Plan"
              path="/plan"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Image3}
              text="Berechne deinen BMI und schau ob dieser im Normalbereich liegt. Hierbei kannst du auch gleich testen ob dein Plan angeschlagen hat."
              label="BMI-Rechner"
              path="/bmi"
            />
            <CardItem
              src={Image4}
              text="Messe dich im Ranking mit Anderen und zeige was wirklich in dir steckt!"
              label="Ranking"
              path="/ranking"
            />
            <CardItem
              src={Image5}
              text="Logge dich mit deiner Sunsetly ID ein und greife auf alle Features zu, die nur Mitgliedern zugänglich sind."
              label="Login"
              path="/login"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
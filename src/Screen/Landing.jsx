import React from "react";
import Card from "../components/Card";
import Mandine from '../assets/Photos Corporate/Mandzou 2021 Photo Corporate Atelier HD (42).jpg'
import PhotoGrid from "../components/PhotoGrid";
import Carrousel from "../components/Carrousel";
import Denïtza from '../assets/Nymphes/Denïtza01.jpg'
import Uraeus from '../assets/Nymphes/Uraeus01.jpg'
import LaFéeBleu from '../assets/Nymphes/LaFéeBleu01.jpg'
import BohemianKaravan from '../assets/Nymphes/BohemianKaravan01.jpg'

function Landing() {
  return (
    <>
      <div className="container">
      <Carrousel />
        <Card
          title={"Mandzou"}
          img={Mandine}
          description={`Je réalise des accessoires de coiffures sous forme de pince, de
              serre-tête, de bandeaux / headband, barrette. Je réalise également
              des bijoux. Chaque pièce est unique et réalisée par mes soins, à
              la main ou avec une machine à coudre. Des pièces déjà réalisées
              sont disponibles dans ma boutique en ligne. Vous pouvez également
              commander sur mesure en me contactant par mail. Et enfin,
              retrouvez-moi lors de salons, festivals ou expositions.`}
        />
        <PhotoGrid photo1={LaFéeBleu} photo2={Denïtza} photo3={Uraeus} photo4={BohemianKaravan}/>
      </div>
    </>
  );
}

export default Landing;

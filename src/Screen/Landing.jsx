import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Mandine from '../assets/Photos Corporate/Mandzou 2021 Photo Corporate Atelier HD (42).jpg'
import PhotoGrid from "../components/PhotoGrid";


function Landing() {
  return (
    <>
      <Carousel />
      <div className="container">
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
        <PhotoGrid />
      </div>
    </>
  );
}

export default Landing;

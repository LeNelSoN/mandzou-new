import Mandine from '../assets/Photos Corporate/Mandzou 2021 Photo Corporate Atelier HD (42).jpg'

import React, { useEffect, useState } from "react";

const Card = ({isReverse = false}) => {
    const [LgScreen, setLgScreen] = useState(true)
    
    useEffect(() => {
        const clientWidth = document.documentElement.clientWidth
        console.log('client width : ' + clientWidth)

        LgScreen < 768 ? setLgScreen(false) : setLgScreen(true)
    }, [LgScreen])


  return (
    <div className="m-3">
      <div className={`row g-0 m-5 ${isReverse && 'd-flex flex-row-reverse'}`}>
        <div className="col-lg-8 d-flex align-items-center">
          <div className={`card-body mb-3 ${isReverse ? 'ms-lg-5' : 'me-lg-5'} `}>
            <h5 className="card-title mb-3">Mandzou</h5>
            <small className="card-text">
              Je réalise des accessoires de coiffures sous forme de pince, de
              serre-tête, de bandeaux / headband, barrette. Je réalise également
              des bijoux. Chaque pièce est unique et réalisée par mes soins, à
              la main ou avec une machine à coudre. Des pièces déjà réalisées
              sont disponibles dans ma boutique en ligne. Vous pouvez également
              commander sur mesure en me contactant par mail. Et enfin,
              retrouvez-moi lors de salons, festivals ou expositions.
            </small>
          </div>
        </div>
        <div className="col-lg-4">
          <img
            src={Mandine}
            className={`${LgScreen ? 'w-3' : 'img-fluid'} shadow`}
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

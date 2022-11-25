
import React, { useEffect, useState } from "react";

const Card = ({title, description, img, isReverse = false}) => {
    const [LgScreen, setLgScreen] = useState(true)
    
    useEffect(() => {
        const clientWidth = document.documentElement.clientWidth
        console.log('client width : ' + clientWidth)

        clientWidth < 768 ? setLgScreen(false) : setLgScreen(true)
    }, [LgScreen])


  return (
    <div className="m-3">
      <div className={`row g-0 m-5 ${isReverse && 'd-flex flex-row-reverse'}`}>
        <div className="col-lg-6 d-flex align-items-center">
          <div className={`card-body mb-3 ${isReverse ? 'ms-lg-5' : 'me-lg-5'} `}>
            <h3 className="card-title mb-3">{title}</h3>
            <p className="card-text fs-6">
              {description}
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src={img}
            className={`${LgScreen ? 'w-3' : 'img-fluid'} shadow`}
            alt={img}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

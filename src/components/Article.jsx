import React, { useState } from 'react';
import ModalBS from './ModalBS';


function Article({ img, title, price }) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
  
  return (
    <>
        <ModalBS setShow={setShow} show={show} title={title} />

      <div className="col-3 p-1">
        <div onClick={handleShow} className="card shadow-sm">
          <img src={img} class="card-img-top" alt={title} />
          <div className="card-body">
            <p className="card-title">{title}</p>
            <p className="card-text card-subtitle text-muted">{price}€</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;

import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const PhotoGrid = ({photo1, photo2, photo3, photo4, imgAlt}) => {

  const [show, setShow] = useState(false);
  const [imgModal, setImgModal] = useState("");

  const handleShow = (e) => {
    setImgModal(e.target.src)
    setShow(true)
  };

  const handleHide = () => setShow(false)

  return (
    <>
      <Modal show={show} onHide={handleHide}>
        <img src={imgModal} alt={imgAlt} onClick={handleHide}/>
      </Modal>
      <div className="grid-photo container">
          <div className="div1"><img className='img-fluid' src={photo1} alt={`${photo1}`} onClick={handleShow}/>  </div>
          <div className="div2"><img className='img-fluid' src={photo2} alt={`${photo2}`} onClick={handleShow}/> </div>
          <div className="div3"><img className='img-fluid' src={photo3} alt={`${photo3}`} onClick={handleShow}/>  </div>
          <div className="div4"><img className='img-fluid' src={photo4} alt={`${photo4}`} onClick={handleShow}/>  </div>
      </div>
    </>
  )
}

export default PhotoGrid
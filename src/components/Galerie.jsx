import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const Galerie = ({photos = []}) => {
    
    const [show, setShow] = useState(false);
    const [imgModal, setImgModal] = useState("");
  
    const handleShow = (e) => {
      setImgModal(e.target.src)
      setShow(true)
    };

    const handleHide = () => setShow(false)

  return (
    <div className='container'>
        <Modal show={show} onHide={handleHide}>
            <img src={imgModal} alt={"imgAlt"} onClick={handleHide}/>
        </Modal>
        <div className='row'>
            {photos.map(photo => <img className='col-12 col-lg-4 img-fluid mb-4' 
                                    src={photo} 
                                    alt={`${photo}`} 
                                    key={`${photo}`}
                                    onClick={handleShow}
                                    />
            )}
        </div>
    </div>
    )
}

export default Galerie
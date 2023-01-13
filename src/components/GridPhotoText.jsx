import React, { useState } from 'react'
import CeciliaQuiRigole from '../assets/Mariages/Mariage_cecilia_qui_rigole.jpg';
import BrocheMariage from '../assets/Mariages/Mariage_broche_mariage.jpg';
import FilleAvecBallonJaune from '../assets/Mariages/Mariage_fille_avec_ballon_jaune.jpg';
import { Modal } from 'react-bootstrap'

const GridPhotoText = () => {

  const [show, setShow] = useState(false);
  const [imgModal, setImgModal] = useState("");
  const [targetAlt, setTargetAlt] = useState("")

  const handleShow = (e) => {
    setTargetAlt(e.target.alt)
    setImgModal(e.target.src)
    setShow(true)
  };

  const handleHide = () => setShow(false)

  return (
    <>
    <Modal className='mt-5 pt-5' show={show} onHide={handleHide}>
      <img className='img-thumbnail' src={imgModal} alt={targetAlt} onClick={handleHide}/>
    </Modal>
    <div className="grid-photo-text container mt-5">
        <div className="div1"><img className='img-fluid' src={CeciliaQuiRigole} alt='Cecilia Qui Rigole' onClick={handleShow}/></div>
        <div className="div2"><img className='img-fluid' src={BrocheMariage} alt='Broche Mariage' onClick={handleShow}/></div>
        <div className="div3"><img className='img-fluid' src={FilleAvecBallonJaune} alt='Fille Avec Ballon Jaune' onClick={handleShow}/></div>
        <div className="div4">      
            <p className='px-5 py-3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
    </>
  )
}

export default GridPhotoText
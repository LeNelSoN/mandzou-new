import React from 'react'
import CeciliaQuiRigole from '../assets/Mariages/Mariage_cecilia_qui_rigole.jpg';
import BrocheMariage from '../assets/Mariages/Mariage_broche_mariage.jpg';
import FilleAvecBallonJaune from '../assets/Mariages/Mariage_fille_avec_ballon_jaune.jpg';

const GridPhotoText = () => {
  return (
    <div className="grid-photo-text container">
        <div className="div1"><img className='img-fluid' src={CeciliaQuiRigole} alt='Cecilia Qui Rigole'/></div>
        <div className="div2"><img className='img-fluid' src={BrocheMariage} alt='Broche Mariage'/></div>
        <div className="div3"><img className='img-fluid' src={FilleAvecBallonJaune} alt='Fille Avec Ballon Jaune'/></div>
        <div className="div4">      
            <p>
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
  )
}

export default GridPhotoText
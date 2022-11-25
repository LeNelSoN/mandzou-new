import React from 'react'
import PhotoGrid from '../components/PhotoGrid'
import Néant from '../assets/Spectacles/Néant.jpg'
import ofTheMoon from '../assets/Spectacles/Moon.jpg'
import Déchronologues from '../assets/Spectacles/Déchronologues.jpg'
import BohémianKaravan from '../assets/Spectacles/Sabbat.jpg'
import Card from '../components/Card'
import MandzouSpectacle from '../assets/Photos Corporate/Mandzou 2021 Photo Corporate Atelier HD (9).jpg'

function Spectacles() {
  return (
    <div className='container'>
      <PhotoGrid photo1={Néant} photo2={ofTheMoon} photo3={BohémianKaravan} photo4={Déchronologues}/>
      <Card img={MandzouSpectacle} title={'Spectacle'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )
}

export default Spectacles
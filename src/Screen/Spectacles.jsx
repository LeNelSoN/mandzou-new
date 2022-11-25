import React from 'react'
import PhotoGrid from '../components/PhotoGrid'
import Néant from '../assets/Spectacles/Néant.jpg'
import ofTheMoon from '../assets/Spectacles/Moon.jpg'
import Déchronologues from '../assets/Spectacles/Déchronologues.jpg'
import BohémianKaravan from '../assets/Spectacles/Sabbat.jpg'

function Spectacles() {
  return (
    <>
      <PhotoGrid photo1={Néant} photo2={ofTheMoon} photo3={BohémianKaravan} photo4={Déchronologues}/>
    </>
  )
}

export default Spectacles
import React from 'react'
import Denïtza from '../assets/Nymphes/Denïtza01.jpg'
import Uraeus from '../assets/Nymphes/Uraeus01.jpg'
import LaFéeBleu from '../assets/Nymphes/LaFéeBleu01.jpg'
import BohemianKaravan from '../assets/Nymphes/BohemianKaravan01.jpg'

const PhotoGrid = () => {
  return (
    <div className="grid-photo container">
        <div className="div1"><img className='img-fluid' src={LaFéeBleu} alt={`${LaFéeBleu}`}/>  </div>
        <div className="div2"><img className='img-fluid' src={Denïtza} alt={`${Denïtza}`}/> </div>
        <div className="div3"><img className='img-fluid' src={Uraeus} alt={`${Uraeus}`}/>  </div>
        <div className="div4"><img className='img-fluid' src={BohemianKaravan} alt={`${BohemianKaravan}`}/>  </div>
    </div>
  )
}

export default PhotoGrid
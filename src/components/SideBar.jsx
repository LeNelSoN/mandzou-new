import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className='d-flex flex-column p-3 bg-light vh-100'>
    
        <Link to={'/Boutique'} className='nav-link my-3'> Tout </Link>    
        <Link to={'/Boutique/Pinces'} className='nav-link my-3'> Pinces </Link>    
        <Link to={'/Boutique/Tiares'} className='nav-link my-3'> Tiares </Link>    
        <Link to={'/Boutique/Parrures'} className='nav-link my-3'> Parrures </Link>    
        <Link to={'/Boutique/Barrettes'} className='nav-link my-3'> Barrettes </Link>    
        <Link to={'/Boutique/Bijoux'} className='nav-link my-3'> Bijoux </Link>    
    </div>
  )
}

export default SideBar
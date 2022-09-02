
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


/**
 * Permet d'afficher la barre de navigation avec un titre et des catégories
 * @param  {...any} categories un tableu d'objet {title: categorie, link: URL}
 * @returns La barre de navigation avec les catégories et leurs liens
 */
const NavBar = ({children}) => {

  const [isCollapse, setCollapse] = useState(false)
  
  const handleClick = () => {
    setCollapse(!isCollapse)
  }

    return (
      <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
      <Link className='navbar-brand' to={'/'} > Mandzou</Link>
        <button className="navbar-toggler" type="button" onClick={handleClick}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapse && 'show'}`}>
          <ul className="navbar-nav">
            {children}
          </ul>
        </div>
      </div>
    </nav>
    );
  }
export default NavBar;
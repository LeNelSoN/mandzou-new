import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({isCollapse, setCollapse, link, title}) => {

  const handleClick = () => {
    setCollapse(!isCollapse)
}

    return (
      <li className="nav-item">
        <Link onClick={handleClick} className='nav-link' to={`/${link}`}>{title}</Link>
      </li>
    )
  }

export default NavItem
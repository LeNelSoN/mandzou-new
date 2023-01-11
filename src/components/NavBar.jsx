
import { Link } from 'react-router-dom';
import { MdOutlineMenuBook } from 'react-icons/md';

const NavBar = ({isCollapse, setCollapse, withHomeButton = true, children}) => {

  
  const handleClick = () => {
    setCollapse(!isCollapse)
  }

    return (
      <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container">
      {withHomeButton && <Link onClick={handleClick} className='navbar-brand' to={'/'} > Mandzou</Link>}
        <button className="navbar-toggler" type="button" onClick={handleClick}>
          <MdOutlineMenuBook />
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
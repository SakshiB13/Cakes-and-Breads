import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  {Button}  from './Button';
import './NavBar.css';
function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);  

  const handleClick =() => setClick(!click);
  const closeMobileMenu = ()=> setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false);
    } else {
        setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize',showButton);

  return (
    <nav className = "navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <span style={{fontWeight: 'bold'}}>C & B </span> <i className="fa-solid fa-sun"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                
               <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'}/> 
            </div> 
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    <span style={{fontWeight: 'bold'}}>HOME </span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                    <span style={{fontWeight: 'bold'}}>SERVICES</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                    <span style={{fontWeight: 'bold'}}>PRODUCTS</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                    <span style={{fontWeight: 'bold'}}>SIGN-UP </span>
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--style'> <span style={{fontWeight: 'bold'}}>SIGN UP</span></Button>} 
        </div>
     </nav>
  )
}

export default NavBar
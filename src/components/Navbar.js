import './navbar.css';
import { Link , NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import { links } from '../data';
import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

import { useState } from 'react';

const Navbar = ()=>{

    const [showNavigation , setShowNavigation] = useState(false);

    return (
      <nav>
        <div className="container  nav__container">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo"></img>
          </Link>
          <ul className={`nav__links ${showNavigation ? 'show-nav' :'hide-nav'}`}>
            {links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink to={path} className={({isActive}) => isActive ? "active-nav" : ''} >{name}  </NavLink>
                </li>
              );
            })}
          </ul>
          <button className="nav__toggle-btn" onClick={()=>setShowNavigation(!showNavigation)}>
            {
                showNavigation ? <MdOutlineClose/> : <FaBars />
            }
          </button>
        </div>
      </nav>
    );
};

export default Navbar;
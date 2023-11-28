import './navbar.css';
import { Link , NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import { links } from '../data';
import { FaBars } from "react-icons/fa6";

const Navbar = ()=>{
    return(
       <nav>
          <div className='container  nav__container'>
              <Link to='/' className='logo'> 
                 <img src={logo} alt='Logo'></img>
              </Link>
              <ul>
                {
                    links.map(({name , path}, index )=>{
                        return(
                            <li>
                                <NavLink to={path} className="nav__links">{name}</NavLink>
                            </li>
                        )
                    })
                }
              </ul>
              <button className='nav__toggle-btn'>
                <FaBars/>
              </button>
          </div>
       </nav>
    );
};

export default Navbar;
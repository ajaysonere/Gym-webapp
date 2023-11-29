import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import {FaLinkedin} from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import {AiOutlineTwitter} from 'react-icons/ai';
import { FaGithub } from "react-icons/fa";


const Footer = ()=> {
    return (
      <footer>
        <div className="container footer__container">
          <article>
            <Link className="logo">
              <img src={logo} alt="logo"></img>
            </Link>
            <p>
              loremAmet adipisicing ipsum non minim proident sunt adipisicing
              pariatur officia incididunt.loremAmet adipisicing ipsum non minim.
            </p>
            <div className="footer__socials">
              <a href="https://github.com/ajaysonere">
                {" "}
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ajaysonere/">
                {" "}
                <FaLinkedin />
              </a>
              <a href="https://www.fackbook.com">
                {" "}
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com">
                {" "}
                <AiOutlineTwitter />
              </a>
            </div>
          </article>
          <article>
            <h4>PermaLinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </article>
          <article>
            <h4>Insights</h4>
            <Link to="/s">Blog</Link>
            <Link to="/plans">Case Studies</Link>
            <Link to="/trainers">Events</Link>
            <Link to="/gallery">Communities</Link>
            <Link to="/contact">FAQs</Link>
          </article>
          <article>
            <h4>Get In Touch</h4>
            <Link to="/contact">Contact</Link>
            <Link to="/s"> Support </Link>
          </article>
        </div>
        <div className="footer__copyright">
          <small> &copy; Made by Ajay Sonere ❤️ </small>
        </div>
      </footer>
    );
};

export default Footer;
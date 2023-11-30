import Header from '../../components/Header';
import headerImage from '../../images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md';
import { FaGithub } from "react-icons/fa";
import {IoLogoWhatsapp} from 'react-icons/io';

import './contact.css';

const Contact = () => {
    return (
        <div>
            <Header title="Get in Touch" icon={headerImage} >
                 we are on mission to aware people about the health <br /> and motivate them for workout. 
            </Header>
            <section className='contact'>
                <div className='container contact__container'>
                    <div className='contact__wrapper'>
                        <a href='mailto:ajaysonere786@gmail.com' target='_blank' rel="noreferrer noopener">
                            <MdEmail />
                        </a>
                        <a href="https://github.com/ajaysonere" target='_blank' rel="noreferrer noopener">
                            <FaGithub />
                        </a>
                        <a href='https://wa.me/+919977449230' target='_blank' rel="noreferrer noopener">
                            <IoLogoWhatsapp />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

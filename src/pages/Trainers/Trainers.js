import './trainers.css';
import headerImage from '../../images/header_bg_5.jpg';
import Header from '../../components/Header';
import {trainers} from '../../data';
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import Trainer from '../../components/Trainer';


const Trainers = () =>{
    return(
        <div>
             <Header title="Our Trainers" icon={headerImage}>
                Proin efficitur mauris at quam facilisis, id efficitur felis
                rhoncus. Curabitur sodales quam sit amet tortor
             </Header>
             <section className='trainers'>
                <div className='container trainers__container'>
                     {
                        trainers.map(({id , image ,name , job , socials})=>{
                            return  <Trainer key={id} image={image} name={name} job={job} socials={
                                [
                                    {icon:<MdEmail /> , link: socials[0]},
                                    {icon:<FaGithub /> , link: socials[1]},
                                    {icon:<AiOutlineTwitter /> , link: socials[2]},
                                    {icon:<FaLinkedin /> , link: socials[3]}   
                                ]
                            } />
                        })
                     }
                </div>
             </section>
        </div>
    );
};

export default Trainers;
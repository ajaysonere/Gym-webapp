import Faqsections from '../../components/Faqsections';
import Mainheader from '../../components/Mainheader';
import Programs from '../../components/Programs';
import Testimonials from '../../components/Testimonials';
import Values from '../../components/Values';

import './home.css';

const Home = ()=>{
    return(
       <div >
            <Mainheader/>
            <Programs />
            <Values />
            <Faqsections />
            <Testimonials />
       </div>
    );
};

export default Home;
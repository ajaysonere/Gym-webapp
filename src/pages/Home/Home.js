import Faqsections from '../../components/Faqsections';
import Mainheader from '../../components/Mainheader';
import Programs from '../../components/Programs';
import Values from '../../components/Values';
import './home.css';

const Home = ()=>{
    return(
       <div >
            <Mainheader/>
            <Programs />
            <Values />
            <Faqsections />
       </div>
    );
};

export default Home;
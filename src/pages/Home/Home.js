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
       </div>
    );
};

export default Home;
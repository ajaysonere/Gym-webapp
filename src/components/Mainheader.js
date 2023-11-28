import { Link } from "react-router-dom";
import image from "../images/main_header.png"

const Mainheader = ()=>{
    return(
       <header className="main__header">
          <div className="container main__header-container">
              <div className="main__header-left">
                 <h4>#75HardChallenge</h4>
                 <h1>Join The Legends Of <br /> The Fitness World </h1>
                 <p>
                    we are on mission to aware people about the health <br /> and motivate them for workout. 
                 </p>
                 <Link to='/plans' className="btn lg">Get Started </Link>
              </div>
              <div className="main__header-right">
                  <div className="main__header-circle"></div>
                  <div className="main__header-image">
                    <img src={image} alt="man logo"></img>
                  </div>
              </div>
          </div>
       </header>
    );
};

export default Mainheader;
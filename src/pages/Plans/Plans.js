import './plans.css';
import Header from '../../components/Header';
import Card from '../../UI/Card';
import {plans} from '../../data'; 
import headerImage from '../../images/header_bg_4.jpg';


const Plans = ()=>{
    return (
      <>
        <Header title="Membership Plans" icon={headerImage}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Suspendisse non nisl at lectus pretium volutpat.
        </Header>
        <section className='plans'>
            <div className='container plans__container'>
                {
                    plans.map(({id , name , desc , price , features})=>{
                        return (
                            <Card key={id} className="plan">
                                 <h3>{name}</h3>
                                 <small>{desc}</small>
                                 <h1>{`$ ${price}`}</h1> <h2>/mo</h2>
                                 <h4> Features </h4>
                                 { 
                                  features.map(({feature , available} , index)=> {
                                     return <p className={!available ? "disable" : ""} key={index}>{feature} </p>
                                  })
                                  
                                 }
                                 <button className='btn lg'> Choose Plan </button>
                            </Card>
                        )
                    })
                }

            </div>
        </section>
      </>
    );
};

export default Plans;


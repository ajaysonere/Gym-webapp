import image from '../images/values.jpg';
import Sectionheader from './Sectionheader';
import {GiCutDiamond} from 'react-icons/gi';
import {values} from "../data";
import Card from '../UI/Card';

const Values = ()=>{
    return (
      <section className="values">
        <div className="container value__container">
          <div className="values__left">
            <div className="value__image">
              <img src={image} alt="logo"></img>
            </div>
          </div>
          <div className="values__right">
            <Sectionheader icons={<GiCutDiamond />} title="Values" />
            <p>
              To keep the body in good health is a duty, otherwise we shall not
              be able to keep our mind strong and clear.” — Buddha
            </p>
            <div className="values__wrapper">
              {values.map(({ id, icon, title, desc }) => {
                return (
                  <Card className="values__value" key={id}>
                    <span>{icon}</span>
                    <h4>{title}</h4>
                    <small>{desc}</small>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
};

export default Values;
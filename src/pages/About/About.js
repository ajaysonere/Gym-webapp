import './about.css';
import Header from '../../components/Header';
import headerImage from '../../images/header_bg_1.jpg';
import storyImage from '../../images/trainer1.jpg';
import visionImage from '../../images/trainer4.jpg';
import missionImage from '../../images/trainer5.jpg';


const About = ()=>{
    return (
      <div>
        <Header title="About Us" icon={headerImage}>
          High-Intensity Interval Training accelerates fat burn. Consistency is
          key, but adequate rest is crucial for optimal results.
        </Header>
        <section className="about__story">
          <div className="container about__story-container">
            <div className="about__section-image">
              <img src={storyImage} alt="story"></img>
            </div>
            <div className="about__section-content">
              <h1> Our Story </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Suspendisse non nisl at lectus pretium volutpat.
                Vestibulum ac justo efficitur, consectetur felis vel, tempus
                elit.Proin efficitur mauris at quam facilisis, id efficitur
                felis rhoncus. Curabitur sod.
              </p>
              <p>
                Duis ac dolor a quam tincidunt bibendum. Quisque ultrices auctor
                ante, ac malesuada eros aliquam nec.Proin efficitur mauris at
                quam facilisis, id efficitur felis rhoncus. Curabitur sodales
                quam sit amet tortor luctus, eget luctus urna.
              </p>
              <p>
                Proin efficitur mauris at quam facilisis, id efficitur felis
                rhoncus. Curabitur sodales quam sit amet tortor luctus, eget
                luctus urna ultricies. Integer eget neque nec lacus venenatis
                semper in a nunc.
              </p>
            </div>
          </div>
        </section>
        <section className="vision__story">
          <div className="container about__vision-container">
            <div className="about__section-content">
              <h1> Our Vision </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Suspendisse non nisl at lectus pretium volutpat.
                Vestibulum ac justo efficitur, consectetur felis vel, tempus
                elit.Proin efficitur mauris at quam facilisis, id efficitur
                felis rhoncus. Curabitur sod.Duis ac dolor a quam tincidunt
                bibendum. Quisque ultrices auctor ante,
              </p>
              <p>
                Duis ac dolor a quam tincidunt bibendum. Quisque ultrices auctor
                ante, ac malesuada eros aliquam nec.Proin efficitur mauris at
                quam facilisis, id efficitur felis rhoncus. Curabitur sodales
                quam sit amet tortor luctus, eget luctus urna.
              </p>
              <p>
                Proin efficitur mauris at quam facilisis, id efficitur felis
                rhoncus. Curabitur sodales quam sit amet tortor luctus, eget
                luctus urna ultricies. Integer eget neque nec lacus venenatis
                semper in a nunc.
              </p>
            </div>
            <div className="about__section-image">
              <img src={visionImage} alt="story"></img>
            </div>
          </div>
        </section>
        <section className="about__mission">
          <div className="container about__mission-container">
            <div className="about__section-image">
              <img src={missionImage} alt="story"></img>
            </div>
            <div className="about__section-content">
              <h1> Our Mission </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Suspendisse non nisl at lectus pretium volutpat.
                Vestibulum ac justo efficitur, consectetur felis vel, tempus
                elit.Proin efficitur mauris at quam facilisis, id efficitur
                felis rhoncus. Curabitur sod.
              </p>
              <p>
                Duis ac dolor a quam tincidunt bibendum. Quisque ultrices auctor
                ante, ac malesuada eros aliquam nec.Proin efficitur mauris at
                quam facilisis, id efficitur felis rhoncus. Curabitur sodales
                quam sit amet tortor luctus, eget luctus urna.
              </p>
              <p>
                Proin efficitur mauris at quam facilisis, id efficitur felis
                rhoncus. Curabitur sodales quam sit amet tortor luctus, eget
                luctus urna ultricies. Integer eget neque nec lacus venenatis
                semper in a nunc.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
};

export default About;
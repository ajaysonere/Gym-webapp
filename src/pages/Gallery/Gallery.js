import headerImage from '../../images/header_bg_3.jpg';
import Header from '../../components/Header';

import './gallery.css';

const Gallery = () => {

    const galleryLength = 15;
    const image = [];

    for(let i=1 ; i<= galleryLength ; i++){
        image.push(require(`../../images/gallery${i}.jpg`));
    }

    return (
      <div>
        <Header title="Our Gallery" icon={headerImage}>
          Proin efficitur mauris at quam facilisis, id efficitur felis rhoncus.
          Curabitur sodales quam sit amet tortor luctus.
        </Header>
        <section className='gallery'>
            <div className='container gallery__container'>
                {
                    image.map((image , index) => {
                    return  <article key={index}>
                              <img src={image} alt={`pictures ${index + 1}`}></img>
                        </article>

                })
                }
            </div>
        </section>
      </div>
    );
};

export default Gallery;


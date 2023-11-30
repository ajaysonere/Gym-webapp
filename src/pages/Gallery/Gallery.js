import headerImage from '../../images/header_bg_3.jpg';
import Header from '../../components/Header';

import './gallery.css';

const Gallery = () => {
    return (
      <div>
        <Header title="Our Gallery" icon={headerImage}>
          Proin efficitur mauris at quam facilisis, id efficitur felis rhoncus.
          Curabitur sodales quam sit amet tortor luctus.
        </Header>
      </div>
    );
};

export default Gallery;


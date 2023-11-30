import { BrowserRouter , Routes , Route } from 'react-router-dom';
// pages 
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import Plans from './pages/Plans/Plans';
import Trainers from './pages/Trainers/Trainers';
import Notfound from './pages/Notfound/Notfound';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="gallery" element={<Gallery />}></Route>
        <Route path="plans" element={<Plans />}></Route>
        <Route path="trainers" element={<Trainers />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

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

const App = () => {
  return (
    <BrowserRouter>
       <Navbar/>
       <Routes >
         <Route></Route>
       </Routes>
    </BrowserRouter>
  );
};

export default App;

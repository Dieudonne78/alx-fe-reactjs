import { Route,Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Services from './components/Services';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar />
    <div style={{display:'flex',justifyContent:'center'}}>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Services' element={<Services />}/>
      <Route path='/Contact' element={<Contact />}/>
    </Routes>
    </div>
    </>
  );
}

export default App;

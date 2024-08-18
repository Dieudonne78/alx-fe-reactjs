import { Route,Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Services from './Services';
import Home from './Home';
import Contact from './Contact';
import Navbar from './Navbar';
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

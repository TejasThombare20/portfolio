import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Social from './Component/Social';
import About from './Component/About';
import Portfolio from './Component/Portfolio';
import Experience from './Component/Experience';
import Contact from './Component/Contact';

function App() {
  return (
    
    <div>
         <Navbar/>
           <Home/>
           <Social/>
           <About/>
           <Portfolio/>
           <Experience/>
           <Contact/>

    </div>
  );
}

export default App;

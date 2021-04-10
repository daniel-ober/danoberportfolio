// import logo from './logo.svg';
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Nav from './components/Nav'


function App() {
  return (
    <div className='nav-links'>
    <Nav />
    <Route exact path='/'>
      <Home />
    </Route>
    <Route path='/about'>
      <About />
    </Route>
    <Route path='/projects'>
      <Projects />
    </Route>
    <Route path='/contact'>
      <Contact />
    </Route>
    </div>
  );
}

export default App;

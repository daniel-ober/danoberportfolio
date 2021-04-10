import Nav from "./Nav";
import Footer from "./Footer";
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import { Switch, Route } from 'react-router-dom'

function Layout() {
  return (
    <div className="layout">
      <Nav />
      <Footer />
    </div>
  );
}

export default Layout;

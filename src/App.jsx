import './App.css'
// import ScriptTag from 'react-script-tag'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Aboutme from './pages/Aboutme'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { Helmet } from 'react-helmet'
import particlesJS from './libraries/particlesConfig'

function App() {

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS?.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });

  return (
    <div className="App">

      {/* <div id="particles-js"></div> */}
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App

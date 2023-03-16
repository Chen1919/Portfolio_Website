import About from "./pages/About/index";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() { 
  return (
    <Router>
      <div className="home_bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </div>
    </Router>
  );
  {/* <Contact /> */}
}
export default App;

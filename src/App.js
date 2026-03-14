import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Marquee from "./components/Marquee";
import WhatIDo from "./components/WhatIDo";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Background />
      <Cursor />
      <div className="relative z-10">
        <NavBar />
        <Home />
        <Marquee />
        <WhatIDo />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

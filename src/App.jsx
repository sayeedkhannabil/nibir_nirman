import React from "react";
import Header from "./components/layout/Header/Header";
import Nav from "./components/layout/Nav/Nav";
import Stats from "./components/sections/Stat/Stats";
import Services from "./components/sections/Services/Services";
import Projects from "./components/sections/Project/Project";
import About from "./components/sections/About/About";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";
import AnimatedServices from "./components/sections/AnimatedServices/AnimatedServices";
import ProjectGrid from "./components/sections/ProjectGrid/ProjectGrid";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Nav />
      <Stats />

      <main>
        <AnimatedServices />
        <Services />
        <Projects />
        <ProjectGrid />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;

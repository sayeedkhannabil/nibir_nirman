import React from "react";
import { motion } from "motion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// Home page component with all sections
const Home = () => {
  return (
    <>
      <div id="stats">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is visible
          transition={{ duration: 1.2 }}
        >
          <Stats />
        </motion.div>
      </div>

      <main>
        <div id="services">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2 }}
          >
            <AnimatedServices />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2 }}
          >
            <Services />
          </motion.div>
        </div>

        <div id="projects">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2 }}
          >
            <ProjectGrid />
          </motion.div>
        </div>

        <div id="about">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2 }}
          >
            <About />
          </motion.div>
        </div>

        <div id="contact">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2 }}
          >
            <Contact />
          </motion.div>
        </div>
      </main>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <Nav />
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Home = () => {
  // Smooth scrolling progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-white dark:bg-gray-950 min-h-screen">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX, transformOrigin: "left" }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* Hero section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* About section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Skills section */}
        <section id="skills">
          <SkillsSection />
        </section>

        {/* Projects section */}
        {/* <section id="projects">
          <ProjectsSection />
        </section> */}

        {/* Contact section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
};

// Scroll to top button component
const ScrollToTopButton = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setVisible(latest > 0.2);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg z-40"
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.5,
        y: visible ? 0 : 20,
      }}
      transition={{ duration: 0.3 }}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white-600 dark:text-black"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </motion.button>
  );
};

export default Home;

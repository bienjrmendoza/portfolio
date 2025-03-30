import React, { useRef } from "react";
import Header from "./layout/Header";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./layout/Footer";
import SeoHead from "./seo/SeoHead";

const Home: React.FC = () => {
  const contactsRef = useRef<HTMLDivElement>(null);

  const scrollToContacts = () => {
    if (contactsRef.current) {
      const offset = 60;
      const top = contactsRef.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization */}
      <SeoHead
        title="Bienvenido D. Mendoza Jr. | Software Developer"
        description="Professional portfolio of Bienvenido D. Mendoza Jr., a software developer specializing in Laravel, databases, and API development with competence with frontend."
        keywords="backend developer, Laravel, API development, database design, full-stack developer"
      />

      {/* Navigation Header */}
      <Header transparent={true} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection
          name="Bienvenido D. Mendoza Jr."
          title="Software Developer"
          description="I'm a software developer who designs and builds web applications to help businesses streamline their operations and improve efficiency. I specialize in creating user-friendly solutions that simplify complex processes."
          onScrollToContacts={scrollToContacts}
        />

        {/* Projects Section */}
        {/* <div ref={projectsRef}>
          <ProjectsSection />
        </div> */}
        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Contact Section */}
        <div ref={contactsRef}>
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <Footer
        name="Bienvenido D. Mendoza Jr."
        // email="contact@johndoe.dev"
        socialLinks={{
          github: "https://github.com/bienjrmendoza/bienjrmendoza",
          linkedin: "https://www.linkedin.com/in/bienvenido-jr-mendoza-52828824a/in/",
        }}
      />
    </div>
  );
};

export default Home;

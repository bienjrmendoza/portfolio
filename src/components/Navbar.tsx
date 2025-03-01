import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Menu, X, Download, Moon, Sun } from "lucide-react";

interface NavbarProps {
  sections?: Array<{ id: string; label: string }>;
  resumeUrl?: string;
}

const Navbar = ({
  sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    // { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ],
  resumeUrl = "/resume.pdf",
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle theme toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu if open
      setIsMobileMenuOpen(false);

      // Smooth scroll to section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 ${isScrolled ? "shadow-md" : ""} transition-all duration-300`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-primary dark:text-primary-foreground"
        >
          
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              whileHover={{ y: -2 }}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground transition-colors"
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </motion.button>
          ))}

          <Button
            variant="outline"
            size="sm"
            className="ml-4 flex items-center gap-2"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            {isDarkMode ? "Light" : "Dark"}
          </Button>

          {/* <Button asChild size="sm" className="flex items-center gap-2">
            <a href={resumeUrl} download>
              <Download size={16} />
              Resume
            </a>
          </Button> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="mr-2"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {sections.map((section) => (
              <button
                key={section.id}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground py-2 transition-colors text-left"
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            ))}
            {/* <Button
              asChild
              size="sm"
              className="flex items-center gap-2 w-full justify-center mt-4"
            >
              <a href={resumeUrl} download>
                <Download size={16} className="mr-2" />
                Download Resume
              </a>
            </Button> */}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

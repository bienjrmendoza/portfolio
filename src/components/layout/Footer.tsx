import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

interface FooterProps {
  name?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  copyrightYear?: number;
}

const Footer = ({
  name = "Bienvenido D. Mendoza Jr.",
  socialLinks = {
    github: "http://github.com/bienjrmendoza",
    linkedin: "https://www.linkedin.com/in/bienvenido-jr-mendoza-52828824a/",
    email: "mailto:bienvenidojr.mendoza@gmail.com",
  },
  copyrightYear = new Date().getFullYear(),
}: FooterProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-8 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-white-200"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              © {copyrightYear} {name}. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            {/* {socialLinks.github && (
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            )} */}

            {/* {socialLinks.linkedin && (
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            )} */}

            {/* {socialLinks.email && (
              <Button variant="ghost" size="icon" asChild>
                <a href={socialLinks.email} aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            )} */}
          </div>
        </div>
      </div>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 z-50"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
       )}
    </motion.footer>
  );
};

export default Footer;

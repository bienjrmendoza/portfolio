import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  name?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  copyrightYear?: number;
}

const Footer = ({
  name = "John Doe",
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:contact@example.com",
  },
  copyrightYear = new Date().getFullYear(),
}: FooterProps) => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-8 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              © {copyrightYear} {name}. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.github && (
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
            )}

            {socialLinks.linkedin && (
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
            )}

            {socialLinks.twitter && (
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            )}

            {socialLinks.email && (
              <Button variant="ghost" size="icon" asChild>
                <a href={socialLinks.email} aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

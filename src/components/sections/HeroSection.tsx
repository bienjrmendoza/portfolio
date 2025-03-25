import React from "react";
import { Button } from "../ui/button";
import {
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  onScrollToContacts?: () => void;
}

const HeroSection = ({
  name = "Bienvenido D. Mendoza Jr.",
  title = "Software Developer",
  description = "Specialized in building robust, scalable backend systems and RESTful APIs with a focus on performance and security. Experienced with Node.js, Python, and database optimization.",
  imageUrl = "/profile.jpg",
  socialLinks = {
    github: "https://github.com/bienjrmendoza",
    linkedin: "https://www.linkedin.com/in/bienvenido-jr-mendoza-52828824a/",
    email: "mailto:bienvenidojr.mendoza@gmail.com",
  },
  onScrollToContacts = () => console.log("Scroll to projects"),
}: HeroSectionProps) => {
  return (
    <section className="w-full min-h-[700px] bg-slate-50 flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 dark:bg-slate-900">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 dark:text-white">
            Hi, I'm <span className="text-blue-600">{name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-slate-700 mb-6 dark:text-white">
            {title}
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-xl dark:text-white">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              onClick={onScrollToContacts}
              className="flex items-center gap-2"
            >
              Connect With Me
              <ArrowDownIcon size={16} />
            </Button>

            <div className="flex items-center gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-white dark:hover:bg-gray-300 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} className="text-slate-900 dark:text=black" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-white dark:hover:bg-gray-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} className="text-slate-900 dark:text=black" />
              </a>
              <a
                href={socialLinks.email}
                className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-white dark:hover:bg-gray-300 transition-colors"
                aria-label="Email Contact"
              >
                <MailIcon size={20} className="text-slate-900 dark:text=black" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Laravel
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              React
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
              MySQL
            </span>
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
              Git
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              API Design
            </span>
          </div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 transform -translate-x-4 translate-y-4"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full mt-6 md:mt-0 border-4 border-white shadow-xl relative z-10 overflow-hidden">
              <img
                src={imageUrl}
                alt={`${name} - ${title}`}
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

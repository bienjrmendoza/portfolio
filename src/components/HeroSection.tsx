import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  resumeUrl?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const HeroSection = ({
  name = "Bienvenido D. Mendoza Jr.",
  title = "Web Developer",
  description = "I build accessible, responsive, and performant web applications with modern technologies that deliver exceptional user experiences.",
  imageUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio",
  resumeUrl = "#",
  socialLinks = {
    github: "http://github.com/bienjrmendoza",
    linkedin: "https://www.linkedin.com/in/bienvenido-jr-mendoza-52828824a/",
    twitter: "https://twitter.com",
  },
}: HeroSectionProps) => {
  return (
    <section className="min-h-[800px] w-full flex items-center justify-center py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Welcome to my site!
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Hi, I'm <span className="text-primary">{name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-gray-600 dark:text-gray-400 text-lg max-w-xl"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {/* <Button asChild size="lg" className="rounded-full">
                <a href={resumeUrl} download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button> */}

              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                asChild
              >
                <a href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex items-center gap-4 pt-4"
            >
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary/20 transition-colors"
              >
                <Mail className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary/20 transition-colors"
              >
                <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-purple-600 opacity-70 blur-xl animate-pulse" />
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="relative bg-white dark:bg-gray-800 p-2 rounded-full shadow-xl"
              >
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

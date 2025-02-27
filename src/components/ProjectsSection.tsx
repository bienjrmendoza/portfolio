import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Filter } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  sourceUrl: string;
  featured: boolean;
  category: string;
}

interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

const ProjectsSection = ({
  title = "My Projects",
  subtitle = "Check out some of my recent work and personal projects",
  projects = [
    {
      id: "project-1",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with product filtering, user authentication, and payment processing.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      sourceUrl: "#",
      featured: true,
      category: "Web",
    },
    {
      id: "project-2",
      title: "Task Management App",
      description:
        "A productivity app for managing tasks with drag-and-drop functionality and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2069",
      tags: ["React", "Firebase", "Tailwind CSS"],
      demoUrl: "#",
      sourceUrl: "#",
      featured: false,
      category: "Web",
    },
    {
      id: "project-3",
      title: "Weather Dashboard",
      description:
        "A weather application that displays current conditions and forecasts using data from multiple APIs.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070",
      tags: ["JavaScript", "API Integration", "CSS"],
      demoUrl: "#",
      sourceUrl: "#",
      featured: false,
      category: "Web",
    },
    {
      id: "project-4",
      title: "Mobile Fitness Tracker",
      description:
        "A cross-platform mobile app for tracking workouts, nutrition, and fitness goals with data visualization.",
      image:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070",
      tags: ["React Native", "Redux", "Firebase"],
      demoUrl: "#",
      sourceUrl: "#",
      featured: true,
      category: "Mobile",
    },
    {
      id: "project-5",
      title: "AI Image Generator",
      description:
        "An application that uses machine learning to generate unique images based on text prompts.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065",
      tags: ["Python", "TensorFlow", "React"],
      demoUrl: "#",
      sourceUrl: "#",
      featured: false,
      category: "AI/ML",
    },
    {
      id: "project-6",
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with modern web technologies and smooth animations.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      demoUrl: "#",
      sourceUrl: "#",
      featured: false,
      category: "Web",
    },
  ],
}: ProjectsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [isVisible, setIsVisible] = useState(false);

  // Extract unique categories from projects
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  useEffect(() => {
    // Filter projects based on active category
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory),
      );
    }
  }, [activeCategory, projects]);

  useEffect(() => {
    // Animation trigger when component is in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById("projects-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="projects-section"
      className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="mb-10">
          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    className="px-4 py-2 rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeCategory} className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    demoUrl={project.demoUrl}
                    sourceUrl={project.sourceUrl}
                    featured={project.featured}
                  />
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="group">
            <Filter className="mr-2 h-4 w-4 transition-transform group-hover:rotate-180" />
            View All Projects
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;

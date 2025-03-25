import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ProjectCard from "../projects/ProjectCard";
import ProjectModal from "../projects/ProjectModal";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: { name: string; color?: string }[];
  imageUrl: string;
  architectureDiagram?: string;
  apiDocumentation?: string;
  codeSnippets?: { title: string; code: string; language: string }[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

const ProjectsSection = ({
  title = "Backend Projects",
  subtitle = "Showcasing my expertise in building robust backend systems with clean architecture and comprehensive documentation.",
  projects = [
    {
      id: "1",
      title: "RESTful API Service",
      description:
        "A scalable API built with Node.js, Express, and MongoDB with comprehensive documentation and testing.",
      longDescription:
        "This project demonstrates my expertise in building robust backend systems. It includes JWT authentication, rate limiting, and comprehensive error handling. The architecture follows clean code principles with a focus on maintainability and performance.",
      technologies: [
        { name: "Node.js", color: "bg-green-100 text-green-800" },
        { name: "Express", color: "bg-blue-100 text-blue-800" },
        { name: "MongoDB", color: "bg-emerald-100 text-emerald-800" },
        { name: "JWT", color: "bg-purple-100 text-purple-800" },
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
      architectureDiagram:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
      apiDocumentation:
        '# User API\n\n## GET /api/users\n\nReturns a list of all users.\n\n### Parameters\n\n- `limit` (optional): Limit the number of results\n- `offset` (optional): Offset for pagination\n\n### Response\n\n```json\n{\n  "users": [\n    {\n      "id": "1",\n      "name": "Bienvenido D. Mendoza Jr.",\n      "email": "john@example.com"\n    }\n  ],\n  "total": 100\n}\n```',
      codeSnippets: [
        {
          title: "Authentication Middleware",
          code: "const authenticate = async (req, res, next) => {\n  try {\n    const token = req.headers.authorization?.split(' ')[1];\n    if (!token) return res.status(401).json({ error: 'Authentication required' });\n    \n    const decoded = jwt.verify(token, process.env.JWT_SECRET);\n    req.user = decoded;\n    next();\n  } catch (error) {\n    return res.status(401).json({ error: 'Invalid token' });\n  }\n};",
          language: "javascript",
        },
        {
          title: "Rate Limiting Implementation",
          code: "const rateLimit = require('express-rate-limit');\n\nconst apiLimiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100, // limit each IP to 100 requests per windowMs\n  message: 'Too many requests from this IP, please try again after 15 minutes'\n});\n\napp.use('/api/', apiLimiter);",
          language: "javascript",
        },
      ],
      githubUrl: "https://github.com/bienjrmendoza/username/api-project",
      liveUrl: "https://api-example.com",
    },
    {
      id: "2",
      title: "Database Migration System",
      description:
        "A robust database migration tool built with TypeScript that handles complex schema changes safely.",
      longDescription:
        "This project showcases my database expertise, featuring a migration system that handles complex schema changes with rollback capabilities. It supports multiple database types and includes comprehensive logging and error recovery.",
      technologies: [
        { name: "TypeScript", color: "bg-blue-100 text-blue-800" },
        { name: "PostgreSQL", color: "bg-indigo-100 text-indigo-800" },
        { name: "MySQL", color: "bg-orange-100 text-orange-800" },
        { name: "Docker", color: "bg-sky-100 text-sky-800" },
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80",
      architectureDiagram:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
      codeSnippets: [
        {
          title: "Migration Runner",
          code: "async function runMigrations(direction: 'up' | 'down', target?: string) {\n  const migrations = await loadMigrations();\n  const sortedMigrations = direction === 'up'\n    ? migrations.sort((a, b) => a.timestamp - b.timestamp)\n    : migrations.sort((a, b) => b.timestamp - a.timestamp);\n\n  for (const migration of sortedMigrations) {\n    if (direction === 'up' && !await isApplied(migration.id)) {\n      await migration.up();\n      await markAsApplied(migration.id);\n      logger.info(`Applied migration: ${migration.name}`);\n    } else if (direction === 'down' && await isApplied(migration.id)) {\n      await migration.down();\n      await markAsReverted(migration.id);\n      logger.info(`Reverted migration: ${migration.name}`);\n      if (migration.id === target) break;\n    }\n  }\n}",
          language: "typescript",
        },
      ],
      githubUrl: "https://github.com/bienjrmendoza/username/db-migration-tool",
    },
    {
      id: "3",
      title: "Microservice Architecture",
      description:
        "A system of microservices using Node.js, gRPC, and message queues for high scalability and fault tolerance.",
      longDescription:
        "This project demonstrates my understanding of distributed systems architecture. It features multiple microservices communicating via gRPC and message queues, with circuit breakers for fault tolerance and distributed tracing for observability.",
      technologies: [
        { name: "Node.js", color: "bg-green-100 text-green-800" },
        { name: "gRPC", color: "bg-purple-100 text-purple-800" },
        { name: "RabbitMQ", color: "bg-orange-100 text-orange-800" },
        { name: "Docker", color: "bg-sky-100 text-sky-800" },
        { name: "Kubernetes", color: "bg-blue-100 text-blue-800" },
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
      architectureDiagram:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      githubUrl: "https://github.com/bienjrmendoza/username/microservices-demo",
    },
  ],
}: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil((projects?.length || 0) / projectsPerPage);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage,
  );

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                onViewDetails={() => handleViewDetails(project)}
              />
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`flex items-center px-4 py-2 rounded-md ${currentPage === 0 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-200"}`}
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Previous
            </button>
            <div className="flex items-center text-gray-700">
              Page {currentPage + 1} of {totalPages}
            </div>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className={`flex items-center px-4 py-2 rounded-md ${currentPage === totalPages - 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-200"}`}
            >
              Next
              <ChevronRight className="h-5 w-5 ml-1" />
            </button>
          </div>
        )}

        {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={handleCloseModal}
            project={{
              id: selectedProject.id,
              title: selectedProject.title,
              description: selectedProject.description,
              longDescription: selectedProject.longDescription,
              technologies: selectedProject.technologies.map(
                (tech) => tech.name,
              ),
              architectureDiagram: selectedProject.architectureDiagram,
              apiDocumentation: selectedProject.apiDocumentation,
              codeSnippets: selectedProject.codeSnippets,
              liveUrl: selectedProject.liveUrl,
              githubUrl: selectedProject.githubUrl,
            }}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;

import React from "react";
import { ExternalLink, X } from "lucide-react";
import { motion } from "framer-motion";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";

interface ProjectModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    architectureDiagram?: string;
    apiDocumentation?: string;
    codeSnippets?: { title: string; code: string; language: string }[];
    liveUrl?: string;
    githubUrl?: string;
  };
}

const ProjectModal = ({
  isOpen = true,
  onClose = () => {},
  project = {
    id: "1",
    title: "Backend API Service",
    description: "A scalable RESTful API built with Node.js and Express",
    longDescription:
      "This project demonstrates my expertise in building robust backend systems. It includes authentication, rate limiting, and comprehensive error handling. The architecture follows clean code principles with a focus on maintainability and performance.",
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
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
    liveUrl: "https://api-example.com",
    githubUrl: "https://github.com/bienjrmendoza/username/api-project",
  },
}: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-lg">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-gray-700 mb-6">{project.longDescription}</p>

          <div className="flex gap-4 mb-6">
            {project.liveUrl && (
              <Button asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={16} />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>View Code</span>
                  <ExternalLink size={16} />
                </a>
              </Button>
            )}
          </div>

          <Tabs defaultValue="architecture">
            <TabsList className="w-full justify-start mb-4">
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="api">API Documentation</TabsTrigger>
              <TabsTrigger value="code">Code Samples</TabsTrigger>
            </TabsList>

            <TabsContent value="architecture" className="p-4 border rounded-md">
              {project.architectureDiagram ? (
                <div className="flex flex-col items-center">
                  <motion.img
                    src={project.architectureDiagram}
                    alt="Architecture Diagram"
                    className="max-w-full rounded-md shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <p className="mt-4 text-center text-gray-600">
                    Architecture diagram showing the system components and their
                    interactions
                  </p>
                </div>
              ) : (
                <p className="text-gray-500 italic">
                  No architecture diagram available
                </p>
              )}
            </TabsContent>

            <TabsContent value="api" className="p-4 border rounded-md">
              {project.apiDocumentation ? (
                <div className="prose max-w-none">
                  <pre className="p-4 bg-gray-100 rounded-md overflow-x-auto">
                    {project.apiDocumentation}
                  </pre>
                </div>
              ) : (
                <p className="text-gray-500 italic">
                  No API documentation available
                </p>
              )}
            </TabsContent>

            <TabsContent value="code" className="p-4 border rounded-md">
              {project.codeSnippets && project.codeSnippets.length > 0 ? (
                <div className="space-y-6">
                  {project.codeSnippets.map((snippet, index) => (
                    <div
                      key={index}
                      className="border rounded-md overflow-hidden"
                    >
                      <div className="bg-gray-100 px-4 py-2 font-medium border-b">
                        {snippet.title}
                      </div>
                      <pre className="p-4 bg-gray-50 overflow-x-auto">
                        <code className={`language-${snippet.language}`}>
                          {snippet.code}
                        </code>
                      </pre>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">
                  No code samples available
                </p>
              )}
            </TabsContent>
          </Tabs>
        </div>

        <DialogClose className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;

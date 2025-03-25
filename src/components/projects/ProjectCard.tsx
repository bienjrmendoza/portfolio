import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github, Code } from "lucide-react";

interface Technology {
  name: string;
  color?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  onViewDetails?: () => void;
}

const ProjectCard = ({
  title = "Backend API Service",
  description = "A RESTful API built with Node.js and Express, featuring authentication, database integration, and comprehensive documentation.",
  technologies = [
    { name: "Node.js", color: "bg-green-100 text-green-800" },
    { name: "Express", color: "bg-blue-100 text-blue-800" },
    { name: "MongoDB", color: "bg-emerald-100 text-emerald-800" },
    { name: "JWT", color: "bg-purple-100 text-purple-800" },
  ],
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  githubUrl = "https://github.com/bienjrmendoza/bienjrmendoza/bienjrmendoza",
  liveUrl = "https://example.com",
  onViewDetails = () => {},
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className={tech.color || "bg-gray-100 text-gray-800"}
            >
              {tech.name}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 border-t border-gray-100">
        <div className="flex space-x-2">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Demo
              </a>
            </Button>
          )}
        </div>
        <Button onClick={onViewDetails} variant="default" size="sm">
          <Code className="h-4 w-4 mr-1" />
          Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

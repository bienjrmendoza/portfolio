import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

interface ProjectCardProps {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  tags?: string[];
  demoUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({
  id = "project-1",
  title = "Project Title",
  description = "A short description of the project showcasing the key features and technologies used in its development.",
  image = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070",
  tags = ["React", "TypeScript", "Tailwind CSS"],
  demoUrl = "#",
  sourceUrl = "#",
  featured = false,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="h-full overflow-hidden flex flex-col bg-white dark:bg-gray-800 border-2 hover:border-primary transition-all duration-300">
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
          {featured && (
            <Badge className="absolute top-2 right-2 bg-primary text-white">
              Featured
            </Badge>
          )}
        </div>

        <CardHeader className="p-4 pb-2">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>

        <CardContent className="p-4 pt-0 flex-grow">
          <CardDescription className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
            {description}
          </CardDescription>

          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <Badge
                key={`${id}-tag-${index}`}
                variant="secondary"
                className="text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <Eye className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;

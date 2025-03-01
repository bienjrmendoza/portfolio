import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
// import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Code, Cpu, Database, Globe, Palette, PenTool, Bug } from "lucide-react";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  level: number;
  description: string;
  tags: string[];
}

const SkillCard = ({
  icon = <Code className="h-8 w-8 text-primary" />,
  title = "Skill Title",
  level = 75,
  description = "Description of the skill and your experience with it.",
  tags = ["Tag 1", "Tag 2", "Tag 3"],
}: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="h-full overflow-hidden bg-white dark:bg-gray-800 border-2 hover:border-primary transition-all duration-300">
        <CardHeader className="p-4 pb-2 flex flex-row items-center gap-3">
          {icon}
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-2">
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              {/* <span className="text-sm font-medium">Proficiency</span> */}
              {/* <span className="text-sm font-medium">{level}%</span> */}
            </div>
            {/* <Progress value={level} className="h-2" /> */}
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={`tag-${index}`}
                variant="secondary"
                className="text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface SkillsSectionProps {
  title?: string;
  subtitle?: string;
}

const SkillsSection = ({
  title = "My Skills",
  subtitle = "Here are the technologies and tools I specialize in",
}: SkillsSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const frontendSkills = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "React",
      level: 90,
      description:
        "Building modern, responsive user interfaces with React and its ecosystem.",
      tags: ["React", "Hooks"],
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "CSS & Styling",
      level: 85,
      description:
        "Creating beautiful UIs with modern CSS, animations, and styling libraries.",
      tags: ["Bootstrap", "Tailwind CSS", "Styled Components"],
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "JavaScript",
      level: 88,
      description:
        "Proficient in modern JavaScript with strong knowledge of ES6+ features.",
      tags: ["ES6+", "TypeScript", "Async/Await", "Functional Programming"],
    },
  ];

  const backendSkills = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "API Development",
      level: 78,
      description:
        "Designing and implementing RESTful for web applications.",
      tags: ["RESTful APIs", "SOAP API", "Laravel API", "API Security"],
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Databases",
      level: 80,
      description:
        "Working with various database systems to store and manage application data.",
      tags: ["MySQL", "Eloquent ORM", "Query Optimization"],
    },
    {
      icon: <Bug className="h-8 w-8 text-primary" />,
      title: "Testing and Debugging",
      level: 82,
      description:
        "Ensures code reliability by identifying and fixing errors analyzing logs for potential issues.",
      tags: ["Postman", "Logging", "Error Handling"],
    },
  ];

  const otherSkills = [
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      level: 75,
      description:
        "Reviewing and assessing UI/UX designs based on provided mockups.",
      tags: ["Figma", "Adobe XD"],
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Version Control",
      level: 85,
      description:
        "Managing code with Git and collaborating effectively with teams.",
      tags: ["Git", "GitHub", "Branching Strategies"],
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "DevOps",
      level: 70,
      description:
        "Basic knowledge of deployment, CI/CD pipelines, and cloud services.",
      tags: ["Docker", "CI/CD", "AWS", "Vercel"],
    },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <Tabs defaultValue="backend" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="backend" className="text-sm md:text-base">
                Backend
              </TabsTrigger>
              <TabsTrigger value="frontend" className="text-sm md:text-base">
                Frontend
              </TabsTrigger>
              <TabsTrigger value="other" className="text-sm md:text-base">
                Other Skills
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="frontend">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {frontendSkills.map((skill, index) => (
                <SkillCard
                  key={`frontend-skill-${index}`}
                  icon={skill.icon}
                  title={skill.title}
                  level={skill.level}
                  description={skill.description}
                  tags={skill.tags}
                />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="backend">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {backendSkills.map((skill, index) => (
                <SkillCard
                  key={`backend-skill-${index}`}
                  icon={skill.icon}
                  title={skill.title}
                  level={skill.level}
                  description={skill.description}
                  tags={skill.tags}
                />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="other">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {otherSkills.map((skill, index) => (
                <SkillCard
                  key={`other-skill-${index}`}
                  icon={skill.icon}
                  title={skill.title}
                  level={skill.level}
                  description={skill.description}
                  tags={skill.tags}
                />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;

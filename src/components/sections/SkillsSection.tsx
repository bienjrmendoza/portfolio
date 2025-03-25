import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Database, Server, Code, Globe, Layers, Github, FolderGit } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: "backend" | "frontend" | "database" | "other";
  icon?: React.ReactNode;
}

interface SkillsSectionProps {
  skills?: Skill[];
  title?: string;
  description?: string;
}

const SkillsSection = ({
  skills = [
    {
      name: "Laravel",
      level: 90,
      category: "backend",
      icon: <Server size={20} />,
    },
    {
      name: "PHP",
      level: 85,
      category: "backend",
      icon: <Server size={20} />,
    },
    {
      name: "MySQL",
      level: 85,
      category: "database",
      icon: <Database size={20} />,
    },
    {
      name: "React",
      level: 75,
      category: "frontend",
      icon: <Code size={20} />,
    },
    {
      name: "HTML/CSS",
      level: 80,
      category: "frontend",
      icon: <Code size={20} />,
    },
    {
      name: "JavaScript",
      level: 85,
      category: "frontend",
      icon: <Code size={20} />,
    },
    {
      name: "TypeScript",
      level: 80,
      category: "frontend",
      icon: <Code size={20} />,
    },
    {
      name: "Docker",
      level: 75,
      category: "other",
      icon: <Layers size={20} />,
    },
    { 
      name: "AWS", 
      level: 70, 
      category: "other", 
      icon: <Globe size={20} /> 
    },
    { 
      name: "Git", 
      level: 65, 
      category: "other", 
      icon: <FolderGit size={20} /> 
    },
    {
      name: "Github",
      level: 60,
      category: "other",
      icon: <Github size={20} />,
    },
  ],
  title = "Technical Skills",
  description = "My expertise spans across various backend technologies, databases, and supporting frontend skills.",
}: SkillsSectionProps) => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = skills.filter((skill) => {
    if (activeTab === "all") return true;
    return skill.category === activeTab;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-5 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-5 gap-2">
              <TabsTrigger
                value="all"
                onClick={() => setActiveTab("all")}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                onClick={() => setActiveTab("backend")}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Backend
              </TabsTrigger>
              <TabsTrigger
                value="frontend"
                onClick={() => setActiveTab("frontend")}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="database"
                onClick={() => setActiveTab("database")}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Database
              </TabsTrigger>
              <TabsTrigger
                value="other"
                onClick={() => setActiveTab("other")}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Other
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {filteredSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="backend" className="mt-0">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {filteredSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="frontend" className="mt-0">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {filteredSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="database" className="mt-0">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {filteredSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="other" className="mt-0">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {filteredSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {skill.icon}
            <h3 className="font-medium text-lg">{skill.name}</h3>
          </div>
          <Badge variant="outline" className="capitalize">
            {skill.category}
          </Badge>
        </div>
        {/* <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Proficiency</span>
            <span>{skill.level}%</span>
          </div>
          <Progress value={skill.level} className="h-2" />
        </div> */}
      </CardContent>
    </Card>
  );
};

export default SkillsSection;

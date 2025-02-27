import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import {
  BriefcaseIcon,
  GraduationCapIcon,
  HeartIcon,
  UserIcon,
} from "lucide-react";

interface AboutSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  bio?: string;
  experience?: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
  education?: {
    degree: string;
    institution: string;
    year: string;
  }[];
  interests?: string[];
  profileImage?: string;
}

const AboutSection = ({
  id = "about",
  title = "About Me",
  subtitle = "Get to know me better",
  bio = "I am a passionate developer with a strong foundation in web technologies and a keen eye for design. With several years of experience building modern web applications, I strive to create intuitive and performant user experiences that solve real-world problems.",
  experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      description:
        "Leading the frontend development team, implementing modern React applications with a focus on performance and accessibility.",
    },
    {
      title: "Web Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2020",
      description:
        "Developed responsive websites and web applications for various clients across different industries.",
    },
  ],
  education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      year: "2018",
    },
    {
      degree: "Bachelor of Science in Web Development",
      institution: "Digital Arts College",
      year: "2016",
    },
  ],
  interests = [
    "Web Development",
    "UI/UX Design",
    "Open Source",
    "Photography",
    "Hiking",
  ],
  profileImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
}: AboutSectionProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id={id}
      className="py-20 px-4 md:px-8 bg-slate-50 dark:bg-slate-900 min-h-[600px] w-full"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            {title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {subtitle}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="relative overflow-hidden rounded-lg shadow-lg mb-6">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <Card className="p-6 bg-white dark:bg-slate-800">
              <h3 className="flex items-center text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                <HeartIcon className="w-5 h-5 mr-2 text-primary" />
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge
                    key={`interest-${index}`}
                    variant="secondary"
                    className="text-sm"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2">
            <Card className="p-6 mb-8 bg-white dark:bg-slate-800">
              <h3 className="flex items-center text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                <UserIcon className="w-5 h-5 mr-2 text-primary" />
                Biography
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {bio}
              </p>
            </Card>

            <Card className="p-6 mb-8 bg-white dark:bg-slate-800">
              <h3 className="flex items-center text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                <BriefcaseIcon className="w-5 h-5 mr-2 text-primary" />
                Experience
              </h3>

              {experience.map((exp, index) => (
                <div key={`exp-${index}`} className="mb-6 last:mb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200">
                        {exp.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        {exp.company}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {exp.description}
                  </p>
                  {index < experience.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </Card>

            <Card className="p-6 bg-white dark:bg-slate-800">
              <h3 className="flex items-center text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                <GraduationCapIcon className="w-5 h-5 mr-2 text-primary" />
                Education
              </h3>

              {education.map((edu, index) => (
                <div key={`edu-${index}`} className="mb-6 last:mb-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200">
                      {edu.degree}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      {edu.year}
                    </Badge>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    {edu.institution}
                  </p>
                  {index < education.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

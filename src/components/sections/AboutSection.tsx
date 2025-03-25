import React from "react";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  bio?: string;
  education?: {
    degree: string;
    institution: string;
    year: string;
    description?: string;
  }[];
  experience?: {
    position: string;
    company: string;
    duration: string;
    description?: string;
    technologies?: string[];
  }[];
  interests?: string[];
}

const AboutSection = ({
  title = "About Me",
  subtitle = "Software Engineer | Backend Developer",
  bio = "I'm a software developer passionate about building efficient and user-friendly applications. I love solving problems, optimizing workflows, and working both independently and collaborative environments. My goal is to create seamless digital experiences that make an impact.",
  education = [
    {
      degree: "Bachelor of Science in Information Technology - Major in Business Analytics",
      institution: "Batangas State University - The National Engineering University",
      year: "2018-2022",
      description: "Focused on algorithms and data structures",
    },
  ],
  experience = [
    {
      position: "Web Developer",
      company: "Bear Digital Non-Voices Outsourcing Services",
      duration: "2018-2020",
      description:
        "Developed a robust Laravel-based backend architecture, designed and implemented RESTful APIs, utilized Blade for dynamic UIs, integrated third-party APIs, collaborated with teams for efficiency, and provided client support.",
      technologies: ["Laravel", "React", "Bootstrap", "jQuery", "MySQL", "AWS"],
    },
    {
      position: "Web Developer (Intern)",
      company: "AghimJuanPH",
      duration: "2017-2018",
      description:
        "Developed a marketplace platform, handling both frontend and backend development to create user-friendly interfaces, implement backend logic, and optimize performance.",
      technologies: ["Laravel", "HTML", "CSS", "JavaScript", "MySQL"],
    },
  ],
  interests = [
    "Distributed Systems",
    "API Design",
    "Database Optimization",
    "Cloud Architecture",
    "Open Source Contributing",
    "Technical Writing",
  ],
}: AboutSectionProps) => {
  return (
    <section id="about" className="py-5 bg-slate-50 dark:bg-slate-900 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
          <Separator className="mt-6 mx-auto w-24" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Bio Section */}
          <Card className="col-span-1 lg:col-span-3 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Biography</h3>
              <p className="text-muted-foreground leading-relaxed">{bio}</p>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="text-lg font-medium">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                    {/* {edu.description && (
                      <p className="mt-2 text-sm">{edu.description}</p>
                    )} */}
                    {index < education.length - 1 && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card className="shadow-md lg:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h4 className="text-lg font-medium">{exp.position}</h4>
                      <span className="text-sm text-muted-foreground">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{exp.company}</p>
                    {exp.description && (
                      <p className="mt-2 text-sm">{exp.description}</p>
                    )}
                    {exp.technologies && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {index < experience.length - 1 && (
                      <Separator className="mt-6" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interests Section */}
          <Card className="col-span-1 lg:col-span-3 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">
                Professional Interests
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {interests.map((interest, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-sm py-1 px-3"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

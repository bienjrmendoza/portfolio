import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

interface ContactSectionProps {
  id?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id = "contact" }) => {
  return (
    <section
      id={id}
      className="py-16 px-4 md:px-8 lg:px-16 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-50">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out through the form below or connect with me on
            social media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Card className="p-6 shadow-md bg-white dark:bg-slate-800">
            <CardContent className="p-0">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="w-full dark:border dark:border-gray-600" />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full dark:border dark:border-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    className="w-full dark:border dark:border-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="w-full min-h-[150px] dark:border dark:border-gray-600"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-50">
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:bienvenidojr.mendoza@gmail.com"
                    className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    bienvenidojr.mendoza@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-50">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/bienjrmendoza"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-primary/20 transition-colors"
                >
                  <Github className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bienvenido-jr-mendoza-52828824a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                </a>
                {/* <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="p-3 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-primary/20 transition-colors"
                >
                  <Twitter className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                </a> */}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-50">
                Response Time
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                I typically respond to inquiries within 24-48 hours. For urgent
                matters, please indicate so in the subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

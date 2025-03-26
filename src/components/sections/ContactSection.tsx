import { useState, useEffect } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from "framer-motion";

interface ContactSectionProps {
  id?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id = "contact" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => setShowModal(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post('https://bienmendoza.online/api/contact', data);
      reset();
      setModalTitle('Success');
      setModalMessage('Message has been sent!');
      setShowModal(true);
    } catch (error) {
      setModalTitle('Failed');
      setModalMessage('Failed to send message. Please try again.');
      setShowModal(true);
    }
  };

  return (
    <section
      id={id}
      className="py-5 px-4 md:px-8 lg:px-16 bg-slate-50 dark:bg-slate-900"
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
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Name
                  </label>
                  <Input id="name" {...register('name', { required: 'Name is required' })} placeholder="Your name" className="w-full dark:border dark:border-gray-600" />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
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
                    {...register('email', { required: 'Email is required', pattern: { value: /[^@\s]+@[^@\s]+\.[^@\s]+/, message: 'Invalid email address' } })}
                    placeholder="your.email@example.com"
                    className="w-full dark:border dark:border-gray-600"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
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
                    {...register('subject', { required: 'Subject is required' })}
                    placeholder="What is this your message about?"
                    className="w-full dark:border dark:border-gray-600"
                  />
                  {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
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
                    {...register('message', { required: 'Message is required' })}
                    placeholder="Your message here..."
                    className="w-full min-h-[150px] dark:border dark:border-gray-600"
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <AnimatePresence>
            {showModal && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white rounded-lg shadow-lg w-96 p-6"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold mb-4">{modalTitle}</h2>
                  <p className="text-gray-600 mb-4">{modalMessage}</p>
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 bg-gray-300 rounded-md"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

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

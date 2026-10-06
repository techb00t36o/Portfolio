"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormState("success");
    formRef.current?.reset();

    setTimeout(() => setFormState("idle"), 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/alexjohnsonqa",
      href: personalInfo.linkedin,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      external: true,
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/alexjohnsonqa",
      href: personalInfo.github,
      color: "text-gray-600",
      bgColor: "bg-gray-100 dark:bg-gray-800",
      external: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
      color: "text-green-500",
      bgColor: "bg-green-100 dark:bg-green-900/30",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white dark:bg-gray-950 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Build Quality Together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Whether you're looking for a test automation architect, need help setting up CI/CD pipelines, or want to discuss quality strategy—I'd love to hear from you.
            </p>

            <div className="space-y-4 mb-10">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
                >
                  <div className={cn("p-3 rounded-lg", method.bgColor)}>
                    <method.icon className={cn("w-5 h-5", method.color)} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{method.label}</p>
                    <p className="font-medium text-gray-900 dark:text-white truncate">{method.value}</p>
                  </div>
                  {method.external && (
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-xl font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
              </motion.a>
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                <span>View GitHub</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-8 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl" />

              <div className="relative space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={formState !== "idle"}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={formState !== "idle"}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    disabled={formState !== "idle"}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                  >
                    <option value="">Select a topic</option>
                    <option value="automation">Test Automation Consulting</option>
                    <option value="framework">Framework Design & Architecture</option>
                    <option value="ci-cd">CI/CD Pipeline Integration</option>
                    <option value="api">API & Contract Testing</option>
                    <option value="performance">Performance Testing</option>
                    <option value="mobile">Mobile Test Automation</option>
                    <option value="accessibility">Accessibility Testing</option>
                    <option value="mentoring">Mentoring & Training</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    disabled={formState !== "idle"}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 resize-none"
                    placeholder="Tell me about your project, challenges, or how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState !== "idle"}
                  className="w-full py-4 px-6 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-xl font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {formState === "submitting" && <Loader2 className="w-5 h-5 animate-spin" />}
                  {formState === "success" && <CheckCircle className="w-5 h-5" />}
                  <span>
                    {formState === "submitting" ? "Sending..." : formState === "success" ? "Message Sent!" : "Send Message"}
                  </span>
                  {formState === "idle" && <Send className="w-5 h-5" />}
                </button>

                {formState === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-600 dark:text-green-400 text-sm"
                  >
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400">
            Prefer a direct conversation?{' '}
            <a href={`mailto:${personalInfo.email}?subject=Project Inquiry`} className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Email me directly
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
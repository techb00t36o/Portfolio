"use client";

import { motion } from "framer-motion";
import { Mail, Code2, Heart, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

const footerLinks = {
  navigate: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Artifacts", href: "#artifacts" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "GitHub Repositories", href: personalInfo.github, external: true },
    { label: "LinkedIn Profile", href: personalInfo.linkedin, external: true },
    { label: "Test Artifacts", href: "#artifacts" },
    { label: "Speaking & Writing", href: "#about" },
  ],
  connect: [
    { label: "Email", href: `mailto:${personalInfo.email}`, icon: Mail },
    { label: "LinkedIn", href: personalInfo.linkedin, icon: FaLinkedin, external: true },
    { label: "GitHub", href: personalInfo.github, icon: FaGithub, external: true },
    { label: "Twitter", href: "https://twitter.com/alexjohnsonqa", icon: FaTwitter, external: true },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">{personalInfo.name}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
              QA Automation Engineer building quality into every line of code. Passionate about test automation, developer experience, and quality culture.
            </p>
            <div className="flex items-center space-x-4">
              {footerLinks.connect.slice(0, 3).map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      if (!link.external) {
                        e.preventDefault();
                        document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors flex items-center space-x-1"
                  >
                    <span>{link.label}</span>
                    {link.external && <ArrowUpRight className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Availability</h4>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <p className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>{personalInfo.availability}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Code2 className="w-4 h-4" />
                <span>Open to freelance & consulting</span>
              </p>
              <p className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Remote-friendly (US time zones)</span>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} {personalInfo.name}. Built with Next.js, TypeScript & Tailwind CSS.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Designed & Developed with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for the testing community</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
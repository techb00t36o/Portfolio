"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle, Clock, Code2, Server, Monitor, Smartphone, Zap, Shield, Database } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn, categoryColors } from "@/lib/utils";
import { projects, personalInfo } from "@/lib/data";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  automation: Code2,
  api: Server,
  mobile: Smartphone,
  performance: Zap,
  accessibility: Shield,
  infrastructure: Database,
};

const filterCategories = ["all", "automation", "api", "mobile", "performance", "accessibility", "infrastructure"] as const;

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Testing Projects & Frameworks
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A selection of test automation frameworks, testing platforms, and quality initiatives I've built and led.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filterCategories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                category === "all"
                  ? "bg-gray-900 dark:bg-white dark:text-gray-900 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              )}
            >
              {category === "all" ? "All Projects" : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-blue-200 dark:hover:border-blue-800 transition-all shadow-sm hover:shadow-xl"
            >
              <div className="relative h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 flex items-center justify-center">
                {(() => {
                  const Icon = categoryIcons[project.category];
                  return <Icon className="w-16 h-16 text-blue-500/50 dark:text-blue-400/50 group-hover:scale-110 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all duration-300" />;
                })()}
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className={cn("px-3 py-1 rounded-full text-xs font-medium", categoryColors[project.category])}>
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{project.type}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 6).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 6 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded">
                      +{project.techStack.length - 6}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{project.metrics.testCases}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Test Cases</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{project.metrics.executionTime}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Execution Time</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="px-6 pb-6">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {project.achievements.slice(0, 3).map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
          >
            <FaGithub className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
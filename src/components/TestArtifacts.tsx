"use client";

import { motion } from "framer-motion";
import { FileText, Download, Eye, ExternalLink, Award, Search, ClipboardList, Bug, BarChart, Smartphone, Shield, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import { testArtifacts } from "@/lib/data";

const typeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Test Plan": FileText,
  "Test Design": Search,
  "Test Cases": ClipboardList,
  "Bug Reports": Bug,
  "Strategy": Award,
  "Performance": BarChart,
  "Checklist": ClipboardList,
  "Accessibility": Shield,
};

const typeColors: Record<string, string> = {
  "Test Plan": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  "Test Design": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  "Test Cases": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  "Bug Reports": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  "Strategy": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  "Performance": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
  "Checklist": "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400",
  "Accessibility": "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400",
};

export default function TestArtifacts() {
  return (
    <section id="artifacts" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            Test Artifacts
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sample Testing Deliverables
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Real-world testing artifacts demonstrating test planning, design, execution, and reporting practices. All samples are sanitized templates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testArtifacts.map((artifact, index) => (
            <motion.article
              key={artifact.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-blue-200 dark:hover:border-blue-800 transition-all shadow-sm hover:shadow-xl"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={cn("p-3 rounded-xl", typeColors[artifact.type])}>
                      {(() => {
                        const Icon = typeIcons[artifact.type];
                        return <Icon className="w-6 h-6" />;
                      })()}
                    </div>
                    <div>
                      <span className={cn("px-3 py-1 rounded-full text-xs font-medium", typeColors[artifact.type])}>
                        {artifact.type}
                      </span>
                    </div>
                  </div>
                  {artifact.featured && (
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {artifact.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {artifact.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-2">
                  {artifact.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                <div className="flex items-center justify-between">
                  <a
                    href={artifact.downloadUrl}
                    className="flex items-center space-x-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    download
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                  <a
                    href={artifact.downloadUrl}
                    className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Preview</span>
                  </a>
                </div>
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
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 max-w-2xl mx-auto">
            <FileText className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Need Custom Templates?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I can create tailored test plans, automation frameworks, or testing strategies for your specific needs.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-xl font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
            >
              <span>Let's Discuss</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
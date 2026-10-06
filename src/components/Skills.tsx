"use client";

import { motion } from "framer-motion";
import { cn, skillCategoryColors } from "@/lib/utils";
import { skills, SkillWithCategory, SkillWithLevel } from "@/lib/data";

const skillCategories = [
  { key: "automation", label: "Automation", icon: "🤖" },
  { key: "api", label: "API Testing", icon: "🔌" },
  { key: "performance", label: "Performance", icon: "⚡" },
  { key: "ciCd", label: "CI/CD", icon: "🔄" },
  { key: "languages", label: "Languages", icon: "💻" },
  { key: "tools", label: "Tools & Platforms", icon: "🛠️" },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tools & Technologies I Work With
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Proficient in modern testing stacks with deep expertise in automation frameworks, CI/CD integration, and quality engineering practices.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => {
            const categorySkills = skills[category.key as keyof typeof skills] as SkillWithCategory[] | SkillWithLevel[];
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <div className="flex items-center space-x-3 mb-8">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.label}</h3>
                </div>

                {category.key === "languages" ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {(categorySkills as SkillWithLevel[]).map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                          <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {(categorySkills as SkillWithCategory[]).map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:border-blue-200 dark:hover:border-blue-800 transition-all hover:shadow-lg"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <span className="font-medium text-gray-900 dark:text-white pr-2">{skill.name}</span>
                          <span className="text-lg font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-3">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          />
                        </div>
                        {skill.category && (
                          <span className={cn("text-xs px-2 py-1 rounded-full", skillCategoryColors[skill.category])}>
                            {skill.category}
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: skillCategories.length * 0.1 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <span className="text-2xl">🎯</span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Methodologies & Practices</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.methodologies.map((method, index) => (
                <motion.span
                  key={method}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                >
                  {method}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
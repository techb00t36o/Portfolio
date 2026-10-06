"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle, Code2, Globe, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { personalInfo, experience, education, certifications, speaking, blogPosts } from "@/lib/data";

const timelineItems = [
  ...experience.map((exp) => ({
    type: "experience" as const,
    date: exp.period,
    title: exp.role,
    company: exp.company,
    location: exp.location,
    achievements: exp.achievements,
  })),
  ...education.map((edu) => ({
    type: "education" as const,
    date: edu.period,
    title: edu.degree,
    company: edu.school,
    location: "",
    achievements: [edu.honors],
  })),
].sort((a, b) => {
  const dateA = new Date(a.date.split(" - ")[1] || a.date).getTime();
  const dateB = new Date(b.date.split(" - ")[1] || b.date).getTime();
  return dateB - dateA;
});

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Quality Engineer passionate about building reliable software
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {personalInfo.summary}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
              <Code2 className="w-6 h-6 text-blue-500" />
              <span>Experience & Education</span>
            </h3>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
              {timelineItems.map((item, index) => (
                <motion.div
                  key={`${item.type}-${item.title}-${item.date}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16 pb-10 last:pb-0"
                >
                  <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 shadow-lg" />
                  <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                        <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">{item.company}</p>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    {item.location && (
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    )}
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-gray-600 dark:text-gray-300 text-sm">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2 mb-6">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Quick Facts</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium text-gray-900 dark:text-white">{personalInfo.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Availability</p>
                    <p className="font-medium text-gray-900 dark:text-white">{personalInfo.availability}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <Zap className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Focus</p>
                    <p className="font-medium text-gray-900 dark:text-white">Test Automation & Quality</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2 mb-6">
                <Users className="w-5 h-5 text-green-500" />
                <span>Certifications</span>
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <p className="font-medium text-gray-900 dark:text-white">{cert.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer} • {cert.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2 mb-6">
                <Globe className="w-5 h-5 text-purple-500" />
                <span>Speaking & Writing</span>
              </h3>
              <div className="space-y-4">
                {speaking.slice(0, 3).map((talk) => (
                  <div key={talk.title} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <p className="font-medium text-gray-900 dark:text-white">{talk.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{talk.event} • {talk.date}</p>
                  </div>
                ))}
                {blogPosts.slice(0, 2).map((post) => (
                  <div key={post.title} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border-l-4 border-purple-500">
                    <p className="font-medium text-gray-900 dark:text-white">{post.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10 flex items-center justify-center space-x-2">
            <Zap className="w-6 h-6 text-orange-500" />
            <span>Core Values</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: CheckCircle, title: "Quality First", desc: "Quality is not a phase—it's everyone's responsibility. I advocate for shift-left testing and building quality in from day one." },
              { icon: Zap, title: "Automation with Purpose", desc: "Automate the right things at the right level. Focus on ROI, maintainability, and fast feedback over coverage numbers." },
              { icon: Users, title: "Collaboration & Enablement", desc: "QA enables velocity. I build tools and frameworks that empower developers to test confidently and ship faster." },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 text-center hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
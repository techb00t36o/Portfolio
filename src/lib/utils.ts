import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export const categoryColors: Record<string, string> = {
  automation: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  api: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  mobile: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  performance: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
  accessibility: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400",
  infrastructure: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
};

export const skillCategoryColors: Record<string, string> = {
  "E2E Testing": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  "API Testing": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  "Mobile Testing": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  "Load Testing": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
  "Performance": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  "CI/CD": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400",
  "Test Management": "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400",
  Infrastructure: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
  Cloud: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  Monitoring: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400",
};
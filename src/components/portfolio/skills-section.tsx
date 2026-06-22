"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Core",
    skills: ["Vue 3", "React.js", "Next.js (13–15)", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    title: "State & Architecture",
    skills: [
      "Pinia",
      "Vue Router",
      "XState",
      "Server-driven UI",
      "Agentic / SDD Workflow",
      "File-type Architecture",
      "Component-based Architecture",
    ],
  },
  {
    title: "Data & API Layer",
    skills: ["Axios", "React Query / TanStack Query", "REST APIs", "qs", "idb-keyval"],
  },
  {
    title: "Forms & Validation",
    skills: ["Vee-Validate", "Yup", "Zod", "@vee-validate/i18n"],
  },
  {
    title: "UI & Styling",
    skills: [
      "TailwindCSS",
      "Sass / SCSS",
      "Material UI",
      "Shadcn UI",
      "floating-vue",
      "vue-select",
      "vue3-toastification",
      "@formkit/auto-animate",
    ],
  },
  {
    title: "Performance & PWA",
    skills: [
      "Vite",
      "PWA (workbox)",
      "Bundle Optimization",
      "VueUse Composables",
      "Webpack",
    ],
  },
  {
    title: "Monitoring & Security",
    skills: [
      "Sentry",
      "crypto-js",
      "jose (JWT)",
      "js-cookie",
      "vue-simple-acl",
    ],
  },
  {
    title: "Dev Tools & Workflow",
    skills: [
      "Git (GitHub / GitLab)",
      "pnpm",
      "ESLint / Prettier",
      "CI/CD",
      "Jira, Agile, Scrum",
    ],
  },
  {
    title: "System Knowledge",
    skills: [
      "PWA Architecture",
      "Micro Frontend (exposure)",
      "Server-driven UI",
      "State Machine Navigation",
      "Enterprise Patterns",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" },
  }),
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Skills"
          title="My Tech Stack"
          description="Technologies and architectural patterns I work with."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <h3 className="font-semibold text-foreground mb-3 text-sm group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
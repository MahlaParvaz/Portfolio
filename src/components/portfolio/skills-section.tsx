"use client";

import { FadeInView } from "./fade-in";
import { SectionHeading } from "./section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Workflow,
  Layers,
  Cable,
  ClipboardCheck,
  Palette,
  Zap,
  ShieldCheck,
  Terminal,
  Server,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frameworks & Languages",
    icon: Code2,
    skills: ["Vue 3", "React.js 18", "Next.js 13", "Next.js 14", "Next.js 15", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    title: "State Management",
    icon: Workflow,
    skills: ["Pinia", "Vue Router", "XState", "Zustand", "React-Redux", "React Toolkit"],
  },
  {
    title: "Architecture & Patterns",
    icon: Layers,
    skills: ["SDD (Spec Driven Dev)", "Agentic", "File-type Based", "Feature-based", "Atomic Design", "Component-based", "Monorepo", "Micro Frontend"],
  },
  {
    title: "Data & Real-time",
    icon: Cable,
    skills: ["Axios", "React Query", "TanStack Query", "REST API", "WebSocket", "UUID"],
  },
  {
    title: "Forms & Validation",
    icon: ClipboardCheck,
    skills: ["Vee-Validate", "Formik", "Yup", "Zod"],
  },
  {
    title: "UI & Styling",
    icon: Palette,
    skills: ["TailwindCSS", "SCSS / Sass", "Material UI 3", "Hero UI", "Shadcn", "vue-select"],
  },
  {
    title: "Build & Performance",
    icon: Zap,
    skills: ["Vite", "Webpack", "Bundle Optimize", "PWA", "Vue Composable"],
  },
  {
    title: "Security & Monitoring",
    icon: ShieldCheck,
    skills: ["Sentry", "jose (JWT)", "JWS", "Public Key", "Private Key", "Encoded Keys", "ACL"],
  },
  {
    title: "DevOps & Workflow",
    icon: Terminal,
    skills: ["Git", "GitHub", "GitLab", "pnpm", "npm", "ESLint / Prettier", "CI/CD", "Jira", "Agile / Scrum", "Taskulu"],
  },
  {
    title: "System Knowledge",
    icon: Server,
    skills: ["PWA Architecture", "Sandbox Environment", "Machine Abstraction"],
  },
];

const totalSkills = skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0);

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Skills"
          title="My Tech Stack"
          description={`${totalSkills}+ technologies, tools, and patterns I work with daily.`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;

            return (
              <FadeInView key={category.title} delay={i * 50}>
                <div className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group min-h-45 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

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
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
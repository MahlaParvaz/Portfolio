"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface SubProject {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
}

interface Experience {
  company: string;
  location: string;
  role: string;
  type: string;
  period: string;
  description: string;
  subProjects?: SubProject[];
  highlights?: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    company: "PART Software Group",
    location: "Iran",
    role: "Front-End Developer",
    type: "Full-time",
    period: "2025 - Present",
    description:
      "Working on enterprise internal systems including Digital Signature (DSS) and Web-Signature platform, used by 1,000+ users and large organizations for certificate management, HSM integration, and secure signing workflows.",
    subProjects: [
      {
        title: "Web-Signature Platform",
        description:
          "A complex enterprise system for digital signing, certificate workflows, and secure document processing.",
        highlights: [
          "Designed and implemented state machine–driven architecture using XState",
          "Built state-driven routing system where navigation is derived from state machine configuration",
          "Introduced agentic + SDD (Spec-Driven Development) workflow for feature implementation",
          "Applied structured spec-to-implementation mapping (requirements → behavior → UI flow)",
          "Implemented file-type-based project architecture for scalable code organization",
          "Integrated reusable shared kernel components provided by company",
          "Improved system observability using Sentry for production error tracking",
          "Contributed to PWA-ready frontend architecture for enterprise usage",
        ],
        tech: ["Vue 3", "XState", "TypeScript", "Pinia", "Sass", "Sentry"],
      },
      {
        title: "DSS (Digital Signature System)",
        description:
          "Internal enterprise platform for managing certificates, HSM devices, and organizational signing infrastructure.",
        highlights: [
          "Developed UI modules for internal admin and operational workflows",
          "Worked with Sass-based UI architecture and design system",
          "Built reusable and modular frontend components",
          "Supported enterprise-scale usage across internal organizational systems",
        ],
        tech: ["Vue 3", "TypeScript", "Sass", "Pinia"],
      },
    ],
    tech: ["Vue 3", "XState", "TypeScript", "Pinia", "Sentry", "PWA"],
  },
  {
    company: "Smart Dentistry",
    location: "Mashhad, Iran",
    role: "Front-End Developer",
    type: "Full-time",
    period: "Feb 2024 - Present",
    description:
      "Multi-panel healthcare platform (Doctor / Patient / Admin) for appointment scheduling, medical records, and e-commerce services.",
    highlights: [
      "Built responsive UI using Next.js 15, TypeScript, TailwindCSS, Shadcn UI",
      "Implemented API integration and caching using React Query + Axios",
      "Designed form validation system using Zod",
      "Worked in Agile environment with clean-code practices and reusable component design",
    ],
    tech: ["Next.js 15", "TypeScript", "TailwindCSS", "Shadcn UI", "React Query", "Zod"],
  },
  {
    company: "MoshaVeremon",
    location: "Tehran, Iran",
    role: "Front-End Developer",
    type: "Remote",
    period: "Sep 2024 - Feb 2025",
    description:
      "Real estate platform with 1,000+ active users for property transactions.",
    highlights: [
      "Refactored ~90% of admin panel using Next.js 14, TypeScript, Zustand",
      "Improved scalability and maintainability of dashboard architecture",
      "Built responsive UI with reusable components and clean architecture patterns",
    ],
    tech: ["Next.js 14", "TypeScript", "Zustand", "TailwindCSS"],
  },
  {
    company: "Nextera Factory",
    location: "Tehran, Iran",
    role: "Front-End Developer",
    type: "Internship",
    period: "Jun 2024 - Sep 2024",
    description:
      "AI and infrastructure platform with 2,000+ users for server, CPU, GPU, and AI solutions.",
    highlights: [
      "Developed Aibox resource-sharing system using Next.js 13 + Redux",
      "Built AI-based access system (Roobin) using Zustand + Material UI",
      "Integrated REST APIs via Swagger documentation",
      "Collaborated in Agile team using Jira & GitLab",
    ],
    tech: ["Next.js 13-14", "TypeScript", "Material-UI", "Redux", "Zustand"],
  },
];

const timelineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

function SubProjectCard({ project, index }: { project: SubProject; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="mt-4 border border-border rounded-lg bg-muted/30 overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
        aria-expanded={open}
      >
        <div>
          <h4 className="font-semibold text-foreground text-sm">{project.title}</h4>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{project.description}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0 ml-4">
          <div className="hidden sm:flex flex-wrap gap-1">
            {project.tech.slice(0, 3).map((t) => (
              <Badge key={t} variant="secondary" className="text-[10px] font-normal px-1.5 py-0">
                {t}
              </Badge>
            ))}
          </div>
          {open ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
      </button>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="border-t border-border"
        >
          <div className="p-4 pt-3 space-y-4">
            <p className="text-sm text-muted-foreground">{project.description}</p>

            <div>
              <h5 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                Key Contributions
              </h5>
              <ul className="space-y-1.5">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Briefcase className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs font-normal">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Experience"
          title="Where I've Worked"
          description="Building real-world enterprise products that make an impact."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={timelineVariants}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-10 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-primary border-4 border-background z-10 mt-8" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-primary font-medium text-sm">
                          {exp.role}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-xs border-primary/30 text-primary"
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Sub-projects (expandable) */}
                    {exp.subProjects && (
                      <div className="mb-4">
                        {exp.subProjects.map((sp, spIdx) => (
                          <SubProjectCard key={sp.title} project={sp} index={spIdx} />
                        ))}
                      </div>
                    )}

                    {/* Highlights (for non-sub-project entries) */}
                    {exp.highlights && (
                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((h, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <Briefcase className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="text-xs font-normal"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  company: string;
  location: string;
  role: string;
  type: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    company: "Smart Dentistry (DRI 2717)",
    location: "Mashhad, Iran",
    role: "Front-End Developer",
    type: "Full-time",
    period: "Feb 2024 - Present",
    description:
      "A comprehensive healthcare platform with Doctor, Patient, and Admin panels for appointment scheduling, medical records, and medical product purchasing.",
    highlights: [
      "Developed responsive UI with Next.js 15, TypeScript, TailwindCSS, and Shadcn UI",
      "Managed complex state and API calls using React Query and Axios with Zod form validation",
      "Implemented clean-code practices within an Agile workflow",
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
      "A real estate platform with 1,000+ active users for property buy, sell, and rent operations.",
    highlights: [
      "Developed core frontend features and refactored 90% of the admin panel",
      "Built with Next.js 14, TypeScript, Zustand, and TailwindCSS",
      "Ensured responsiveness, clean code, and best practices throughout",
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
      "Platform with 2,000+ active users for server, CPU, GPU, and AI solutions, featuring two major products.",
    highlights: [
      "Aibox: Typed hardware resource-sharing platform with Next.js 13 and Redux",
      "Roobin: Built AI-powered employee access system with Next.js 14 and Zustand",
      "Integrated APIs via Swagger; collaborated in Agile team with Jira & GitLab",
    ],
    tech: ["Next.js 13-14", "TypeScript", "Material-UI", "Redux", "Zustand"],
  },
];

const timelineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Experience"
          title="Where I've Worked"
          description="Building real-world products that make an impact."
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

                    {/* Highlights */}
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
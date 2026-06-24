"use client";

import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { FadeInView } from "./fade-in";
import { SectionHeading } from "./section-heading";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, ExternalLink } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import type { Project } from "./project-modal";

const ProjectModal = dynamic(
  () =>
    import("./project-modal").then((mod) => mod.ProjectModal),
  { ssr: false }
);

const projects: Project[] = [
  {
    title: "DSS (Digital Signature System)",
    subtitle: "Enterprise Certificate Management",
    description:
      "Internal enterprise platform for managing digital certificates, HSM devices, and organizational signing infrastructure. Features a polished dark-themed admin dashboard, login system with security illustration, and comprehensive certificate/HSM management workflows.",
    image: "/projects/dss-system.webp",
    period: "2025 - Present",
    location: "Iran",
    type: "Full-time",
    users: "1,000+ Users",
    tech: ["Vue 3", "TypeScript", "Sass", "Pinia"],
    features: [
      "Secure login system with security-themed illustrations and dark UI",
      "Dashboard with data tables for certificate management and monitoring",
      "HSM device configuration panel with activation modes and slot management",
      "Certificate creation forms with type selection and coordinate parameters",
      "Sidebar navigation with multi-panel access (DSS Dashboard, HSM Panel)",
      "Form validation with inline error messages and Persian RTL support",
      "Reusable modular frontend components with Sass-based design system",
      "Enterprise-scale architecture supporting 1,000+ concurrent users",
    ],
  },
  {
    title: "Web-Signature Platform",
    subtitle: "Enterprise Digital Signing",
    description:
      "A complex enterprise system for digital signing, certificate workflows, and secure document processing. Built with state machine-driven architecture using XState, featuring state-driven routing and SDD workflow.",
    image: "/projects/web-signature.webp",
    period: "2025 - Present",
    location: "Iran",
    type: "Full-time",
    users: "1,000+ Users",
    tech: ["Vue 3", "XState", "TypeScript", "Pinia", "Sass", "Sentry", "PWA"],
    features: [
      "State machine–driven architecture using XState for complex workflows",
      "State-driven routing system derived from state machine configuration",
      "Agentic + SDD (Spec-Driven Development) workflow for feature implementation",
      "Structured spec-to-implementation mapping (requirements → behavior → UI)",
      "File-type-based project architecture for scalable code organization",
      "Reusable shared kernel component integration",
      "Sentry-powered production error tracking and observability",
      "PWA-ready frontend architecture for enterprise usage",
    ],
  },
  {
    title: "Smart Dentistry (DRI 2717)",
    subtitle: "Healthcare Platform",
    description:
      "Multi-panel healthcare platform (Doctor / Patient / Admin) for appointment scheduling, medical records, and e-commerce services with responsive UI and clean architecture.",
    image: "/projects/smart-dentistry.webp",
    period: "Feb 2024 - Present",
    location: "Mashhad, Iran",
    type: "Full-time",
    users: "Active Platform",
    tech: [
      "Next.js 15",
      "TypeScript",
      "TailwindCSS",
      "Shadcn UI",
      "React Query",
      "Zod",
    ],
    features: [
      "Three-panel architecture: Doctor, Patient, and Admin",
      "API integration and caching using React Query + Axios",
      "Form validation system designed with Zod",
      "Agile environment with clean-code practices",
    ],
  },
  {
    title: "MoshaVeremon",
    subtitle: "Real Estate Platform",
    description:
      "Real estate platform with 1,000+ active users. Refactored ~90% of the admin panel for better scalability and maintainability.",
    image: "/projects/moshaveremon.webp",
    period: "Sep 2024 - Feb 2025",
    location: "Tehran, Iran",
    type: "Remote",
    users: "1,000+ Active Users",
    tech: ["Next.js 14", "TypeScript", "Zustand", "TailwindCSS"],
    features: [
      "Refactored ~90% of admin panel from scratch",
      "Improved scalability and maintainability of dashboard",
      "Reusable components with clean architecture patterns",
      "Responsive UI optimized for all devices",
    ],
  },
  {
    title: "Nextera Factory",
    subtitle: "AI & Cloud Solutions",
    description:
      "Platform with 2,000+ users for server, CPU, GPU, and AI solutions. Built Aibox (resource-sharing) and Roobin (AI-powered access system).",
    image: "/projects/nextera-factory.webp",
    period: "Jun 2024 - Sep 2024",
    location: "Tehran, Iran",
    type: "Internship",
    users: "2,000+ Active Users",
    tech: ["Next.js 13-14", "TypeScript", "Material-UI", "Redux", "Zustand", "Swagger"],
    features: [
      "Aibox: Hardware resource-sharing platform",
      "Roobin: AI-powered employee access control system",
      "REST API integration via Swagger documentation",
      "Agile collaboration with Jira & GitLab",
    ],
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleClose = useCallback(() => setSelectedProject(null), []);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          description="A selection of projects I've built and contributed to, showcasing real-world impact."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeInView key={project.title} delay={i * 100}>
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full text-left p-0 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background group"
                aria-label={`View details for ${project.title}`}
              >
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-4 py-2 bg-background/90 rounded-lg text-sm font-medium text-foreground backdrop-blur-sm border border-border">
                      View Details
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {project.users}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {t}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        +{project.tech.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>
              </button>
            </FadeInView>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}
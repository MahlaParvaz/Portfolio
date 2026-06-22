"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { Badge } from "@/components/ui/badge";
import {
  X,
  ChevronRight,
  Calendar,
  MapPin,
  Users,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  period: string;
  location: string;
  type: string;
  users: string;
  tech: string[];
  features: string[];
  links?: { label: string; href: string }[];
}

const projects: Project[] = [
  {
    title: "Web-Signature Platform",
    subtitle: "Enterprise Digital Signing",
    description:
      "A complex enterprise system for digital signing, certificate workflows, and secure document processing. Built with state machine-driven architecture using XState, featuring state-driven routing and SDD workflow.",
    image: "/projects/web-signature.png",
    period: "2025 - Present",
    location: "Iran",
    type: "Full-time",
    users: "1,000+ Users",
    tech: [
      "Vue 3",
      "XState",
      "TypeScript",
      "Pinia",
      "Sass",
      "Sentry",
      "PWA",
    ],
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
    title: "DSS (Digital Signature System)",
    subtitle: "Enterprise Certificate Management",
    description:
      "Internal enterprise platform for managing certificates, HSM devices, and organizational signing infrastructure. Supports enterprise-scale usage across internal organizational systems.",
    image: "/projects/dss-system.png",
    period: "2025 - Present",
    location: "Iran",
    type: "Full-time",
    users: "Enterprise Internal",
    tech: ["Vue 3", "TypeScript", "Sass", "Pinia"],
    features: [
      "UI modules for internal admin and operational workflows",
      "Sass-based UI architecture and design system",
      "Reusable and modular frontend components",
      "Enterprise-scale support across organizational systems",
    ],
  },
  {
    title: "Smart Dentistry (DRI 2717)",
    subtitle: "Healthcare Platform",
    description:
      "Multi-panel healthcare platform (Doctor / Patient / Admin) for appointment scheduling, medical records, and e-commerce services with responsive UI and clean architecture.",
    image: "/projects/smart-dentistry.png",
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
    image: "/projects/moshaveremon.png",
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
    image: "/projects/nextera-factory.png",
    period: "Jun 2024 - Sep 2024",
    location: "Tehran, Iran",
    type: "Internship",
    users: "2,000+ Active Users",
    tech: [
      "Next.js 13-14",
      "TypeScript",
      "Material-UI",
      "Redux",
      "Zustand",
      "Swagger",
    ],
    features: [
      "Aibox: Hardware resource-sharing platform",
      "Roobin: AI-powered employee access control system",
      "REST API integration via Swagger documentation",
      "Agile collaboration with Jira & GitLab",
    ],
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl border border-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors border border-border"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Project Image */}
        <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <Badge variant="secondary" className="mb-2">
              {project.subtitle}
            </Badge>
            <h3 className="text-2xl font-bold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {project.period}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {project.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" />
              {project.users}
            </span>
            <Badge
              variant="outline"
              className="text-xs border-primary/30 text-primary"
            >
              {project.type}
            </Badge>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Key Features */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <ChevronRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t} variant="secondary" className="text-sm">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group"
            >
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full text-left p-0 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`View details for ${project.title}`}
              >
                {/* Image */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-4 py-2 bg-background/90 rounded-lg text-sm font-medium text-foreground backdrop-blur-sm border border-border">
                      View Details
                    </div>
                  </div>
                </div>

                {/* Card Content */}
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

                  {/* Meta */}
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

                  {/* Tech badges */}
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
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
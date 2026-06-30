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
    title: "Web-Signature Platform",
    subtitle: "PART Software Group",
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
    title: "DSS Admin Panel",
    subtitle: "Digital Signature Administration",
    description:
      "Centralized administration system for managing digital certificates, payments, businesses, and signature requests across the digital signature ecosystem with PWA support.",
    image: "/projects/dss-admin-panel.webp",
    period: "2025 - Present",
    location: "Iran",
    type: "Full-time",
    users: "Enterprise Platform",
    tech: ["Vue.js 3.5", "Vite", "Vue Router", "Pinia", "Axios", "PWA", "TypeScript"],
    features: [
      "Comprehensive administration dashboard for certificate and payment management",
      "Business onboarding and configuration workflows using SSP platform configs",
      "Full lifecycle management for digital signature requests",
      "Monitoring of issued certificates and statuses across signature clients",
      "Payment transaction tracking and status management",
      "Progressive Web App (PWA) support for installable experience",
      "Technical documentation and deployment procedures maintenance",
    ],
  },
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
    title: "DRI 2717",
    subtitle: "Smart Dentistry",
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
      "Responsive UI built with Next.js 15, TypeScript, TailwindCSS, Shadcn UI",
      "API integration and caching using React Query + Axios",
      "Form validation system designed with Zod",
      "Agile environment with clean-code practices and reusable component design",
    ],
  },
  {
    title: "DeventApp Platform",
    subtitle: "Smart Dentistry",
    description:
      "Comprehensive platform for dental professionals providing access to dental events, congresses, educational content, products, and business opportunities.",
    image: "/projects/deventapp.webp",
    period: "Feb 2024 - Present",
    location: "Mashhad, Iran",
    type: "Full-time",
    users: "Active Platform",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "TanStack Query"],
    features: [
      "Job posting and recruitment functionalities",
      "Resume submission and management system",
      "User profile and account management features",
      "Favorites and bookmarking capabilities",
      "Contact and communication features",
      "Resume categorization and organization system",
      "Corresponding Admin Panel for managing job listings, resumes, and platform data",
    ],
  },
  {
    title: "Devent Admin Panel",
    subtitle: "Smart Dentistry",
    description:
      "Admin Panel for DeventApp — a comprehensive management platform used to administer and moderate the entire dental community ecosystem.",
    image: "/projects/devent-admin-panel.webp",
    period: "Feb 2024 - Present",
    location: "Mashhad, Iran",
    type: "Full-time",
    users: "Active Platform",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "TanStack Query"],
    features: [
      "Dental events, congresses, and educational content administration",
      "Job postings and recruitment listings management",
      "Advertisement and user-generated content moderation workflows",
      "Administrative workflows for reviewing, approving, editing, and publishing content",
      "Management tools for users, resumes, and business-related information",
      "Responsive administrative interfaces for streamlined content operations",
    ],
  },
  {
    title: "Cloudent",
    subtitle: "Smart Dentistry",
    description:
      "Internal dental clinic management system for Dr. Mola's dental clinic, replacing manual appointment processes and streamlining daily operations.",
    image: "/projects/cloudent.webp",
    period: "Feb 2024 - Present",
    location: "Mashhad, Iran",
    type: "Full-time",
    users: "Active Platform",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "TypeScript", "Persian Date Picker"],
    features: [
      "Patient record and profile management system",
      "Appointment scheduling and time management features",
      "Comprehensive patient information and treatment history display",
      "Advanced search functionality for patients and appointments",
      "Interactive dental charting system with visual tooth diagram for recording conditions",
      "Digital data entry by clinic receptionists to reduce paper-based processes",
      "Significantly improved patient data management and scheduling workflows",
    ],
  },
  {
    title: "PACS",
    subtitle: "Smart Dentistry",
    description:
      "Practice Administration & Clinic System — a comprehensive clinic and practice management system designed to streamline daily operations for medical and dental clinics.",
    image: "/projects/pacs.webp",
    period: "Feb 2024 - Present",
    location: "Mashhad, Iran",
    type: "Full-time",
    users: "Active Platform",
    tech: ["React 19", "TypeScript", "Redux Toolkit", "React Router 7", "Tailwind CSS 4", "HeroUI", "FullCalendar"],
    features: [
      "Responsive and modern user interfaces for clinic management workflows",
      "Interactive calendar and scheduling system using FullCalendar",
      "Patient and appointment management modules",
      "Reusable and scalable components with performance and maintainability focus",
      "API services and state management for efficient data handling",
      "Modern user-friendly experience for clinic staff and administrators",
    ],
  },
  {
    title: "MoshaVeremon",
    subtitle: "Real Estate Platform",
    description:
      "Real estate platform with 1,000+ active users for property transactions.",
    image: "/projects/moshaveremon.webp",
    period: "Sep 2024 - Feb 2025",
    location: "Tehran, Iran",
    type: "Remote",
    users: "1,000+ Active Users",
    tech: ["Next.js 14", "TypeScript", "Zustand", "TailwindCSS"],
    features: [
      "Refactored ~90% of admin panel using Next.js 14, TypeScript, Zustand",
      "Improved scalability and maintainability of dashboard architecture",
      "Responsive UI with reusable components and clean architecture patterns",
    ],
  },
  {
    title: "Nextera Factory (AiBox)",
    subtitle: "AI & Cloud Solutions",
    description:
      "AI and infrastructure platform with 2,000+ users for server, CPU, GPU, and AI solutions. Built Aibox (resource-sharing) and Roobin (AI-powered access system).",
    image: "/projects/nextera-factory.webp",
    period: "Jun 2024 - Sep 2024",
    location: "Tehran, Iran",
    type: "Internship",
    users: "2,000+ Active Users",
    tech: ["Next.js 13-14", "TypeScript", "Material-UI", "Redux", "Zustand", "Swagger"],
    features: [
      "Aibox: Hardware resource-sharing platform",
      "REST API integration via Swagger documentation",
      "Agile collaboration with Jira & GitLab",
    ],
  },
  {
    title: "Roobin",
    subtitle: "Nextera Factory",
    description:
      "AI-powered surveillance and facial recognition platform for monitoring security cameras and managing employee attendance verification with real-time WebSocket communication.",
    image: "/projects/roobin.webp",
    period: "Jun 2024 - Sep 2024",
    location: "Tehran, Iran",
    type: "Internship",
    users: "2,000+ Users",
    tech: ["Next.js 14", "React.js", "TypeScript", "Material UI", "TanStack Query", "Zustand", "Axios", "React Hook Form", "React Use WebSocket", "Chart.js", "Storybook"],
    features: [
      "Real-time monitoring and management of surveillance cameras",
      "AI-based facial recognition and identity verification",
      "Employee entry/exit image comparison with stored profiles and similarity percentages",
      "Live and recorded video streaming from surveillance cameras",
      "Storage and management of surveillance footage and related files",
      "Dashboards and analytics for monitoring recognition results and attendance activities",
      "Real-time updates and communication using WebSockets",
    ],
  },
  {
    title: "AiBox Admin Panel",
    subtitle: "Nextera Factory",
    description:
      "Centralized administration platform for managing the entire AIBox ecosystem and its operational processes.",
    image: "/projects/aibox-admin-panel.webp",
    period: "Jun 2024 - Sep 2024",
    location: "Tehran, Iran",
    type: "Internship",
    users: "2,000+ Users",
    tech: ["Next.js 13", "TypeScript", "Tailwind CSS", "Redux Toolkit", "TanStack Query"],
    features: [
      "User management module including account monitoring and administration",
      "Management of purchased AI subscription packages and service plans",
      "Gift credits and consumption monitoring system",
      "Tracking for hosting and server purchases and related resources",
      "System usage statistics and user activity dashboards",
      "Platform configuration, subscription, and operational data management",
      "Administrative dashboards and tools to streamline management and decision-making",
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
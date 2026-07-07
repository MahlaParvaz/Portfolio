"use client";

import { FadeInView } from "./fade-in";
import { SectionHeading } from "./section-heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface SubProject {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  link?: string;
}

interface Experience {
  company: string;
  companyLink?: string;
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
    companyLink:"https://www.partsoftware.com/",
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
        link: "https://sign.farashenasa.ir/#/",
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
        tech: ["Vue 3", "XState", "Pinia", "Vue Router", "SCSS", "Axios", "Sentry", "Vite", "PWA"],
      },
      {
        title: "DSS Admin Panel – Digital Signature Administration Platform",
        description:
          "Centralized administration system for managing digital certificates, payments, businesses, and signature requests across the digital signature ecosystem.",
        link: "https://pki.farashenasa.ir/#/login",
        highlights: [
          "Implemented comprehensive administration dashboard for certificate and payment management",
          "Developed business onboarding and configuration workflows using SSP platform configs",
          "Built modules for managing digital signature requests and their full lifecycle",
          "Enabled monitoring of issued certificates and their statuses across signature clients",
          "Tracked payment transactions and payment statuses within the digital signature ecosystem",
          "Added Progressive Web App (PWA) support for installable app-like experience on SSL environments",
          "Participated in creating and maintaining technical documentation and deployment procedures",
        ],
        tech: ["Vue.js 3.5", "Vite", "Vue Router", "Pinia", "Axios", "PWA", "TypeScript"],
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
    companyLink: "https://www.smart-lab.ir/",
    location: "Mashhad, Iran",
    role: "Front-End Developer",
    type: "Full-time",
    period: "Feb 2024 - Present",
    description:
      "Healthcare and dental technology company building multiple platforms for dental professionals, clinics, and patients.",
    subProjects: [
      {
        title: "PACS (Practice Administration & Clinic System)",
        description:
          "Comprehensive clinic and practice management system designed to streamline daily operations for medical and dental clinics.",
        highlights: [
          "Built responsive and modern user interfaces for clinic management workflows",
          "Developed interactive calendar and scheduling system using FullCalendar",
          "Implemented patient and appointment management modules",
          "Created reusable and scalable components with focus on performance and maintainability",
          "Integrated API services and state management solutions for efficient data handling",
          "Designed modern and user-friendly experience for clinic staff and administrators",
        ],
        tech: ["React 19", "TypeScript", "Redux Toolkit", "React Router 7", "Tailwind CSS 4", "HeroUI", "FullCalendar"],
      },
      {
        title: "DeventApp Platform",
        description:
          "Comprehensive platform for dental professionals providing access to dental events, congresses, educational content, products, and business opportunities.",
        link: "https://www.deventapp.ir/",
        highlights: [
          "Designed and implemented job posting and recruitment functionalities",
          "Built resume submission and management system",
          "Developed user profile and account management features",
          "Implemented favorites and bookmarking capabilities",
          "Created contact and communication features",
          "Built resume categorization and organization system",
          "Developed corresponding Admin Panel for managing job listings, resumes, and platform data",
        ],
        tech: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "TanStack Query"],
      },
      {
        title: "Devent Admin Panel",
        description:
          "Admin Panel for DeventApp — a comprehensive management platform used to administer and moderate the entire dental community ecosystem.",
        link: "https://admin.deventapp.ir/",
        highlights: [
          "Managed dental events, congresses, and educational content administration",
          "Built job postings and recruitment listings management modules",
          "Developed advertisement and user-generated content moderation workflows",
          "Created administrative workflows for reviewing, approving, editing, and publishing content",
          "Implemented management tools for users, resumes, and business-related information",
          "Built responsive and user-friendly administrative interfaces to streamline content operations",
        ],
        tech: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "TanStack Query"],
      },
      {
        title: "Cloudent – Clinic Management System",
        description:
          "Internal dental clinic management system for Dr. Mola's dental clinic, replacing manual appointment processes and streamlining daily operations.",
        highlights: [
          "Built patient record and profile management system",
          "Developed appointment scheduling and time management features",
          "Implemented comprehensive patient information and treatment history display",
          "Created advanced search functionality for patients and appointments",
          "Built interactive dental charting system with visual tooth diagram for recording conditions",
          "Enabled digital data entry by clinic receptionists to reduce paper-based processes",
          "Significantly improved patient data management and scheduling workflows",
        ],
        tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "TypeScript", "Persian Date Picker"],
      },
      {
        title: "DRI 2717 (2717)",
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
    ],
    tech: ["React.js", "Next.js 15", "TypeScript", "TailwindCSS", "Redux Toolkit", "TanStack Query"],
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
    company: "Nextera Factory (AiBox)",
    companyLink: "https://www.nexterafactory.com/en/homepage/",
    location: "Tehran, Iran",
    role: "Front-End Developer",
    type: "Internship",
    period: "Jun 2024 - Sep 2024",
    description:
      "AI and infrastructure technology company providing hardware resource-sharing, AI subscription services, and intelligent surveillance solutions with 2,000+ active users.",
    subProjects: [
      {
        title: "AiBox – AI & Cloud Resource-Sharing Platform",
        description:
          "A comprehensive platform enabling users to rent and manage servers, CPUs, GPUs, and AI-powered services. Provides an online marketplace for computing resources with subscription-based access to AI models and tools.",
        link: "https://nextaibox.com/",
        highlights: [
          "Built the main AiBox user-facing platform for browsing, renting, and managing hardware resources",
          "Developed server and GPU rental interfaces with real-time availability and pricing",
          "Implemented AI subscription package purchasing and management workflows",
          "Created user dashboards for tracking resource usage, active services, and billing history",
          "Integrated REST API endpoints via Swagger documentation",
          "Collaborated in Agile environment using Jira for task management and GitLab for version control",
        ],
        tech: ["Next.js 13-14", "TypeScript", "Material-UI", "Redux", "Zustand"],
      },
      {
        title: "Roobin – AI Surveillance Platform",
        description:
          "AI-powered surveillance and facial recognition platform for monitoring security cameras and managing employee attendance verification.",
        highlights: [
          "Developed responsive dashboards and analytics for monitoring recognition results and attendance activities",
          "Integrated real-time camera feeds with live and recorded video streaming from surveillance cameras",
          "Implemented facial recognition result interfaces with similarity percentage displays",
          "Built tools for video and file management of surveillance footage",
          "Real-time updates and communication using WebSockets",
          "Comparison of employee entry/exit images with stored profiles",
          "Built charts and analytics dashboards using Chart.js for attendance monitoring",
        ],
        tech: ["Next.js 14", "React.js", "TypeScript", "Material UI", "TanStack Query", "Zustand", "Axios", "React Hook Form", "React Use WebSocket", "Chart.js", "Storybook"],
      },
      {
        title: "AiBox Admin Panel",
        description:
          "Centralized administration platform for managing the entire AIBox ecosystem and its operational processes.",
        highlights: [
          "Built user management module including account monitoring and administration",
          "Developed management of purchased AI subscription packages and service plans",
          "Implemented gift credits and consumption monitoring system",
          "Created tracking for hosting and server purchases and related resources",
          "Built system usage statistics and user activity dashboards",
          "Developed platform configuration, subscription, and operational data management",
          "Built administrative dashboards and tools to streamline management and decision-making",
        ],
        tech: ["Next.js 13", "TypeScript", "Tailwind CSS", "Redux Toolkit", "TanStack Query"],
      },
    ],
    tech: ["Next.js 13-14", "TypeScript", "Material-UI", "Redux", "Zustand"],
  },
];

function SubProjectCard({ project, index }: { project: SubProject; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeInView delay={index * 100}>
      <div className="mt-4 border border-border rounded-lg bg-muted/30 overflow-hidden">
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
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Visit ${project.title}`}
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
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

        <div
          className="grid transition-[grid-template-rows] duration-300 ease-in-out"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="p-4 pt-3 space-y-4 border-t border-border">
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

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors w-fit"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Visit Project
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </FadeInView>
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
              <FadeInView key={exp.company} delay={i * 150}>
                <div
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
                        {exp.companyLink && (
                          <Link
                            href={exp.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                            >
                             Visit Company
                             <ExternalLink className="h-3 w-3" />
                           </Link>
                         )}
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
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
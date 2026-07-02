"use client";

import { FadeInView } from "./fade-in";
import { SectionHeading } from "./section-heading";
import { Cpu, Layers, Shield, Workflow, Globe, HeartPulse } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "State-Driven Architecture",
    description:
      "Designing frontend systems powered by XState state machines and server-driven UI concepts for predictable, scalable application behavior.",
  },
  {
    icon: Layers,
    title: "Multi-Framework Expertise",
    description:
      "Fluent across Vue 3 and React/Next.js ecosystems — building production applications with the right tool for each project's needs.",
  },
  {
    icon: Shield,
    title: "Security & Observability",
    description:
      "Integrating enterprise security patterns including JWT handling, encryption, access control, and Sentry-powered error monitoring in production.",
  },
  {
    icon: Workflow,
    title: "SDD Workflow",
    description:
      "Applying Spec-Driven Development and agentic frontend patterns to map requirements to behavior to UI flow with structured, traceable implementation.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Enterprise",
    description:
      "Delivered 6+ production systems in dental healthcare — from patient scheduling to AI surveillance — serving clinics and thousands of end users.",
  },
  {
    icon: Globe,
    title: "Real-Time Systems",
    description:
      "Building live camera feeds, WebSocket-driven dashboards, and real-time collaboration tools for time-critical operational environments.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading label="About Me" title="Who I Am" />

        <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
          {/* Bio */}
          <FadeInView direction="left" className="space-y-5">
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Hi! I&apos;m{" "}
              <span className="text-foreground font-semibold">
                Mahla Zohourparvaz
              </span>
              , a Front-End Developer with{" "}
              <span className="text-primary font-semibold">2+ years</span> of
              experience building production-grade enterprise web applications. I
              specialize in{" "}
              <span className="text-foreground font-semibold">
                Vue 3
              </span>{" "}
              and{" "}
              <span className="text-foreground font-semibold">
                React / Next.js
              </span>{" "}
              ecosystems, with deep expertise in{" "}
              <span className="text-foreground font-semibold">TypeScript</span>
              , complex state management, and scalable frontend architecture.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              I&apos;ve built and contributed to{" "}
              <span className="text-primary font-semibold">
                12+ production projects
              </span>{" "}
              across digital security, healthcare, real estate, and AI
              platforms — serving 1,000+ enterprise users at PART Software
              Group and delivering 6+ systems for Smart Dentistry&apos;s dental
              ecosystem.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              At PART Software, I design state-machine-driven architectures with
              XState and practice Spec-Driven Development — bridging business
              requirements to structured, traceable implementations. I&apos;ve
              also built real-time surveillance dashboards with WebSocket feeds,
              interactive calendar systems, dental charting interfaces, and
              comprehensive admin panels.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              I thrive in Agile environments, value clean code and modular
              design, and enjoy turning complex architectural challenges into
              elegant, maintainable solutions.
            </p>
          </FadeInView>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <FadeInView key={item.title} delay={i * 150}>
                <div className="group p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
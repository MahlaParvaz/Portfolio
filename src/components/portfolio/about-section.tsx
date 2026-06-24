"use client";

import { FadeInView } from "./fade-in";
import { SectionHeading } from "./section-heading";
import { Cpu, Layers, Shield, Workflow } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "State-Driven Architecture",
    description:
      "Designing frontend systems powered by XState state machines and server-driven UI concepts for predictable, scalable application behavior.",
  },
  {
    icon: Layers,
    title: "Enterprise Systems",
    description:
      "Building production-grade interfaces for large organizations with focus on maintainability, modular architecture, and PWA-ready systems.",
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
              , a Front-End Developer with over{" "}
              <span className="text-primary font-semibold">2+ years</span> of
              experience building scalable enterprise web applications. I work
              across{" "}
              <span className="text-foreground font-semibold">
                Vue 3, React, Next.js
              </span>{" "}
              and{" "}
              <span className="text-foreground font-semibold">
                TypeScript
              </span>
              , with exposure to frontend architecture patterns.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              My recent work at PART Software Group involves designing
              state-machine-driven architectures with XState, building
              enterprise digital signature systems used by 1,000+ users, and
              implementing Spec-Driven Development workflows. I&apos;ve also
              built healthcare platforms, real estate applications, and AI-powered
              infrastructure tools.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              I&apos;m passionate about structured architecture, clean code
              principles, and bridging the gap between business requirements and
              robust frontend implementations. I thrive in Agile environments
              and enjoy tackling complex architectural challenges.
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
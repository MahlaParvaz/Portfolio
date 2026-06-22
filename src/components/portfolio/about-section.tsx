"use client";

import { motion } from "framer-motion";
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading label="About Me" title="Who I Am" />

        <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
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
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="group p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
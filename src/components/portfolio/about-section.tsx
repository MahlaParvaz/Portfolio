"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { Code2, Palette, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Committed to writing maintainable, well-structured code following best practices and design patterns.",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description:
      "Creating pixel-perfect, responsive interfaces with attention to accessibility and visual hierarchy.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing applications with SSR, ISR, and modern rendering strategies for the best user experience.",
  },
  {
    icon: Users,
    title: "Team Player",
    description:
      "Thriving in Agile environments with effective communication, code reviews, and collaborative development.",
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
              hands-on experience building modern web applications. I specialize
              in the React ecosystem &mdash; including Next.js, TypeScript, and
              state management libraries like Redux and Zustand.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              I&apos;ve worked on diverse projects ranging from healthcare platforms
              serving doctors and patients, to real estate platforms with
              thousands of active users, and AI-powered solutions. Each project
              has sharpened my ability to translate complex requirements into
              intuitive, performant interfaces.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              I&apos;m passionate about continuous learning, clean architecture,
              and delivering value through thoughtful front-end engineering.
              When I&apos;m not coding, I enjoy exploring new technologies and
              contributing to team growth through pair programming and
              mentoring.
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
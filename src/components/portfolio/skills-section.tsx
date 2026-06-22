"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Technologies",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js (v18+)",
      "Next.js (v13+)",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "State Management & Data",
    skills: [
      "Redux",
      "Zustand",
      "Context API",
      "Redux Thunk",
      "React Query",
      "SWR",
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      "TailwindCSS",
      "Material UI",
      "Shadcn UI",
      "styled-components",
      "Sass / SCSS",
      "CSS Modules",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git (GitHub / GitLab)",
      "Webpack",
      "Babel",
      "Postman",
      "NPM / Yarn",
      "Storybook",
    ],
  },
  {
    title: "APIs & Backend",
    skills: [
      "RESTful APIs",
      "Axios",
      "Fetch API",
      "Swagger",
      "MongoDB",
    ],
  },
  {
    title: "Rendering & Architecture",
    skills: [
      "SSR / ISR / SSG",
      "SPA",
      "PWA",
      "OOP",
      "Atomic Design",
      "Semantic Web",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Teamwork",
      "Creativity",
      "Pair Programming",
      "Self-learning",
      "Time Management",
      "Communication",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Skills"
          title="My Tech Stack"
          description="Technologies and tools I use to bring ideas to life."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <h3 className="font-semibold text-foreground mb-3 text-sm group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Also experienced with:{" "}
            <span className="text-foreground/80">
              Figma, Chart.js, Scrum, Jira, Taskulu, Authentication/Authorization,
              React Router Dom, UI/UX Design, Responsive Development
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Education"
          title="Academic Background"
        />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-6 sm:p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Bachelor of Computer Software Engineering
                </h3>
                <p className="text-primary font-medium text-sm mt-0.5">
                  University of Technology
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  2017 &ndash; 2021
                </p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Studied core computer science fundamentals including data
                  structures, algorithms, software engineering principles,
                  database management, and web technologies. This academic
                  foundation laid the groundwork for my career in front-end
                  development.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
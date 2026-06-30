"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.webp"
          alt=""
          fill
          className="object-cover opacity-15 dark:opacity-10"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Decorative blurs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 py-12 md:py-0"
      >
        {/* Text Column */}
        <div className="flex-1 text-center md:text-left">
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <MapPin className="h-3.5 w-3.5" />
              Iran, Mashhad
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4"
          >
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="text-primary">Mahla</span>
            <br className="hidden sm:block" />
            <span className="text-foreground">Zohourparvaz</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium mb-3"
          >
            Front-End Developer{" "}
            <span className="text-muted-foreground/60 text-base sm:text-lg lg:text-xl font-normal">
              (Vue / React / Frontend Architect)
            </span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground/80 max-w-xl mb-10 leading-relaxed md:mx-0 mx-auto"
          >
            Building scalable enterprise web applications with Vue 3, React,
            Next.js, and TypeScript. Specializing in state-driven architectures,
            dynamic routing systems, and modular frontend design.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 md:justify-start justify-center"
          >
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a href="#projects">View My Projects</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>

        {/* Photo Column */}
        <motion.div
          variants={itemVariants}
          className="relative flex-shrink-0"
        >
          {/* Decorative ring */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 blur-sm" />
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
            <Image
              src="/me.jpg"
              alt="Mahla Zohourparvaz"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 320px"
            />
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
            className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-0 lg:bottom-4 lg:-right-4 bg-card border border-border rounded-xl px-3 py-2 shadow-lg"
          >
            <p className="text-xs font-semibold text-primary">2+ Years</p>
            <p className="text-[10px] text-muted-foreground">Experience</p>
          </motion.div>
          {/* Floating tech badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
            className="absolute -top-2 -left-2 sm:top-0 sm:-left-4 lg:-top-2 lg:-left-6 bg-card border border-border rounded-xl px-3 py-2 shadow-lg"
          >
            <p className="text-xs font-semibold text-primary">Vue 3</p>
            <p className="text-[10px] text-muted-foreground">& React</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
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

export interface Project {
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
  link?: string;
}

export function ProjectModal({
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
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl border border-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors border border-border"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <Badge variant="secondary" className="mb-2">
              {project.subtitle}
            </Badge>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          </div>
        </div>

        <div className="p-6 space-y-6">
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
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
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

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Visit Project
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
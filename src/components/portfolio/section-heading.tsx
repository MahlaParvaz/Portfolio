"use client";

import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <Badge
        variant="secondary"
        className="mb-4 px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-primary border-primary/20 bg-primary/5"
      >
        {label}
      </Badge>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-base">
          {description}
        </p>
      )}
    </div>
  );
}
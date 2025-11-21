"use client";

import Image from "next/image";
import { Card } from "./Card";
import { Button } from "./Button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    links: { live: string; github: string };
    image: string;
    featured: boolean;
    achievement?: string;
  };
}

export function ProjectCard({ project }: ProjectProps) {
  return (
    <Card className="group h-full flex flex-col">
      {/* Image Area */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden bg-neutral-900">
        {/* Placeholder if image fails or is missing */}
        <div className="absolute inset-0 flex items-center justify-center text-neutral-700">
          <span className="text-4xl">🖼️</span>
        </div>
        
        {/* Actual Image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback logic would go here, but for now we rely on the placeholder behind it
            (e.target as HTMLImageElement).style.display = 'none'; 
          }}
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.links.live !== "#" && (
            <Button
              size="sm"
              onClick={() => window.open(project.links.live, "_blank")}
              className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
            </Button>
          )}
          {project.links.github !== "#" && (
            <Button
              size="sm"
              variant="secondary"
              onClick={() => window.open(project.links.github, "_blank")}
              className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
            >
              <Github className="w-4 h-4 mr-2" /> Code
            </Button>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          {project.achievement && (
            <span className="text-xs font-medium text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full border border-yellow-400/20">
              🏆 Award
            </span>
          )}
        </div>
        
        <p className="text-secondary text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-secondary bg-white/5 px-2 py-1 rounded-md border border-white/5"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs font-medium text-secondary px-2 py-1">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}

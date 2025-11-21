"use client";

import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { portfolioData } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Github } from "lucide-react";

export function ProjectsSection() {
  const { projects, personal } = portfolioData;

  return (
    <section id="projects" className="py-24 relative">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-secondary max-w-xl">
                A selection of projects that showcase my passion for building scalable, intelligent web applications.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => window.open(personal.socials.github, "_blank")}
            >
              <Github className="w-4 h-4 mr-2" /> View All on GitHub
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-secondary/40 text-sm font-light italic mt-12 tracking-[0.2em] hover:text-secondary/80 transition-colors duration-300 cursor-default">
            ... and many more
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

"use client";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { portfolioData } from "@/lib/content";
import { Code2, Database, Brain, Palette, Terminal } from "lucide-react";

export function AboutSection() {
  const { about, skills } = portfolioData;

  const skillCategories = [
    { name: "Frontend", icon: Code2, skills: skills.frontend },
    { name: "Backend", icon: Database, skills: skills.backend },
    { name: "AI / ML", icon: Brain, skills: skills.ai },
    { name: "Design", icon: Palette, skills: skills.design },
    { name: "DevOps", icon: Terminal, skills: skills.tools },
  ];

  return (
    <section id="about" className="pt-24 pb-8 relative overflow-hidden">
      <Container>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            About & Skills
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* About Me - Large Box */}
          <ScrollReveal className="md:col-span-2 lg:col-span-2 row-span-2">
            <Card className="h-full p-8 flex flex-col justify-center bg-gradient-to-br from-surface/50 to-accent/5">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  I&apos;m {portfolioData.personal.name}
                </h3>
                <p className="text-accent font-medium">
                  {portfolioData.personal.role}
                </p>
              </div>
              <div className="space-y-4 text-secondary leading-relaxed">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Card>
          </ScrollReveal>

          {/* Current Focus - Tall Box */}
          <ScrollReveal className="md:col-span-1 row-span-2" delay={0.1}>
            <Card className="h-full p-6 flex flex-col">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Current Focus
              </h3>
              <ul className="space-y-4">
                {about.currentFocus.map((item, i) => (
                  <li key={i} className="text-sm text-secondary border-l-2 border-white/10 pl-4">
                    {item}
                  </li>
                ))}
              </ul>
              
              <h3 className="text-lg font-bold text-white mt-8 mb-4">Beyond Coding</h3>
              <ul className="space-y-4">
                {about.beyondCoding.map((item, i) => (
                  <li key={i} className="text-sm text-secondary border-l-2 border-white/10 pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>

          {/* Skills - Grid of Categories */}
          <div className="md:col-span-3 lg:col-span-1 row-span-2 grid grid-cols-1 gap-6">
             {skillCategories.slice(0, 2).map((cat, i) => (
                <ScrollReveal key={cat.name} delay={0.2 + i * 0.1}>
                  <Card className="p-6 h-full">
                    <div className="flex items-center gap-3 mb-4 text-accent">
                      <cat.icon className="w-6 h-6" />
                      <h4 className="font-bold text-white">{cat.name}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.slice(0, 6).map((skill) => (
                        <span key={skill} className="text-xs text-secondary bg-white/5 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </ScrollReveal>
             ))}
          </div>
          
          {/* Remaining Skills (Spanning full width on mobile, or filling gaps) */}
           <div className="md:col-span-3 lg:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-6">
             {skillCategories.slice(2).map((cat, i) => (
                <ScrollReveal key={cat.name} delay={0.4 + i * 0.1}>
                  <Card className="p-6 h-full">
                    <div className="flex items-center gap-3 mb-4 text-accent">
                      <cat.icon className="w-6 h-6" />
                      <h4 className="font-bold text-white">{cat.name}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span key={skill} className="text-xs text-secondary bg-white/5 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </ScrollReveal>
             ))}
           </div>

        </div>
      </Container>
    </section>
  );
}

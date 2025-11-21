"use client";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { portfolioData } from "@/lib/content";
import { Briefcase, Users, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function ExperienceSection() {
  const { experience } = portfolioData;
  const [activeTab, setActiveTab] = useState<"work" | "leadership">("work");

  const filteredExperience = experience.filter((item) => item.type === activeTab);

  return (
    <section id="experience" className="py-24 relative">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                My Journey
              </h2>
              <p className="text-secondary max-w-xl">
                Professional experience, internships, and leadership roles that have shaped my career.
              </p>
            </div>
            
            {/* Tabs */}
            <div className="flex p-1 bg-surface border border-white/10 rounded-full">
              <button
                onClick={() => setActiveTab("work")}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all",
                  activeTab === "work" ? "bg-accent text-white shadow-lg" : "text-secondary hover:text-white"
                )}
              >
                Work Experience
              </button>
              <button
                onClick={() => setActiveTab("leadership")}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all",
                  activeTab === "leadership" ? "bg-accent text-white shadow-lg" : "text-secondary hover:text-white"
                )}
              >
                Leadership
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {filteredExperience.map((item, index) => (
              <ScrollReveal key={item.company + item.role} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 md:p-8 group cursor-default">
                    <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
                      <div className="flex gap-4">
                        <div className="mt-1 p-3 rounded-xl bg-white/5 border border-white/10 h-fit group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                          {item.type === "work" ? (
                            <Briefcase className="w-6 h-6 text-accent" />
                          ) : (
                            <Users className="w-6 h-6 text-accent" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                            {item.role}
                          </h3>
                          <div className="text-lg text-white/80 font-medium mb-1">
                            {item.company}
                          </div>
                          <div className="text-sm text-secondary mb-4">
                            {item.period}
                          </div>
                          <ul className="space-y-2">
                            {item.description.map((desc, i) => (
                              <li key={i} className="text-secondary text-sm flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                                {desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity self-center">
                         <ChevronRight className="w-6 h-6 text-white/20" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}

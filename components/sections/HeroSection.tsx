"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { portfolioData } from "@/lib/content";
import { ArrowRight, Download } from "lucide-react";

export function HeroSection() {
  const { hero } = portfolioData;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
            >
              {hero.title}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                Full Stack Dev.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-secondary max-w-lg leading-relaxed"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <Button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="group"
              >
                {hero.cta.primary.text}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                {hero.cta.secondary.text}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-8 mt-8 pt-8 border-t border-white/10"
            >
              {hero.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-secondary">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual - Profile & Abstract Shapes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center order-first lg:order-last"
          >
            <div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
              {/* Rotating Rings */}
              <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-3 lg:inset-8 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 lg:inset-20 border border-accent/20 rounded-full animate-[spin_20s_linear_infinite]" />
              
              {/* Profile Image Container */}
              <div className="relative w-40 h-40 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-accent/20 z-10">
                 <div className="absolute inset-0 bg-accent/10 z-10 mix-blend-overlay" />
                 {/* Placeholder for Profile Image - assuming /profile.png exists */}
                 <img 
                   src="/profile.png" 
                   alt="Utkarsh Srivastava" 
                   className="w-full h-full object-cover"
                 />
              </div>
              
              {/* Glow behind profile */}
              <div className="absolute inset-0 m-auto w-32 h-32 lg:w-64 lg:h-64 bg-accent rounded-full blur-[60px] lg:blur-[100px] opacity-40 -z-10" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { portfolioData } from "@/lib/content";
import { Trophy, Medal, Star, Globe, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function AchievementsSection() {
  const { achievements, certificates } = portfolioData;
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "trophy": return <Trophy className="w-8 h-8 text-yellow-500" />;
      case "medal": return <Medal className="w-8 h-8 text-blue-400" />;
      case "star": return <Star className="w-8 h-8 text-purple-400" />;
      case "globe": return <Globe className="w-8 h-8 text-green-400" />;
      default: return <Trophy className="w-8 h-8 text-accent" />;
    }
  };

  const marqueeCertificates = [...certificates, ...certificates];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <Container>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Achievements & Recognition
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {achievements.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="p-8 h-full hover:bg-white/5 transition-colors">
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit border border-white/10">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <div className="text-sm font-medium text-accent mb-4">
                  {item.date}
                </div>
                <p className="text-secondary leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Certificates Accordion */}
        <ScrollReveal delay={0.2}>
          <div className="border-t border-white/10 pt-8">
            <button
              onClick={() => setIsCertificatesOpen(!isCertificatesOpen)}
              className="w-full flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent/20 transition-colors">
                  <Medal className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">Certificates & Awards Gallery</h3>
                  <p className="text-sm text-secondary">View all {certificates.length} certificates and recognitions</p>
                </div>
              </div>
              {isCertificatesOpen ? (
                <ChevronUp className="w-6 h-6 text-secondary" />
              ) : (
                <ChevronDown className="w-6 h-6 text-secondary" />
              )}
            </button>

            <div
              className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                isCertificatesOpen ? "grid-rows-[1fr] opacity-100 mt-8" : "grid-rows-[0fr] opacity-0 mt-0"
              }`}
            >
              <div className="min-h-0">
                <div className="relative w-full overflow-hidden marquee-wrapper">
                  <div 
                    className="flex gap-6 marquee-track py-4"
                  >
                    {marqueeCertificates.map((cert, index) => (
                      <div 
                        key={`${cert.id ?? cert.title}-${index}`}
                        className="flex-none w-[280px] md:w-[360px]"
                      >
                        <Card className="overflow-hidden group h-full border-white/5 bg-black/40">
                          <div className="relative aspect-[4/3] bg-neutral-900">
                            <Image
                              src={cert.image}
                              alt={cert.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                              <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded border border-accent/20 backdrop-blur-sm">
                                  {cert.category}
                                </span>
                                {cert.date && (
                                  <span className="text-xs text-white/60 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                                    {cert.date}
                                  </span>
                                )}
                              </div>
                              <h4 className="text-white font-bold text-lg leading-tight mb-1">
                                {cert.title}
                              </h4>
                              {cert.issuer && (
                                <p className="text-sm text-white/60">
                                  {cert.issuer}
                                </p>
                              )}
                            </div>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

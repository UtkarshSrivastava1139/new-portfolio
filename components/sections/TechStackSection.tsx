"use client";

import { Container } from "@/components/layout/Container";
import { SlidingLogoMarquee, SlidingLogoMarqueeItem } from "@/components/ui/SlidingLogoMarquee";
import { portfolioData } from "@/lib/content";
import Image from "next/image";

export function TechStackSection() {
  const { skills } = portfolioData;

  // Map skill names to Simple Icons slugs
  const getIconSlug = (skill: string): string => {
    const s = skill.toLowerCase().replace(/\s+/g, '');
    const map: Record<string, string> = {
      'html5': 'html5',
      'css3': 'css',
      'javascript': 'javascript',
      'typescript': 'typescript',
      'reactjs': 'react',
      'nextjs': 'nextdotjs',
      'tailwind': 'tailwindcss',
      'bootstrap': 'bootstrap',
      'nodejs': 'nodedotjs',
      'express': 'express',
      'python': 'python',
      'django': 'django',
      'fastapi': 'fastapi',
      'flask': 'flask',
      'graphql': 'graphql',
      'mongodb': 'mongodb',
      'mysql': 'mysql',
      'openai': 'openai',
      'tensorflow': 'tensorflow',
      'yolov8': 'opencv', // Fallback
      'gemini/gptapis': 'google',
      'figma': 'figma',
      'coreldraw': 'coreldraw',
      'canva': 'canva',
      'git': 'git',
      'github': 'github',
      'docker': 'docker',
      'postman': 'postman',
      'vercel': 'vercel',
      'netlify': 'netlify',
      'notion': 'notion'
    };
    return map[s] || 'javascript'; // Default fallback
  };

  // Flatten skills into a single list for the marquee
  const allSkills: SlidingLogoMarqueeItem[] = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.ai,
    ...skills.design,
    ...skills.tools,
  ].map((skill, index) => {
    const slug = getIconSlug(skill);
    return {
      id: `skill-${index}`,
      content: (
        <div className="relative w-12 h-12 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
          {/* Using Simple Icons CDN */}
          <img 
            src={`https://cdn.simpleicons.org/${slug}/white`}
            alt={skill}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      )
    };
  });

  return (
    <section className="pb-10 pt-0 overflow-hidden">
      <Container>
        <div className="w-full overflow-hidden">
          <SlidingLogoMarquee 
            items={allSkills}
            speed={60}
            gap="4rem"
            height="80px"
            pauseOnHover={true}
            showControls={false}
            enableBlur={false}
          />
        </div>
      </Container>
    </section>
  );
}

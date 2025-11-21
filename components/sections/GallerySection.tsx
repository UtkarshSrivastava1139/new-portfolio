"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { Trophy, Calendar, MapPin, Star, Quote, Globe, Code, Award, Users, Zap } from "lucide-react";

// Define the grid items with multiple content slides
const galleryItems = [
  {
    id: 1,
    type: "image-carousel",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
    interval: 5000,
    content: [
      {
        src: "/images/landscape/hackwithup2.jpg",
        alt: "HackWithUP Hackathon",
        title: "HackWithUP Finals",
        subtitle: "Building solutions under pressure",
        icon: Trophy,
      },
      {
        src: "/images/landscape/edc-linkedin-workshop-speaker.jpg",
        alt: "EDC LinkedIn Workshop",
        title: "Speaking at LinkedIn Workshop",
        subtitle: "Guiding students on personal branding",
        icon: Calendar,
      },
      {
        src: "/images/landscape/ieee-day-speaker.jpg",
        alt: "IEEE Day Speaker",
        title: "Speaking at IEEE Day",
        subtitle: "Sharing knowledge and insights",
        icon: Calendar,
      },
      {
        src: "/images/landscape/ieee-yesist-malaysia.jpg",
        alt: "IEEE Yesist12 Malaysia",
        title: "International Finalist",
        subtitle: "Representing India in Malaysia",
        icon: Globe,
      },
      {
        src: "/images/landscape/got-award-for-creative-team-head-jss.jpeg",
        alt: "Leadership Award",
        title: "Creative Team Head",
        subtitle: "Recognized for creative leadership",
        icon: Star,
      },
      {
        src: "/images/landscape/presenting-at-convergex.jpeg",
        alt: "Hackathon Presentation",
        title: "Hackathon Presentation",
        subtitle: "Pitching innovative ideas",
        icon: Star,
      },
      {
        src: "/images/landscape/a-collage.jpeg",
        alt: "collage of events",
        title: "Event Highlights",
        subtitle: "Showcasing memorable moments",
        icon: Star,
      },
    ]
  },
  {
    id: 2,
    type: "image-carousel",
    colSpan: "md:col-span-1",
    rowSpan: "row-span-2 md:row-span-2",
    interval: 4000,
    content: [
      {
        src: "/images/portrait/microsoft-speaker.jpg",
        alt: "Speaker at Microsoft",
        title: "Tech Talk",
        subtitle: "Speaking at Microsoft Office",
        icon: Calendar,
      },
      {
        src: "/images/portrait/abhyuday-speaker.jpg",
        alt: "Speaker at Abhyuday, JSS University",
        title: "Speaker at Abhyuday",
        subtitle: "Speaking at Abhyuday, JSS University",
        icon: Calendar,
      },
      {
        src: "/images/portrait/award-winning-ieee-yesist-finalist.jpg",
        alt: "Award Winner",
        title: "Innovation Award",
        subtitle: "IEEE Yesist12 Finalist",
        icon: Award,
      },
      {
        src: "/images/portrait/speaking-at-ieee-orientation.jpeg",
        alt: "Mentoring",
        title: "Mentoring Juniors",
        subtitle: "Guiding the next generation",
        icon: Users,
      },
      {
        src: "/images/portrait/me-at-cashkaro.jpeg",
        alt: "Professional",
        title: "Industry Experience",
        subtitle: "Experience at CashKaro",
        icon: Code,
      },
      {
        src: "/images/portrait/ieee-day-speaker.jpg",
        alt: "IEEE Day Speaker",
        title: "IEEE Day Speaker",
        subtitle: "Speaking at IEEE Day",
        icon: Calendar,
      },
      {
        src: "/images/portrait/microsoft-office-attended.jpg",
        alt: "Professional",
        title: "Industry Experience",
        subtitle: "Experience at Microsoft Office",
        icon: Code,
      },
      
    ]
  },
  {
    id: 3,
    type: "stat-carousel",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    bg: "bg-accent",
    textColor: "text-white",
    interval: 3000,
    content: [
      {
        title: "Hackathons",
        value: "10+",
        subtitle: "Participated & Finalist",
      },
      {
        title: "Awards Won",
        value: "5+",
        subtitle: "Across Multiple Domains",
      },
      {
        title: "Events Spoken",
        value: "5+",
        subtitle: "Tech Talks & Panels",
      },
      {
        title: "Events Attended",
        value: "25+",
        subtitle: "Engaging & Learning",
      },
    ]
  },
  {
    id: 4,
    type: "stat-carousel",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    bg: "bg-surface",
    textColor: "text-secondary",
    interval: 3500,
    content: [
      {
        title: "Projects",
        value: "20+",
        subtitle: "Deployed Apps",
      },
      {
        title: "Clients",
        value: "4+",
        subtitle: "Happy Customers",
      },
      {
        title: "Experience",
        value: "2+ Yrs",
        subtitle: "Web & AI Development",
      }
    ]
  },
  {
    id: 5,
    type: "image-carousel",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    interval: 4500,
    content: [
      {
        src: "/images/communities/ieee-all.jpg",
        alt: "IEEE Community",
        title: "IEEE Community",
        subtitle: "Building a strong tech network",
        icon: Users,
      },
      {
        src: "/images/communities/edc-linkedin-workshop.JPG",
        alt: "LinkedIn Workshop",
        title: "Workshop Host",
        subtitle: "Teaching personal branding",
        icon: Globe,
      },
      {
        src: "/images/communities/convergex-hackathon.jpg",
        alt: "ConvergeX Hackathon",
        title: "ConvergeX Finalist",
        subtitle: "Managing large scale hackathons",
        icon: Code,
      },
      {
        src: "/images/communities/ieee-day-2.jpg",
        alt: "IEEE Day",
        title: "IEEE Day Celebration",
        subtitle: "Speaking at IEEE Day",
        icon: Calendar,
      },
      {
        src: "/images/communities/ieee-orientation.jpeg",
        alt: "IEEE Orientation",
        title: "IEEE Orientation",
        subtitle: "Welcoming new members",
        icon: Calendar,
      },
    ]
  },
  {
    id: 6,
    type: "image-carousel",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    interval: 3000,
    content: [
      {
        src: "/images/portrait/hack4bihar-poster-of-me.png",
        alt: "Hack4Bihar",
        title: "Hack4Bihar",
        subtitle: "Community Mentor",
        icon: Trophy,
      },
      {
        src: "/images/portrait/edc-poster-of-me-as-tech_head.jpeg",
        alt: "EDC Tech Head",
        title: "Technical Head",
        subtitle: "EDC JSS University",
        icon: Globe,
      },
      {
        src: "/images/portrait/ieee-poster-as-xtreme-ambassador.jpeg",
        alt: "IEEEXtreme Ambassador",
        title: "Ambassador",
        subtitle: "IEEEXtreme 17.0",
        icon: Globe,
      },
      {
        src: "/images/portrait/ieee-poster-of-me-as-webmaster.jpeg",
        alt: "IEEE Webmaster",
        title: "Webmaster",
        subtitle: "IEEE JSS University",
        icon: Globe,
      },
    ]
  },
  {
    id: 7,
    type: "quote",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    bg: "bg-surface",
    textColor: "text-white",
    content: [
      {
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
      }
    ]
  },
];

const CarouselCard = ({ item }: { item: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (item.type === "quote" || !item.content || item.content.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % item.content.length);
    }, item.interval || 4000);

    return () => clearInterval(interval);
  }, [item]);

  const currentContent = item.content[currentIndex];

  return (
    <div className={cn(
      "relative w-full h-full overflow-hidden group",
      item.type.includes("stat") ? item.bg : "bg-surface"
    )}>
      <AnimatePresence mode="popLayout">
        {item.type.includes("image") ? (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={currentContent.src || "/placeholder.png"}
                alt={currentContent.alt || "Gallery Image"}
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
            </div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute bottom-0 left-0 p-6 w-full"
            >
              {currentContent.icon && (
                <div className="mb-2 p-2 bg-white/10 backdrop-blur-md rounded-full w-fit text-white">
                  <currentContent.icon className="w-4 h-4" />
                </div>
              )}
              <h3 className="text-lg font-bold text-white leading-tight">
                {currentContent.title}
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                {currentContent.subtitle}
              </p>
              
              {/* Progress Indicators */}
              {item.content.length > 1 && (
                <div className="flex gap-1 mt-3">
                  {item.content.map((_: any, idx: number) => (
                    <div 
                      key={idx} 
                      className={cn(
                        "h-1 rounded-full transition-all duration-500",
                        idx === currentIndex ? "w-6 bg-accent" : "w-1 bg-white/30"
                      )} 
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        ) : item.type === "quote" ? (
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="h-full flex flex-col justify-center p-6 relative overflow-hidden bg-surface"
          >
            <Quote className="absolute top-4 left-4 w-6 h-6 text-accent/40" />
            <blockquote className="text-lg font-medium text-white relative z-10 leading-relaxed">
              "{currentContent.text}"
            </blockquote>
            <cite className="mt-3 text-accent text-sm not-italic font-medium block">
              — {currentContent.author}
            </cite>
          </motion.div>
        ) : (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={{ duration: 0.6 }}
            className="h-full flex flex-col justify-between p-6 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className={cn("text-4xl font-bold mb-1", item.textColor === "text-white" ? "text-white" : "text-white")}>
                {currentContent.value}
              </h3>
              <p className={cn("font-medium", item.textColor === "text-white" ? "text-white/90" : "text-secondary")}>
                {currentContent.title}
              </p>
            </div>
            <p className={cn("text-sm relative z-10", item.textColor === "text-white" ? "text-white/70" : "text-secondary/70")}>
              {currentContent.subtitle}
            </p>
            
            {/* Decorative Icon Background */}
            <Star className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5 rotate-12" />
            
            {/* Progress Indicators for Stats */}
            {item.content.length > 1 && (
              <div className="absolute top-4 right-4 flex gap-1">
                {item.content.map((_: any, idx: number) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "w-1 h-1 rounded-full transition-all duration-300",
                      idx === currentIndex ? (item.textColor === "text-white" ? "bg-white" : "bg-accent") : (item.textColor === "text-white" ? "bg-white/30" : "bg-white/10")
                    )} 
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="flex flex-col gap-4 mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tighter text-white"
          >
            Life <span className="text-accent">Beyond Code</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary max-w-2xl"
          >
            Capturing moments from hackathons, tech events, and milestones along my journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={cn(
                "relative rounded-3xl overflow-hidden border border-white/10",
                item.colSpan,
                item.rowSpan
              )}
            >
              <CarouselCard item={item} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

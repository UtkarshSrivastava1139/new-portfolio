"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Filter, ArrowUpRight, ArrowLeft } from "lucide-react";
import { portfolioData } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function CertificatesPage() {
  const { certificates } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(certificates.map((cert) => cert.category));
    return ["All", ...Array.from(cats)];
  }, [certificates]);

  // Filter certificates
  const filteredCertificates = useMemo(() => {
    return certificates.filter((cert) => {
      const matchesCategory =
        selectedCategory === "All" || cert.category === selectedCategory;
      const matchesSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [certificates, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <Container>
        {/* Back to Home */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-2 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Certificates & <span className="text-accent">Achievements</span>
            </h1>
            <p className="text-secondary text-lg max-w-2xl">
              A collection of my certifications, awards, and recognitions from
              various hackathons, competitions, and events.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface/50 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                selectedCategory === category
                  ? "bg-accent text-white border-accent"
                  : "bg-surface/50 text-secondary border-white/10 hover:bg-white/5 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <Link key={cert.id} href={`/certificates/${cert.id}`}>
                <Card className="group h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white font-medium flex items-center gap-2">
                        View Details <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-white">
                      {cert.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-accent text-xs font-medium tracking-wider uppercase">
                        {cert.issuer}
                      </span>
                      <span className="text-secondary text-xs">
                        {cert.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors line-clamp-2 mb-2">
                      {cert.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface border border-white/10 mb-4">
              <Search className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No certificates found
            </h3>
            <p className="text-secondary">
              Try adjusting your search or filter criteria
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}

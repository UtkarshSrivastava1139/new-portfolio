import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { portfolioData } from "@/lib/content";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="bg-surface border-t border-white/10 py-12 mt-20">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="relative h-14 w-56">
              <Image
                src="/logo.png"
                alt="Utkarsh Srivastava"
                fill
                className="object-contain object-center md:object-left"
              />
            </Link>
            <p className="text-secondary text-sm">
              © {new Date().getFullYear()} Utkarsh Srivastava. All rights reserved.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={personal.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>

          {/* Made with Love */}
          <div className="flex items-center gap-2 text-sm text-secondary">
            <span>Built with passion and code</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </div>
        </div>
      </Container>
    </footer>
  );
}

"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <Container>
        <div className="flex flex-col h-[85vh] gap-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center gap-2 text-secondary hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            
            <a href="/resume.pdf" download="Utkarsh_Srivastava_Resume.pdf">
              <Button className="gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </a>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 w-full bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative">
            <iframe
              src="/resume.pdf"
              className="w-full h-full"
              title="Resume"
            />
            
            {/* Fallback for mobile or if iframe fails */}
            <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center text-center p-8">
              <p className="text-secondary mb-4">
                Your browser doesn't support viewing PDFs directly.
              </p>
              <a href="/resume.pdf" download="Utkarsh_Srivastava_Resume.pdf">
                <Button variant="outline">Download Resume Instead</Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

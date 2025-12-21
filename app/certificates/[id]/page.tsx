import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, Share2, ChevronLeft, ChevronRight, Calendar, Award, Building2 } from "lucide-react";
import { portfolioData } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface Props {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return portfolioData.certificates.map((cert) => ({
    id: cert.id,
  }));
}

export default function CertificateDetailPage({ params }: Props) {
  const certificate = portfolioData.certificates.find((c) => c.id === params.id);

  if (!certificate) {
    notFound();
  }

  // Find next and previous certificates for navigation
  const currentIndex = portfolioData.certificates.findIndex((c) => c.id === params.id);
  const prevCertificate = currentIndex > 0 ? portfolioData.certificates[currentIndex - 1] : null;
  const nextCertificate = currentIndex < portfolioData.certificates.length - 1 ? portfolioData.certificates[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <Container>
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/certificates" className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Certificates
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Image Section */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/3] w-full bg-surface/50 rounded-2xl border border-white/10 overflow-hidden group">
              <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                className="object-contain p-4"
                priority
              />
            </div>

            {/* Navigation Buttons (Mobile: Bottom, Desktop: Below Image) */}
            <div className="flex items-center justify-between mt-6">
              {prevCertificate ? (
                <Link href={`/certificates/${prevCertificate.id}`}>
                  <Button variant="outline" className="gap-2 pl-3">
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </Button>
                </Link>
              ) : (
                <div />
              )}

              {nextCertificate ? (
                <Link href={`/certificates/${nextCertificate.id}`}>
                  <Button variant="outline" className="gap-2 pr-3">
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 border border-accent/20">
                {certificate.category}
              </div>
              <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
                {certificate.title}
              </h1>
              
              <div className="space-y-4 text-secondary">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/50 border border-white/5">
                  <Building2 className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-secondary/70">Issued by</p>
                    <p className="text-white font-medium">{certificate.issuer}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/50 border border-white/5">
                  <Calendar className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-secondary/70">Date</p>
                    <p className="text-white font-medium">{certificate.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/50 border border-white/5">
                  <Award className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-secondary/70">ID</p>
                    <p className="text-white font-medium">#{certificate.id}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <a href={certificate.image} download target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full gap-2">
                  <Download className="w-4 h-4" />
                  Download Certificate
                </Button>
              </a>
              {/* Share functionality could be added here */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

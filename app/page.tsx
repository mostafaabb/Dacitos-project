'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustedBySection } from '@/components/sections/TrustedBySection';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { BentoGridSection } from '@/components/sections/BentoGridSection';
import { ProductShowcaseSection } from '@/components/sections/ProductShowcaseSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/sections/Footer';
import { CommandMenu } from '@/components/ui/CommandMenu';
import { DemoModal } from '@/components/ui/DemoModal';
import { VideoModal } from '@/components/ui/VideoModal';

export default function Home() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. Premium Navbar */}
      <Navbar
        onOpenDemo={() => setDemoOpen(true)}
        onOpenCommand={() => setCommandOpen(true)}
      />

      {/* 2. Hero Section */}
      <HeroSection
        onOpenDemo={() => setDemoOpen(true)}
        onOpenVideo={() => setVideoOpen(true)}
      />

      {/* 3. Trusted By Logos & Marquee */}
      <TrustedBySection />

      {/* 4. Statistics & Metric Counters */}
      <StatisticsSection />

      {/* 5. Features Bento Grid */}
      <BentoGridSection />

      {/* 6. Product Showcase & Mockup Hub */}
      <ProductShowcaseSection onOpenDemo={() => setDemoOpen(true)} />

      {/* 7. Solutions by Property Model */}
      <SolutionsSection onOpenDemo={() => setDemoOpen(true)} />

      {/* 8. Target Industries & 3D Cards */}
      <IndustriesSection />

      {/* 9. 4-Step Onboarding Timeline */}
      <TimelineSection />

      {/* 10. Testimonials Slider & Video Case Study */}
      <TestimonialsSection onOpenVideo={() => setVideoOpen(true)} />

      {/* 11. Transparent Pricing Tiers */}
      <PricingSection onOpenDemo={() => setDemoOpen(true)} />

      {/* 12. Frequently Asked Questions */}
      <FAQSection />

      {/* 13. Industry Insights & Blog */}
      <BlogSection />

      {/* 14. Immersive Aurora CTA Banner */}
      <CtaSection onOpenDemo={() => setDemoOpen(true)} />

      {/* 15. Multi-Column Enterprise Footer */}
      <Footer />

      {/* Global Interactive Modals */}
      <CommandMenu
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
        onOpenDemo={() => setDemoOpen(true)}
        onOpenVideo={() => setVideoOpen(true)}
      />

      <DemoModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
      />

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </main>
  );
}

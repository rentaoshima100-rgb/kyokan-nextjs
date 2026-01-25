"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueCardsSection } from "@/components/sections/ValueCardsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { RakuyuzSection } from "@/components/sections/RakuyuzSection";
import { EquipmentPreviewSection } from "@/components/sections/EquipmentPreviewSection";
import { ProjectHighlightsSection } from "@/components/sections/ProjectHighlightsSection";
import { AwardBannerSection } from "@/components/sections/AwardBannerSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";
import { pageVariants } from "@/lib/animations";

export default function HomePage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Value Cards Section */}
      <ValueCardsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* RAKUYU-Z Section */}
      <RakuyuzSection />

      {/* Equipment Preview Section */}
      <EquipmentPreviewSection />

      {/* Project Highlights Section */}
      <ProjectHighlightsSection />

      {/* Award Banner Section */}
      <AwardBannerSection />

      {/* About Section */}
      <AboutSection />

      {/* CTA Section */}
      <CTASection />
    </motion.div>
  );
}

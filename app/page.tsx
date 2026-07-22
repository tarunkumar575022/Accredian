import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Clients } from "@/components/sections/Clients";
import { AccredianEdge } from "@/components/sections/AccredianEdge";
import { DomainExpertise } from "@/components/sections/DomainExpertise";
import { CourseSegmentation } from "@/components/sections/CourseSegmentation";
import { SkillEnhancement } from "@/components/sections/SkillEnhancement";
import { CATFramework } from "@/components/sections/CATFramework";
import { HowWeDeliver } from "@/components/sections/HowWeDeliver";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Clients />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      <SkillEnhancement />
      <CATFramework />
      <HowWeDeliver />
      <FAQ />
      <Testimonials />
      <CTABanner />
    </>
  );
}

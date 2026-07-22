"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { Target, Lightbulb, Grid, Clock, GraduationCap, Monitor, TrendingUp } from "lucide-react";

const edgePoints = [
  { icon: Target, label: "Bespoke Curriculums", desc: "Aligned strictly with your business objectives" },
  { icon: Lightbulb, label: "Dynamic Pedagogy", desc: "Immersive learning loops that guarantee retention" },
  { icon: Grid, label: "Scalable Portfolios", desc: "From entry-level upskilling to executive coaching" },
  { icon: Clock, label: "Hybrid Modalities", desc: "Virtual, on-premise, and self-paced mastery" },
  { icon: GraduationCap, label: "Elite Mentorship", desc: "Guided by veterans from top-tier firms" },
  { icon: Monitor, label: "Next-Gen LMS", desc: "AI-driven platforms for personalized learning" },
  { icon: TrendingUp, label: "Quantifiable ROI", desc: "Metrics-driven progress and skill gap closure" },
];

export function AccredianEdge() {
  return (
    <section id="edge" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader 
          title="The Enterprise Advantage"
          subtitle="Why top organizations choose our transformative learning pathways"
        />

        <div className="relative mt-16 max-w-5xl mx-auto min-h-[600px] flex items-center justify-center">
          {/* Center Circle */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="absolute z-20 w-48 h-48 rounded-full bg-[#1976D2] shadow-2xl flex flex-col items-center justify-center text-white text-center p-6 border-4 border-white"
          >
            <span className="text-2xl font-bold">Accredian</span>
            <span className="text-sm opacity-90 mt-1">Enterprise Advantage</span>
          </motion.div>

          {/* Surrounding Nodes */}
          {edgePoints.map((point, i) => {
            // Calculate position in a circle (6 points around, 1 below maybe? or just arrange all 7)
            const angle = (i * (360 / edgePoints.length)) * (Math.PI / 180);
            const radius = 250; // distance from center
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 0, y: 0 }}
                whileInView={{ opacity: 1, x, y }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
                className="absolute z-10 w-48 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1976D2] mb-3 shadow-sm group hover:scale-110 hover:bg-[#1976D2] hover:text-white transition-all duration-300">
                  <point.icon size={28} />
                </div>
                <h4 className="font-semibold text-slate-900 text-sm mb-1">{point.label}</h4>
                <p className="text-xs text-slate-500 leading-tight hidden md:block">{point.desc}</p>
                
                {/* Connecting Line (simulated with CSS for simple layout, actual SVG is better but this works for demo) */}
                <div 
                  className="hidden md:block absolute top-8 -z-10 bg-blue-100 origin-left"
                  style={{
                    width: radius - 60,
                    height: 2,
                    left: "50%",
                    transform: `rotate(${angle + Math.PI}rad)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

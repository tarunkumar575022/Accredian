"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { BarChart, ClipboardList, Rocket } from "lucide-react";
import { Card } from "../ui/Card";

const steps = [
  {
    icon: BarChart,
    number: "01",
    title: "Diagnostic Mapping",
    desc: "We conduct rigorous audits to pinpoint precise competency deficiencies.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Curriculum Architecture",
    desc: "We engineer bespoke learning pathways aligned with your strategic OKRs.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Agile Execution",
    desc: "We deploy modular training formats that integrate seamlessly with your operations.",
  },
];

export function HowWeDeliver() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader 
          title="Our Blueprint for Transformation"
          subtitle="An end-to-end process guaranteeing measurable organizational growth"
        />

        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-300 -translate-y-1/2 border-t-2 border-dashed border-slate-300" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="h-full pt-12 pb-8 px-6 text-center border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white group">
                  {/* Number Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#1976D2] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  
                  <div className="flex justify-center mb-6 text-[#1976D2]">
                    <step.icon size={48} strokeWidth={1.5} className="group-hover:text-blue-600 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm">
                    {step.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

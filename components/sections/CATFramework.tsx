"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";

export function CATFramework() {
  return (
    <section id="cat" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader 
          title="The ACE Framework"
          subtitle="A structured methodology for achieving absolute mastery"
        />

        <div className="relative max-w-4xl mx-auto h-[500px] mt-12 flex items-center justify-center">
          
          {/* Concept Circle */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 left-1/4 w-64 h-64 rounded-full border-4 border-[#1976D2] bg-[#1976D2]/5 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm z-10 transition-transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-[#1976D2] mb-2">Assess</h3>
            <p className="text-sm text-slate-600">Identify skill gaps and baseline competencies</p>
          </motion.div>

          {/* Application Circle */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="absolute top-0 right-1/4 w-64 h-64 rounded-full border-4 border-emerald-500 bg-emerald-500/5 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm z-20 transition-transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-emerald-600 mb-2">Cultivate</h3>
            <p className="text-sm text-slate-600">Develop capabilities through immersive, hands-on projects</p>
          </motion.div>

          {/* Tools Circle */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full border-4 border-purple-500 bg-purple-500/5 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm z-30 transition-transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-purple-600 mb-2">Empower</h3>
            <p className="text-sm text-slate-600">Deploy newfound skills to drive real business impact</p>
          </motion.div>

          {/* Center Intersection text (optional decoration) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute z-40 bg-white shadow-lg rounded-full w-24 h-24 flex items-center justify-center text-center text-sm font-bold text-slate-800"
          >
            Mastery
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { courseSegments } from "@/lib/data/segments";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

export function CourseSegmentation() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader 
          title="Precision-Engineered Learning Tracks"
          subtitle="Navigate highly specialized curriculums structured for distinct professional trajectories."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseSegments.map((segment, index) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group cursor-pointer border-slate-100">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={segment.image} 
                    alt={segment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 relative bg-white z-20">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#1976D2] transition-colors">
                    {segment.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {segment.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

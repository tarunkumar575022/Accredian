"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { SectionHeader } from "../ui/SectionHeader";
import { Card, CardContent } from "../ui/Card";

const statsData = [
  {
    value: 10000,
    suffix: "+",
    title: "Careers Accelerated",
    description: "Through immersive learning experiences",
  },
  {
    value: 200,
    suffix: "+",
    title: "Corporate Partners",
    description: "Trusting us with talent development",
  },
  {
    value: 5000,
    suffix: "+",
    title: "Ongoing Enrollments",
    description: "Mastering future-ready skills today",
  }
];

export function Stats() {
  return (
    <section id="stats" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader 
          title="Impact by the Numbers"
          subtitle="Delivering Measurable Value to Global Enterprises"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-100 bg-slate-50/50 group hover:border-blue-100">
                <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
                  <div className="text-4xl lg:text-5xl font-bold text-[#1976D2] mb-4">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

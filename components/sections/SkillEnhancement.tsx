"use client";

import { motion } from "framer-motion";
import { CheckSquare, XSquare, GraduationCap, Briefcase } from "lucide-react";

const quadrants = [
  {
    icon: CheckSquare,
    title: "Engineers & Developers",
    desc: "Master modern stacks and architect scalable technical solutions.",
    iconColor: "text-blue-400",
  },
  {
    icon: XSquare,
    title: "Business Leaders",
    desc: "Translate technical capabilities into strategic business value.",
    iconColor: "text-red-400",
  },
  {
    icon: GraduationCap,
    title: "High-Potential Talent",
    desc: "Accelerate your trajectory with foundational and advanced technical skills.",
    iconColor: "text-green-400",
  },
  {
    icon: Briefcase,
    title: "Executive Stakeholders",
    desc: "Drive digital transformation and spearhead organizational agility.",
    iconColor: "text-purple-400",
  }
];

export function SkillEnhancement() {
  return (
    <section className="py-0 bg-[#0F172A] text-white">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Image Side */}
        <div className="relative h-64 lg:h-auto overflow-hidden">
          <div className="absolute inset-0 bg-[#1976D2]/20 mix-blend-multiply z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Professionals"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content Side */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-[#1976D2] to-[#0D47A1]">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-blue-200 font-medium mb-2 uppercase tracking-wider text-sm">
              Target Audiences
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Adaptive Capability Building
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {quadrants.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="mb-4 bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <item.icon size={24} className={item.iconColor} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

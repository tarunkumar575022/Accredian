"use client";

import { motion } from "framer-motion";
import { domains } from "@/lib/data/domains";
import { SectionHeader } from "../ui/SectionHeader";
import { FlaskConical, Bot, Crown, BarChart3, Settings2, Laptop2, Coins } from "lucide-react";

// Map string icons from data to actual Lucide components
const iconMap: Record<string, React.ElementType> = {
  "flask-conical": FlaskConical,
  "bot": Bot,
  "crown": Crown,
  "bar-chart-3": BarChart3,
  "settings-2": Settings2,
  "laptop-2": Laptop2,
  "coins": Coins,
};

export function DomainExpertise() {
  return (
    <section id="domains" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader 
          title="Specialized Knowledge Hubs"
          subtitle="Targeted disciplines engineered to build the capabilities of tomorrow."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {domains.map((domain, index) => {
            const Icon = iconMap[domain.icon] || FlaskConical;
            
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1976D2]/0 to-[#1976D2]/0 group-hover:from-[#1976D2]/5 group-hover:to-[#1976D2]/10 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#1976D2] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1976D2] group-hover:text-white transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-[#1976D2] transition-colors">
                    {domain.title}
                  </h3>
                  <div className="flex items-center text-sm font-medium text-[#1976D2] mt-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Explore Programs 
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

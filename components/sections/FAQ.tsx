"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqCategories } from "@/lib/data/faqs";
import { SectionHeader } from "../ui/SectionHeader";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export function FAQ() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <SectionHeader 
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our corporate training programs."
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setActiveAccordion(null);
              }}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeTab === index
                  ? "bg-[#1976D2] text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {faqCategories[activeTab].faqs.map((faq) => {
                const isActive = activeAccordion === faq.id;
                
                return (
                  <div 
                    key={faq.id} 
                    className={cn(
                      "border rounded-xl overflow-hidden transition-all duration-300",
                      isActive ? "border-[#1976D2] bg-blue-50/30" : "border-slate-200 bg-white hover:border-blue-200"
                    )}
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    >
                      <span className={cn(
                        "font-semibold pr-4",
                        isActive ? "text-[#1976D2]" : "text-slate-900"
                      )}>
                        {faq.question}
                      </span>
                      <div className={cn(
                        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                        isActive ? "bg-[#1976D2] text-white" : "bg-slate-100 text-slate-500"
                      )}>
                        {isActive ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

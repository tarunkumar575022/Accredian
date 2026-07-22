"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";
import { SectionHeader } from "../ui/SectionHeader";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card } from "../ui/Card";
import { cn } from "@/lib/utils/cn";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="testimonials" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader 
          title="Testimonials from Our Partners"
          subtitle="What Our Clients Are Saying"
        />

        <div 
          className="max-w-4xl mx-auto relative mt-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card className="border-none shadow-xl bg-white p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Quote size={120} />
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
                    <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-slate-50 rounded-2xl flex items-center justify-center p-6 border border-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={testimonials[currentIndex].logo} 
                        alt={`${testimonials[currentIndex].company} logo`}
                        className="max-w-full max-h-full object-contain mix-blend-multiply"
                      />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <Quote className="text-[#1976D2] w-8 h-8 mb-4 mx-auto md:mx-0" />
                      <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 font-medium">
                        &quot;{testimonials[currentIndex].quote}&quot;
                      </p>
                      <h4 className="font-bold text-slate-900 text-lg">
                        {testimonials[currentIndex].company}
                      </h4>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex space-x-2">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#1976D2] hover:text-white hover:border-[#1976D2] transition-colors shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#1976D2] hover:text-white hover:border-[#1976D2] transition-colors shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    currentIndex === idx 
                      ? "bg-[#1976D2] w-8" 
                      : "bg-slate-300 hover:bg-slate-400"
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

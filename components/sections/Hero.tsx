"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

const badges = [
  "Bespoke Learning Paths",
  "Data-Driven Insights",
  "World-Class Mentorship"
];

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-white to-blue-50/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
                Future-Proof Your <span className="text-[#1976D2]">Workforce</span> With Elite <span className="text-[#1976D2]">Upskilling</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl">
                Empower your organization with cutting-edge technical and leadership training designed to drive innovation and accelerate business growth.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {badges.map((badge, idx) => (
                  <Badge key={idx} variant="blue" className="px-3 py-1 text-sm rounded-full">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    {badge}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="rounded-full text-base group"
                  onClick={() => window.dispatchEvent(new Event("open-enquiry-modal"))}
                >
                  Enquire Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-base">
                  Explore Programs
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl bg-slate-200"
            >
              {/* Note: In a real project, use next/image here */}
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Professional team meeting" 
                className="object-cover w-full h-full"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

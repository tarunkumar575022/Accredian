"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function CTABanner() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#1976D2] to-[#0D47A1] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          
          <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
            <div className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm items-center justify-center">
              <MessageCircle className="text-white w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Architect Your Team's Future?
              </h2>
              <p className="text-blue-100 text-lg">
                Connect with our enterprise strategists to map out your transformation.
              </p>
            </div>
          </div>
          
          <div className="relative z-10 w-full md:w-auto flex-shrink-0">
            <Button 
              size="lg" 
              variant="secondary" 
              className="rounded-full group font-medium w-full md:w-auto"
              onClick={() => window.dispatchEvent(new Event("open-enquiry-modal"))}
            >
              Contact Us
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

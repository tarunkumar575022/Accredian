"use client";

import { clients } from "@/lib/data/clients";
import { SectionHeader } from "../ui/SectionHeader";

export function Clients() {
  return (
    <section id="clients" className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <SectionHeader 
          title="Trusted by Global Innovators"
          subtitle="Empowering the workforce of Fortune 500 companies and leading startups."
        />
      </div>

      <div className="relative flex overflow-x-hidden w-full group">
        <div className="animate-marquee flex items-center whitespace-nowrap group-hover:pause">
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div 
              key={`${client.id}-${idx}`} 
              className="mx-8 lg:mx-16 flex items-center justify-center min-w-[120px]"
            >
              {/* Using img for simplicity, next/image recommended for production */}
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="h-10 lg:h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

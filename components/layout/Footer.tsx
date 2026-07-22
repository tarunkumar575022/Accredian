"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Button } from "../ui/Button";

export function Footer() {
  return (
    <footer className="bg-[#0A192F] text-slate-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">accredian</h2>
            <p className="text-sm text-slate-400 mb-6">
              A Brand of FullStack Education Pvt Ltd
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors" aria-label="Facebook"><FaFacebook size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors" aria-label="Instagram"><FaInstagram size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors" aria-label="Twitter"><FaTwitter size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors" aria-label="LinkedIn"><FaLinkedin size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors" aria-label="YouTube"><FaYoutube size={20} /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-sm">Why Accredian</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-sm">Corporate Training</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#1976D2] mt-0.5" />
                <div>
                  <p className="text-sm text-white">Email Address</p>
                  <a href="mailto:enterprise@accredian.com" className="text-sm hover:text-white transition-colors">
                    enterprise@accredian.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#1976D2] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-white">Office Location</p>
                  <p className="text-slate-400 text-sm">
                  HITEC City, Madhapur, Hyderabad, Telangana 500081
                </p>
                </div>
              </div>
              <div className="pt-4">
                <Button 
                  className="rounded-full w-full sm:w-auto"
                  onClick={() => window.dispatchEvent(new Event("open-enquiry-modal"))}
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

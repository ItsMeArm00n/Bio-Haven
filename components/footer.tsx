"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUp, Leaf, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-br from-[#1b5e20] via-[#2e7d32] to-[#1b5e20] text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg className="absolute bottom-0 w-[200%] h-24 animate-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="white" opacity="0.1" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6 pt-32 pb-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-xl">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl">Bio-Structural</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Innovative solutions combining nature and technology for a sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "BioSync", "Self-Healing Systems", "Gallery", "Team & Credits"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-white/70 hover:text-white transition-colors text-sm inline-block hover:translate-x-1 transition-transform"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2">
              {["Documentation", "Research Papers", "Sustainability Report", "Project Timeline"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm inline-block hover:translate-x-1 transition-transform"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-lg">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors border border-white/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">© 2025 Bio-Structural Innovations. All rights reserved.</p>
          <p className="text-white/70 text-sm">Made with 🌱 by Grade 10 Science Team</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-[#2E7D32] text-white rounded-full shadow-2xl hover:bg-[#1B5E20] transition-colors z-50 border-2 border-white/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUp, Leaf, Github, Linkedin, Mail } from "lucide-react"

interface FooterProps {
  theme?: "green" | "gray"
}

export function Footer({ theme = "green" }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const bgGradient = theme === "gray" 
    ? "bg-gradient-to-br from-[#424242] via-[#616161] to-[#424242]"
    : "bg-gradient-to-br from-[#1b5e20] via-[#2e7d32] to-[#1b5e20]"
  
  const buttonBg = theme === "gray"
    ? "bg-[#616161] hover:bg-[#424242]"
    : "bg-[#2E7D32] hover:bg-[#1B5E20]"

  return (
    <footer className={`relative ${bgGradient} text-white overflow-hidden`}>
      <div className="relative z-10 container mx-auto px-4 lg:px-6 pt-20 pb-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
              {["Home", "BioSync", "Self-Healing Systems"].map((link) => (
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
          <p className="text-white/70 text-sm">Team Eco Haven: Armaan Kumar, Manomay M. Kini, SASIKARAN VENGADESWARAN and Anirudh Shankar Rajesh</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 ${buttonBg} text-white rounded-full shadow-2xl transition-colors z-50 border-2 border-white/20`}
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

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Leaf, Hammer } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/biosync", label: "BioSync", icon: Leaf },
    { href: "/smart-healing-concrete", label: "Smart Healing Concrete", icon: Hammer },
    { href: "/gallery", label: "Gallery" },
    { href: "/team", label: "Team & Credits" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-green-100"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div className="flex items-center gap-3 cursor-pointer group" whileHover={{ scale: 1.05 }}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#2E7D32] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] p-2.5 rounded-xl shadow-lg">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
              </div>
              <span
                className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? "text-gray-900" : "text-white drop-shadow-lg"}`}
              >
                Bio-Structural Innovations
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className={`relative px-4 py-2 transition-all ${
                      scrolled
                        ? `text-gray-700 hover:text-[#2E7D32] hover:bg-green-50 ${isActive ? "text-[#2E7D32] font-semibold" : ""}`
                        : `text-white hover:text-white/90 hover:bg-white/10 ${isActive ? "font-semibold" : ""}`
                    }`}
                  >
                    {link.icon && <link.icon className="w-4 h-4 mr-2" />}
                    {link.label}
                    {isActive && (
                      <motion.div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${scrolled ? "bg-[#2E7D32]" : "bg-white"}`}
                        layoutId="activeNav"
                      />
                    )}
                  </Button>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${scrolled ? "text-gray-900 hover:bg-green-50" : "text-white hover:bg-white/10"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-green-100 shadow-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link key={link.href} href={link.href}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={`w-full justify-start ${isActive ? "bg-[#2E7D32] text-white hover:bg-[#1B5E20]" : "text-gray-700 hover:bg-green-50 hover:text-[#2E7D32]"}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.icon && <link.icon className="w-4 h-4 mr-2" />}
                      {link.label}
                    </Button>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

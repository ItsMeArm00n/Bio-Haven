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

  const isHealingSection = pathname?.startsWith("/self-healing-systems")

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
    { href: "/self-healing-systems", label: "Self-Healing Systems", icon: Hammer },
    { href: "/gallery", label: "Gallery" },
    { href: "/team", label: "Team & Credits" },
  ]

  const primaryColor = isHealingSection ? "#616161" : "#2E7D32"
  const hoverBg = isHealingSection ? "hover:bg-gray-50" : "hover:bg-green-50"
  const textColor = isHealingSection ? "text-gray-700" : "text-gray-700"
  const activeColor = isHealingSection ? "text-gray-900" : "text-[#2E7D32]"
  const borderColor = isHealingSection ? "border-gray-100" : "border-green-100"

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? `bg-white/98 backdrop-blur-md shadow-lg border-b ${borderColor}`
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
                <div
                  className="absolute inset-0 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"
                  style={{ backgroundColor: primaryColor }}
                />
                <div
                  className="relative p-2.5 rounded-xl shadow-lg"
                  style={{
                    background: `linear-gradient(to bottom right, ${primaryColor}, ${isHealingSection ? "#424242" : "#1B5E20"})`,
                  }}
                >
                  <Leaf className="w-6 h-6 text-white" />
                </div>
              </div>
              <span
                className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? "text-gray-900" : "text-white drop-shadow-lg"}`}
              >
                Bio Haven
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
                        ? `${textColor} ${hoverBg} ${isActive ? activeColor + " font-semibold" : ""}`
                        : `text-white hover:text-white/90 hover:bg-white/10 ${isActive ? "font-semibold" : ""}`
                    }`}
                  >
                    {link.icon && <link.icon className="w-4 h-4 mr-2" />}
                    {link.label}
                    {isActive && (
                      <motion.div
                        className={`absolute bottom-0 left-0 right-0 h-0.5`}
                        style={{ backgroundColor: scrolled ? primaryColor : "white" }}
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
            className={`lg:hidden ${scrolled ? `text-gray-900 ${hoverBg}` : "text-white hover:bg-white/10"}`}
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
            className={`lg:hidden bg-white border-t ${borderColor} shadow-xl`}
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
                      className={`w-full justify-start ${isActive ? `text-white` : `${textColor} ${hoverBg}`}`}
                      style={isActive ? { backgroundColor: primaryColor } : {}}
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

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Zap, TrendingUp, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SmartHealingConcretePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Crack Animation */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mt-20">
        <motion.div className="absolute inset-0 bg-gradient-to-br from-[#5D4037] via-[#4E342E] to-[#3E2723]" />

        {/* Animated Crack Healing Effect */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 1000">
          <motion.path
            d="M 0 500 Q 250 400 500 500 T 1000 500"
            stroke="#81D4FA"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 1, opacity: 0.5 }}
            animate={{ pathLength: [1, 0, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
        </svg>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Smart Healing Concrete
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-white/90 mb-8 max-w-3xl mx-auto text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            When Chemistry Meets Electronics
          </motion.p>
          <motion.p
            className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Concrete that heals cracks chemically while Arduino sensors detect and verify the repair
          </motion.p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Self-Healing Chemistry",
              description:
                "Baking soda reacts with calcium chloride to form calcium carbonate, sealing cracks instantly",
              color: "#5D4037",
            },
            {
              icon: Zap,
              title: "Smart Detection",
              description: "Copper foil sensors detect cracks and trigger Arduino-based monitoring systems",
              color: "#81D4FA",
            },
            {
              icon: TrendingUp,
              title: "Graphite Recovery",
              description: "Recycled graphite creates self-healing electrical circuits for automated repair",
              color: "#2E7D32",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="h-full border-2 hover:border-[#5D4037] transition-all duration-300 hover:shadow-2xl">
                <CardHeader>
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: `${item.color}20` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-8 h-8" style={{ color: item.color }} />
                  </motion.div>
                  <CardTitle className="font-display text-2xl text-center">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chemical Reaction */}
      <section className="py-20 bg-gradient-to-br from-[#81D4FA]/10 to-[#5D4037]/10">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              The Science Behind Self-Healing
            </h2>
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-[#5D4037]/20">
              <CardContent className="p-8">
                <motion.div
                  className="text-3xl font-mono text-gray-900 mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  CaCl₂ + 2 NaHCO₃ → 2 NaCl + CaCO₃↓ + H₂O + CO₂↑
                </motion.div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  When calcium chloride solution meets baking soda embedded in the concrete, they react to form calcium
                  carbonate—the same mineral found in limestone. This precipitate fills and seals cracks, restoring
                  structural integrity.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              step: "01",
              title: "Crack Formation",
              description: "Stress or environmental factors cause a crack in the concrete structure",
            },
            {
              step: "02",
              title: "Sensor Detection",
              description: "Copper foil tape embedded in concrete breaks, triggering Arduino sensor alert",
            },
            {
              step: "03",
              title: "Chemical Healing",
              description: "CaCl₂ solution is applied, reacting with embedded baking soda to form CaCO₃",
            },
            {
              step: "04",
              title: "Circuit Recovery",
              description: "Recycled graphite particles reconnect, restoring electrical continuity automatically",
            },
            {
              step: "05",
              title: "Verification",
              description: "Arduino monitors resistance changes to confirm successful repair",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex-shrink-0">
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-[#5D4037] to-[#3E2723] flex items-center justify-center text-white font-bold text-xl"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.step}
                </motion.div>
              </div>
              <div className="flex-1 bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-display font-semibold text-2xl text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tagline */}
      <section className="py-20 bg-gradient-to-r from-[#5D4037] to-[#3E2723] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="font-display text-4xl md:text-6xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            "Cracks Detect, Circuits Connect – The Future Builds Itself."
          </motion.h2>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Link href="/">
            <Button size="lg" variant="outline" className="group bg-transparent">
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

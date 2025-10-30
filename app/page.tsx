"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Leaf, Zap, Droplets, Sun, Hammer, Shield, Sparkles, Settings, TreePine, Wrench, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <ScrollProgress />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Modern Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-green-700" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />

          {/* Geometric Shapes - Enhanced */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-32 right-16 w-24 h-24 bg-white/10 rounded-lg rotate-45"
            animate={{ rotate: [45, 135, 45], scale: [1, 1.2, 1] }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white/30 rounded-full"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-20 h-20 border border-white/20"
            animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.15, 1] }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-white/5 rounded-full"
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          
          {/* Floating Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
          
          <motion.div
            className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white/30 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        {/* Floating Elements - Enhanced */}
        <div className="absolute inset-0 z-10">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.sin(i) * 20, 0],
                rotate: [0, 180, 360],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg border border-white/30">
                {i % 4 === 0 && <Leaf className="w-5 h-5 text-white" />}
                {i % 4 === 1 && <Zap className="w-5 h-5 text-white" />}
                {i % 4 === 2 && <Droplets className="w-5 h-5 text-white" />}
                {i % 4 === 3 && <Sun className="w-5 h-5 text-white" />}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-white/90 font-medium">Sustainable Innovation</span>
            </motion.div>

            <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
              Ec
              <Settings className="inline-block w-[0.8em] h-[0.8em] mx-1 align-middle text-yellow-300" />
              Haven
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Where biology meets technology for a greener tomorrow
            </p>

            <motion.div
              className="flex gap-4 justify-center flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-white/90 font-semibold text-lg px-8 py-4 shadow-2xl hover:shadow-white/25 transition-all duration-300"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                Discover Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                className="bg-yellow-400 text-emerald-900 hover:bg-yellow-300 font-semibold text-lg px-8 py-4 shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300"
                onClick={() => document.getElementById("vision")?.scrollIntoView({ behavior: "smooth" })}
              >
                Our Vision
                <Lightbulb className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Innovative Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two groundbreaking projects combining science, technology, and sustainability
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* BioSync Card */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-none shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />

                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <TreePine className="w-8 h-8" />
                    </div>
                    <div className="text-right">
                      <div className="text-white/60 text-xs">Biology + Robotics</div>
                    </div>
                  </div>
                  <CardTitle className="font-display text-3xl mb-2">BioSync</CardTitle>
                  <CardDescription className="text-white/90 text-lg">
                    Autonomous Plant Care Ecosystem
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  <p className="text-white/95 leading-relaxed">
                    A solar-powered robotic system that monitors and nurtures plants autonomously,
                    combining biology with cutting-edge technology for sustainable agriculture.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Droplets className="w-4 h-4 text-blue-300" />
                        <span className="font-semibold text-sm">Smart Irrigation</span>
                      </div>
                      <p className="text-white/80 text-xs">60% water savings with precision monitoring</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Sun className="w-4 h-4 text-yellow-300" />
                        <span className="font-semibold text-sm">Solar Powered</span>
                      </div>
                      <p className="text-white/80 text-xs">Zero emissions, completely renewable</p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-300" />
                      Key Components
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/80">Arduino ESP32</span>
                        <span className="text-white/90 font-medium">AED 20</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Solar Panel</span>
                        <span className="text-white/90 font-medium">AED 40</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Sensors</span>
                        <span className="text-white/90 font-medium">AED 25</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Total Cost</span>
                        <span className="text-yellow-300 font-bold">AED 85</span>
                      </div>
                    </div>
                  </div>

                  <Link href="/biosync" className="block">
                    <Button className="w-full bg-white text-emerald-700 hover:bg-white/90 font-semibold group py-3 transition-all duration-300">
                      Explore BioSync
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Smart Healing Concrete Card */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-slate-600 to-stone-700 text-white border-none shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                {/* Cement texture overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:8px_8px]" />
                </div>
                <div className="absolute top-0 left-0 w-28 h-28 bg-white/5 rounded-full -translate-y-14 -translate-x-14" />
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 translate-x-10" />

                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <Hammer className="w-8 h-8" />
                    </div>
                    <div className="text-right">
                      <div className="text-white/60 text-xs">Chemistry + IoT</div>
                    </div>
                  </div>
                  <CardTitle className="font-display text-3xl mb-2">Smart Healing</CardTitle>
                  <CardDescription className="text-white/90 text-lg">
                    Self-Repairing Concrete Technology
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  <p className="text-white/95 leading-relaxed">
                    Revolutionary concrete that detects cracks and heals itself chemically,
                    featuring recycled graphite circuits for automated electrical recovery.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-green-300" />
                        <span className="font-semibold text-sm">Instant Repair</span>
                      </div>
                      <p className="text-white/80 text-xs">Cracks heal in 10-15 minutes</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-yellow-300" />
                        <span className="font-semibold text-sm">Dual Healing</span>
                      </div>
                      <p className="text-white/80 text-xs">Chemical + electrical recovery</p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-orange-300" />
                      Material Mix
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/80">Cement + Sand</span>
                        <span className="text-white/90">984g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Baking Soda</span>
                        <span className="text-white/90">16.4g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">CaCl₂ Solution</span>
                        <span className="text-white/90">13-20g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-yellow-300 font-bold">Total Cost</span>
                        <span className="text-yellow-300 font-bold">AED 10</span>
                      </div>
                    </div>
                  </div>

                  <Link href="/self-healing-systems" className="block">
                    <Button className="w-full bg-white text-slate-700 hover:bg-white/90 font-semibold group py-3 transition-all duration-300">
                      Explore Smart Healing
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            id="vision"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              >
                <Lightbulb className="w-4 h-4 text-yellow-300" />
                <span className="font-medium">Future Vision</span>
              </motion.div>

              <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Building Tomorrow's Sustainable World
              </h3>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Our projects demonstrate how affordable innovation can create intelligent,
                self-maintaining infrastructure that reduces waste and conserves resources.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <TreePine className="w-8 h-8 text-green-300 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Smart Agriculture</h4>
                  <p className="text-white/80 text-sm">AI-driven plant care systems for urban farming</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Shield className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Self-Healing Cities</h4>
                  <p className="text-white/80 text-sm">Infrastructure that repairs itself automatically</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Sparkles className="w-8 h-8 text-purple-300 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Circular Economy</h4>
                  <p className="text-white/80 text-sm">Recycled materials powering sustainable tech</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 inline-block">
                <p className="text-lg font-display font-semibold italic">
                  "Innovation doesn't have to be expensive to be impactful."
                </p>
                <p className="text-white/70 text-sm mt-2">— Eco Haven Team</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}

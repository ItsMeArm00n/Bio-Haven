"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight, Leaf, Zap, Droplets, Sun, Hammer, Shield, Sparkles, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

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
    <div className="min-h-screen bg-gradient-to-b from-[#f1f8f4] to-white">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Green Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1b5e20] via-[#2e7d32] to-[#4caf50]" />
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                               radial-gradient(circle at 40% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
              }}
            />
          </div>
          {/* Organic shapes */}
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Floating Leaf Particles */}
        <div className="absolute inset-0 z-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 20 - 10, 0],
                rotate: [0, 360],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            >
              <Leaf className="w-6 h-6 text-white/40" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-white font-semibold text-sm tracking-wide">
                🌱 Sustainable Innovation • Grade 10 Science Project
              </span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
              Bio Haven
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              Smart Bio-Structural Systems for a Sustainable Future
            </p>

            <motion.div
              className="flex gap-4 justify-center flex-wrap mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-white text-[#2e7d32] hover:bg-white/90 font-semibold text-lg px-8 py-6 shadow-2xl"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Our Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { value: "2", label: "Innovative Projects" },
                { value: "60%", label: "Water Saved" },
                { value: "$35", label: "Total Cost" },
                { value: "100%", label: "Sustainable" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </section>

      <section id="projects" className="py-24 container mx-auto px-4 lg:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Sustainable Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two groundbreaking projects combining biology, chemistry, and technology for a greener future
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* BioSync Panel - Left (20cm width equivalent) */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white border-none shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group">
              {/* Particle Effect */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  >
                    <Leaf className="w-4 h-4" />
                  </motion.div>
                ))}
              </div>

              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Leaf className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-display text-3xl">BioSync</CardTitle>
                </div>
                <CardDescription className="text-white/90 text-lg font-medium">
                  The Living Plant-Robot Ecosystem
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <p className="text-white/95 leading-relaxed text-base">
                  A solar-powered robotic base that monitors a plant's soil moisture, light, and temperature. Helps
                  plants grow autonomously – a symbiosis of biology + robotics + sustainability.
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <h4 className="font-display font-semibold mb-4 text-lg flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Components & Costs
                  </h4>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/20 hover:bg-white/5">
                        <TableHead className="text-white/90 font-semibold">Component</TableHead>
                        <TableHead className="text-white/90 font-semibold">Function</TableHead>
                        <TableHead className="text-white/90 font-semibold text-right">Cost</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { component: "Arduino Nano / ESP32", function: "Controller", cost: "$5-8" },
                        { component: "Soil Sensor", function: "Moisture level", cost: "$2" },
                        { component: "LDR", function: "Light intensity", cost: "$1" },
                        { component: "DHT22", function: "Temp & humidity", cost: "$3" },
                        { component: "Solar Panel (10W)", function: "Power supply", cost: "$10" },
                        { component: "Mini Pump", function: "Watering", cost: "$3" },
                        { component: "Recycled Chassis", function: "Structure", cost: "$0-5" },
                      ].map((row, i) => (
                        <motion.tr
                          key={i}
                          className="border-white/20 hover:bg-white/5"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <TableCell className="text-white/95 font-medium">{row.component}</TableCell>
                          <TableCell className="text-white/85 text-sm">{row.function}</TableCell>
                          <TableCell className="text-white/95 text-right font-semibold">{row.cost}</TableCell>
                        </motion.tr>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <h4 className="font-display font-semibold mb-3 text-lg">Working Principle</h4>
                  <ol className="space-y-2 text-white/90 text-sm">
                    <li className="flex gap-2">
                      <span className="font-bold">1.</span>
                      <span>Sensors collect data</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">2.</span>
                      <span>Arduino decides: water, shade, or idle</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">3.</span>
                      <span>Runs completely on solar energy</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">4.</span>
                      <span>Displays data or logs it for analysis</span>
                    </li>
                  </ol>
                </div>

                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-lg flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Sustainability Impact
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { icon: Droplets, text: "Precision irrigation → ≈60% water saved" },
                      { icon: Sun, text: "Solar powered → zero emission" },
                      { icon: Zap, text: "Recycled materials → less e-waste" },
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 text-white/95 bg-white/5 p-3 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm font-medium">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 space-y-4">
                  <p className="text-xl font-display font-semibold text-center text-balance leading-tight">
                    "Every Plant Deserves Its Own Robot."
                  </p>
                  <Link href="/biosync">
                    <Button className="w-full bg-white text-[#2E7D32] hover:bg-white/90 font-semibold group py-6 text-base">
                      Explore BioSync
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Smart Healing Concrete Panel - Center (38cm width equivalent) */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <Card className="h-full bg-gradient-to-br from-[#388e3c] via-[#2e7d32] to-[#1b5e20] text-white border-none shadow-2xl hover:shadow-3xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
              </div>

              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                    <Hammer className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-display text-3xl">Smart Healing Concrete</CardTitle>
                </div>
                <CardDescription className="text-white/90 text-lg font-medium">
                  When Chemistry Meets Electronics
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <p className="text-white/95 leading-relaxed">
                  Concrete that heals cracks chemically while Arduino sensors detect and verify the repair. Features
                  recycled-graphite self-healing circuit for automated electrical recovery.
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h4 className="font-display font-semibold mb-3 text-lg">Materials & Proportions</h4>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/20 hover:bg-white/5">
                        <TableHead className="text-white/90 font-semibold">Item</TableHead>
                        <TableHead className="text-white/90 font-semibold">Quantity</TableHead>
                        <TableHead className="text-white/90 font-semibold">Purpose</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { item: "Cement", quantity: "1 cup (~250g)", purpose: "Binder" },
                        { item: "Sand", quantity: "2 cups (~500g)", purpose: "Filler" },
                        { item: "Baking Soda", quantity: "2-3 tsp (~10-15g)", purpose: "Healing agent" },
                        { item: "Water", quantity: "½ cup (~120mL)", purpose: "Mixing" },
                        { item: "CaCl₂ Solution", quantity: "10-15g/100mL", purpose: "Healing trigger" },
                        { item: "Copper Foil Tape", quantity: "5-10mm strips", purpose: "Crack sensor" },
                      ].map((row, i) => (
                        <motion.tr
                          key={i}
                          className="border-white/20 hover:bg-white/5"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <TableCell className="text-white/95 font-medium">{row.item}</TableCell>
                          <TableCell className="text-white/85 text-sm">{row.quantity}</TableCell>
                          <TableCell className="text-white/85 text-sm">{row.purpose}</TableCell>
                        </motion.tr>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <h4 className="font-display font-semibold mb-2 text-lg">Chemical Reaction</h4>
                  <p className="font-mono text-sm text-white/95 text-center py-2">
                    CaCl₂ + 2 NaHCO₃ → 2 NaCl + CaCO₃↓ + H₂O + CO₂↑
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h4 className="font-display font-semibold mb-3 text-lg">Process</h4>
                  <ol className="space-y-2 text-white/90 text-sm">
                    <li className="flex gap-2">
                      <span className="font-bold">1.</span>
                      <span>Mix cement + sand + baking soda; pour into mold</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">2.</span>
                      <span>Embed copper foil tracks; cure 24-48h</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">3.</span>
                      <span>Create small crack (1-3mm)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">4.</span>
                      <span>Arduino detects resistance change → alert</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">5.</span>
                      <span>Apply CaCl₂ solution → fizz & white CaCO₃ fills crack in minutes</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h4 className="font-display font-semibold mb-3 text-lg">Graphite Self-Healing Circuit</h4>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Mix 1 tsp gelatin + 1 tsp salt + ½ tsp recycled graphite in 3 tbsp hot water</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Forms gel wire that reconnects after cutting</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Graphite stored in recycled-plastic micro-capsules</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Burst on wire damage to restore conductivity</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-display font-semibold text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Why It's Better
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Instant visible repair (10-15 min)",
                      "Very low cost (< $10 prototype)",
                      "Dual healing – chemical and electrical",
                      "Eco-friendly materials",
                      "Smart IoT integration for real-time alerts",
                    ].map((text, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 text-white/95 bg-white/5 p-2 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                        <span className="text-sm">{text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <p className="text-xl font-display font-semibold mb-4 text-center text-balance leading-tight">
                    "Cracks Detect, Circuits Connect – The Future Builds Itself."
                  </p>
                  <Link href="/smart-healing-concrete">
                    <Button className="w-full bg-white text-[#2e7d32] hover:bg-white/90 font-semibold group py-6 text-base">
                      Explore Smart Healing Concrete
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Feasibility & Vision Panel - Right (20cm width equivalent) */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full bg-white border-2 border-[#2e7d32]/30 shadow-2xl hover:shadow-3xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#2E7D32_1px,transparent_1px),linear-gradient(#2E7D32_1px,transparent_1px)] bg-[size:20px_20px]" />
              </div>

              <CardHeader className="relative z-10">
                <CardTitle className="font-display text-3xl text-gray-900">
                  Innovation | Sustainability | Commerce
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg font-medium">
                  Smart Bio-Structural Systems for a Sustainable Future
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <div className="bg-gradient-to-br from-[#2E7D32]/10 to-[#81c784]/10 rounded-lg p-4 border border-[#2e7d32]/20">
                  <h4 className="font-display font-semibold mb-3 text-lg text-gray-900">Project Comparison</h4>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-200">
                        <TableHead className="text-gray-700 font-semibold">Feature</TableHead>
                        <TableHead className="text-gray-700 font-semibold">Concrete</TableHead>
                        <TableHead className="text-gray-700 font-semibold">BioSync</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { feature: "Core Field", concrete: "Chemistry + IoT", biosync: "Biology + Robotics" },
                        { feature: "Power Source", concrete: "Chemical energy", biosync: "Solar" },
                        { feature: "Key Output", concrete: "Instant crack repair", biosync: "Autonomous plant care" },
                        {
                          feature: "Sustainability",
                          concrete: "Recycled graphite",
                          biosync: "Water & energy efficiency",
                        },
                        { feature: "Cost per unit", concrete: "≈ $10", biosync: "≈ $25" },
                        { feature: "Potential Users", concrete: "Construction firms", biosync: "Home gardeners" },
                      ].map((row, i) => (
                        <motion.tr
                          key={i}
                          className="border-gray-200 hover:bg-[#2e7d32]/5"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <TableCell className="font-medium text-gray-900">{row.feature}</TableCell>
                          <TableCell className="text-gray-700 text-sm">{row.concrete}</TableCell>
                          <TableCell className="text-gray-700 text-sm">{row.biosync}</TableCell>
                        </motion.tr>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-lg text-gray-900">Commercial Potential</h4>
                  <div className="grid gap-3">
                    {[
                      { title: "Smart Construction Tech", desc: "IoT crack monitoring kits for bridges & buildings" },
                      { title: "Eco-Gardening Kits", desc: "BioSync for homes & schools" },
                      {
                        title: "Circular Economy Products",
                        desc: "Use of recycled graphite & plastic capsules",
                      },
                      { title: "Startup Opportunity", desc: "Predictive maintenance & eco-IoT solutions" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="p-3 bg-[#2e7d32]/5 rounded-lg border border-[#2e7d32]/20 hover:border-[#2E7D32] hover:bg-[#2e7d32]/10 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <h5 className="font-semibold text-gray-900">{item.title}</h5>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#2E7D32] to-[#1b5e20] rounded-lg p-6 text-white">
                  <h4 className="font-display font-semibold text-xl mb-3">Future Vision</h4>
                  <ul className="space-y-2 text-white/95 text-sm">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>AI-driven growth prediction for plants</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Networked sensors across buildings for damage mapping</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Integration of both projects → self-healing, self-monitoring eco-cities</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#2e7d32]/10 rounded-lg p-4 border border-[#2e7d32]/20">
                  <h4 className="font-display font-semibold text-lg text-gray-900 mb-2">Feasibility Summary</h4>
                  <Table>
                    <TableBody>
                      {[
                        { aspect: "Technical", feasibility: "Simple reaction + basic Arduino circuit" },
                        { aspect: "Economic", feasibility: "Low budget, easy scale-up" },
                        { aspect: "Environmental", feasibility: "Safe materials + recycled graphite" },
                        { aspect: "Practical", feasibility: "Ideal for demo & smart city monitoring" },
                      ].map((row, i) => (
                        <TableRow key={i} className="border-[#2e7d32]/20">
                          <TableCell className="font-semibold text-gray-900">{row.aspect}</TableCell>
                          <TableCell className="text-gray-700 text-sm">{row.feasibility}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="text-center pt-4 space-y-3 border-t border-gray-200">
                  <p className="font-display font-semibold text-gray-900 text-lg">Feasibility Conclusion</p>
                  <p className="text-sm text-gray-700 leading-relaxed text-balance">
                    Both systems prove that low-cost innovation can create smart, sustainable infrastructure.
                  </p>
                  <p className="text-xs text-gray-500 pt-2">Team Members | Grade 10 | School Name | Mentor</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

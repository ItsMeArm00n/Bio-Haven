"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Zap, TrendingUp, ArrowLeft, AlertCircle, CheckCircle, Activity } from "lucide-react"
import Link from "next/link"

export default function SelfHealingSystemsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mt-20">
        <motion.div className="absolute inset-0 bg-gradient-to-br from-[#616161] via-[#424242] to-[#616161]" />

        {/* Animated Circuit Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <motion.path
            d="M 0 500 L 200 500 L 200 300 L 400 300 L 400 700 L 600 700 L 600 500 L 800 500 L 800 300 L 1000 300"
            stroke="#9e9e9e"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
        </svg>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Self-Healing Systems
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-white/90 mb-8 max-w-3xl mx-auto text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Autonomous Repair Technology
          </motion.p>
          <motion.p
            className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Materials that detect damage and heal themselves - concrete and circuits that never fail
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link href="/self-healing-systems/dashboard">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Activity className="mr-2 h-5 w-5" />
                View Live Demo
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Two Main Systems */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Self-Healing Concrete */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-2 border-gray-300 hover:border-gray-500 transition-all duration-300 hover:shadow-2xl">
              <CardHeader>
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto bg-gray-200"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Shield className="w-8 h-8 text-gray-700" />
                </motion.div>
                <CardTitle className="font-display text-3xl text-center text-gray-900">Self-Healing Concrete</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center leading-relaxed">
                  Concrete embedded with baking soda that reacts with calcium chloride to form calcium carbonate,
                  sealing cracks instantly
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-600" />
                      Chemical healing in 10-15 minutes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-600" />
                      Copper foil crack detection
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-600" />
                      Arduino-based monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-600" />
                      Moisture leak detection
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Self-Healing Circuit */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-2 border-gray-300 hover:border-gray-500 transition-all duration-300 hover:shadow-2xl">
              <CardHeader>
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto bg-gray-200"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Zap className="w-8 h-8 text-gray-700" />
                </motion.div>
                <CardTitle className="font-display text-3xl text-center text-gray-900">Self-Healing Circuit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center leading-relaxed">
                  Electrical wires with graphite-filled capsules that burst when damaged, restoring conductivity
                  automatically
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-600" />
                      Graphite powder self-repair
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-600" />
                      Instant conductivity restoration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-600" />
                      Recycled plastic capsules
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-600" />
                      LED status indicators
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Materials Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Materials & Components</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, accessible materials for revolutionary results
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200">
                      <TableHead className="font-semibold text-gray-900">Material</TableHead>
                      <TableHead className="font-semibold text-gray-900">Quantity</TableHead>
                      <TableHead className="font-semibold text-gray-900">Purpose</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { item: "Cement", quantity: "1 cup (~250 g)", purpose: "Binder" },
                      { item: "Sand", quantity: "2 cups (~500 g)", purpose: "Filler" },
                      { item: "Baking Soda", quantity: "2-3 tsp (~10-15 g)", purpose: "Healing agent" },
                      { item: "Water", quantity: "½ cup (~120-140 mL)", purpose: "Mixing" },
                      { item: "CaCl₂ Solution", quantity: "10-15 g / 100 mL water", purpose: "Healing trigger" },
                      { item: "Copper Foil Tape", quantity: "5-10 mm strips", purpose: "Crack sensor" },
                      {
                        item: "Graphite Gel Wire",
                        quantity: "1 tsp gelatin + 1 tsp salt + ½ tsp graphite",
                        purpose: "Self-healing circuit",
                      },
                    ].map((row, i) => (
                      <motion.tr
                        key={i}
                        className="border-gray-200 hover:bg-gray-50"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <TableCell className="font-medium text-gray-900">{row.item}</TableCell>
                        <TableCell className="text-gray-700">{row.quantity}</TableCell>
                        <TableCell className="text-gray-700">{row.purpose}</TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chemical Reaction */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
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
            <Card className="bg-white border-2 border-gray-300">
              <CardContent className="p-8">
                <motion.div
                  className="text-3xl font-mono text-gray-700 mb-6 font-bold"
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
                  structural integrity in just 10-15 minutes.
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">From crack detection to complete healing in minutes</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              step: "01",
              title: "Crack Formation",
              description: "Tiny structural cracks appear due to stress or shrinkage (1-3mm)",
              icon: AlertCircle,
            },
            {
              step: "02",
              title: "Crack Detection Module",
              description:
                "Copper-foil lines embedded in surface act as conductive tracks. When crack interrupts current, Arduino senses resistance change and LED/buzzer alerts 'Crack Detected'",
              icon: Zap,
            },
            {
              step: "03",
              title: "Leakage Detection",
              description:
                "Moisture sensors placed near the surface detect water intrusion. Rising moisture triggers an alert for early waterproofing maintenance",
              icon: Shield,
            },
            {
              step: "04",
              title: "Healing Reaction",
              description:
                "Apply CaCl₂ solution causing fizzing as CaCO₃ fills the crack. Visible white calcium carbonate seals the gap in 10-15 minutes",
              icon: CheckCircle,
            },
            {
              step: "05",
              title: "Circuit Damage Self-Repair",
              description:
                "Wires contain recycled-plastic capsules filled with graphite powder. If wire breaks, capsules burst, releasing graphite that bridges gap and restores conductivity. LED turns back on - circuit healed",
              icon: Zap,
            },
            {
              step: "06",
              title: "Data Display",
              description:
                "Arduino logs sensor data (crack state / moisture level / circuit status) to serial monitor or LCD",
              icon: TrendingUp,
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
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-[#616161] to-[#424242] flex items-center justify-center text-white font-bold text-xl"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.step}
                </motion.div>
              </div>
              <div className="flex-1 bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-300">
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="w-6 h-6 text-gray-700" />
                  <h3 className="font-display font-semibold text-2xl text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feasibility */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Feasibility & Benefits</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why this technology is ready for real-world implementation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-300">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-gray-900">Feasibility Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {[
                      { aspect: "Technical", feasibility: "Simple reaction + basic Arduino circuit" },
                      { aspect: "Economic", feasibility: "Low budget, easy scale-up" },
                      { aspect: "Environmental", feasibility: "Safe materials + recycled graphite" },
                      { aspect: "Practical", feasibility: "Ideal for demo & smart city monitoring" },
                    ].map((row, i) => (
                      <TableRow key={i} className="border-gray-200">
                        <TableCell className="font-semibold text-gray-900">{row.aspect}</TableCell>
                        <TableCell className="text-gray-700">{row.feasibility}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-gray-900">Why It's Better</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Instant visible repair (10-15 min)",
                    "Very low cost (< $10 prototype)",
                    "Dual healing – chemical and electrical",
                    "Eco-friendly materials",
                    "Smart IoT integration for real-time alerts",
                  ].map((text, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0" />
                      <span>{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-20 bg-gradient-to-r from-[#616161] to-[#424242] text-white">
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
            <Button
              size="lg"
              variant="outline"
              className="group border-gray-600 text-gray-700 hover:bg-gray-600 hover:text-white bg-transparent"
            >
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

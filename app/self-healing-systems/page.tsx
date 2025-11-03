"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Zap, TrendingUp, ArrowLeft, AlertCircle, CheckCircle, Activity, ShoppingCart, Droplets } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"

export default function SelfHealingSystemsPage() {
  const [showOrderPopup, setShowOrderPopup] = useState(false)

  const handlePurchase = () => {
    setShowOrderPopup(true)
    setTimeout(() => setShowOrderPopup(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <ScrollProgress />
      <Navigation />

      {/* Order Confirmation Popup */}
      {showOrderPopup && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-gray-700 text-white px-8 py-4 rounded-lg shadow-2xl flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold text-lg">Order Placed Successfully!</p>
            <p className="text-sm text-white/90">Your materials are on the way</p>
          </div>
        </motion.div>
      )}


      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mt-20">
        <motion.div className="absolute inset-0 bg-gradient-to-br from-[#616161] via-[#424242] to-[#616161]" />

        {/* Animated Circuit Pattern - Enhanced */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <motion.path
            d="M100,100 L200,100 L200,200 L300,200 L300,100 L400,100"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
          />
          <motion.path
            d="M600,100 L700,100 L700,200 L800,200 L800,300 L900,300"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
          />
          <motion.path
            d="M100,500 L300,500 L300,600 L500,600"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
          />
          <motion.path
            d="M500,800 L600,800 L600,700 L700,700 L700,600"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, delay: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
          />
          {/* Circuit nodes */}
          {[
            [200, 100], [300, 200], [700, 100], [800, 200], [300, 500], [500, 600], [600, 800], [700, 700]
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="4"
              fill="white"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.8] }}
              transition={{
                duration: 0.5,
                delay: i * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 2,
              }}
            />
          ))}
        </svg>

        {/* Floating Tech Elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`tech-${i}`}
              className="absolute"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/30">
                {i % 3 === 0 && <Shield className="w-6 h-6 text-white" />}
                {i % 3 === 1 && <Zap className="w-6 h-6 text-white" />}
                {i % 3 === 2 && <Activity className="w-6 h-6 text-white" />}
              </div>
            </motion.div>
          ))}
        </div>

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
      <section className="py-20 container mx-auto px-4 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gray-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-700 rounded-full blur-3xl"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Self-Healing Concrete */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
      <section className="py-20 bg-gray-200 relative overflow-hidden">
        {/* Decorative Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, #424242 1px, transparent 1px),
                             linear-gradient(0deg, #424242 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
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
                      <TableHead className="font-semibold text-gray-900 text-right">Cost (AED)</TableHead>
                      <TableHead className="font-semibold text-gray-900 text-center">Purchase</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { item: "Cement Mixture", quantity: "Pre-mixed (4 cups total)", purpose: "Complete healing concrete blend", cost: "12", highlight: true },
                      { item: "Water", quantity: "½ cup (~120-140 mL)", purpose: "Mixing", cost: "1" },
                      { item: "CaCl₂ Solution", quantity: "10-15 g / 100 mL water", purpose: "Healing trigger", cost: "8" },
                      { item: "Copper Foil Tape", quantity: "5-10 mm strips", purpose: "Crack sensor", cost: "4" },
                      {
                        item: "Graphite Gel Wire",
                        quantity: "1 tsp gelatin + 1 tsp salt + ½ tsp graphite",
                        purpose: "Self-healing circuit",
                        cost: "6",
                      },
                    ].map((row, i) => (
                      <motion.tr
                        key={i}
                        className={`border-gray-200 ${row.highlight ? 'bg-emerald-50 hover:bg-emerald-100' : 'hover:bg-gray-50'}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <TableCell className={`font-medium ${row.highlight ? 'text-emerald-900' : 'text-gray-900'}`}>{row.item}</TableCell>
                        <TableCell className={row.highlight ? 'text-emerald-800' : 'text-gray-700'}>{row.quantity}</TableCell>
                        <TableCell className={row.highlight ? 'text-emerald-800' : 'text-gray-700'}>{row.purpose}</TableCell>
                        <TableCell className={`text-right font-semibold ${row.highlight ? 'text-emerald-900' : 'text-gray-900'}`}>AED {row.cost}</TableCell>
                        <TableCell className="text-center">
                          <Button
                            size="sm"
                            onClick={handlePurchase}
                            className={row.highlight 
                              ? "bg-emerald-600 hover:bg-emerald-700 text-white font-semibold" 
                              : "bg-gray-700 hover:bg-gray-800 text-white"
                            }
                          >
                            <ShoppingCart className="w-4 h-4 mr-1" />
                            {row.highlight ? 'Buy Now' : 'Buy'}
                          </Button>
                        </TableCell>
                      </motion.tr>
                    ))}
                    <TableRow className="border-t-2 border-gray-400 bg-gray-100">
                      <TableCell colSpan={3} className="font-bold text-gray-900">
                        Total Estimated Cost
                      </TableCell>
                      <TableCell className="text-right font-bold text-gray-700 text-lg">AED 41</TableCell>
                      <TableCell className="text-center">
                        <Button
                          onClick={handlePurchase}
                          className="bg-gray-700 hover:bg-gray-800 text-white font-bold"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Buy All
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chemical Reaction */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Molecules */}
        <div className="absolute inset-0 opacity-5">
          <Shield className="absolute top-20 left-20 w-24 h-24 text-gray-600 rotate-12" />
          <Zap className="absolute top-40 right-32 w-20 h-20 text-gray-700 -rotate-45" />
          <AlertCircle className="absolute bottom-20 left-1/3 w-28 h-28 text-gray-600 rotate-90" />
          <CheckCircle className="absolute bottom-32 right-20 w-16 h-16 text-gray-700 -rotate-12" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
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
                  className="text-3xl text-gray-700 mb-6 font-semibold"
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
      <section className="py-20 container mx-auto px-4 bg-gray-200 relative overflow-hidden">
        {/* Decorative Hex Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #424242 1.5px, transparent 1.5px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
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

      {/* Live Demo: Brick Cross-Section Views */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Live Demonstration</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Two perspectives of self-healing concrete in action
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Inside View - Pipe System */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 border-gray-300 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-gray-700 to-gray-600 text-white">
                  <CardTitle className="font-display text-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Shield className="w-6 h-6" />
                    </div>
                    Inside View: Cross-Section with Embedded Pipe
                  </CardTitle>
                  <p className="text-white/80 mt-2">Healing solution delivered through internal pipe network</p>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 min-h-[400px] flex items-center justify-center border-4 border-gray-400">
                    {/* Cross-section background */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
                      <defs>
                        <pattern id="brickTexture" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="10" cy="10" r="1" fill="#8d6e63" opacity="0.3" />
                        </pattern>
                        <linearGradient id="brickGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a1887f" />
                          <stop offset="50%" stopColor="#8d6e63" />
                          <stop offset="100%" stopColor="#6d4c41" />
                        </linearGradient>
                        <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#90a4ae" />
                          <stop offset="50%" stopColor="#607d8b" />
                          <stop offset="100%" stopColor="#455a64" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Brick cross-section (cut in half) */}
                      <rect x="50" y="100" width="700" height="200" fill="url(#brickGradient)" stroke="#5d4037" strokeWidth="3" />
                      <rect x="50" y="100" width="700" height="200" fill="url(#brickTexture)" />
                      
                      {/* Horizontal pipe through center */}
                      <ellipse cx="50" cy="200" rx="15" ry="20" fill="url(#pipeGradient)" stroke="#37474f" strokeWidth="2" />
                      <rect x="50" y="180" width="700" height="40" fill="url(#pipeGradient)" stroke="#37474f" strokeWidth="2" />
                      <ellipse cx="750" cy="200" rx="15" ry="20" fill="url(#pipeGradient)" stroke="#37474f" strokeWidth="2" />
                      
                      {/* Pipe interior (hollow) */}
                      <ellipse cx="50" cy="200" rx="10" ry="15" fill="#263238" />
                      <rect x="50" y="185" width="700" height="30" fill="#263238" />
                      
                      {/* Crack - zigzag pattern */}
                      <motion.path
                        d="M 400 100 L 405 130 L 395 160 L 405 190 L 400 220 L 395 250 L 400 280 L 405 300"
                        stroke="#ff1744"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                      
                      {/* Solution spray from pipe (animated) */}
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 3, delay: 2, repeat: Infinity, repeatDelay: 2 }}
                      >
                        {[...Array(8)].map((_, i) => (
                          <motion.circle
                            key={i}
                            cx={400}
                            cy={200}
                            r="4"
                            fill="#4fc3f7"
                            opacity="0.8"
                            initial={{ x: 0, y: 0 }}
                            animate={{ 
                              x: [0, (i - 4) * 15], 
                              y: [0, Math.abs(i - 4) * -20] 
                            }}
                            transition={{ duration: 1.5, delay: 2 + i * 0.1, repeat: Infinity, repeatDelay: 3.5 }}
                          />
                        ))}
                      </motion.g>
                      
                      {/* CaCO3 filling crack (healing) */}
                      <motion.path
                        d="M 400 220 L 395 250 L 400 280 L 405 300"
                        stroke="#e0e0e0"
                        strokeWidth="6"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.9 }}
                        transition={{ duration: 2, delay: 3.5, ease: "easeInOut" }}
                        filter="url(#glow)"
                      />
                      
                      {/* Labels */}
                      <text x="400" y="80" fontSize="16" fontWeight="bold" fill="#424242" textAnchor="middle">
                        Concrete Cross-Section
                      </text>
                      <text x="400" y="350" fontSize="14" fill="#616161" textAnchor="middle">
                        Healing Solution Sprays from Pipe → Seals Crack
                      </text>
                    </svg>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <div className="text-2xl font-bold text-red-600">1. Crack Forms</div>
                      <p className="text-sm text-gray-600 mt-1">Structural damage detected</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="text-2xl font-bold text-blue-600">2. Solution Sprays</div>
                      <p className="text-sm text-gray-600 mt-1">CaCl₂ mist from pipe</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="text-2xl font-bold text-green-600">3. Crack Sealed</div>
                      <p className="text-sm text-gray-600 mt-1">CaCO₃ fills gap</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Outside View - Dispenser System */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-2 border-gray-300 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
                  <CardTitle className="font-display text-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Droplets className="w-6 h-6" />
                    </div>
                    Outside View: Surface Dispenser Application
                  </CardTitle>
                  <p className="text-white/80 mt-2">Healing solution dispensed over entire wall surface</p>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 min-h-[400px] flex items-center justify-center border-4 border-emerald-300">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
                      <defs>
                        <pattern id="brickPattern" width="80" height="40" patternUnits="userSpaceOnUse">
                          <rect width="78" height="38" x="1" y="1" fill="url(#brickGradient)" stroke="#795548" strokeWidth="2" />
                        </pattern>
                        <linearGradient id="dispenserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#78909c" />
                          <stop offset="50%" stopColor="#90a4ae" />
                          <stop offset="100%" stopColor="#78909c" />
                        </linearGradient>
                        <radialGradient id="dropletGradient">
                          <stop offset="0%" stopColor="#4fc3f7" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#0288d1" stopOpacity="0.4" />
                        </radialGradient>
                      </defs>
                      
                      {/* Brick wall exterior */}
                      <rect x="100" y="120" width="600" height="240" fill="url(#brickPattern)" stroke="#5d4037" strokeWidth="3" />
                      
                      {/* Visible crack on surface */}
                      <motion.path
                        d="M 400 120 L 395 160 L 405 200 L 395 240 L 400 280 L 395 320 L 400 360"
                        stroke="#ff1744"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="8,4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                      
                      {/* Dispenser unit at top */}
                      <rect x="320" y="40" width="160" height="60" rx="8" fill="url(#dispenserGradient)" stroke="#455a64" strokeWidth="2" />
                      <circle cx="360" cy="70" r="8" fill="#37474f" />
                      <circle cx="440" cy="70" r="8" fill="#37474f" />
                      <text x="400" y="75" fontSize="12" fontWeight="bold" fill="#fff" textAnchor="middle">
                        DISPENSER
                      </text>
                      
                      {/* Mounting bracket */}
                      <rect x="380" y="30" width="40" height="15" fill="#546e7a" stroke="#37474f" strokeWidth="1" />
                      
                      {/* Solution cascade/waterfall effect */}
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.8, 0.8, 0] }}
                        transition={{ duration: 4, delay: 2, repeat: Infinity, repeatDelay: 1 }}
                      >
                        {/* Wide spray pattern */}
                        {[...Array(15)].map((_, i) => (
                          <motion.ellipse
                            key={`drop-${i}`}
                            cx={320 + i * 11}
                            cy={100}
                            rx="3"
                            ry="6"
                            fill="url(#dropletGradient)"
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ 
                              y: [0, 260], 
                              opacity: [0, 0.8, 0.6, 0.3] 
                            }}
                            transition={{ 
                              duration: 2, 
                              delay: 2 + i * 0.05, 
                              repeat: Infinity, 
                              repeatDelay: 3,
                              ease: "easeIn"
                            }}
                          />
                        ))}
                        
                        {/* Flowing solution over crack */}
                        <motion.rect
                          x="385"
                          y="100"
                          width="30"
                          height="260"
                          fill="url(#dropletGradient)"
                          opacity="0.4"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: [0, 1, 1] }}
                          transition={{ duration: 2, delay: 2.5, repeat: Infinity, repeatDelay: 3 }}
                          style={{ transformOrigin: "top" }}
                        />
                      </motion.g>
                      
                      {/* Healed crack (white CaCO3) */}
                      <motion.path
                        d="M 400 240 L 395 280 L 400 320 L 395 360"
                        stroke="#f5f5f5"
                        strokeWidth="8"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: 4.5, ease: "easeOut" }}
                        filter="url(#glow)"
                      />
                      
                      {/* Labels */}
                      <text x="400" y="25" fontSize="16" fontWeight="bold" fill="#424242" textAnchor="middle">
                        Brick Wall - Exterior View
                      </text>
                      <text x="400" y="390" fontSize="14" fill="#616161" textAnchor="middle">
                        Solution Cascades Over Surface → Complete Crack Coverage
                      </text>
                    </svg>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <div className="text-2xl font-bold text-red-600">1. Crack Visible</div>
                      <p className="text-sm text-gray-600 mt-1">Surface damage appears</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="text-2xl font-bold text-blue-600">2. Solution Flows</div>
                      <p className="text-sm text-gray-600 mt-1">Dispenser releases healing agent</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="text-2xl font-bold text-green-600">3. Wall Restored</div>
                      <p className="text-sm text-gray-600 mt-1">Full surface treatment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Comparison Note */}
          <motion.div
            className="max-w-4xl mx-auto mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-gray-700 to-gray-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">Two Healing Approaches</h3>
                    <p className="text-white/90 leading-relaxed">
                      <strong>Inside System:</strong> Ideal for structural elements with embedded infrastructure - healing solution reaches deep internal cracks through pipe network.
                      {" "}<strong>Outside System:</strong> Perfect for existing structures and surface repairs - dispenser treats entire wall area ensuring comprehensive coverage.
                      Both methods trigger the same CaCO₃ precipitation reaction for permanent crack sealing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Feasibility */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-20 w-48 h-48 bg-gray-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-20 w-36 h-36 bg-gray-700 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
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
                    "Very low cost (< AED 20 prototype)",
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
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto px-4 text-center relative z-10">
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

      <Footer theme="gray" />
      <BackToTop />
    </div>
  )
}

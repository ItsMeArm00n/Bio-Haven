"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, Activity, Zap, Droplets, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SelfHealingDashboard() {
  const [crackDetected, setCrackDetected] = useState(false)
  const [healing, setHealing] = useState(false)
  const [healed, setHealed] = useState(false)
  const [moisture, setMoisture] = useState(15)
  const [circuitBroken, setCircuitBroken] = useState(false)
  const [circuitHealing, setCircuitHealing] = useState(false)
  const [circuitHealed, setCircuitHealed] = useState(false)

  // Manual trigger functions
  const triggerCrack = () => {
    if (!crackDetected && !healing && !healed) {
      setCrackDetected(true)
      setMoisture(45)
      setTimeout(() => {
        setHealing(true)
        setTimeout(() => {
          setHealing(false)
          setHealed(true)
          setMoisture(15)
          setTimeout(() => {
            setCrackDetected(false)
            setHealed(false)
          }, 2000)
        }, 3000)
      }, 2000)
    }
  }

  useEffect(() => {
    const crackCycle = setInterval(() => {
      if (!crackDetected && !healing && !healed) {
        triggerCrack()
      }
    }, 10000) // Reduced from 15000 to 10000

    return () => clearInterval(crackCycle)
  }, [crackDetected, healing, healed])

  const triggerCircuit = () => {
    if (!circuitBroken && !circuitHealing && !circuitHealed) {
      setCircuitBroken(true)
      setTimeout(() => {
        setCircuitHealing(true)
        setTimeout(() => {
          setCircuitHealing(false)
          setCircuitHealed(true)
          setTimeout(() => {
            setCircuitBroken(false)
            setCircuitHealed(false)
          }, 2000)
        }, 3000)
      }, 1500)
    }
  }

  useEffect(() => {
    const circuitCycle = setInterval(() => {
      if (!circuitBroken && !circuitHealing && !circuitHealed) {
        triggerCircuit()
      }
    }, 12000) // Reduced from 18000 to 12000

    return () => clearInterval(circuitCycle)
  }, [circuitBroken, circuitHealing, circuitHealed])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0e0e0] via-[#bdbdbd] to-[#9e9e9e]">
      <Navigation />

      <div className="pt-32 pb-20 container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link href="/self-healing-systems">
            <Button variant="ghost" className="text-gray-900 hover:bg-gray-300 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Self-Healing Systems
            </Button>
          </Link>
          <h1 className="font-display text-5xl font-bold text-gray-900 mb-4">Self-Healing Systems Dashboard</h1>
          <p className="text-xl text-gray-800">Real-time monitoring of autonomous repair technology</p>
        </motion.div>

        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="border-2 border-gray-400 bg-white shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200 py-4">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Activity className="w-5 h-5 text-gray-700" />
                  Self-Healing Concrete Monitor
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {/* Manual Control Button */}
                <div className="mb-4 flex justify-center">
                  <Button
                    onClick={triggerCrack}
                    disabled={crackDetected || healing || healed}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    size="lg"
                  >
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Trigger Concrete Crack
                  </Button>
                </div>
                <div className="relative bg-gradient-to-br from-[#78909c] to-[#546e7a] rounded-xl p-6 mb-4 min-h-[350px] flex items-center justify-center shadow-inner">
                  <svg viewBox="0 0 400 300" className="w-full max-w-md">
                    <defs>
                      {/* Enhanced Brick texture gradient */}
                      <linearGradient id="brickGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#bf8e7a" />
                        <stop offset="30%" stopColor="#a1887f" />
                        <stop offset="60%" stopColor="#8d6e63" />
                        <stop offset="100%" stopColor="#6d4c41" />
                      </linearGradient>
                      {/* Brick surface texture */}
                      <pattern id="brickTexture" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect width="20" height="20" fill="#9e8578" opacity="0.3" />
                        <circle cx="5" cy="5" r="0.5" fill="#8d6e63" opacity="0.4" />
                        <circle cx="15" cy="12" r="0.5" fill="#8d6e63" opacity="0.4" />
                        <circle cx="8" cy="16" r="0.5" fill="#8d6e63" opacity="0.4" />
                      </pattern>
                      {/* Mortar gradient */}
                      <linearGradient id="mortarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#bdbdbd" />
                        <stop offset="50%" stopColor="#e0e0e0" />
                        <stop offset="100%" stopColor="#bdbdbd" />
                      </linearGradient>
                    </defs>

                    {/* Background shadow for depth */}
                    <rect
                      x="54"
                      y="54"
                      width="300"
                      height="200"
                      fill="#424242"
                      opacity="0.3"
                      rx="3"
                    />

                    {/* Main brick with enhanced texture */}
                    <rect
                      x="50"
                      y="50"
                      width="300"
                      height="200"
                      fill="url(#brickGradient)"
                      stroke="#5d4037"
                      strokeWidth="3"
                      rx="3"
                    />
                    
                    {/* Texture overlay */}
                    <rect
                      x="50"
                      y="50"
                      width="300"
                      height="200"
                      fill="url(#brickTexture)"
                      rx="3"
                    />

                    {/* Enhanced mortar lines with depth */}
                    <line x1="50" y1="100" x2="350" y2="100" stroke="url(#mortarGradient)" strokeWidth="4" />
                    <line x1="50" y1="150" x2="350" y2="150" stroke="url(#mortarGradient)" strokeWidth="4" />
                    <line x1="50" y1="200" x2="350" y2="200" stroke="url(#mortarGradient)" strokeWidth="4" />
                    
                    {/* Vertical mortar lines - offset brick pattern */}
                    <line x1="125" y1="50" x2="125" y2="100" stroke="url(#mortarGradient)" strokeWidth="4" />
                    <line x1="225" y1="50" x2="225" y2="100" stroke="url(#mortarGradient)" strokeWidth="4" />
                    <line x1="75" y1="100" x2="75" y2="150" stroke="url(#mortarGradient)" strokeWidth="4" />
                    <line x1="175" y1="100" x2="175" y2="150" stroke="url(#mortarGradient)" strokeWidth="4" />
                    <line x1="275" y1="100" x2="275" y2="150" stroke="url(#mortarGradient)" strokeWidth="4" />
                    <line x1="125" y1="150" x2="125" y2="200" stroke="url(#mortarGradient)" strokeWidth="4" />
                    <line x1="225" y1="150" x2="225" y2="200" stroke="url(#mortarGradient)" strokeWidth="4" />
                    <line x1="175" y1="200" x2="175" y2="250" stroke="url(#mortarGradient)" strokeWidth="4" />

                    {/* Edge highlights for 3D effect */}
                    <line x1="50" y1="50" x2="350" y2="50" stroke="#d7ccc8" strokeWidth="2" opacity="0.6" />
                    <line x1="50" y1="50" x2="50" y2="250" stroke="#d7ccc8" strokeWidth="2" opacity="0.6" />

                    {/* Crack with enhanced animation */}
                    <AnimatePresence>
                      {crackDetected && !healed && (
                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <motion.path
                            d="M 200 50 L 198 80 L 203 110 L 197 140 L 202 170 L 198 200 L 203 230 L 200 250"
                            stroke={healing ? "#66bb6a" : "#d32f2f"}
                            strokeWidth={healing ? "8" : "4"}
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                          />
                          {/* Crack branches for realism */}
                          <motion.path
                            d="M 198 120 L 190 125 L 185 130"
                            stroke={healing ? "#66bb6a" : "#d32f2f"}
                            strokeWidth={healing ? "4" : "2"}
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                          <motion.path
                            d="M 202 180 L 210 185 L 215 190"
                            stroke={healing ? "#66bb6a" : "#d32f2f"}
                            strokeWidth={healing ? "4" : "2"}
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                          />

                          {/* Enhanced healing particles with fizzing effect */}
                          {healing &&
                            [...Array(20)].map((_, i) => (
                              <motion.circle
                                key={i}
                                cx={195 + Math.random() * 15}
                                cy={50 + (i * 200) / 20 + Math.random() * 20}
                                r={2 + Math.random() * 2}
                                fill="#81c784"
                                initial={{ opacity: 0, scale: 0, x: 0 }}
                                animate={{
                                  opacity: [0, 1, 0],
                                  scale: [0, 1.5, 0],
                                  x: [0, (Math.random() - 0.5) * 20],
                                }}
                                transition={{
                                  duration: 1.5,
                                  delay: i * 0.1,
                                  repeat: Number.POSITIVE_INFINITY,
                                  repeatDelay: 0.5,
                                }}
                              />
                            ))}

                          {/* CO2 bubbles rising */}
                          {healing &&
                            [...Array(8)].map((_, i) => (
                              <motion.circle
                                key={`bubble-${i}`}
                                cx={195 + Math.random() * 15}
                                cy={250}
                                r={3}
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="1"
                                initial={{ y: 0, opacity: 0.8 }}
                                animate={{ y: -200, opacity: 0 }}
                                transition={{
                                  duration: 2,
                                  delay: i * 0.3,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "easeOut",
                                }}
                              />
                            ))}
                        </motion.g>
                      )}
                    </AnimatePresence>

                    {/* Healed crack - barely visible */}
                    {healed && (
                      <motion.path
                        d="M 200 50 L 198 80 L 203 110 L 197 140 L 202 170 L 198 200 L 203 230 L 200 250"
                        stroke="#e0e0e0"
                        strokeWidth="1"
                        fill="none"
                        opacity="0.3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                      />
                    )}

                    {/* Copper foil sensors with glow effect */}
                    <motion.rect
                      x="175"
                      y="35"
                      width="50"
                      height="4"
                      fill="#ff6f00"
                      rx="2"
                      animate={{ opacity: crackDetected && !healed ? [1, 0.5, 1] : 1 }}
                      transition={{ duration: 0.5, repeat: crackDetected && !healed ? Number.POSITIVE_INFINITY : 0 }}
                    />
                    <motion.rect
                      x="175"
                      y="261"
                      width="50"
                      height="4"
                      fill="#ff6f00"
                      rx="2"
                      animate={{ opacity: crackDetected && !healed ? [1, 0.5, 1] : 1 }}
                      transition={{ duration: 0.5, repeat: crackDetected && !healed ? Number.POSITIVE_INFINITY : 0 }}
                    />
                  </svg>

                  {/* Enhanced status indicators */}
                  <div className="absolute top-4 right-4">
                    <AnimatePresence>
                      {crackDetected && !healed && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          className={`flex items-center gap-2 px-5 py-3 rounded-full ${healing ? "bg-green-500" : "bg-red-500"} text-white font-bold shadow-2xl`}
                        >
                          {healing ? (
                            <>
                              <Activity className="w-6 h-6 animate-spin" />
                              Healing in Progress...
                            </>
                          ) : (
                            <>
                              <AlertTriangle className="w-6 h-6 animate-bounce" />
                              Crack Detected!
                            </>
                          )}
                        </motion.div>
                      )}
                      {healed && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.2, 1] }}
                          exit={{ scale: 0 }}
                          className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-700 text-white font-bold shadow-2xl"
                        >
                          <CheckCircle className="w-6 h-6" />
                          Fully Healed!
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Enhanced sensor readings */}
                <div className="grid grid-cols-2 gap-3">
                  <Card
                    className={`border-2 shadow-lg ${moisture > 30 ? "border-red-500 bg-red-50" : "border-blue-400 bg-blue-50"}`}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ scale: moisture > 30 ? [1, 1.2, 1] : 1 }}
                          transition={{ duration: 0.5, repeat: moisture > 30 ? Number.POSITIVE_INFINITY : 0 }}
                        >
                          <Droplets className={moisture > 30 ? "text-red-500" : "text-blue-500"} size={24} />
                        </motion.div>
                        <div>
                          <div className="text-xs text-gray-600 font-semibold">Moisture Level</div>
                          <div className="text-2xl font-bold">{moisture}%</div>
                          {moisture > 30 && (
                            <motion.div
                              className="text-xs text-red-600 font-bold"
                              animate={{ opacity: [1, 0, 1] }}
                              transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                            >
                              LEAK DETECTED
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-gray-400 shadow-lg bg-gray-50">
                    <CardContent className="p-3">
                      <div className="flex items-center gap-2">
                        <Activity className="text-gray-700" size={24} />
                        <div>
                          <div className="text-xs text-gray-600 font-semibold">Circuit Status</div>
                          <div className="text-base font-bold">
                            {crackDetected && !healed ? "⚠️ Interrupted" : "✓ Connected"}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Enhanced process steps */}
                <div className="mt-4 space-y-2 bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs font-bold text-gray-800 mb-2">Healing Process:</div>
                  {[
                    { label: "1. Crack Formation", active: crackDetected, icon: "🔴" },
                    { label: "2. Detection Alert", active: crackDetected, icon: "⚠️" },
                    { label: "3. CaCO₃ Reaction", active: healing, icon: "⚗️" },
                    { label: "4. Crack Sealed", active: healed, icon: "✅" },
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      className={`flex items-center gap-2 text-xs p-2 rounded relative ${step.active ? "bg-gray-700 text-white font-bold" : "text-gray-400 bg-transparent"}`}
                    >
                      {/* Pulsing red border panel for active state */}
                      {step.active && (
                        <motion.div
                          className="absolute inset-0 border-2 border-red-500 rounded"
                          animate={{
                            opacity: [1, 0.3, 1],
                            borderWidth: ["2px", "3px", "2px"],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                      <div className="text-base relative z-10">{step.icon}</div>
                      <div className={`w-2 h-2 rounded-full relative z-10 ${step.active ? "bg-white" : "bg-gray-300"}`} />
                      <span className="relative z-10">{step.label}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="border-2 border-gray-400 bg-white shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200 py-4">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Zap className="w-5 h-5 text-gray-700" />
                  Self-Healing Circuit Monitor
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {/* Manual Control Button */}
                <div className="mb-4 flex justify-center">
                  <Button
                    onClick={triggerCircuit}
                    disabled={circuitBroken || circuitHealing || circuitHealed}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    size="lg"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Break Circuit
                  </Button>
                </div>
                <div className="relative bg-gradient-to-br from-[#263238] to-[#37474f] rounded-xl p-6 mb-4 min-h-[350px] flex items-center justify-center shadow-inner">
                  <svg viewBox="0 0 400 300" className="w-full max-w-md">
                    {/* Enhanced circuit board with PCB texture */}
                    <defs>
                      {/* PCB green texture */}
                      <pattern id="pcbPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <rect width="40" height="40" fill="#2d5016" opacity="0.5" />
                        <circle cx="10" cy="10" r="1" fill="#1b5e20" opacity="0.3" />
                        <circle cx="30" cy="30" r="1" fill="#1b5e20" opacity="0.3" />
                        <line x1="0" y1="20" x2="40" y2="20" stroke="#1b5e20" strokeWidth="0.5" opacity="0.2" />
                        <line x1="20" y1="0" x2="20" y2="40" stroke="#1b5e20" strokeWidth="0.5" opacity="0.2" />
                      </pattern>
                      {/* Copper trace gradient */}
                      <linearGradient id="copperGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#c77a3e" />
                        <stop offset="50%" stopColor="#d4924a" />
                        <stop offset="100%" stopColor="#c77a3e" />
                      </linearGradient>
                      {/* Enhanced glow effect */}
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      {/* Stronger glow for active circuits */}
                      <filter id="strongGlow">
                        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* PCB Board base with shadow */}
                    <rect
                      x="54"
                      y="84"
                      width="292"
                      height="132"
                      fill="#1a1a1a"
                      opacity="0.4"
                      rx="10"
                    />
                    
                    {/* Main PCB board */}
                    <rect
                      x="50"
                      y="80"
                      width="300"
                      height="140"
                      fill="#1b5e20"
                      stroke="#2e7d32"
                      strokeWidth="3"
                      rx="10"
                    />
                    
                    {/* PCB texture overlay */}
                    <rect
                      x="50"
                      y="80"
                      width="300"
                      height="140"
                      fill="url(#pcbPattern)"
                      rx="10"
                    />

                    {/* Mounting holes */}
                    {[[70, 100], [330, 100], [70, 200], [330, 200]].map(([cx, cy], i) => (
                      <g key={i}>
                        <circle cx={cx} cy={cy} r="6" fill="#333" stroke="#666" strokeWidth="1.5" />
                        <circle cx={cx} cy={cy} r="3" fill="#1a1a1a" />
                      </g>
                    ))}

                    {/* Copper traces - background */}
                    <rect x="60" y="145" width="280" height="6" fill="url(#copperGradient)" opacity="0.3" rx="3" />
                    <rect x="60" y="155" width="280" height="4" fill="url(#copperGradient)" opacity="0.2" rx="2" />

                    {/* Left connection pad */}
                    <g>
                      <circle cx="90" cy="150" r="12" fill="url(#copperGradient)" stroke="#8d6e63" strokeWidth="2" />
                      <circle cx="90" cy="150" r="6" fill="#c77a3e" />
                      <text x="90" y="155" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">-</text>
                    </g>

                    {/* Right connection pad */}
                    <g>
                      <circle cx="310" cy="150" r="12" fill="url(#copperGradient)" stroke="#8d6e63" strokeWidth="2" />
                      <circle cx="310" cy="150" r="6" fill="#c77a3e" />
                      <text x="310" y="155" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">+</text>
                    </g>

                    {/* Enhanced copper wire with metallic look */}
                    {/* Left wire segment */}
                    <motion.line
                      x1="90"
                      y1="150"
                      x2="170"
                      y2="150"
                      stroke={circuitBroken && !circuitHealed ? "#5d4037" : "url(#copperGradient)"}
                      strokeWidth="10"
                      strokeLinecap="round"
                      filter={circuitBroken && !circuitHealed ? "" : "url(#strongGlow)"}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Wire highlight for 3D effect */}
                    {!circuitBroken && (
                      <motion.line
                        x1="90"
                        y1="147"
                        x2="170"
                        y2="147"
                        stroke="#ffb74d"
                        strokeWidth="3"
                        strokeLinecap="round"
                        opacity="0.4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}

                    {/* Break point with enhanced animation and sparks */}
                    <AnimatePresence>
                      {circuitBroken && !circuitHealed && (
                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          {/* Broken wire segments */}
                          <motion.line
                            x1="170"
                            y1="150"
                            x2="185"
                            y2="150"
                            stroke="#d32f2f"
                            strokeWidth="10"
                            strokeLinecap="round"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                          />
                          <motion.line
                            x1="215"
                            y1="150"
                            x2="230"
                            y2="150"
                            stroke="#d32f2f"
                            strokeWidth="10"
                            strokeLinecap="round"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                          />

                          {/* Electric sparks at break points */}
                          {[...Array(8)].map((_, i) => (
                            <motion.line
                              key={`spark-left-${i}`}
                              x1="185"
                              y1="150"
                              x2={185 + Math.cos((i * Math.PI) / 4) * 12}
                              y2={150 + Math.sin((i * Math.PI) / 4) * 12}
                              stroke="#ffeb3b"
                              strokeWidth="2"
                              strokeLinecap="round"
                              initial={{ opacity: 0, pathLength: 0 }}
                              animate={{
                                opacity: [0, 1, 0],
                                pathLength: [0, 1, 0],
                              }}
                              transition={{
                                duration: 0.3,
                                delay: i * 0.1,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatDelay: 1,
                              }}
                            />
                          ))}
                          {[...Array(8)].map((_, i) => (
                            <motion.line
                              key={`spark-right-${i}`}
                              x1="215"
                              y1="150"
                              x2={215 + Math.cos((i * Math.PI) / 4) * 12}
                              y2={150 + Math.sin((i * Math.PI) / 4) * 12}
                              stroke="#ffeb3b"
                              strokeWidth="2"
                              strokeLinecap="round"
                              initial={{ opacity: 0, pathLength: 0 }}
                              animate={{
                                opacity: [0, 1, 0],
                                pathLength: [0, 1, 0],
                              }}
                              transition={{
                                duration: 0.3,
                                delay: i * 0.1 + 0.15,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatDelay: 1,
                              }}
                            />
                          ))}

                          {/* Gap with spark effect */}
                          <rect x="165" y="142" width="20" height="16" fill="#1a1a1a" />

                          {/* Sparks at break point */}
                          {!circuitHealing &&
                            [...Array(5)].map((_, i) => (
                              <motion.line
                                key={i}
                                x1="165"
                                y1="150"
                                x2={165 + Math.random() * 10}
                                y2={150 + (Math.random() - 0.5) * 15}
                                stroke="#ffeb3b"
                                strokeWidth="2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.3, delay: i * 0.1, repeat: Number.POSITIVE_INFINITY }}
                              />
                            ))}

                          {/* Enhanced graphite particles */}
                          {circuitHealing &&
                            [...Array(12)].map((_, i) => (
                              <motion.g key={i}>
                                <motion.circle
                                  cx={165 + (i * 20) / 12}
                                  cy={150}
                                  r={2 + Math.random()}
                                  fill="#9e9e9e"
                                  initial={{ opacity: 0, y: -30, scale: 0 }}
                                  animate={{ opacity: [0, 1, 1], y: 0, scale: [0, 1.2, 1] }}
                                  transition={{ duration: 0.6, delay: i * 0.08 }}
                                />
                                {/* Particle trail */}
                                <motion.circle
                                  cx={165 + (i * 20) / 12}
                                  cy={150}
                                  r={4}
                                  fill="#9e9e9e"
                                  opacity="0.3"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: [0, 1.5, 0] }}
                                  transition={{ duration: 0.6, delay: i * 0.08 }}
                                />
                              </motion.g>
                            ))}
                        </motion.g>
                      )}
                    </AnimatePresence>

                    {/* Right wire segment with highlight */}
                    <motion.line
                      x1="230"
                      y1="150"
                      x2="310"
                      y2="150"
                      stroke={circuitBroken && !circuitHealed ? "#5d4037" : "url(#copperGradient)"}
                      strokeWidth="10"
                      strokeLinecap="round"
                      filter={circuitBroken && !circuitHealed ? "" : "url(#strongGlow)"}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    
                    {/* Wire highlight for 3D effect */}
                    {!circuitBroken && (
                      <motion.line
                        x1="230"
                        y1="147"
                        x2="310"
                        y2="147"
                        stroke="#ffb74d"
                        strokeWidth="3"
                        strokeLinecap="round"
                        opacity="0.4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    )}

                    {/* Enhanced graphite capsules with realistic design */}
                    {[190, 200, 210].map((x, i) => (
                      <motion.g key={i}>
                        {/* Capsule body */}
                        <motion.ellipse
                          cx={x}
                          cy="150"
                          rx="8"
                          ry="10"
                          fill="#616161"
                          stroke="#424242"
                          strokeWidth="2"
                          initial={{ scale: 1 }}
                          animate={{
                            scale: circuitBroken && circuitHealing ? [1, 1.4, 0] : 1,
                            opacity: circuitBroken && circuitHealing ? [1, 0.5, 0] : 1,
                          }}
                          transition={{ duration: 0.5, delay: i * 0.15 }}
                        />
                        {/* Capsule shine */}
                        <motion.ellipse
                          cx={x - 2}
                          cy="147"
                          rx="3"
                          ry="4"
                          fill="#9e9e9e"
                          opacity="0.6"
                          initial={{ scale: 1 }}
                          animate={{
                            scale: circuitBroken && circuitHealing ? [1, 1.4, 0] : 1,
                            opacity: circuitBroken && circuitHealing ? [0.6, 0.3, 0] : 0.6,
                          }}
                          transition={{ duration: 0.5, delay: i * 0.15 }}
                        />
                        {/* Burst rings effect */}
                        {circuitBroken && circuitHealing && (
                          <>
                            <motion.circle
                              cx={x}
                              cy="150"
                              r="15"
                              fill="none"
                              stroke="#9e9e9e"
                              strokeWidth="3"
                              initial={{ scale: 0, opacity: 1 }}
                              animate={{ scale: 2.5, opacity: 0 }}
                              transition={{ duration: 0.8, delay: i * 0.15 }}
                            />
                            <motion.circle
                              cx={x}
                              cy="150"
                              r="15"
                              fill="none"
                              stroke="#757575"
                              strokeWidth="2"
                              initial={{ scale: 0, opacity: 0.8 }}
                              animate={{ scale: 3, opacity: 0 }}
                              transition={{ duration: 1, delay: i * 0.15 + 0.1 }}
                            />
                          </>
                        )}
                      </motion.g>
                    ))}

                    {/* Enhanced LED indicator */}
                    <motion.g>
                      <motion.circle
                        cx="320"
                        cy="150"
                        r="15"
                        fill={circuitBroken && !circuitHealed ? "#424242" : "#4caf50"}
                        stroke={circuitBroken && !circuitHealed ? "#616161" : "#2e7d32"}
                        strokeWidth="3"
                        animate={{
                          opacity: circuitBroken && !circuitHealed ? 0.3 : [1, 0.6, 1],
                        }}
                        transition={{
                          duration: 1,
                          repeat: circuitBroken && !circuitHealed ? 0 : Number.POSITIVE_INFINITY,
                        }}
                      />
                      {/* LED glow rings */}
                      {(!circuitBroken || circuitHealed) && (
                        <>
                          <motion.circle
                            cx="320"
                            cy="150"
                            r="22"
                            fill="#4caf50"
                            opacity="0.3"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.3, 0, 0.3],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                            }}
                          />
                          <motion.circle
                            cx="320"
                            cy="150"
                            r="28"
                            fill="#4caf50"
                            opacity="0.2"
                            animate={{
                              scale: [1, 1.8, 1],
                              opacity: [0.2, 0, 0.2],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                            }}
                          />
                        </>
                      )}
                    </motion.g>
                  </svg>

                  {/* Enhanced status indicator */}
                  <div className="absolute top-3 right-3">
                    <AnimatePresence>
                      {circuitBroken && !circuitHealed && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm ${circuitHealing ? "bg-green-500" : "bg-red-500"} text-white font-bold shadow-2xl`}
                        >
                          {circuitHealing ? (
                            <>
                              <Activity className="w-4 h-4 animate-spin" />
                              Repairing...
                            </>
                          ) : (
                            <>
                              <AlertTriangle className="w-4 h-4 animate-bounce" />
                              <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                              >
                                Circuit Broken!
                              </motion.span>
                            </>
                          )}
                        </motion.div>
                      )}
                      {circuitHealed && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.2, 1] }}
                          exit={{ scale: 0 }}
                          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-gray-700 text-white font-bold shadow-2xl"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Restored!
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Enhanced status cards */}
                <div className="grid grid-cols-2 gap-3">
                  <Card className="border-2 border-gray-400 shadow-lg bg-gray-50">
                    <CardContent className="p-3">
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{
                            scale: circuitBroken && !circuitHealed ? [1, 1.2, 1] : 1,
                            rotate: circuitBroken && !circuitHealed ? [0, 10, -10, 0] : 0,
                          }}
                          transition={{
                            duration: 0.5,
                            repeat: circuitBroken && !circuitHealed ? Number.POSITIVE_INFINITY : 0,
                          }}
                        >
                          <Zap
                            className={circuitBroken && !circuitHealed ? "text-red-500" : "text-green-500"}
                            size={24}
                          />
                        </motion.div>
                        <div>
                          <div className="text-xs text-gray-600 font-semibold">Conductivity</div>
                          <div className="text-base font-bold">
                            {circuitBroken && !circuitHealed ? "⚠️ Interrupted" : "✓ Active"}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-gray-400 shadow-lg bg-gray-50">
                    <CardContent className="p-3">
                      <div className="flex items-center gap-2">
                        <Activity className="text-gray-700" size={24} />
                        <div>
                          <div className="text-xs text-gray-600 font-semibold">LED Status</div>
                          <div className="text-base font-bold flex items-center gap-2">
                            {circuitBroken && !circuitHealed ? (
                              <>
                                <motion.span
                                  className="w-2.5 h-2.5 bg-red-500 rounded-full"
                                  animate={{ opacity: [1, 0, 1] }}
                                  transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                                />
                                OFF
                              </>
                            ) : (
                              <>
                                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                                ON
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Enhanced process steps */}
                <div className="mt-4 space-y-2 bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs font-bold text-gray-800 mb-2">Repair Process:</div>
                  {[
                    { label: "1. Wire Break", active: circuitBroken, icon: "⚡" },
                    { label: "2. Capsule Burst", active: circuitBroken, icon: "💥" },
                    { label: "3. Graphite Release", active: circuitHealing, icon: "🔬" },
                    { label: "4. Conductivity Restored", active: circuitHealed, icon: "✅" },
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      className={`flex items-center gap-2 text-xs p-2 rounded relative ${step.active ? "bg-gray-700 text-white font-bold" : "text-gray-400 bg-transparent"}`}
                    >
                      {/* Pulsing red border panel for active state */}
                      {step.active && (
                        <motion.div
                          className="absolute inset-0 border-2 border-red-500 rounded"
                          animate={{
                            opacity: [1, 0.3, 1],
                            borderWidth: ["2px", "3px", "2px"],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                      <div className="text-base relative z-10">{step.icon}</div>
                      <div className={`w-2 h-2 rounded-full relative z-10 ${step.active ? "bg-white" : "bg-gray-300"}`} />
                      <span className="relative z-10">{step.label}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Brick Cross-Section Views */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">Brick Healing Perspectives</h3>
          
          <div className="space-y-6">
            {/* Inside View - Pipe System */}
            <Card className="border-2 border-gray-400">
              <CardHeader className="bg-gradient-to-r from-gray-700 to-gray-600 text-white py-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Activity className="w-4 h-4" />
                  </div>
                  Inside View: Pipe Delivery System
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="relative bg-gradient-to-br from-[#78909c] to-[#546e7a] rounded-xl p-6 mb-4 min-h-[300px] flex items-center justify-center shadow-inner">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <pattern id="brickTextureInside" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="#8d6e63" opacity="0.3" />
                        <circle cx="5" cy="15" r="0.8" fill="#6d4c41" opacity="0.25" />
                        <circle cx="16" cy="7" r="0.6" fill="#5d4037" opacity="0.2" />
                      </pattern>
                      <linearGradient id="brickGradInside" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#bf8e7a" />
                        <stop offset="30%" stopColor="#a1887f" />
                        <stop offset="60%" stopColor="#8d6e63" />
                        <stop offset="100%" stopColor="#6d4c41" />
                      </linearGradient>
                      <linearGradient id="mortarGradInside" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#9e9e9e" />
                        <stop offset="50%" stopColor="#bdbdbd" />
                        <stop offset="100%" stopColor="#9e9e9e" />
                      </linearGradient>
                      <linearGradient id="pipeGradInside" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#90a4ae" />
                        <stop offset="50%" stopColor="#607d8b" />
                        <stop offset="100%" stopColor="#455a64" />
                      </linearGradient>
                    </defs>
                    
                    {/* Brick wall with proper pattern - Row 1 */}
                    <rect x="50" y="40" width="160" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="50" y="40" width="160" height="50" fill="url(#brickTextureInside)" />
                    
                    <rect x="220" y="40" width="160" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="220" y="40" width="160" height="50" fill="url(#brickTextureInside)" />
                    
                    <rect x="390" y="40" width="160" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="390" y="40" width="160" height="50" fill="url(#brickTextureInside)" />
                    
                    <rect x="560" y="40" width="160" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="560" y="40" width="160" height="50" fill="url(#brickTextureInside)" />
                    
                    {/* Mortar lines - horizontal */}
                    <rect x="50" y="90" width="670" height="6" fill="url(#mortarGradInside)" />
                    
                    {/* Brick wall - Row 2 (offset pattern) */}
                    <rect x="50" y="96" width="80" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="50" y="96" width="80" height="50" fill="url(#brickTextureInside)" />
                    
                    <rect x="140" y="96" width="160" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="140" y="96" width="160" height="50" fill="url(#brickTextureInside)" />
                    
                    <rect x="310" y="96" width="160" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="310" y="96" width="160" height="50" fill="url(#brickTextureInside)" />
                    
                    <rect x="480" y="96" width="160" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="480" y="96" width="160" height="50" fill="url(#brickTextureInside)" />
                    
                    <rect x="650" y="96" width="70" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="650" y="96" width="70" height="50" fill="url(#brickTextureInside)" />
                    
                    {/* Mortar line */}
                    <rect x="50" y="146" width="670" height="6" fill="url(#mortarGradInside)" />
                    
                    {/* Brick wall - Row 3 */}
                    <rect x="50" y="152" width="160" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="50" y="152" width="160" height="50" fill="url(#brickTextureInside)" />
                    
                    <rect x="220" y="152" width="160" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="220" y="152" width="160" height="50" fill="url(#brickTextureInside)" />
                    
                    <rect x="390" y="152" width="160" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="390" y="152" width="160" height="50" fill="url(#brickTextureInside)" />
                    
                    <rect x="560" y="152" width="160" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="560" y="152" width="160" height="50" fill="url(#brickTextureInside)" />
                    
                    {/* Mortar line */}
                    <rect x="50" y="202" width="670" height="6" fill="url(#mortarGradInside)" />
                    
                    {/* Brick wall - Row 4 (offset) */}
                    <rect x="50" y="208" width="80" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="50" y="208" width="80" height="50" fill="url(#brickTextureInside)" />
                    
                    <rect x="140" y="208" width="160" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="140" y="208" width="160" height="50" fill="url(#brickTextureInside)" />
                    
                    <rect x="310" y="208" width="160" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="310" y="208" width="160" height="50" fill="url(#brickTextureInside)" />
                    
                    <rect x="480" y="208" width="160" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="480" y="208" width="160" height="50" fill="url(#brickTextureInside)" />
                    
                    <rect x="650" y="208" width="70" height="50" fill="url(#brickGradInside)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="650" y="208" width="70" height="50" fill="url(#brickTextureInside)" />
                    
                    {/* Vertical mortar lines - Row 1 */}
                    <rect x="210" y="40" width="6" height="50" fill="url(#mortarGradInside)" />
                    <rect x="380" y="40" width="6" height="50" fill="url(#mortarGradInside)" />
                    <rect x="550" y="40" width="6" height="50" fill="url(#mortarGradInside)" />
                    
                    {/* Vertical mortar lines - Row 2 */}
                    <rect x="130" y="96" width="6" height="50" fill="url(#mortarGradInside)" />
                    <rect x="300" y="96" width="6" height="50" fill="url(#mortarGradInside)" />
                    <rect x="470" y="96" width="6" height="50" fill="url(#mortarGradInside)" />
                    <rect x="640" y="96" width="6" height="50" fill="url(#mortarGradInside)" />
                    
                    {/* Vertical mortar lines - Row 3 */}
                    <rect x="210" y="152" width="6" height="50" fill="url(#mortarGradInside)" />
                    <rect x="380" y="152" width="6" height="50" fill="url(#mortarGradInside)" />
                    <rect x="550" y="152" width="6" height="50" fill="url(#mortarGradInside)" />
                    
                    {/* Vertical mortar lines - Row 4 */}
                    <rect x="130" y="208" width="6" height="50" fill="url(#mortarGradInside)" />
                    <rect x="300" y="208" width="6" height="50" fill="url(#mortarGradInside)" />
                    <rect x="470" y="208" width="6" height="50" fill="url(#mortarGradInside)" />
                    <rect x="640" y="208" width="6" height="50" fill="url(#mortarGradInside)" />
                    
                    {/* Embedded pipe through center (cross-section view) */}
                    <ellipse cx="50" cy="150" rx="10" ry="12" fill="url(#pipeGradInside)" stroke="#37474f" strokeWidth="2" />
                    <rect x="50" y="138" width="700" height="24" fill="url(#pipeGradInside)" stroke="#37474f" strokeWidth="2" />
                    <ellipse cx="750" cy="150" rx="10" ry="12" fill="url(#pipeGradInside)" stroke="#37474f" strokeWidth="2" />
                    
                    {/* Pipe hollow interior */}
                    <ellipse cx="50" cy="150" rx="6" ry="9" fill="#263238" />
                    <rect x="50" y="141" width="700" height="18" fill="#263238" />
                    
                    {/* Crack with animation */}
                    <AnimatePresence>
                      {crackDetected && !healed && (
                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <motion.path
                            d="M 400 75 L 405 110 L 395 145 L 405 180 L 400 215 L 395 225"
                            stroke={healing ? "#66bb6a" : "#d32f2f"}
                            strokeWidth={healing ? "6" : "3"}
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                          />
                          
                          {/* Solution spray */}
                          {healing && (
                            <motion.g>
                              {[...Array(8)].map((_, i) => (
                                <motion.circle
                                  key={i}
                                  cx={400}
                                  cy={150}
                                  r="3"
                                  fill="#4fc3f7"
                                  opacity="0.8"
                                  initial={{ x: 0, y: 0 }}
                                  animate={{ 
                                    x: [0, (i - 4) * 15], 
                                    y: [0, Math.abs(i - 4) * -20] 
                                  }}
                                  transition={{ 
                                    duration: 1.2, 
                                    delay: i * 0.08, 
                                    repeat: Number.POSITIVE_INFINITY, 
                                    repeatDelay: 0.5 
                                  }}
                                />
                              ))}
                              
                              {/* Healing particles */}
                              {[...Array(15)].map((_, i) => (
                                <motion.circle
                                  key={`heal-${i}`}
                                  cx={395 + Math.random() * 10}
                                  cy={75 + (i * 150) / 15}
                                  r={2 + Math.random() * 1.5}
                                  fill="#81c784"
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0, 1.5, 0],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    delay: i * 0.1,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatDelay: 0.3,
                                  }}
                                />
                              ))}
                            </motion.g>
                          )}
                        </motion.g>
                      )}
                    </AnimatePresence>
                    
                    {/* Healed crack */}
                    {healed && (
                      <motion.path
                        d="M 400 75 L 405 110 L 395 145 L 405 180 L 400 215 L 395 225"
                        stroke="#e0e0e0"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                      />
                    )}
                    
                    {/* Labels */}
                    <text x="400" y="60" fontSize="14" fontWeight="bold" fill="#fff" textAnchor="middle">
                      Cross-Section: Solution Sprays from Internal Pipe
                    </text>
                  </svg>

                  {/* Status indicator */}
                  <div className="absolute top-4 right-4">
                    <AnimatePresence>
                      {crackDetected && !healed && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full ${healing ? "bg-green-500" : "bg-red-500"} text-white font-bold shadow-2xl text-sm`}
                        >
                          {healing ? (
                            <>
                              <Activity className="w-4 h-4 animate-spin" />
                              Spraying...
                            </>
                          ) : (
                            <>
                              <AlertTriangle className="w-4 h-4 animate-bounce" />
                              Crack!
                            </>
                          )}
                        </motion.div>
                      )}
                      {healed && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.2, 1] }}
                          exit={{ scale: 0 }}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 text-white font-bold shadow-2xl text-sm"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Sealed!
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <Card className={`border-2 shadow-lg ${crackDetected ? "border-red-500 bg-red-50" : "border-gray-300 bg-gray-50"}`}>
                    <CardContent className="p-3">
                      <div className="text-lg font-bold text-red-600">Crack</div>
                      <p className="text-xs text-gray-600">{crackDetected ? "Detected!" : "None"}</p>
                    </CardContent>
                  </Card>
                  <Card className={`border-2 shadow-lg ${healing ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50"}`}>
                    <CardContent className="p-3">
                      <div className="text-lg font-bold text-blue-600">Spray</div>
                      <p className="text-xs text-gray-600">{healing ? "Active" : "Idle"}</p>
                    </CardContent>
                  </Card>
                  <Card className={`border-2 shadow-lg ${healed ? "border-green-500 bg-green-50" : "border-gray-300 bg-gray-50"}`}>
                    <CardContent className="p-3">
                      <div className="text-lg font-bold text-green-600">Sealed</div>
                      <p className="text-xs text-gray-600">{healed ? "Complete" : "Waiting"}</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Outside View - Dispenser */}
            <Card className="border-2 border-gray-400">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Droplets className="w-4 h-4" />
                  </div>
                  Outside View: Surface Dispenser
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="relative bg-gradient-to-br from-[#263238] to-[#37474f] rounded-xl p-6 mb-4 min-h-[300px] flex items-center justify-center shadow-inner">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <pattern id="brickTextureOut" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="#8d6e63" opacity="0.3" />
                        <circle cx="5" cy="15" r="0.8" fill="#6d4c41" opacity="0.25" />
                        <circle cx="16" cy="7" r="0.6" fill="#5d4037" opacity="0.2" />
                      </pattern>
                      <linearGradient id="brickGradOut" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#bf8e7a" />
                        <stop offset="30%" stopColor="#a1887f" />
                        <stop offset="60%" stopColor="#8d6e63" />
                        <stop offset="100%" stopColor="#6d4c41" />
                      </linearGradient>
                      <linearGradient id="mortarGradOut" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#9e9e9e" />
                        <stop offset="50%" stopColor="#bdbdbd" />
                        <stop offset="100%" stopColor="#9e9e9e" />
                      </linearGradient>
                      <linearGradient id="dispenserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#78909c" />
                        <stop offset="50%" stopColor="#90a4ae" />
                        <stop offset="100%" stopColor="#78909c" />
                      </linearGradient>
                      <radialGradient id="dropGrad">
                        <stop offset="0%" stopColor="#4fc3f7" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#0288d1" stopOpacity="0.4" />
                      </radialGradient>
                    </defs>
                    
                    {/* Exterior brick wall - Row 1 */}
                    <rect x="50" y="50" width="160" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="50" y="50" width="160" height="48" fill="url(#brickTextureOut)" />
                    
                    <rect x="220" y="50" width="160" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="220" y="50" width="160" height="48" fill="url(#brickTextureOut)" />
                    
                    <rect x="390" y="50" width="160" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="390" y="50" width="160" height="48" fill="url(#brickTextureOut)" />
                    
                    <rect x="560" y="50" width="160" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="560" y="50" width="160" height="48" fill="url(#brickTextureOut)" />
                    
                    {/* Horizontal mortar */}
                    <rect x="50" y="98" width="670" height="6" fill="url(#mortarGradOut)" />
                    
                    {/* Row 2 - offset */}
                    <rect x="50" y="104" width="80" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="50" y="104" width="80" height="48" fill="url(#brickTextureOut)" />
                    
                    <rect x="140" y="104" width="160" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="140" y="104" width="160" height="48" fill="url(#brickTextureOut)" />
                    
                    <rect x="310" y="104" width="160" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="310" y="104" width="160" height="48" fill="url(#brickTextureOut)" />
                    
                    <rect x="480" y="104" width="160" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="480" y="104" width="160" height="48" fill="url(#brickTextureOut)" />
                    
                    <rect x="650" y="104" width="70" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="650" y="104" width="70" height="48" fill="url(#brickTextureOut)" />
                    
                    <rect x="50" y="152" width="670" height="6" fill="url(#mortarGradOut)" />
                    
                    {/* Row 3 */}
                    <rect x="50" y="158" width="160" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="50" y="158" width="160" height="48" fill="url(#brickTextureOut)" />
                    
                    <rect x="220" y="158" width="160" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="220" y="158" width="160" height="48" fill="url(#brickTextureOut)" />
                    
                    <rect x="390" y="158" width="160" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="390" y="158" width="160" height="48" fill="url(#brickTextureOut)" />
                    
                    <rect x="560" y="158" width="160" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="560" y="158" width="160" height="48" fill="url(#brickTextureOut)" />
                    
                    <rect x="50" y="206" width="670" height="6" fill="url(#mortarGradOut)" />
                    
                    {/* Row 4 - offset */}
                    <rect x="50" y="212" width="80" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="50" y="212" width="80" height="48" fill="url(#brickTextureOut)" />
                    
                    <rect x="140" y="212" width="160" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="140" y="212" width="160" height="48" fill="url(#brickTextureOut)" />
                    
                    <rect x="310" y="212" width="160" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="310" y="212" width="160" height="48" fill="url(#brickTextureOut)" />
                    
                    <rect x="480" y="212" width="160" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="480" y="212" width="160" height="48" fill="url(#brickTextureOut)" />
                    
                    <rect x="650" y="212" width="70" height="48" fill="url(#brickGradOut)" stroke="#5d4037" strokeWidth="2" />
                    <rect x="650" y="212" width="70" height="48" fill="url(#brickTextureOut)" />
                    
                    {/* Vertical mortar lines */}
                    <rect x="210" y="50" width="6" height="48" fill="url(#mortarGradOut)" />
                    <rect x="380" y="50" width="6" height="48" fill="url(#mortarGradOut)" />
                    <rect x="550" y="50" width="6" height="48" fill="url(#mortarGradOut)" />
                    
                    <rect x="130" y="104" width="6" height="48" fill="url(#mortarGradOut)" />
                    <rect x="300" y="104" width="6" height="48" fill="url(#mortarGradOut)" />
                    <rect x="470" y="104" width="6" height="48" fill="url(#mortarGradOut)" />
                    <rect x="640" y="104" width="6" height="48" fill="url(#mortarGradOut)" />
                    
                    <rect x="210" y="158" width="6" height="48" fill="url(#mortarGradOut)" />
                    <rect x="380" y="158" width="6" height="48" fill="url(#mortarGradOut)" />
                    <rect x="550" y="158" width="6" height="48" fill="url(#mortarGradOut)" />
                    
                    <rect x="130" y="212" width="6" height="48" fill="url(#mortarGradOut)" />
                    <rect x="300" y="212" width="6" height="48" fill="url(#mortarGradOut)" />
                    <rect x="470" y="212" width="6" height="48" fill="url(#mortarGradOut)" />
                    <rect x="640" y="212" width="6" height="48" fill="url(#mortarGradOut)" />
                    
                    {/* Crack with animation */}
                    <AnimatePresence>
                      {crackDetected && !healed && (
                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <motion.path
                            d="M 400 90 L 395 130 L 405 170 L 395 210 L 400 250 L 395 270"
                            stroke={healing ? "#66bb6a" : "#d32f2f"}
                            strokeWidth={healing ? "7" : "4"}
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                          />
                          
                          {/* Crack branches */}
                          <motion.path
                            d="M 395 150 L 385 155 L 380 160"
                            stroke={healing ? "#66bb6a" : "#d32f2f"}
                            strokeWidth={healing ? "4" : "2"}
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                          
                          {/* Dispenser unit */}
                          <rect x="330" y="30" width="140" height="50" rx="6" fill="url(#dispenserGrad)" stroke="#455a64" strokeWidth="2" />
                          <circle cx="365" cy="55" r="6" fill="#37474f" />
                          <circle cx="435" cy="55" r="6" fill="#37474f" />
                          <text x="400" y="60" fontSize="10" fontWeight="bold" fill="#fff" textAnchor="middle">DISPENSER</text>
                          
                          {/* Mounting bracket */}
                          <rect x="380" y="20" width="40" height="12" fill="#546e7a" stroke="#37474f" strokeWidth="1" />
                          
                          {/* Solution cascade */}
                          {healing && (
                            <motion.g>
                              {[...Array(15)].map((_, i) => (
                                <motion.ellipse
                                  key={`drop-${i}`}
                                  cx={335 + i * 11}
                                  cy={80}
                                  rx="3"
                                  ry="6"
                                  fill="url(#dropGrad)"
                                  initial={{ y: 0, opacity: 0 }}
                                  animate={{ 
                                    y: [0, 190], 
                                    opacity: [0, 0.8, 0.6, 0.3] 
                                  }}
                                  transition={{ 
                                    duration: 1.6, 
                                    delay: i * 0.05, 
                                    repeat: Number.POSITIVE_INFINITY, 
                                    repeatDelay: 0.4,
                                    ease: "easeIn"
                                  }}
                                />
                              ))}
                              
                              {/* Flow stream over crack */}
                              <motion.rect
                                x="385"
                                y="80"
                                width="30"
                                height="190"
                                fill="url(#dropGrad)"
                                opacity="0.4"
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: [0, 1, 1] }}
                                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.5 }}
                                style={{ transformOrigin: "top" }}
                              />
                              
                              {/* Healing particles spreading */}
                              {[...Array(12)].map((_, i) => (
                                <motion.circle
                                  key={`particle-${i}`}
                                  cx={395 + Math.random() * 10}
                                  cy={90 + (i * 180) / 12}
                                  r={2 + Math.random() * 1.5}
                                  fill="#81c784"
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0, 1.5, 0],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    delay: i * 0.12,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatDelay: 0.3,
                                  }}
                                />
                              ))}
                            </motion.g>
                          )}
                        </motion.g>
                      )}
                    </AnimatePresence>
                    
                    {/* Healed crack */}
                    {healed && (
                      <motion.path
                        d="M 400 90 L 395 130 L 405 170 L 395 210 L 400 250 L 395 270"
                        stroke="#e0e0e0"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                      />
                    )}
                    
                    {/* Labels */}
                    <text x="400" y="20" fontSize="14" fontWeight="bold" fill="#fff" textAnchor="middle">
                      Exterior: Solution Cascades Over Wall
                    </text>
                  </svg>

                  {/* Status indicator */}
                  <div className="absolute top-4 right-4">
                    <AnimatePresence>
                      {crackDetected && !healed && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full ${healing ? "bg-green-500" : "bg-red-500"} text-white font-bold shadow-2xl text-sm`}
                        >
                          {healing ? (
                            <>
                              <Activity className="w-4 h-4 animate-spin" />
                              Dispensing...
                            </>
                          ) : (
                            <>
                              <AlertTriangle className="w-4 h-4 animate-bounce" />
                              Crack!
                            </>
                          )}
                        </motion.div>
                      )}
                      {healed && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.2, 1] }}
                          exit={{ scale: 0 }}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white font-bold shadow-2xl text-sm"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Fixed!
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <Card className={`border-2 shadow-lg ${crackDetected ? "border-red-500 bg-red-50" : "border-gray-300 bg-gray-50"}`}>
                    <CardContent className="p-3">
                      <div className="text-lg font-bold text-red-600">Visible</div>
                      <p className="text-xs text-gray-600">{crackDetected ? "Crack!" : "No Damage"}</p>
                    </CardContent>
                  </Card>
                  <Card className={`border-2 shadow-lg ${healing ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50"}`}>
                    <CardContent className="p-3">
                      <div className="text-lg font-bold text-blue-600">Cascade</div>
                      <p className="text-xs text-gray-600">{healing ? "Flowing" : "Standby"}</p>
                    </CardContent>
                  </Card>
                  <Card className={`border-2 shadow-lg ${healed ? "border-green-500 bg-green-50" : "border-gray-300 bg-gray-50"}`}>
                    <CardContent className="p-3">
                      <div className="text-lg font-bold text-green-600">Restored</div>
                      <p className="text-xs text-gray-600">{healed ? "Success" : "Pending"}</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Enhanced info banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <Card className="border-2 border-gray-400 bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="font-display text-3xl font-bold text-gray-900 mb-4">🔬 Live Demo Simulation</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Watch as both systems automatically detect damage and repair themselves in real-time. The concrete
                  detects cracks through copper sensors and triggers chemical healing with CaCO₃ formation, while the
                  circuit uses graphite-filled capsules to restore conductivity instantly when wires break.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

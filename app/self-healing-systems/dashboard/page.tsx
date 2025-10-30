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

  useEffect(() => {
    const crackCycle = setInterval(() => {
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
            }, 3000)
          }, 5000)
        }, 3000)
      }
    }, 15000)

    return () => clearInterval(crackCycle)
  }, [crackDetected, healing, healed])

  useEffect(() => {
    const circuitCycle = setInterval(() => {
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
            }, 3000)
          }, 4000)
        }, 2000)
      }
    }, 18000)

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

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Card className="border-2 border-gray-400 bg-white shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Activity className="w-6 h-6 text-gray-700" />
                  Self-Healing Concrete Monitor
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="relative bg-gradient-to-br from-[#78909c] to-[#546e7a] rounded-xl p-8 mb-6 min-h-[450px] flex items-center justify-center shadow-inner">
                  <svg viewBox="0 0 400 300" className="w-full max-w-md">
                    <defs>
                      {/* Brick texture gradient */}
                      <linearGradient id="brickGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a1887f" />
                        <stop offset="50%" stopColor="#8d6e63" />
                        <stop offset="100%" stopColor="#795548" />
                      </linearGradient>
                      {/* Mortar pattern */}
                      <pattern id="brickPattern" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
                        <rect width="100" height="50" fill="url(#brickGradient)" />
                        <rect width="98" height="48" x="1" y="1" fill="#a1887f" />
                        {/* Brick texture details */}
                        <rect width="30" height="2" x="5" y="10" fill="#8d6e63" opacity="0.3" />
                        <rect width="25" height="2" x="40" y="15" fill="#8d6e63" opacity="0.3" />
                        <rect width="35" height="2" x="10" y="30" fill="#8d6e63" opacity="0.3" />
                      </pattern>
                    </defs>

                    {/* Main brick with realistic texture */}
                    <rect
                      x="50"
                      y="50"
                      width="300"
                      height="200"
                      fill="url(#brickPattern)"
                      stroke="#5d4037"
                      strokeWidth="4"
                      rx="3"
                    />

                    {/* Mortar lines for realism */}
                    <line x1="50" y1="100" x2="350" y2="100" stroke="#9e9e9e" strokeWidth="3" />
                    <line x1="50" y1="150" x2="350" y2="150" stroke="#9e9e9e" strokeWidth="3" />
                    <line x1="50" y1="200" x2="350" y2="200" stroke="#9e9e9e" strokeWidth="3" />
                    <line x1="150" y1="50" x2="150" y2="100" stroke="#9e9e9e" strokeWidth="3" />
                    <line x1="250" y1="50" x2="250" y2="100" stroke="#9e9e9e" strokeWidth="3" />
                    <line x1="100" y1="100" x2="100" y2="150" stroke="#9e9e9e" strokeWidth="3" />
                    <line x1="200" y1="100" x2="200" y2="150" stroke="#9e9e9e" strokeWidth="3" />
                    <line x1="300" y1="100" x2="300" y2="150" stroke="#9e9e9e" strokeWidth="3" />

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
                <div className="grid grid-cols-2 gap-4">
                  <Card
                    className={`border-2 shadow-lg ${moisture > 30 ? "border-red-500 animate-pulse bg-red-50" : "border-blue-400 bg-blue-50"}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{ scale: moisture > 30 ? [1, 1.2, 1] : 1 }}
                          transition={{ duration: 0.5, repeat: moisture > 30 ? Number.POSITIVE_INFINITY : 0 }}
                        >
                          <Droplets className={moisture > 30 ? "text-red-500" : "text-blue-500"} size={28} />
                        </motion.div>
                        <div>
                          <div className="text-xs text-gray-600 font-semibold">Moisture Level</div>
                          <div className="text-3xl font-bold">{moisture}%</div>
                          {moisture > 30 && <div className="text-xs text-red-600 font-bold">LEAK DETECTED</div>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-gray-400 shadow-lg bg-gray-50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Activity className="text-gray-700" size={28} />
                        <div>
                          <div className="text-xs text-gray-600 font-semibold">Circuit Status</div>
                          <div className="text-lg font-bold">
                            {crackDetected && !healed ? "⚠️ Interrupted" : "✓ Connected"}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Enhanced process steps */}
                <div className="mt-6 space-y-3 bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-bold text-gray-800 mb-3">Healing Process:</div>
                  {[
                    { label: "1. Crack Formation", active: crackDetected, icon: "🔴" },
                    { label: "2. Detection Alert", active: crackDetected, icon: "⚠️" },
                    { label: "3. CaCO₃ Reaction", active: healing, icon: "⚗️" },
                    { label: "4. Crack Sealed", active: healed, icon: "✅" },
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      className={`flex items-center gap-3 text-sm p-2 rounded ${step.active ? "bg-gray-700 text-white font-bold" : "text-gray-400"}`}
                      animate={{ scale: step.active ? [1, 1.05, 1] : 1 }}
                      transition={{ duration: 0.5, repeat: step.active ? Number.POSITIVE_INFINITY : 0 }}
                    >
                      <div className="text-lg">{step.icon}</div>
                      <div className={`w-3 h-3 rounded-full ${step.active ? "bg-white" : "bg-gray-300"}`} />
                      {step.label}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <Card className="border-2 border-gray-400 bg-white shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Zap className="w-6 h-6 text-gray-700" />
                  Self-Healing Circuit Monitor
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="relative bg-gradient-to-br from-[#263238] to-[#37474f] rounded-xl p-8 mb-6 min-h-[450px] flex items-center justify-center shadow-inner">
                  <svg viewBox="0 0 400 300" className="w-full max-w-md">
                    {/* Circuit board with texture */}
                    <defs>
                      <pattern id="circuitPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="0.5" fill="#424242" opacity="0.3" />
                      </pattern>
                    </defs>
                    <rect
                      x="50"
                      y="100"
                      width="300"
                      height="100"
                      fill="url(#circuitPattern)"
                      stroke="#616161"
                      strokeWidth="3"
                      rx="8"
                    />
                    <rect x="50" y="100" width="300" height="100" fill="#1a1a1a" opacity="0.8" rx="8" />

                    {/* Wire with glow effect */}
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Left wire segment */}
                    <motion.line
                      x1="50"
                      y1="150"
                      x2="150"
                      y2="150"
                      stroke={circuitBroken && !circuitHealed ? "#424242" : "#4caf50"}
                      strokeWidth="8"
                      strokeLinecap="round"
                      filter={circuitBroken && !circuitHealed ? "" : "url(#glow)"}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Break point with enhanced animation */}
                    <AnimatePresence>
                      {circuitBroken && !circuitHealed && (
                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <motion.line
                            x1="150"
                            y1="150"
                            x2="165"
                            y2="150"
                            stroke="#f44336"
                            strokeWidth="8"
                            strokeLinecap="round"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                          />
                          <motion.line
                            x1="185"
                            y1="150"
                            x2="200"
                            y2="150"
                            stroke="#f44336"
                            strokeWidth="8"
                            strokeLinecap="round"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                          />

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

                    {/* Right wire segment */}
                    <motion.line
                      x1="200"
                      y1="150"
                      x2="350"
                      y2="150"
                      stroke={circuitBroken && !circuitHealed ? "#424242" : "#4caf50"}
                      strokeWidth="8"
                      strokeLinecap="round"
                      filter={circuitBroken && !circuitHealed ? "" : "url(#glow)"}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />

                    {/* Graphite capsules with burst animation */}
                    {[160, 175, 190].map((x, i) => (
                      <motion.g key={i}>
                        <motion.circle
                          cx={x}
                          cy="150"
                          r="6"
                          fill="#757575"
                          stroke="#424242"
                          strokeWidth="2"
                          initial={{ scale: 1 }}
                          animate={{
                            scale: circuitBroken && circuitHealing ? [1, 1.8, 0] : 1,
                            opacity: circuitBroken && circuitHealing ? [1, 0.5, 0] : 1,
                          }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        />
                        {/* Burst effect */}
                        {circuitBroken && circuitHealing && (
                          <motion.circle
                            cx={x}
                            cy="150"
                            r="12"
                            fill="none"
                            stroke="#9e9e9e"
                            strokeWidth="2"
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          />
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
                  <div className="absolute top-4 right-4">
                    <AnimatePresence>
                      {circuitBroken && !circuitHealed && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          className={`flex items-center gap-2 px-5 py-3 rounded-full ${circuitHealing ? "bg-green-500" : "bg-red-500"} text-white font-bold shadow-2xl`}
                        >
                          {circuitHealing ? (
                            <>
                              <Activity className="w-6 h-6 animate-spin" />
                              Repairing Circuit...
                            </>
                          ) : (
                            <>
                              <AlertTriangle className="w-6 h-6 animate-bounce" />
                              Circuit Broken!
                            </>
                          )}
                        </motion.div>
                      )}
                      {circuitHealed && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.2, 1] }}
                          exit={{ scale: 0 }}
                          className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-700 text-white font-bold shadow-2xl"
                        >
                          <CheckCircle className="w-6 h-6" />
                          Fully Restored!
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Enhanced status cards */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-2 border-gray-400 shadow-lg bg-gray-50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
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
                            size={28}
                          />
                        </motion.div>
                        <div>
                          <div className="text-xs text-gray-600 font-semibold">Conductivity</div>
                          <div className="text-lg font-bold">
                            {circuitBroken && !circuitHealed ? "⚠️ Interrupted" : "✓ Active"}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-gray-400 shadow-lg bg-gray-50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Activity className="text-gray-700" size={28} />
                        <div>
                          <div className="text-xs text-gray-600 font-semibold">LED Status</div>
                          <div className="text-lg font-bold flex items-center gap-2">
                            {circuitBroken && !circuitHealed ? (
                              <>
                                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                                OFF
                              </>
                            ) : (
                              <>
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
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
                <div className="mt-6 space-y-3 bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-bold text-gray-800 mb-3">Repair Process:</div>
                  {[
                    { label: "1. Wire Break", active: circuitBroken, icon: "⚡" },
                    { label: "2. Capsule Burst", active: circuitBroken, icon: "💥" },
                    { label: "3. Graphite Release", active: circuitHealing, icon: "🔬" },
                    { label: "4. Conductivity Restored", active: circuitHealed, icon: "✅" },
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      className={`flex items-center gap-3 text-sm p-2 rounded ${step.active ? "bg-gray-700 text-white font-bold" : "text-gray-400"}`}
                      animate={{ scale: step.active ? [1, 1.05, 1] : 1 }}
                      transition={{ duration: 0.5, repeat: step.active ? Number.POSITIVE_INFINITY : 0 }}
                    >
                      <div className="text-lg">{step.icon}</div>
                      <div className={`w-3 h-3 rounded-full ${step.active ? "bg-white" : "bg-gray-300"}`} />
                      {step.label}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Enhanced info banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
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

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, Sun, Thermometer, Wind, AlertTriangle, CheckCircle, TrendingUp, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BioSyncDashboard() {
  const [moisture, setMoisture] = useState(42)
  const [temperature, setTemperature] = useState(31)
  const [light, setLight] = useState(850)
  const [humidity, setHumidity] = useState(65)

  const [history, setHistory] = useState([
    { day: "Mon", moisture: 45, temp: 29 },
    { day: "Tue", moisture: 38, temp: 30 },
    { day: "Wed", moisture: 42, temp: 31 },
    { day: "Thu", moisture: 40, temp: 32 },
    { day: "Fri", moisture: 42, temp: 31 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setMoisture((prev) => Math.max(20, Math.min(80, prev + (Math.random() - 0.5) * 5)))
      setTemperature((prev) => Math.max(25, Math.min(35, prev + (Math.random() - 0.5) * 2)))
      setLight((prev) => Math.max(400, Math.min(1200, prev + (Math.random() - 0.5) * 100)))
      setHumidity((prev) => Math.max(40, Math.min(90, prev + (Math.random() - 0.5) * 3)))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const getStatus = () => {
    if (moisture < 30) return { text: "Needs Water", icon: AlertTriangle, color: "#f44336" }
    if (light < 500) return { text: "Needs More Light", icon: AlertTriangle, color: "#ff9800" }
    if (temperature > 33) return { text: "Too Hot", icon: AlertTriangle, color: "#ff9800" }
    return { text: "Optimal Conditions", icon: CheckCircle, color: "#2e7d32" }
  }

  const status = getStatus()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b5e20] via-[#2e7d32] to-[#388e3c]">
      <Navigation />

      <div className="pt-32 pb-20 container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link href="/biosync">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to BioSync
            </Button>
          </Link>
          <h1 className="font-display text-5xl font-bold text-white mb-4">BioSync Live Dashboard</h1>
          <p className="text-xl text-green-100">Real-time monitoring of your plant's ecosystem</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="border-2 border-green-400 bg-gradient-to-br from-green-50 to-white shadow-2xl">
            <CardContent className="p-8">
              <div className="relative flex items-center justify-center min-h-[600px] bg-gradient-to-b from-sky-100 via-green-50 to-amber-50 rounded-xl overflow-hidden">
                {/* Animated background elements */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-green-300 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                  ))}
                </motion.div>

                <svg viewBox="0 0 800 600" className="w-full max-w-4xl relative z-10">
                  <defs>
                    {/* Enhanced gradients */}
                    <linearGradient id="potGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#8d6e63" />
                      <stop offset="50%" stopColor="#6d4c41" />
                      <stop offset="100%" stopColor="#4e342e" />
                    </linearGradient>
                    <linearGradient id="soilGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#5d4037" />
                      <stop offset="100%" stopColor="#3e2723" />
                    </linearGradient>
                    <linearGradient id="stemGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#2e7d32" />
                      <stop offset="50%" stopColor="#388e3c" />
                      <stop offset="100%" stopColor="#4caf50" />
                    </linearGradient>
                    <radialGradient id="leafGradient">
                      <stop offset="0%" stopColor="#66bb6a" />
                      <stop offset="100%" stopColor="#43a047" />
                    </radialGradient>
                  </defs>

                  {/* Terracotta pot with realistic design */}
                  <g>
                    <path
                      d="M 280 450 L 260 550 L 340 550 L 320 450 Z"
                      fill="url(#potGradient)"
                      stroke="#3e2723"
                      strokeWidth="3"
                    />
                    <ellipse cx="300" cy="450" rx="40" ry="12" fill="#a1887f" stroke="#3e2723" strokeWidth="2" />
                    <ellipse cx="300" cy="450" rx="35" ry="10" fill="#8d6e63" />
                    {/* Pot rim detail */}
                    <ellipse cx="300" cy="448" rx="42" ry="8" fill="none" stroke="#6d4c41" strokeWidth="1" />
                    {/* Pot texture lines */}
                    <line x1="270" y1="470" x2="330" y2="470" stroke="#6d4c41" strokeWidth="1" opacity="0.5" />
                    <line x1="265" y1="500" x2="335" y2="500" stroke="#6d4c41" strokeWidth="1" opacity="0.5" />
                    <line x1="262" y1="530" x2="338" y2="530" stroke="#6d4c41" strokeWidth="1" opacity="0.5" />
                  </g>

                  {/* Soil with sensors embedded */}
                  <ellipse cx="300" cy="450" rx="35" ry="10" fill="url(#soilGradient)" />

                  {/* Moisture sensor in soil */}
                  <g>
                    <rect x="285" y="445" width="4" height="15" fill="#c0c0c0" stroke="#808080" strokeWidth="1" />
                    <rect x="291" y="445" width="4" height="15" fill="#c0c0c0" stroke="#808080" strokeWidth="1" />
                    <rect x="283" y="443" width="14" height="3" fill="#1976d2" rx="1" />
                  </g>

                  {/* Main stem with natural curve */}
                  <motion.path
                    d="M 300 450 Q 295 380 300 320 Q 305 260 300 200"
                    stroke="url(#stemGradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />

                  {/* Realistic leaves with veins */}
                  {[
                    { x: 300, y: 380, rotate: -45, scale: 1.2, delay: 0.5 },
                    { x: 300, y: 360, rotate: 35, scale: 1, delay: 0.7 },
                    { x: 300, y: 340, rotate: -55, scale: 1.1, delay: 0.9 },
                    { x: 300, y: 320, rotate: 40, scale: 0.9, delay: 1.1 },
                    { x: 300, y: 300, rotate: -35, scale: 1, delay: 1.3 },
                    { x: 300, y: 280, rotate: 50, scale: 1.15, delay: 1.5 },
                    { x: 300, y: 260, rotate: -40, scale: 0.95, delay: 1.7 },
                    { x: 300, y: 240, rotate: 30, scale: 1.05, delay: 1.9 },
                  ].map((leaf, i) => (
                    <motion.g key={i}>
                      {/* Leaf shape */}
                      <motion.path
                        d={`M ${leaf.x} ${leaf.y} Q ${leaf.x + 30} ${leaf.y - 10} ${leaf.x + 50} ${leaf.y} Q ${leaf.x + 30} ${leaf.y + 10} ${leaf.x} ${leaf.y}`}
                        fill="url(#leafGradient)"
                        stroke="#2e7d32"
                        strokeWidth="2"
                        transform={`rotate(${leaf.rotate} ${leaf.x} ${leaf.y}) scale(${leaf.scale})`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: leaf.scale, opacity: 1 }}
                        transition={{ delay: leaf.delay, duration: 0.6, ease: "easeOut" }}
                      />
                      {/* Central vein */}
                      <motion.line
                        x1={leaf.x}
                        y1={leaf.y}
                        x2={leaf.x + 50}
                        y2={leaf.y}
                        stroke="#1b5e20"
                        strokeWidth="1.5"
                        transform={`rotate(${leaf.rotate} ${leaf.x} ${leaf.y}) scale(${leaf.scale})`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ delay: leaf.delay + 0.2 }}
                      />
                      {/* Side veins */}
                      {[15, 25, 35].map((offset, j) => (
                        <motion.line
                          key={j}
                          x1={leaf.x + offset}
                          y1={leaf.y}
                          x2={leaf.x + offset + 8}
                          y2={leaf.y - 6}
                          stroke="#1b5e20"
                          strokeWidth="0.8"
                          transform={`rotate(${leaf.rotate} ${leaf.x} ${leaf.y}) scale(${leaf.scale})`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.5 }}
                          transition={{ delay: leaf.delay + 0.3 }}
                        />
                      ))}
                      {[15, 25, 35].map((offset, j) => (
                        <motion.line
                          key={`b${j}`}
                          x1={leaf.x + offset}
                          y1={leaf.y}
                          x2={leaf.x + offset + 8}
                          y2={leaf.y + 6}
                          stroke="#1b5e20"
                          strokeWidth="0.8"
                          transform={`rotate(${leaf.rotate} ${leaf.x} ${leaf.y}) scale(${leaf.scale})`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.5 }}
                          transition={{ delay: leaf.delay + 0.3 }}
                        />
                      ))}
                    </motion.g>
                  ))}

                  {/* Beautiful flower at top */}
                  <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2, duration: 0.8 }}>
                    {/* Petals */}
                    {[0, 72, 144, 216, 288].map((angle, i) => (
                      <motion.ellipse
                        key={i}
                        cx={300 + Math.cos((angle * Math.PI) / 180) * 18}
                        cy={200 + Math.sin((angle * Math.PI) / 180) * 18}
                        rx="12"
                        ry="20"
                        fill="#ffeb3b"
                        stroke="#fbc02d"
                        strokeWidth="2"
                        transform={`rotate(${angle} ${300 + Math.cos((angle * Math.PI) / 180) * 18} ${200 + Math.sin((angle * Math.PI) / 180) * 18})`}
                        animate={{
                          scale: [1, 1.08, 1],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.15,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                    ))}
                    {/* Flower center */}
                    <circle cx="300" cy="200" r="12" fill="#ff6f00" />
                    <circle cx="300" cy="200" r="8" fill="#f57c00" />
                    {/* Pollen dots */}
                    {[...Array(8)].map((_, i) => (
                      <circle
                        key={i}
                        cx={300 + Math.cos((i * 45 * Math.PI) / 180) * 4}
                        cy={200 + Math.sin((i * 45 * Math.PI) / 180) * 4}
                        r="1.5"
                        fill="#ffeb3b"
                      />
                    ))}
                  </motion.g>

                  <g transform="translate(480, 420)">
                    {/* Board base */}
                    <rect x="0" y="0" width="140" height="100" fill="#006699" rx="4" stroke="#004d73" strokeWidth="2" />

                    {/* USB port */}
                    <rect x="-8" y="35" width="10" height="15" fill="#c0c0c0" stroke="#808080" strokeWidth="1" />
                    <rect x="-6" y="37" width="6" height="11" fill="#1a1a1a" />

                    {/* Power jack */}
                    <circle cx="15" cy="10" r="6" fill="#1a1a1a" stroke="#404040" strokeWidth="1" />
                    <circle cx="15" cy="10" r="3" fill="#808080" />

                    {/* Microcontroller chip */}
                    <rect x="45" y="30" width="50" height="40" fill="#1a1a1a" stroke="#404040" strokeWidth="1" />
                    <text x="70" y="52" fontSize="8" fill="#808080" textAnchor="middle" fontFamily="monospace">
                      ATMEGA
                    </text>

                    {/* Chip pins */}
                    {[...Array(8)].map((_, i) => (
                      <g key={i}>
                        <rect x="42" y={32 + i * 8} width="3" height="2" fill="#c0c0c0" />
                        <rect x="95" y={32 + i * 8} width="3" height="2" fill="#c0c0c0" />
                      </g>
                    ))}

                    {/* Pin headers */}
                    {[...Array(14)].map((_, i) => (
                      <rect
                        key={i}
                        x={10 + i * 9}
                        y="85"
                        width="4"
                        height="12"
                        fill="#1a1a1a"
                        stroke="#404040"
                        strokeWidth="0.5"
                      />
                    ))}

                    {/* LEDs */}
                    <motion.circle
                      cx="120"
                      cy="15"
                      r="3"
                      fill="#4caf50"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <motion.circle
                      cx="120"
                      cy="25"
                      r="3"
                      fill="#ff9800"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />

                    {/* Arduino text */}
                    <text
                      x="70"
                      y="95"
                      fontSize="10"
                      fill="white"
                      textAnchor="middle"
                      fontFamily="Arial"
                      fontWeight="bold"
                    >
                      ARDUINO
                    </text>

                    {/* Capacitors */}
                    <circle cx="25" cy="50" r="4" fill="#fbc02d" stroke="#f57f17" strokeWidth="1" />
                    <circle cx="110" cy="50" r="4" fill="#fbc02d" stroke="#f57f17" strokeWidth="1" />
                  </g>

                  {/* Wire from moisture sensor to Arduino */}
                  <motion.path
                    d="M 295 460 L 295 480 L 480 480 L 480 470"
                    stroke="#2196f3"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 2.5 }}
                  />

                  {/* Animated data packets on moisture wire */}
                  {[...Array(3)].map((_, i) => (
                    <motion.circle
                      key={`moisture-${i}`}
                      r="4"
                      fill="#2196f3"
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      transition={{
                        duration: 2,
                        delay: 3 + i * 0.7,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <animateMotion dur="2s" repeatCount="indefinite" begin={`${i * 0.7}s`}>
                        <mpath href="#moisturePath" />
                      </animateMotion>
                    </motion.circle>
                  ))}
                  <path id="moisturePath" d="M 295 460 L 295 480 L 480 480 L 480 470" fill="none" />

                  {/* Wire from light sensor (top of plant) to Arduino */}
                  <motion.path
                    d="M 320 200 L 380 200 L 380 440 L 480 440"
                    stroke="#fbc02d"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 2.7 }}
                  />

                  {/* Light sensor at top */}
                  <g transform="translate(320, 195)">
                    <rect x="0" y="0" width="12" height="8" fill="#1976d2" rx="1" />
                    <circle cx="6" cy="4" r="2" fill="#ffeb3b" />
                  </g>

                  {/* Animated data packets on light wire */}
                  {[...Array(3)].map((_, i) => (
                    <motion.circle
                      key={`light-${i}`}
                      r="4"
                      fill="#fbc02d"
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      transition={{
                        duration: 2.5,
                        delay: 3.2 + i * 0.8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <animateMotion dur="2.5s" repeatCount="indefinite" begin={`${i * 0.8}s`}>
                        <mpath href="#lightPath" />
                      </animateMotion>
                    </motion.circle>
                  ))}
                  <path id="lightPath" d="M 320 200 L 380 200 L 380 440 L 480 440" fill="none" />

                  {/* Wire from temperature sensor (mid stem) to Arduino */}
                  <motion.path
                    d="M 310 320 L 350 320 L 350 460 L 480 460"
                    stroke="#ff9800"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 2.9 }}
                  />

                  {/* Temperature sensor */}
                  <g transform="translate(305, 315)">
                    <rect x="0" y="0" width="8" height="12" fill="#ff5722" rx="1" />
                    <rect x="2" y="2" width="4" height="8" fill="#ff9800" />
                  </g>

                  {/* Animated data packets on temperature wire */}
                  {[...Array(3)].map((_, i) => (
                    <motion.circle
                      key={`temp-${i}`}
                      r="4"
                      fill="#ff9800"
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      transition={{
                        duration: 2.2,
                        delay: 3.4 + i * 0.75,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <animateMotion dur="2.2s" repeatCount="indefinite" begin={`${i * 0.75}s`}>
                        <mpath href="#tempPath" />
                      </animateMotion>
                    </motion.circle>
                  ))}
                  <path id="tempPath" d="M 310 320 L 350 320 L 350 460 L 480 460" fill="none" />

                  {/* Arduino label with icon */}
                  <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 }}>
                    <rect
                      x="470"
                      y="535"
                      width="160"
                      height="35"
                      fill="white"
                      stroke="#006699"
                      strokeWidth="2"
                      rx="4"
                    />
                    <text x="550" y="555" fontSize="14" fill="#006699" textAnchor="middle" fontWeight="bold">
                      Arduino Logic Board
                    </text>
                  </motion.g>
                </svg>

                {/* Enhanced status indicators with better positioning */}
                <motion.div
                  className="absolute left-8 top-1/3"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center gap-3">
                    <Card
                      className={`p-4 shadow-xl ${moisture < 30 ? "border-red-500 border-2 animate-pulse bg-red-50" : "border-blue-500 bg-blue-50"}`}
                    >
                      <div className="flex items-center gap-2">
                        <Droplets className={moisture < 30 ? "text-red-500" : "text-blue-500"} size={28} />
                        <div>
                          <div className="text-xs text-gray-600 font-bold">Soil Moisture</div>
                          <div className="text-3xl font-bold">{moisture.toFixed(0)}%</div>
                          {moisture < 30 && <div className="text-xs text-red-500 font-bold">⚠ LOW!</div>}
                        </div>
                      </div>
                    </Card>
                    <svg width="70" height="20">
                      <motion.path
                        d="M 0 10 L 60 10"
                        stroke={moisture < 30 ? "#f44336" : "#2196f3"}
                        strokeWidth="4"
                        markerEnd="url(#arrowblue)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.2 }}
                      />
                      <defs>
                        <marker
                          id="arrowblue"
                          markerWidth="10"
                          markerHeight="10"
                          refX="5"
                          refY="3"
                          orient="auto"
                          markerUnits="strokeWidth"
                        >
                          <path d="M0,0 L0,6 L9,3 z" fill={moisture < 30 ? "#f44336" : "#2196f3"} />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute right-8 top-1/4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex items-center gap-3 flex-row-reverse">
                    <Card
                      className={`p-4 shadow-xl ${light < 500 ? "border-orange-500 border-2 animate-pulse bg-orange-50" : "border-yellow-400 bg-yellow-50"}`}
                    >
                      <div className="flex items-center gap-2">
                        <Sun className={light < 500 ? "text-orange-500" : "text-yellow-600"} size={28} />
                        <div>
                          <div className="text-xs text-gray-600 font-bold">Light Level</div>
                          <div className="text-3xl font-bold">{light.toFixed(0)}</div>
                          <div className="text-xs text-gray-600">lux</div>
                        </div>
                      </div>
                    </Card>
                    <svg width="70" height="20">
                      <motion.path
                        d="M 60 10 L 0 10"
                        stroke={light < 500 ? "#ff9800" : "#fbc02d"}
                        strokeWidth="4"
                        markerEnd="url(#arrowyellow)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.4 }}
                      />
                      <defs>
                        <marker
                          id="arrowyellow"
                          markerWidth="10"
                          markerHeight="10"
                          refX="5"
                          refY="3"
                          orient="auto"
                          markerUnits="strokeWidth"
                        >
                          <path d="M0,0 L0,6 L9,3 z" fill={light < 500 ? "#ff9800" : "#fbc02d"} />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute right-8 bottom-1/3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <div className="flex items-center gap-3 flex-row-reverse">
                    <Card
                      className={`p-4 shadow-xl ${temperature > 33 ? "border-red-500 border-2 animate-pulse bg-red-50" : "border-orange-400 bg-orange-50"}`}
                    >
                      <div className="flex items-center gap-2">
                        <Thermometer className={temperature > 33 ? "text-red-500" : "text-orange-500"} size={28} />
                        <div>
                          <div className="text-xs text-gray-600 font-bold">Temperature</div>
                          <div className="text-3xl font-bold">{temperature.toFixed(1)}°C</div>
                          {temperature > 33 && <div className="text-xs text-red-500 font-bold">⚠ HIGH!</div>}
                        </div>
                      </div>
                    </Card>
                    <svg width="70" height="20">
                      <motion.path
                        d="M 60 10 L 0 10"
                        stroke={temperature > 33 ? "#f44336" : "#ff9800"}
                        strokeWidth="4"
                        markerEnd="url(#arroworange)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.6 }}
                      />
                      <defs>
                        <marker
                          id="arroworange"
                          markerWidth="10"
                          markerHeight="10"
                          refX="5"
                          refY="3"
                          orient="auto"
                          markerUnits="strokeWidth"
                        >
                          <path d="M0,0 L0,6 L9,3 z" fill={temperature > 33 ? "#f44336" : "#ff9800"} />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Enhanced status banner */}
              <motion.div
                className="mt-8 p-6 rounded-xl flex items-center justify-center gap-3 shadow-lg"
                style={{ backgroundColor: `${status.color}20`, borderLeft: `6px solid ${status.color}` }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
              >
                <status.icon className="w-8 h-8" style={{ color: status.color }} />
                <span className="font-bold text-xl" style={{ color: status.color }}>
                  {status.text}
                </span>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Droplets,
              label: "Soil Moisture",
              value: `${moisture.toFixed(0)}%`,
              color: "#2196f3",
              bg: "#e3f2fd",
            },
            {
              icon: Thermometer,
              label: "Temperature",
              value: `${temperature.toFixed(1)}°C`,
              color: "#ff9800",
              bg: "#fff3e0",
            },
            { icon: Sun, label: "Light Intensity", value: `${light.toFixed(0)} lux`, color: "#fbc02d", bg: "#fffde7" },
            { icon: Wind, label: "Humidity", value: `${humidity.toFixed(0)}%`, color: "#00bcd4", bg: "#e0f7fa" },
          ].map((sensor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Card
                className="border-2 border-green-300 hover:border-green-500 transition-all shadow-lg hover:shadow-xl"
                style={{ backgroundColor: sensor.bg }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-14 h-14 rounded-full flex items-center justify-center shadow-md"
                      style={{ backgroundColor: sensor.color }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <sensor.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-sm text-gray-700 font-semibold">{sensor.label}</div>
                      <div className="text-3xl font-bold" style={{ color: sensor.color }}>
                        {sensor.value}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <Card className="border-2 border-green-400 shadow-2xl bg-white">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-50">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="w-6 h-6 text-green-700" />
                Plant Growth Over Time
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="h-64 flex items-end justify-around gap-4">
                {history.map((day, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 flex flex-col items-center gap-2"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ delay: 1 + i * 0.1 }}
                  >
                    <div className="w-full flex flex-col gap-1">
                      <motion.div
                        className="w-full bg-gradient-to-t from-[#2196f3] to-[#64b5f6] rounded-t shadow-md"
                        initial={{ height: 0 }}
                        animate={{ height: `${day.moisture * 2}px` }}
                        transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                      />
                      <motion.div
                        className="w-full bg-gradient-to-t from-[#ff9800] to-[#ffb74d] rounded-t shadow-md"
                        initial={{ height: 0 }}
                        animate={{ height: `${day.temp * 5}px` }}
                        transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                      />
                    </div>
                    <div className="text-sm font-bold text-gray-800">{day.day}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#2196f3] to-[#64b5f6] rounded shadow-md" />
                  <span className="text-sm font-semibold text-gray-700">Moisture %</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#ff9800] to-[#ffb74d] rounded shadow-md" />
                  <span className="text-sm font-semibold text-gray-700">Temperature °C</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

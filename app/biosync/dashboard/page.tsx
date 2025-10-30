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
                    {/* Clean gradients */}
                    <linearGradient id="potGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#d7ccc8" />
                      <stop offset="50%" stopColor="#bcaaa4" />
                      <stop offset="100%" stopColor="#8d6e63" />
                    </linearGradient>
                    <linearGradient id="soilGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#795548" />
                      <stop offset="100%" stopColor="#5d4037" />
                    </linearGradient>
                    <linearGradient id="stemGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#2e7d32" />
                      <stop offset="50%" stopColor="#388e3c" />
                      <stop offset="100%" stopColor="#4caf50" />
                    </linearGradient>
                    <radialGradient id="leafGradient">
                      <stop offset="0%" stopColor="#81c784" />
                      <stop offset="100%" stopColor="#4caf50" />
                    </radialGradient>
                    <linearGradient id="boardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#424242" />
                      <stop offset="100%" stopColor="#212121" />
                    </linearGradient>
                    <linearGradient id="solarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#616161" />
                      <stop offset="100%" stopColor="#424242" />
                    </linearGradient>
                  </defs>

                  {/* Clean terracotta pot */}
                  <g transform="translate(300, 420)">
                    <ellipse cx="0" cy="40" rx="55" ry="12" fill="url(#potGradient)" stroke="#5d4037" strokeWidth="2"/>
                    <path d="M -50 40 Q -55 80 0 85 Q 55 80 50 40 Z" fill="url(#potGradient)" stroke="#5d4037" strokeWidth="2"/>
                    <ellipse cx="0" cy="40" rx="50" ry="8" fill="#a1887f" opacity="0.3"/>
                  </g>

                  {/* Soil layer */}
                  <ellipse cx="300" cy="460" rx="48" ry="8" fill="url(#soilGradient)" />

                  {/* Beautiful Money Plant Design */}
                  <motion.g
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  >
                    {/* Main central vine */}
                    <motion.path
                      d="M 300 460 Q 295 420 293 380 Q 290 340 288 300 Q 285 260 283 220 Q 280 180 278 140 Q 275 100 273 70"
                      stroke="url(#stemGradient)"
                      strokeWidth="5"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                    />
                    
                    {/* Left trailing vine */}
                    <motion.path
                      d="M 298 450 Q 280 410 270 370 Q 260 330 255 290 Q 250 250 248 210 Q 245 170 243 130"
                      stroke="url(#stemGradient)"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2.8, delay: 0.3, ease: "easeInOut" }}
                    />
                    
                    {/* Right trailing vine */}
                    <motion.path
                      d="M 302 450 Q 315 410 320 370 Q 325 330 328 290 Q 330 250 332 210 Q 334 170 335 130"
                      stroke="url(#stemGradient)"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2.8, delay: 0.5, ease: "easeInOut" }}
                    />

                    {/* Gorgeous heart-shaped leaves */}
                    {[
                      // Central vine - larger, prominent leaves
                      { x: 293, y: 400, rotate: -35, size: 1.4, delay: 1.2, side: 'left' },
                      { x: 291, y: 350, rotate: 25, size: 1.3, delay: 1.4, side: 'right' },
                      { x: 288, y: 300, rotate: -30, size: 1.5, delay: 1.6, side: 'left' },
                      { x: 286, y: 250, rotate: 35, size: 1.3, delay: 1.8, side: 'right' },
                      { x: 283, y: 200, rotate: -25, size: 1.4, delay: 2.0, side: 'left' },
                      { x: 280, y: 150, rotate: 30, size: 1.2, delay: 2.2, side: 'right' },
                      { x: 278, y: 100, rotate: -20, size: 1.3, delay: 2.4, side: 'left' },

                      // Left vine leaves
                      { x: 270, y: 380, rotate: -40, size: 1.2, delay: 1.3, side: 'left' },
                      { x: 265, y: 340, rotate: 20, size: 1.1, delay: 1.5, side: 'right' },
                      { x: 258, y: 300, rotate: -35, size: 1.3, delay: 1.7, side: 'left' },
                      { x: 253, y: 260, rotate: 25, size: 1.2, delay: 1.9, side: 'right' },
                      { x: 250, y: 220, rotate: -30, size: 1.1, delay: 2.1, side: 'left' },
                      { x: 247, y: 180, rotate: 20, size: 1.0, delay: 2.3, side: 'right' },

                      // Right vine leaves
                      { x: 320, y: 380, rotate: 40, size: 1.2, delay: 1.4, side: 'right' },
                      { x: 323, y: 340, rotate: -25, size: 1.1, delay: 1.6, side: 'left' },
                      { x: 326, y: 300, rotate: 35, size: 1.3, delay: 1.8, side: 'right' },
                      { x: 329, y: 260, rotate: -30, size: 1.2, delay: 2.0, side: 'left' },
                      { x: 331, y: 220, rotate: 30, size: 1.1, delay: 2.2, side: 'right' },
                      { x: 333, y: 180, rotate: -20, size: 1.0, delay: 2.4, side: 'left' },
                    ].map((leaf, i) => {
                      const leafX = leaf.x + (leaf.side === 'left' ? -10 * leaf.size : 10 * leaf.size);
                      return (
                        <motion.g key={i}>
                          {/* Petiole (leaf stem) */}
                          <motion.line
                            x1={leaf.x}
                            y1={leaf.y}
                            x2={leafX}
                            y2={leaf.y}
                            stroke="#388e3c"
                            strokeWidth="2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.9 }}
                            transition={{ delay: leaf.delay, duration: 0.4 }}
                          />
                          
                          {/* Beautiful heart-shaped leaf */}
                          <motion.path
                            d={`M ${leafX} ${leaf.y} 
                                Q ${leafX - 18 * leaf.size} ${leaf.y - 10 * leaf.size} ${leafX - 20 * leaf.size} ${leaf.y + 8 * leaf.size}
                                Q ${leafX - 10 * leaf.size} ${leaf.y + 22 * leaf.size} ${leafX} ${leaf.y + 28 * leaf.size}
                                Q ${leafX + 10 * leaf.size} ${leaf.y + 22 * leaf.size} ${leafX + 20 * leaf.size} ${leaf.y + 8 * leaf.size}
                                Q ${leafX + 18 * leaf.size} ${leaf.y - 10 * leaf.size} ${leafX} ${leaf.y}
                                Z`}
                            fill="url(#leafGradient)"
                            stroke="#2e7d32"
                            strokeWidth="1.5"
                            transform={`rotate(${leaf.rotate} ${leafX} ${leaf.y + 14 * leaf.size})`}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: leaf.delay + 0.2, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                          />
                          
                          {/* Central vein */}
                          <motion.line
                            x1={leafX}
                            y1={leaf.y + 2 * leaf.size}
                            x2={leafX}
                            y2={leaf.y + 26 * leaf.size}
                            stroke="#1b5e20"
                            strokeWidth="1"
                            opacity="0.5"
                            transform={`rotate(${leaf.rotate} ${leafX} ${leaf.y + 14 * leaf.size})`}
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.5 }}
                            transition={{ delay: leaf.delay + 0.5, duration: 0.3 }}
                          />
                          
                          {/* Side veins */}
                          {[0.3, 0.5, 0.7].map((ratio, j) => (
                            <motion.g key={j}>
                              <motion.line
                                x1={leafX}
                                y1={leaf.y + (2 + 24 * ratio) * leaf.size}
                                x2={leafX - 8 * leaf.size}
                                y2={leaf.y + (2 + 24 * ratio + 4) * leaf.size}
                                stroke="#1b5e20"
                                strokeWidth="0.5"
                                opacity="0.4"
                                transform={`rotate(${leaf.rotate} ${leafX} ${leaf.y + 14 * leaf.size})`}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.4 }}
                                transition={{ delay: leaf.delay + 0.6 + j * 0.1, duration: 0.2 }}
                              />
                              <motion.line
                                x1={leafX}
                                y1={leaf.y + (2 + 24 * ratio) * leaf.size}
                                x2={leafX + 8 * leaf.size}
                                y2={leaf.y + (2 + 24 * ratio + 4) * leaf.size}
                                stroke="#1b5e20"
                                strokeWidth="0.5"
                                opacity="0.4"
                                transform={`rotate(${leaf.rotate} ${leafX} ${leaf.y + 14 * leaf.size})`}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.4 }}
                                transition={{ delay: leaf.delay + 0.6 + j * 0.1, duration: 0.2 }}
                              />
                            </motion.g>
                          ))}
                        </motion.g>
                      );
                    })}

                    {/* Delicate aerial roots */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3 }}
                    >
                      <motion.path
                        d="M 288 350 Q 283 360 280 380"
                        stroke="#66bb6a"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        opacity="0.6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 3 }}
                      />
                      <motion.path
                        d="M 290 290 Q 285 300 282 320"
                        stroke="#66bb6a"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        opacity="0.6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 3.2 }}
                      />
                      <motion.path
                        d="M 326 330 Q 331 340 334 360"
                        stroke="#66bb6a"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        opacity="0.6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 3.4 }}
                      />
                    </motion.g>
                  </motion.g>

                  {/* Professional Circuit Board Design */}
                  <motion.g
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 }}
                  >
                    {/* Circuit Board Base - More realistic PCB */}
                    <rect x="420" y="380" width="320" height="180" fill="#0d5e2e" rx="8" stroke="#1e4620" strokeWidth="2" opacity="0.98"/>
                    
                    {/* PCB texture - copper traces pattern */}
                    <g opacity="0.15">
                      {[...Array(12)].map((_, i) => (
                        <line key={`trace-${i}`} x1="430" y1={390 + i * 14} x2="730" y2={390 + i * 14} stroke="#d4af37" strokeWidth="0.5"/>
                      ))}
                    </g>
                    
                    {/* Mounting holes */}
                    <circle cx="435" cy="395" r="4" fill="#2c2c2c" stroke="#555" strokeWidth="1"/>
                    <circle cx="725" cy="395" r="4" fill="#2c2c2c" stroke="#555" strokeWidth="1"/>
                    <circle cx="435" cy="545" r="4" fill="#2c2c2c" stroke="#555" strokeWidth="1"/>
                    <circle cx="725" cy="545" r="4" fill="#2c2c2c" stroke="#555" strokeWidth="1"/>
                    
                    {/* Solar Panel - Top Center - More realistic */}
                    <g transform="translate(520, 400)">
                      {/* Panel frame with depth */}
                      <rect x="0" y="0" width="120" height="70" fill="#3a3a3a" rx="4" stroke="#757575" strokeWidth="2"/>
                      <rect x="2" y="2" width="116" height="66" fill="#1a1a1a" rx="3"/>
                      <rect x="4" y="4" width="112" height="62" fill="#0a0a0a" rx="2"/>
                      
                      {/* Solar cells 3x5 grid with more detail */}
                      {Array.from({length: 3}).map((_, row) =>
                        Array.from({length: 5}).map((_, col) => (
                          <g key={`solar-${row}-${col}`}>
                            <rect 
                              x={6 + col * 22} 
                              y={6 + row * 20} 
                              width="18" 
                              height="16" 
                              fill="#1e40af" 
                              stroke="#2563eb" 
                              strokeWidth="0.8"
                            />
                            {/* Cell internal lines */}
                            <line x1={7 + col * 22} y1={14 + row * 20} x2={23 + col * 22} y2={14 + row * 20} stroke="#1e3a8a" strokeWidth="0.3"/>
                            <line x1={15 + col * 22} y1={7 + row * 20} x2={15 + col * 22} y2={21 + row * 20} stroke="#1e3a8a" strokeWidth="0.3"/>
                          </g>
                        ))
                      )}
                      
                      {/* Solar panel shine effect */}
                      <rect x="8" y="8" width="35" height="45" fill="white" opacity="0.12" rx="2"/>
                      <text x="60" y="40" fontSize="8" fill="#fbbf24" textAnchor="middle" fontWeight="bold" fontFamily="monospace">SOLAR 5V</text>
                      <text x="60" y="50" fontSize="5" fill="#94a3b8" textAnchor="middle">12W MAX</text>
                      
                      {/* Connection terminals with labels */}
                      <circle cx="10" cy="68" r="3.5" fill="#dc2626" stroke="#7f1d1d" strokeWidth="1.5"/>
                      <circle cx="110" cy="68" r="3.5" fill="#1f2937" stroke="#111827" strokeWidth="1.5"/>
                      <text x="10" y="80" fontSize="6" fill="#dc2626" textAnchor="middle" fontWeight="bold">+</text>
                      <text x="110" y="80" fontSize="6" fill="#6b7280" textAnchor="middle" fontWeight="bold">-</text>
                    </g>

                    {/* Arduino ESP32 - Center Bottom - Enhanced realism */}
                    <g transform="translate(490, 485)">
                      {/* Board PCB with shadow */}
                      <rect x="2" y="2" width="140" height="65" fill="#000" opacity="0.3" rx="4"/>
                      <rect x="0" y="0" width="140" height="65" fill="#2c2c2c" rx="4" stroke="#1a1a1a" strokeWidth="2"/>
                      <rect x="3" y="3" width="134" height="59" fill="#047857" rx="2"/>
                      
                      {/* Silkscreen text */}
                      <text x="10" y="58" fontSize="4" fill="#e5e7eb" opacity="0.8" fontFamily="monospace">v2.0</text>
                      
                      {/* USB connector - more detailed */}
                      <rect x="65" y="-2" width="12" height="9" fill="#c0c0c0" stroke="#6b7280" strokeWidth="1" rx="1"/>
                      <rect x="67" y="0" width="8" height="6" fill="#2c2c2c" rx="0.5"/>
                      <rect x="68.5" y="1" width="5" height="4" fill="#1a1a1a"/>
                      
                      {/* ESP32 chip with more detail */}
                      <rect x="44" y="14" width="52" height="37" fill="#0f172a" rx="2" stroke="#1e293b" strokeWidth="1.5"/>
                      <rect x="46" y="16" width="48" height="33" fill="#1e293b" rx="1"/>
                      
                      {/* Chip pins */}
                      {[...Array(6)].map((_, i) => (
                        <g key={`chip-pin-${i}`}>
                          <rect x={48 + i * 7.5} y="49" width="4" height="1.5" fill="#4b5563"/>
                          <rect x={48 + i * 7.5} y="15" width="4" height="1.5" fill="#4b5563"/>
                        </g>
                      ))}
                      
                      <text x="70" y="28" fontSize="7" fill="#10b981" textAnchor="middle" fontFamily="monospace" fontWeight="bold">ESP32</text>
                      <text x="70" y="37" fontSize="5" fill="#6ee7b7" textAnchor="middle" fontFamily="monospace">WROOM-32</text>
                      <text x="70" y="44" fontSize="4" fill="#6ee7b7" textAnchor="middle" fontFamily="monospace" opacity="0.7">WiFi+BT</text>
                      
                      {/* Status LEDs with labels */}
                      <circle cx="12" cy="12" r="3" fill="#22c55e" opacity="0.9">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="22" cy="12" r="3" fill="#3b82f6" opacity="0.9">
                        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="32" cy="12" r="3" fill="#f59e0b" opacity="0.6">
                        <animate attributeName="opacity" values="0.5;0.7;0.5" dur="3s" repeatCount="indefinite"/>
                      </circle>
                      
                      <text x="12" y="8" fontSize="3.5" fill="#22c55e" textAnchor="middle" fontWeight="bold">PWR</text>
                      <text x="22" y="8" fontSize="3.5" fill="#3b82f6" textAnchor="middle" fontWeight="bold">TX</text>
                      <text x="32" y="8" fontSize="3.5" fill="#f59e0b" textAnchor="middle" fontWeight="bold">RX</text>
                      
                      {/* Pin headers left with better detail */}
                      <g>
                        {[...Array(8)].map((_, i) => (
                          <g key={`pin-l-${i}`}>
                            <rect x="4" y={20 + i * 5} width="4" height="3.5" fill="#1f2937" stroke="#000" strokeWidth="0.5"/>
                            <rect x="5" y={20.5 + i * 5} width="2" height="2.5" fill="#d4d4d4"/>
                          </g>
                        ))}
                      </g>
                      
                      {/* Pin headers right */}
                      <g>
                        {[...Array(8)].map((_, i) => (
                          <g key={`pin-r-${i}`}>
                            <rect x="132" y={20 + i * 5} width="4" height="3.5" fill="#1f2937" stroke="#000" strokeWidth="0.5"/>
                            <rect x="133" y={20.5 + i * 5} width="2" height="2.5" fill="#d4d4d4"/>
                          </g>
                        ))}
                      </g>
                      
                      {/* Reset button */}
                      <rect x="108" y="10" width="8" height="8" fill="#374151" rx="1" stroke="#1f2937" strokeWidth="1"/>
                      <rect x="110" y="12" width="4" height="4" fill="#4b5563" rx="0.5"/>
                      <text x="112" y="24" fontSize="3" fill="#9ca3af" textAnchor="middle">RST</text>
                      
                      <text x="70" y="60" fontSize="6" fill="#a7f3d0" textAnchor="middle" fontFamily="monospace" fontWeight="bold">ARDUINO ESP32</text>
                    </g>

                    {/* LDR Sensor - Enhanced */}
                    <g transform="translate(660, 495)">
                      {/* Sensor module with shadow */}
                      <rect x="2" y="2" width="55" height="45" fill="#000" opacity="0.2" rx="3"/>
                      <rect x="0" y="0" width="55" height="45" fill="#1e293b" rx="3" stroke="#0f172a" strokeWidth="2"/>
                      <rect x="2" y="2" width="51" height="41" fill="#334155" rx="2"/>
                      
                      {/* LDR component with glass dome effect */}
                      <circle cx="27.5" cy="18" r="11" fill="#6b21a8" stroke="#4c1d95" strokeWidth="2"/>
                      <circle cx="27.5" cy="18" r="10" fill="#7c3aed" stroke="#5b21b6" strokeWidth="1.5"/>
                      <circle cx="27.5" cy="18" r="7" fill="#a78bfa" opacity="0.7">
                        <animate attributeName="opacity" values="0.4;0.95;0.4" dur="3s" repeatCount="indefinite"/>
                      </circle>
                      
                      {/* Glass highlight */}
                      <ellipse cx="24" cy="15" rx="4" ry="3" fill="white" opacity="0.4"/>
                      
                      {/* Wavy light-sensitive pattern */}
                      <path d="M 20 18 Q 23 15 27.5 18 Q 32 21 35 18" stroke="#ddd6fe" strokeWidth="1.2" fill="none"/>
                      <path d="M 21 20 Q 24 17 27.5 20 Q 31 23 34 20" stroke="#c4b5fd" strokeWidth="0.8" fill="none" opacity="0.6"/>
                      
                      {/* Connection pins - 3D effect */}
                      <rect x="7" y="38" width="4" height="7" fill="#d97706" stroke="#92400e" strokeWidth="0.8" rx="0.5"/>
                      <rect x="22" y="38" width="4" height="7" fill="#dc2626" stroke="#7f1d1d" strokeWidth="0.8" rx="0.5"/>
                      <rect x="37" y="38" width="4" height="7" fill="#1f2937" stroke="#000" strokeWidth="0.8" rx="0.5"/>
                      
                      <text x="27.5" y="36" fontSize="5" fill="#c4b5fd" textAnchor="middle" fontWeight="bold">LDR SENSOR</text>
                      
                      {/* Pin labels */}
                      <text x="9" y="49" fontSize="4" fill="#fbbf24" textAnchor="middle" fontWeight="bold">S</text>
                      <text x="24" y="49" fontSize="4" fill="#dc2626" textAnchor="middle" fontWeight="bold">+</text>
                      <text x="39" y="49" fontSize="4" fill="#6b7280" textAnchor="middle" fontWeight="bold">-</text>
                    </g>

                    {/* Moisture Sensor - Enhanced realism */}
                    <g transform="translate(420, 495)">
                      {/* Module with shadow */}
                      <rect x="2" y="2" width="50" height="45" fill="#000" opacity="0.2" rx="3"/>
                      <rect x="0" y="0" width="50" height="45" fill="#0c4a6e" rx="3" stroke="#075985" strokeWidth="2"/>
                      <rect x="2" y="2" width="46" height="41" fill="#0e7490" rx="2"/>
                      
                      {/* Sensor probes with 3D effect */}
                      <line x1="12" y1="10" x2="12" y2="30" stroke="#b45309" strokeWidth="4" strokeLinecap="round"/>
                      <line x1="12" y1="10" x2="12" y2="30" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round"/>
                      <line x1="25" y1="10" x2="25" y2="30" stroke="#b45309" strokeWidth="4" strokeLinecap="round"/>
                      <line x1="25" y1="10" x2="25" y2="30" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round"/>
                      <line x1="38" y1="10" x2="38" y2="30" stroke="#b45309" strokeWidth="4" strokeLinecap="round"/>
                      <line x1="38" y1="10" x2="38" y2="30" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round"/>
                      
                      {/* Probe tips */}
                      <circle cx="12" cy="30" r="2" fill="#d97706"/>
                      <circle cx="25" cy="30" r="2" fill="#d97706"/>
                      <circle cx="38" cy="30" r="2" fill="#d97706"/>
                      
                      {/* Water drops animation */}
                      <circle cx="19" cy="20" r="2.5" fill="#3b82f6" opacity="0.8">
                        <animate attributeName="cy" values="15;27;15" dur="2s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.3;0.95;0.3" dur="2s" repeatCount="indefinite"/>
                      </circle>
                      
                      <text x="25" y="40" fontSize="5" fill="#7dd3fc" textAnchor="middle" fontWeight="bold">MOISTURE</text>
                    </g>

                    {/* Wires from Moisture Sensor to Soil in Pot */}
                    <motion.path
                      d="M 432 540 Q 400 520 360 485 Q 330 460 300 460"
                      stroke="#b45309"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 4 }}
                    />
                    <motion.path
                      d="M 445 540 Q 410 510 375 480 Q 340 455 310 460"
                      stroke="#d97706"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 4.2 }}
                    />
                    
                    {/* Wire ends in soil */}
                    <motion.circle
                      cx="300"
                      cy="460"
                      r="3"
                      fill="#b45309"
                      stroke="#78350f"
                      strokeWidth="1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 5.2 }}
                    />
                    <motion.circle
                      cx="310"
                      cy="460"
                      r="3"
                      fill="#d97706"
                      stroke="#92400e"
                      strokeWidth="1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 5.4 }}
                    />

                    {/* Circuit Traces/Wires - Enhanced */}
                    {/* Solar to Arduino (Power) - thicker, more realistic */}
                    <motion.path
                      d="M 580 478 L 580 485"
                      stroke="#dc2626"
                      strokeWidth="3.5"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 3 }}
                    />
                    <motion.path
                      d="M 630 478 L 630 485"
                      stroke="#1f2937"
                      strokeWidth="3.5"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 3 }}
                    />
                    
                    {/* Arduino to LDR (Signal) */}
                    <motion.path
                      d="M 630 515 L 668 515 L 668 533"
                      stroke="#fbbf24"
                      strokeWidth="2.5"
                      fill="none"
                      strokeDasharray="5,3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 3.3 }}
                    />
                    
                    {/* Arduino to Moisture (Signal) */}
                    <motion.path
                      d="M 490 515 L 445 515 L 445 533"
                      stroke="#3b82f6"
                      strokeWidth="2.5"
                      fill="none"
                      strokeDasharray="5,3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 3.5 }}
                    />
                    
                    {/* Ground connections */}
                    <motion.path
                      d="M 622 545 L 687 545 L 698 545"
                      stroke="#374151"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 3.7 }}
                    />

                    {/* Data flow particles - enhanced */}
                    <motion.circle r="3.5" fill="#22c55e" stroke="#16a34a" strokeWidth="1">
                      <animateMotion dur="2s" repeatCount="indefinite">
                        <mpath href="#dataFlow1"/>
                      </animateMotion>
                      <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
                    </motion.circle>
                    <path id="dataFlow1" d="M 668 533 L 668 515 L 630 515" fill="none"/>
                    
                    <motion.circle r="3.5" fill="#3b82f6" stroke="#2563eb" strokeWidth="1">
                      <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.5s">
                        <mpath href="#dataFlow2"/>
                      </animateMotion>
                      <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
                    </motion.circle>
                    <path id="dataFlow2" d="M 445 533 L 445 515 L 490 515" fill="none"/>

                    {/* Connection labels with better styling */}
                    <text x="560" y="482" fontSize="7" fill="#dc2626" fontWeight="bold" fontFamily="monospace">5V</text>
                    <text x="645" y="510" fontSize="6" fill="#fbbf24" fontFamily="monospace">A0</text>
                    <text x="460" y="510" fontSize="6" fill="#3b82f6" fontFamily="monospace">A1</text>
                    <text x="630" y="548" fontSize="5" fill="#6b7280" fontFamily="monospace">GND</text>
                  </motion.g>
                </svg>

                {/* Enhanced status indicators with better positioning */}
                {/* Soil Moisture - Left side, centered vertically */}
                <motion.div
                  className="absolute left-6 top-1/2 -translate-y-1/2"
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

                {/* Light Level - Right side, upper position */}
                <motion.div
                  className="absolute right-6 top-1/3 -translate-y-1/2"
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

                {/* Temperature - Right side, lower position */}
                <motion.div
                  className="absolute right-6 bottom-1/4 translate-y-1/2"
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
                Predicted Plant Health
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Current plant snapshot */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="text-lg font-semibold text-green-800 mb-4">Today</div>
                  <svg viewBox="0 0 300 220" className="w-full">
                    <defs>
                      <linearGradient id="pStemNow" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#2e7d32" />
                        <stop offset="50%" stopColor="#388e3c" />
                        <stop offset="100%" stopColor="#4caf50" />
                      </linearGradient>
                      <radialGradient id="pLeafNow">
                        <stop offset="0%" stopColor="#81c784" />
                        <stop offset="100%" stopColor="#4caf50" />
                      </radialGradient>
                    </defs>
                    
                    {/* Pot shadow */}
                    <ellipse cx="150" cy="195" rx="35" ry="8" fill="#6d4c41" opacity="0.15" />
                    
                    {/* Simple pot */}
                    <ellipse cx="150" cy="185" rx="30" ry="7" fill="#bcaaa4" stroke="#8d6e63" strokeWidth="1.5"/>
                    <path d="M 120 185 Q 118 205 150 208 Q 182 205 180 185 Z" fill="#bcaaa4" stroke="#8d6e63" strokeWidth="1.5"/>
                    
                    {/* Soil */}
                    <ellipse cx="150" cy="185" rx="28" ry="5" fill="#795548" />
                    
                    {/* Money plant vines - smaller version */}
                    {/* Main vine */}
                    <path d="M 150 185 Q 148 165 147 145 Q 146 125 145 105 Q 144 85 143 70" stroke="url(#pStemNow)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
                    
                    {/* Left vine */}
                    <path d="M 149 180 Q 140 165 135 145 Q 130 125 128 105" stroke="url(#pStemNow)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    
                    {/* Right vine */}
                    <path d="M 151 180 Q 158 165 162 145 Q 165 125 167 105" stroke="url(#pStemNow)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    
                    {/* Heart-shaped leaves */}
                    {[
                      // Central vine leaves
                      { x: 147, y: 165, rotate: -30, size: 0.85, side: 'left' },
                      { x: 146, y: 145, rotate: 25, size: 0.8, side: 'right' },
                      { x: 145, y: 125, rotate: -25, size: 0.9, side: 'left' },
                      { x: 144, y: 105, rotate: 30, size: 0.75, side: 'right' },
                      { x: 143, y: 85, rotate: -20, size: 0.8, side: 'left' },
                      
                      // Left vine leaves
                      { x: 135, y: 155, rotate: -35, size: 0.75, side: 'left' },
                      { x: 132, y: 135, rotate: 20, size: 0.7, side: 'right' },
                      { x: 129, y: 115, rotate: -30, size: 0.75, side: 'left' },
                      
                      // Right vine leaves
                      { x: 162, y: 155, rotate: 35, size: 0.75, side: 'right' },
                      { x: 164, y: 135, rotate: -20, size: 0.7, side: 'left' },
                      { x: 166, y: 115, rotate: 25, size: 0.75, side: 'right' },
                    ].map((leaf, i) => {
                      const leafX = leaf.x + (leaf.side === 'left' ? -8 * leaf.size : 8 * leaf.size);
                      return (
                        <g key={i}>
                          {/* Petiole */}
                          <line x1={leaf.x} y1={leaf.y} x2={leafX} y2={leaf.y} stroke="#388e3c" strokeWidth="1.5" opacity="0.9"/>
                          
                          {/* Heart-shaped leaf */}
                          <path
                            d={`M ${leafX} ${leaf.y} 
                                Q ${leafX - 14 * leaf.size} ${leaf.y - 8 * leaf.size} ${leafX - 16 * leaf.size} ${leaf.y + 6 * leaf.size}
                                Q ${leafX - 8 * leaf.size} ${leaf.y + 17 * leaf.size} ${leafX} ${leaf.y + 22 * leaf.size}
                                Q ${leafX + 8 * leaf.size} ${leaf.y + 17 * leaf.size} ${leafX + 16 * leaf.size} ${leaf.y + 6 * leaf.size}
                                Q ${leafX + 14 * leaf.size} ${leaf.y - 8 * leaf.size} ${leafX} ${leaf.y}
                                Z`}
                            fill="url(#pLeafNow)"
                            stroke="#2e7d32"
                            strokeWidth="1.2"
                            transform={`rotate(${leaf.rotate} ${leafX} ${leaf.y + 11 * leaf.size})`}
                          />
                          
                          {/* Central vein */}
                          <line
                            x1={leafX}
                            y1={leaf.y + 2 * leaf.size}
                            x2={leafX}
                            y2={leaf.y + 20 * leaf.size}
                            stroke="#1b5e20"
                            strokeWidth="0.8"
                            opacity="0.5"
                            transform={`rotate(${leaf.rotate} ${leafX} ${leaf.y + 11 * leaf.size})`}
                          />
                        </g>
                      );
                    })}
                  </svg>
                  <div className="mt-3 text-sm text-green-700">Status: Stable, needs routine care</div>
                </div>

                {/* Predicted healthier plant */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <div className="text-lg font-semibold text-emerald-800 mb-1 flex items-center gap-2">In 14 days
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded">Predicted</span>
                  </div>
                  <svg viewBox="0 0 300 220" className="w-full">
                    <defs>
                      <linearGradient id="pStemFuture" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#1b5e20" />
                        <stop offset="50%" stopColor="#2e7d32" />
                        <stop offset="100%" stopColor="#388e3c" />
                      </linearGradient>
                      <radialGradient id="pLeafFuture">
                        <stop offset="0%" stopColor="#a5d6a7" />
                        <stop offset="100%" stopColor="#2e7d32" />
                      </radialGradient>
                    </defs>
                    
                    {/* Pot shadow */}
                    <ellipse cx="150" cy="195" rx="38" ry="9" fill="#6d4c41" opacity="0.15" />
                    
                    {/* Simple pot */}
                    <ellipse cx="150" cy="185" rx="32" ry="8" fill="#bcaaa4" stroke="#8d6e63" strokeWidth="1.5"/>
                    <path d="M 118 185 Q 116 207 150 210 Q 184 207 182 185 Z" fill="#bcaaa4" stroke="#8d6e63" strokeWidth="1.5"/>
                    
                    {/* Soil */}
                    <ellipse cx="150" cy="185" rx="30" ry="6" fill="#795548" />
                    
                    {/* Money plant vines - larger, healthier version */}
                    {/* Main vine - taller */}
                    <path d="M 150 185 Q 148 155 147 125 Q 146 95 145 65 Q 144 45 143 30" stroke="url(#pStemFuture)" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
                    
                    {/* Left vine */}
                    <path d="M 149 180 Q 138 155 133 125 Q 128 95 125 70" stroke="url(#pStemFuture)" strokeWidth="4" fill="none" strokeLinecap="round"/>
                    
                    {/* Right vine */}
                    <path d="M 151 180 Q 160 155 165 125 Q 170 95 173 70" stroke="url(#pStemFuture)" strokeWidth="4" fill="none" strokeLinecap="round"/>
                    
                    {/* Additional branch - left */}
                    <path d="M 147 145 Q 135 135 125 120" stroke="url(#pStemFuture)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
                    
                    {/* Additional branch - right */}
                    <path d="M 147 125 Q 160 115 170 100" stroke="url(#pStemFuture)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
                    
                    {/* Heart-shaped leaves - more and larger */}
                    {[
                      // Central vine leaves - larger
                      { x: 147, y: 165, rotate: -30, size: 1.1, side: 'left' },
                      { x: 146, y: 145, rotate: 25, size: 1.05, side: 'right' },
                      { x: 145, y: 125, rotate: -25, size: 1.15, side: 'left' },
                      { x: 145, y: 105, rotate: 30, size: 1.0, side: 'right' },
                      { x: 144, y: 85, rotate: -20, size: 1.05, side: 'left' },
                      { x: 144, y: 65, rotate: 25, size: 0.95, side: 'right' },
                      { x: 143, y: 45, rotate: -15, size: 1.0, side: 'left' },
                      
                      // Left vine leaves
                      { x: 133, y: 155, rotate: -35, size: 1.0, side: 'left' },
                      { x: 131, y: 135, rotate: 20, size: 0.95, side: 'right' },
                      { x: 128, y: 115, rotate: -30, size: 1.0, side: 'left' },
                      { x: 126, y: 95, rotate: 25, size: 0.9, side: 'right' },
                      { x: 125, y: 80, rotate: -25, size: 0.95, side: 'left' },
                      
                      // Right vine leaves
                      { x: 165, y: 155, rotate: 35, size: 1.0, side: 'right' },
                      { x: 168, y: 135, rotate: -20, size: 0.95, side: 'left' },
                      { x: 170, y: 115, rotate: 25, size: 1.0, side: 'right' },
                      { x: 172, y: 95, rotate: -20, size: 0.9, side: 'left' },
                      { x: 173, y: 80, rotate: 25, size: 0.95, side: 'right' },
                      
                      // Left branch leaves
                      { x: 130, y: 132, rotate: -40, size: 0.9, side: 'left' },
                      { x: 127, y: 125, rotate: 15, size: 0.85, side: 'right' },
                      
                      // Right branch leaves
                      { x: 165, y: 110, rotate: 40, size: 0.9, side: 'right' },
                      { x: 168, y: 103, rotate: -15, size: 0.85, side: 'left' },
                    ].map((leaf, i) => {
                      const leafX = leaf.x + (leaf.side === 'left' ? -8 * leaf.size : 8 * leaf.size);
                      return (
                        <g key={i}>
                          {/* Petiole */}
                          <line x1={leaf.x} y1={leaf.y} x2={leafX} y2={leaf.y} stroke="#2e7d32" strokeWidth="1.8" opacity="0.9"/>
                          
                          {/* Heart-shaped leaf */}
                          <path
                            d={`M ${leafX} ${leaf.y} 
                                Q ${leafX - 14 * leaf.size} ${leaf.y - 8 * leaf.size} ${leafX - 16 * leaf.size} ${leaf.y + 6 * leaf.size}
                                Q ${leafX - 8 * leaf.size} ${leaf.y + 17 * leaf.size} ${leafX} ${leaf.y + 22 * leaf.size}
                                Q ${leafX + 8 * leaf.size} ${leaf.y + 17 * leaf.size} ${leafX + 16 * leaf.size} ${leaf.y + 6 * leaf.size}
                                Q ${leafX + 14 * leaf.size} ${leaf.y - 8 * leaf.size} ${leafX} ${leaf.y}
                                Z`}
                            fill="url(#pLeafFuture)"
                            stroke="#1b5e20"
                            strokeWidth="1.3"
                            transform={`rotate(${leaf.rotate} ${leafX} ${leaf.y + 11 * leaf.size})`}
                          />
                          
                          {/* Central vein */}
                          <line
                            x1={leafX}
                            y1={leaf.y + 2 * leaf.size}
                            x2={leafX}
                            y2={leaf.y + 20 * leaf.size}
                            stroke="#0d4f0f"
                            strokeWidth="0.9"
                            opacity="0.5"
                            transform={`rotate(${leaf.rotate} ${leafX} ${leaf.y + 11 * leaf.size})`}
                          />
                        </g>
                      );
                    })}
                  </svg>
                  <div className="mt-3 text-sm text-emerald-700">Projection: Taller vines, more leaves, richer color</div>
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

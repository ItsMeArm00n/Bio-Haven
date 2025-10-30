"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Leaf, Sun, Zap, TrendingUp, Users, HomeIcon, ArrowLeft, Droplets, Thermometer, Activity, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"

export default function BioSyncPage() {
  const [showOrderPopup, setShowOrderPopup] = useState(false)

  const handlePurchase = () => {
    setShowOrderPopup(true)
    setTimeout(() => setShowOrderPopup(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navigation />

      {/* Order Confirmation Popup */}
      {showOrderPopup && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-[#2e7d32] text-white px-8 py-4 rounded-lg shadow-2xl flex items-center gap-3"
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
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#2E7D32] via-[#1B5E20] to-[#2E7D32]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Animated Plant Growth */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: 0,
              }}
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: `${20 + Math.random() * 60}%`,
                opacity: [0, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: i * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 5,
              }}
            >
              <Leaf className="w-8 h-8 text-white" />
            </motion.div>
          ))}
        </div>

        {/* Floating Circuit Elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`circuit-${i}`}
              className="absolute w-16 h-16"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 border-2 border-white/40 rounded-lg" />
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/60 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-0 right-0 w-1 h-4 bg-white/40" />
                <div className="absolute bottom-0 left-0 w-1 h-4 bg-white/40" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="font-display text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              BioSync
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl text-white/90 mb-8 max-w-3xl mx-auto text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Where Nature Meets Robotics
            </motion.p>
            <motion.p
              className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              A living, solar-powered ecosystem that helps plants care for themselves.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <motion.div
                className="flex gap-4 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link href="/biosync/dashboard">
                  <Button size="lg" className="bg-white text-[#2E7D32] hover:bg-white/90">
                    <Activity className="mr-2 h-5 w-5" />
                    View Live Demo
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                  onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore the Ecosystem
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 container mx-auto px-4 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#2e7d32] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#2e7d32] rounded-full blur-3xl"></div>
        </div>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              icon: Zap,
              title: "Smart Sensors",
              description: "Monitors soil moisture, light intensity & temperature in real-time",
              color: "#2E7D32",
            },
            {
              icon: Sun,
              title: "Solar-Powered",
              description: "Fully sustainable with zero emissions and autonomous operation",
              color: "#FFA726",
            },
            {
              icon: Leaf,
              title: "Eco-Friendly",
              description: "Saves water & reduces waste with precision plant care",
              color: "#81c784",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                initial: { opacity: 0, y: 50 },
                animate: { opacity: 1, y: 0 },
              }}
            >
              <Card className="h-full border-2 border-[#2e7d32]/20 hover:border-[#2E7D32] transition-all duration-300 hover:shadow-2xl group relative overflow-hidden">
                {/* Animated background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#2e7d32]/0 to-[#2e7d32]/0 group-hover:from-[#2e7d32]/5 group-hover:to-[#2e7d32]/10 transition-all duration-500"
                />
                <CardHeader className="relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto relative"
                    style={{ backgroundColor: `${item.color}20` }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: item.color }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 0.2 }}
                      transition={{ duration: 0.4 }}
                    />
                    <item.icon className="w-8 h-8 relative z-10" style={{ color: item.color }} />
                  </motion.div>
                  <CardTitle className="font-display text-2xl text-center">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-20 bg-[#2e7d32]/10 relative overflow-hidden">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #2e7d32 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Components & Technology</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every component carefully selected for sustainability and efficiency
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-[#2e7d32]/30">
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow className="border-[#2e7d32]/20">
                      <TableHead className="font-semibold text-gray-900">Component</TableHead>
                      <TableHead className="font-semibold text-gray-900">Function</TableHead>
                      <TableHead className="font-semibold text-gray-900 text-right">Cost (AED)</TableHead>
                      <TableHead className="font-semibold text-gray-900 text-center">Purchase</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { component: "Arduino Nano / ESP32", function: "Controller", cost: "18-29" },
                      { component: "Soil Sensor", function: "Moisture level", cost: "2" },
                      { component: "LDR", function: "Light intensity", cost: "1" },
                      { component: "DHT22", function: "Temp & humidity", cost: "3" },
                      { component: "Solar Panel (10 W)", function: "Power supply", cost: "10" },
                      { component: "Mini Pump (optional)", function: "Watering", cost: "3" },
                    ].map((row, i) => (
                      <motion.tr
                        key={i}
                        className="border-[#2e7d32]/20 hover:bg-[#2e7d32]/5"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <TableCell className="font-medium text-gray-900">{row.component}</TableCell>
                        <TableCell className="text-gray-700">{row.function}</TableCell>
                        <TableCell className="text-gray-900 text-right font-semibold">AED {row.cost}</TableCell>
                        <TableCell className="text-center">
                          <Button
                            size="sm"
                            onClick={handlePurchase}
                            className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white"
                          >
                            <ShoppingCart className="w-4 h-4 mr-1" />
                            Buy
                          </Button>
                        </TableCell>
                      </motion.tr>
                    ))}
                    <TableRow className="border-t-2 border-[#2e7d32]/30 bg-[#2e7d32]/10">
                      <TableCell colSpan={2} className="font-bold text-gray-900">
                        Total Estimated Cost
                      </TableCell>
                      <TableCell className="text-right font-bold text-[#2e7d32] text-lg">AED 91-121</TableCell>
                      <TableCell className="text-center">
                        <Button
                          onClick={handlePurchase}
                          className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold"
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

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Leaf Patterns */}
        <div className="absolute inset-0 opacity-5">
          <Leaf className="absolute top-20 left-20 w-24 h-24 text-[#2e7d32] rotate-12" />
          <Leaf className="absolute top-40 right-32 w-20 h-20 text-[#2e7d32] -rotate-45" />
          <Leaf className="absolute bottom-20 left-1/3 w-28 h-28 text-[#2e7d32] rotate-90" />
          <Leaf className="absolute bottom-32 right-20 w-16 h-16 text-[#2e7d32] -rotate-12" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A seamless integration of sensors, solar power, and intelligent automation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: "01",
                title: "Sensors Collect Data",
                description:
                  "Soil moisture sensor, LDR light sensor, and DHT22 temperature/humidity sensor continuously monitor plant conditions and environmental factors.",
                icon: Thermometer,
              },
              {
                step: "02",
                title: "Arduino Decides",
                description:
                  "Microcontroller analyzes sensor data and makes intelligent decisions: water the plant, adjust for shade, or remain idle based on optimal growing conditions.",
                icon: Zap,
              },
              {
                step: "03",
                title: "Runs on Solar Energy",
                description:
                  "10W solar panel provides completely renewable power, making the system autonomous and zero-emission. No external power source needed.",
                icon: Sun,
              },
              {
                step: "04",
                title: "Displays Data",
                description:
                  "System logs sensor readings to serial monitor or LCD display for analysis, helping users understand plant health patterns over time.",
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
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] flex items-center justify-center text-white font-bold text-xl"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.step}
                  </motion.div>
                </div>
                <div className="flex-1 bg-[#2e7d32]/5 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-[#2e7d32]/20">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-6 h-6 text-[#2e7d32]" />
                    <h3 className="font-display font-semibold text-2xl text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Sustainability Impact</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">Making a real difference for our planet</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Droplets,
                title: "60% Water Saved",
                description: "Precision irrigation eliminates waste",
                metric: "≈60%",
              },
              {
                icon: Sun,
                title: "Zero Emissions",
                description: "100% solar powered operation",
                metric: "0g CO₂",
              },
              {
                icon: Leaf,
                title: "Recycled Materials",
                description: "Reduces electronic waste",
                metric: "100%",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 mx-auto">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div className="text-4xl font-bold text-center mb-2">{item.metric}</div>
                    <CardTitle className="font-display text-xl text-center">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90 text-center">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 container mx-auto px-4 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-20 w-48 h-48 bg-[#2e7d32] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-20 w-36 h-36 bg-[#81c784] rounded-full blur-3xl"></div>
        </div>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Real-World Applications</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From homes to farms, BioSync adapts to every environment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: HomeIcon,
              title: "Home Gardening",
              description: "Keeps houseplants alive automatically for busy homeowners",
              image: "home+garden+with+smart+technology",
            },
            {
              icon: Users,
              title: "Urban Farms",
              description: "Helps grow crops on rooftops with less water and centralized monitoring",
              image: "urban+rooftop+farm+with+technology",
            },
            {
              icon: TrendingUp,
              title: "Education",
              description: "Demonstrates real-world robotics and biology for STEM learning",
              image: "students+learning+with+technology",
            },
          ].map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-[#2e7d32]/20 hover:border-[#2e7d32]">
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={`/placeholder.svg?height=400&width=600&query=${app.image}`}
                    alt={app.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <app.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-display text-xl">{app.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{app.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-20 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1)),
                             linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            className="font-display text-4xl md:text-6xl font-bold text-white text-balance"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            "Every Plant Deserves Its Own Robot."
          </motion.h2>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-[#2e7d32]/10">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="group border-[#2e7d32] text-[#2e7d32] hover:bg-[#2e7d32] hover:text-white bg-transparent"
            >
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}

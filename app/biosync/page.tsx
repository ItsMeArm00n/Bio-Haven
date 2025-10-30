"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Leaf, Sun, Zap, TrendingUp, Users, HomeIcon, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BioSyncPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

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
              <Button
                size="lg"
                className="bg-white text-[#2E7D32] hover:bg-white/90 animate-pulse-glow"
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore the Ecosystem
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
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
              description: "Built from recycled materials, saves 60% water through precision irrigation",
              color: "#81D4FA",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                initial: { opacity: 0, y: 50 },
                animate: { opacity: 1, y: 0 },
              }}
            >
              <Card
                className="h-full border-2 hover:border-[#2E7D32] transition-all duration-300 hover:shadow-2xl group"
                style={{
                  transform: "perspective(1000px)",
                }}
              >
                <CardHeader>
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: `${item.color}20` }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
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
        </motion.div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/arduino-plant-monitoring-system-with-sensors.jpg" alt="BioSync System" className="rounded-2xl shadow-2xl" />
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                {
                  step: "01",
                  title: "Sensor Data Collection",
                  description: "Soil moisture, LDR light sensor, and DHT22 continuously monitor plant conditions",
                },
                {
                  step: "02",
                  title: "Arduino Processing",
                  description: "Microcontroller analyzes data and makes intelligent decisions based on plant needs",
                },
                {
                  step: "03",
                  title: "Automated Response",
                  description:
                    "Mini pump activates for watering, LED indicators show status, all powered by solar energy",
                },
                {
                  step: "04",
                  title: "Continuous Optimization",
                  description: "System learns and adapts to provide optimal care while minimizing resource usage",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 container mx-auto px-4">
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
              title: "Home Gardens",
              description: "Perfect for busy homeowners who want thriving plants without constant attention",
              image: "home+garden+with+smart+technology",
            },
            {
              icon: Users,
              title: "Urban Farming",
              description: "Scale up for rooftop gardens and community farms with centralized monitoring",
              image: "urban+rooftop+farm+with+technology",
            },
            {
              icon: TrendingUp,
              title: "Commercial Agriculture",
              description: "Optimize crop yields while reducing water and energy consumption",
              image: "modern+greenhouse+with+automation",
            },
          ].map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-300">
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

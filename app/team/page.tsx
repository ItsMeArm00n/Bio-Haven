"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Award } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  const team = [
    { name: "Team Member 1", role: "BioSync Lead", image: "student+working+on+robotics" },
    { name: "Team Member 2", role: "Concrete Research", image: "student+in+science+lab" },
    { name: "Team Member 3", role: "Electronics & Programming", image: "student+with+arduino" },
    { name: "Team Member 4", role: "Documentation & Design", image: "student+presenting+project" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 container mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the innovators behind Bio-Structural Innovations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="text-center hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={`/.jpg?height=300&width=300&query=${member.image}`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="font-display text-xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-[#2E7D32]/10 to-[#81D4FA]/10 border-2">
            <CardHeader>
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="w-8 h-8 text-[#2E7D32]" />
                <CardTitle className="font-display text-3xl">Acknowledgments</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">Special Thanks To</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Mentor:</strong> [Your Mentor Name]
                  <br />
                  <strong>School:</strong> [Your School Name]
                  <br />
                  <strong>Grade:</strong> 10
                  <br />
                  <strong>Subject:</strong> Science Innovation Project
                </p>
              </div>

              <div className="border-t pt-6">
                <p className="text-gray-600 text-center italic leading-relaxed">
                  "This project represents our commitment to combining scientific knowledge with practical innovation to
                  address real-world sustainability challenges. We believe that even small-scale projects can inspire
                  big changes."
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="text-center mt-12">
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

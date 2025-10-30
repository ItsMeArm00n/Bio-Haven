"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GalleryPage() {
  const images = [
    { title: "BioSync Prototype", query: "arduino+plant+monitoring+system", category: "BioSync" },
    { title: "Solar Panel Setup", query: "solar+panel+on+plant+robot", category: "BioSync" },
    { title: "Sensor Array", query: "soil+moisture+sensor+arduino", category: "BioSync" },
    { title: "Concrete Sample", query: "concrete+block+with+crack", category: "Concrete" },
    { title: "Healing Process", query: "self+healing+concrete+demonstration", category: "Concrete" },
    { title: "Circuit Board", query: "arduino+circuit+board+sensors", category: "Concrete" },
    { title: "Team Working", query: "students+working+on+science+project", category: "Team" },
    { title: "Testing Phase", query: "science+experiment+testing", category: "Team" },
    { title: "Final Presentation", query: "science+fair+project+display", category: "Team" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 container mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-4">Project Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visual documentation of our journey from concept to reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, i) => (
            <motion.div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={`/.jpg?height=600&width=600&query=${image.query}`}
                alt={image.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-[#2E7D32] text-white text-xs font-semibold rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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

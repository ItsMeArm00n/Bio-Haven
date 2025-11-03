"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Sparkles, ArrowRight } from "lucide-react"

export default function AIAdvisorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0e0e0] via-[#bdbdbd] to-[#9e9e9e]">
      <Navigation />

      <div className="pt-32 pb-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-12 h-12 text-blue-600" />
            <Sparkles className="w-8 h-8 text-yellow-500" />
          </div>
          <h1 className="font-display text-5xl font-bold text-gray-900 mb-4">
            AI Design Advisor
          </h1>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Get intelligent recommendations for your Bio-Haven design
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-2 border-gray-400 bg-white shadow-2xl max-w-4xl mx-auto">
            <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-200 py-6">
              <CardTitle className="text-2xl text-center">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <p className="text-gray-700 text-lg">
                  Our AI-powered design advisor is currently under development. Soon you'll be able to:
                </p>
                <ul className="text-left max-w-md mx-auto space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Get personalized design recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Optimize your Bio-Haven configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Receive intelligent material suggestions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Get cost and efficiency analysis</span>
                  </li>
                </ul>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg mt-6"
                  size="lg"
                  disabled
                >
                  Coming Soon
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

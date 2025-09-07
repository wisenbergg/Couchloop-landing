"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X, CheckCircle, Brain, Shield, Zap } from "lucide-react"
import { TherapeuticBackground } from "@/components/therapeutic-background"

const AnimatedBackground = () => {
  return <TherapeuticBackground />
}

export default function CouchLoopHomepage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsModalOpen(false)
        setIsSubmitted(false)
        setEmail("")
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-blue-900 relative">
      <AnimatedBackground />

      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold text-white drop-shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            CouchLoop
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {["Product", "Pricing", "Security", "Resources"].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Button onClick={() => setIsModalOpen(true)} className="bg-white text-black hover:bg-gray-100 font-medium">
              Contact Us
            </Button>
          </motion.div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.h1
                className="text-6xl lg:text-7xl font-bold text-white leading-tight text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Welcome to CouchLoop
              </motion.h1>
              <motion.p
                className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Mental Health Support That Doesn't Stop at the Office Door
              </motion.p>
              <motion.p
                className="text-lg text-white/60 leading-relaxed max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Therapy happens in session—transformation happens in life. CouchLoop bridges the gap.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Join the Waitlist
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg bg-transparent"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose CouchLoop?</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Bridge the gap between therapy sessions with intelligent support that adapts to your journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Intelligent Insights",
                desc: "AI-powered analysis of your sessions to provide personalized homework and insights.",
              },
              {
                icon: Shield,
                title: "Secure & Private",
                desc: "Enterprise-grade security ensures your mental health data remains completely private.",
              },
              {
                icon: Zap,
                title: "Real-time Support",
                desc: "Get support when you need it most, bridging the gap between therapy sessions.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 backdrop-blur-md border-gray-700/50 text-white shadow-lg hover:bg-gray-900/60 transition-colors">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 text-white mb-4" />
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-300">{feature.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="relative w-full max-w-md bg-white border-gray-200 shadow-2xl">
              <CardHeader className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 text-gray-500 hover:text-gray-700"
                  onClick={() => setIsModalOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
                <CardTitle className="text-2xl font-bold text-gray-900">Join the Waitlist</CardTitle>
                <CardDescription className="text-gray-600">
                  Be the first to experience CouchLoop when we launch. Get early access and exclusive updates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white border-gray-300 text-gray-900"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                      Join Waitlist
                    </Button>
                    <p className="text-xs text-gray-500 text-center">We'll never spam you. Unsubscribe at any time.</p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">You're on the list!</h3>
                    <p className="text-gray-600">We'll notify you when CouchLoop is ready for early access.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { Shield, Zap, TrendingUp, BarChart3, MessageSquare, Users } from "lucide-react"
import { Button } from "@/src/components/ui/button"

export function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("why-choose-us")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <div className="container mx-auto px-6 py-24 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* Left Column - Dashboard Mockup */}
        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          {/* Main Dashboard Container */}
          <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
              </div>
              <div className="text-xs text-white/60">AI Agent Dashboard</div>
            </div>

            {/* Dashboard Content */}
            <div className="space-y-6">
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Active Agents", value: "12", icon: <Users className="w-4 h-4" /> },
                  { label: "Tasks/Hour", value: "847", icon: <Zap className="w-4 h-4" /> },
                  { label: "Efficiency", value: "94%", icon: <TrendingUp className="w-4 h-4" /> },
                ].map((stat, index) => (
                  <div key={index} className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-gold">{stat.icon}</div>
                      <div className="text-xs text-white/60">{stat.label}</div>
                    </div>
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Agent Activity */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium text-white">Live Agent Activity</span>
                </div>
                <div className="space-y-2">
                  {[
                    { agent: "Sales Agent", task: "Qualifying lead from LinkedIn", status: "active" },
                    { agent: "Marketing Agent", task: "Generating blog content", status: "completed" },
                    { agent: "Ops Agent", task: "Processing invoices", status: "active" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <div>
                        <div className="text-sm text-white">{activity.agent}</div>
                        <div className="text-xs text-white/60">{activity.task}</div>
                      </div>
                      <div
                        className={`w-2 h-2 rounded-full ${
                          activity.status === "active" ? "bg-[#10B981] animate-pulse" : "bg-gold"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Chart Mockup */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium text-white">Performance Metrics</span>
                </div>
                <div className="flex items-end gap-2 h-16">
                  {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-gold/50 to-gold rounded-t opacity-70"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 p-3 rounded-full bg-gold animate-pulse">
              <Zap className="w-4 h-4 text-black" />
            </div>
            <div className="absolute -bottom-4 -left-4 p-3 rounded-full bg-white/10 animate-pulse delay-1000">
              <Shield className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs font-medium text-white/80">Why Choose Us</span>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Key Points */}
            <div className="space-y-6">
              <div className="group">
                <h3 className="text-2xl font-light text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  Not just tools — we build entire intelligent systems
                </h3>
                <p className="text-white/60 leading-relaxed">
                  We architect comprehensive AI ecosystems that integrate seamlessly with your existing workflows,
                  creating unified intelligence across your organization.
                </p>
              </div>

              <div className="group">
                <h3 className="text-2xl font-light text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  Confidentiality-first, built for precision
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Enterprise-grade security with white-glove implementation. Your data remains private while our AI
                  agents deliver surgical precision in execution.
                </p>
              </div>

              <div className="group">
                <h3 className="text-2xl font-light text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  Monthly retainer & project-based options
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Flexible engagement models designed for ambitious businesses. Choose ongoing optimization or
                  project-based implementations that fit your growth trajectory.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Button
                size="lg"
                className="group px-8 py-6 text-sm font-medium bg-gold hover:bg-gold/90 text-black rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Let's architect your AI advantage
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

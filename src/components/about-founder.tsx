"use client"

import { useEffect, useState } from "react"
import { Code, Zap, TrendingUp, Award, Users, Target } from "lucide-react"

export function AboutFounder() {
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

    const element = document.getElementById("about-founder-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const achievements = [
    { icon: <Code className="w-5 h-5" />, label: "Systems Architecture", color: "#D4AF37" },
    { icon: <Zap className="w-5 h-5" />, label: "Automation Expert", color: "#3D9EFF" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "Business Growth", color: "#10B981" },
    { icon: <Target className="w-5 h-5" />, label: "Efficiency Focused", color: "#8B5CF6" },
  ]

  return (
    <section id="about-founder-section" className="relative py-32 bg-[#0B0B0F] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-[#3D9EFF]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column - Animated Profile Card */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Main Profile Card */}
            <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              {/* Profile Header */}
              <div className="text-center mb-8">
                {/* Avatar Placeholder with Animated Border */}
                <div className="relative mx-auto mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#3D9EFF] p-1">
                    <div className="w-full h-full rounded-full bg-[#1F1F23] flex items-center justify-center">
                      <div className="text-4xl font-bold text-[#D4AF37]">MS</div>
                    </div>
                  </div>
                  {/* Animated Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/30 animate-pulse" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">Malak Star</h3>
                <p className="text-[#D4AF37] font-medium mb-4">Founder & AI Technologist</p>

                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#10B981]/20 bg-[#10B981]/10">
                  <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-sm text-[#10B981] font-medium">Available for Consultation</span>
                </div>
              </div>

              {/* Expertise Areas */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2 rounded-lg transition-transform duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: `${achievement.color}15`,
                          border: `1px solid ${achievement.color}30`,
                        }}
                      >
                        <div style={{ color: achievement.color }}>{achievement.icon}</div>
                      </div>
                      <span className="text-sm font-medium text-white">{achievement.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#D4AF37] mb-1">10+</div>
                  <div className="text-xs text-white/60">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3D9EFF] mb-1">50+</div>
                  <div className="text-xs text-white/60">Systems Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#10B981] mb-1">100%</div>
                  <div className="text-xs text-white/60">Client Success</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 p-3 rounded-full bg-[#3D9EFF] animate-bounce">
                <Award className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 p-3 rounded-full bg-[#D4AF37] animate-pulse">
                <Users className="w-4 h-4 text-black" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-[#3D9EFF]/20 bg-[#3D9EFF]/10 backdrop-blur-sm">
              <Users className="w-4 h-4 text-[#3D9EFF]" />
              <span className="text-sm font-medium text-[#3D9EFF]">Meet the Founder</span>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Founded by{" "}
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#3D9EFF] bg-clip-text text-transparent">
                  Malak Star
                </span>
              </h2>

              <div className="text-xl text-white/80 leading-relaxed space-y-4">
                <p>
                  A systems builder and AI technologist obsessed with efficiency and scale. With deep experience in
                  automation, web scraping, and business growth, we don't just build — we{" "}
                  <span className="text-[#D4AF37] font-semibold">transform</span>.
                </p>
              </div>

              {/* Key Principles */}
              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-2 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Precision-First Approach</h4>
                    <p className="text-white/70">
                      Every system is architected for maximum efficiency and minimal waste.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2 rounded-lg bg-[#3D9EFF]/10 border border-[#3D9EFF]/20 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-5 h-5 text-[#3D9EFF]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Automation Obsessed</h4>
                    <p className="text-white/70">If it can be automated intelligently, it should be.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Scale-Ready Solutions</h4>
                    <p className="text-white/70">Built to grow with your business, not hold it back.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

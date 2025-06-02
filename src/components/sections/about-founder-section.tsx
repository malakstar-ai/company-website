"use client"

import { useEffect, useState } from "react"
import { Code, Zap, TrendingUp, Target } from "lucide-react"

export function AboutFounderSection() {
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

    const element = document.getElementById("about-founder")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const achievements = [
    { icon: <Code className="w-4 h-4 md:w-5 md:h-5" />, label: "Systems Architecture" },
    { icon: <Zap className="w-4 h-4 md:w-5 md:h-5" />, label: "Automation Expert" },
    { icon: <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />, label: "Business Growth" },
    { icon: <Target className="w-4 h-4 md:w-5 md:h-5" />, label: "Efficiency Focused" },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
        {/* Left Column - Animated Profile Card */}
        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          {/* Main Profile Card */}
          <div className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            {/* Profile Header */}
            <div className="text-center mb-6 md:mb-8">
              {/* Avatar Placeholder with Animated Border */}
              <div className="relative mx-auto mb-4 md:mb-6">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gold to-gold/70 p-1">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <div className="text-2xl md:text-4xl font-bold text-gold">MS</div>
                  </div>
                </div>
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-gold/30 animate-pulse" />
              </div>

              <h3 className="text-2xl md:text-3xl font-light text-white mb-2">Malak Star AI</h3>
              <p className="text-white/40 italic text-xs md:text-sm px-2">Built by a Founder Who Automates Everything — Including This Agency</p>
            </div>

            {/* Expertise Areas - Mobile Optimized */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-3 md:p-4 rounded-lg md:rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="p-1.5 md:p-2 rounded-md md:rounded-lg bg-gold/10 transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                      <div className="text-gold">{achievement.icon}</div>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-white leading-tight">{achievement.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats - Mobile Optimized */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 pt-4 md:pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-lg md:text-2xl font-bold text-gold mb-1">200+</div>
                <div className="text-xs text-white/60 leading-tight">Hours Saved Per Client</div>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-2xl font-bold text-gold mb-1">100+</div>
                <div className="text-xs text-white/60 leading-tight">Systems Built</div>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-2xl font-bold text-gold mb-1">150+</div>
                <div className="text-xs text-white/60 leading-tight">AI Tools Tested</div>
              </div>
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
          <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 mb-6 md:mb-8 rounded-full border border-white/10 bg-white/5">
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gold" />
            <span className="text-xs font-medium text-white/80">Meet the Founder</span>
          </div>

          {/* Main Content */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight">
              Founded by <span className="text-gold">Hussain</span>
            </h2>

            <div className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed space-y-3 md:space-y-4">
              <p>
                A systems builder and AI technologist obsessed with efficiency and scale. With deep experience in
                automation, web scraping, and business growth, we don't just build — we{" "}
                <span className="text-gold font-medium">transform</span>.
              </p>
            </div>

            {/* Key Principles - Mobile Optimized */}
            <div className="space-y-3 md:space-y-4 pt-4 md:pt-6">
              <div className="flex items-start gap-3 md:gap-4 group">
                <div className="p-1.5 md:p-2 rounded-md md:rounded-lg bg-gold/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-medium text-white mb-1">Precision-First Approach</h4>
                  <p className="text-sm md:text-base text-white/60 leading-relaxed">Every system is architected for maximum efficiency and minimal waste.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 group">
                <div className="p-1.5 md:p-2 rounded-md md:rounded-lg bg-gold/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-medium text-white mb-1">Automation Obsessed</h4>
                  <p className="text-sm md:text-base text-white/60 leading-relaxed">If it can be automated intelligently, it should be.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 group">
                <div className="p-1.5 md:p-2 rounded-md md:rounded-lg bg-gold/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-medium text-white mb-1">Scale-Ready Solutions</h4>
                  <p className="text-sm md:text-base text-white/60 leading-relaxed">Built to grow with your business, not hold it back.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

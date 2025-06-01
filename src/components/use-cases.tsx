"use client"

import { useEffect, useState } from "react"
import { Mail, Megaphone, Users, Cog, Brain, ArrowUpRight } from "lucide-react"

export function UseCases() {
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

    const element = document.getElementById("use-cases-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const agents = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Sales Agent",
      description: "Accelerate your revenue pipeline",
      capabilities: ["Cold email campaigns", "Intelligent follow-ups", "CRM synchronization", "Lead qualification"],
      color: "from-[#D4AF37] to-[#B8941F]",
      accent: "#D4AF37",
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Marketing Agent",
      description: "Scale your content and reach",
      capabilities: ["Content generation", "SEO optimization", "Content repurposing", "Campaign automation"],
      color: "from-[#3D9EFF] to-[#2B7ACC]",
      accent: "#3D9EFF",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Delivery Agent",
      description: "Enhance customer experience",
      capabilities: ["Client onboarding", "Progress reminders", "Status updates", "Feedback collection"],
      color: "from-[#10B981] to-[#059669]",
      accent: "#10B981",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Ops Agent",
      description: "Streamline operations",
      capabilities: ["Process automation", "SOP execution", "Task scheduling", "Quality assurance"],
      color: "from-[#8B5CF6] to-[#7C3AED]",
      accent: "#8B5CF6",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Knowledge Agent",
      description: "Empower your team",
      capabilities: ["Intelligent search", "SOP management", "Team support", "Knowledge base"],
      color: "from-[#F59E0B] to-[#D97706]",
      accent: "#F59E0B",
    },
  ]

  return (
    <section id="use-cases-section" className="relative py-32 bg-[#0B0B0F] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[#3D9EFF]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#D4AF37]/3 to-[#3D9EFF]/3 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-[#3D9EFF] animate-pulse" />
            <span className="text-sm font-medium text-white/80">AI Agent Portfolio</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Agents That Power{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#3D9EFF] bg-clip-text text-transparent">
              Every Part
            </span>{" "}
            of Your Business
          </h2>

          <p
            className={`text-xl text-white/70 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Specialized AI agents designed to transform each critical function of your organization
          </p>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 delay-${index * 100 + 300} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {/* Card */}
              <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 h-full group-hover:scale-105">
                {/* Gradient Glow Effect */}
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-500 ${agent.color}`}
                  style={{ filter: "blur(20px)", transform: "scale(1.1)" }}
                />

                {/* Icon Container */}
                <div
                  className="mb-6 p-4 rounded-2xl w-fit transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${agent.accent}15`,
                    border: `1px solid ${agent.accent}30`,
                  }}
                >
                  <div style={{ color: agent.accent }}>{agent.icon}</div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{agent.title}</h3>
                  <p className="text-white/60">{agent.description}</p>
                </div>

                {/* Capabilities List */}
                <ul className="space-y-3 mb-6">
                  {agent.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-center gap-3 text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: agent.accent }} />
                      <span className="text-sm">{capability}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  <span style={{ color: agent.accent }}>Learn more</span>
                  <ArrowUpRight className="w-4 h-4" style={{ color: agent.accent }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Agent?</h3>
            <p className="text-white/70 mb-6">
              We design bespoke AI agents tailored to your unique business requirements and workflows.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10">
              <span className="text-[#D4AF37] font-medium text-sm">Let's discuss your needs</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

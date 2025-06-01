"use client"

import { useEffect, useState } from "react"
import { Mail, Megaphone, Users, Cog, Brain, ArrowUpRight } from "lucide-react"

export function UseCasesSection() {
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

    const element = document.getElementById("use-cases")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const agents = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Sales Agent",
      description: "Accelerate your revenue pipeline",
      capabilities: ["Lead sourcing and enrichment", "Intelligent follow-ups", "CRM synchronization", "Lead qualification"],
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Marketing Agent",
      description: "Scale your content and reach",
      capabilities: ["Content generation", "SEO optimization", "Content repurposing", "Campaign automation"],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Delivery Agent",
      description: "Enhance customer experience",
      capabilities: ["Client onboarding", "Progress reminders", "Status updates", "Feedback collection"],
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Ops Agent",
      description: "Streamline operations",
      capabilities: ["Process automation", "SOP execution", "Task scheduling", "Quality assurance"],
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Knowledge Agent",
      description: "Empower your team",
      capabilities: ["Intelligent search", "SOP management", "Team support", "Knowledge base"],
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Insights Agent",
      description: "Unlock data-driven decision-making",
      capabilities: ["Live reporting dashboards", "Meeting & call summarization", "Automated performance snapshots", "KPI & trend detection"],
    },
  ]

  return (
    <div className="container mx-auto px-6 py-24 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="text-xs font-medium text-white/80">AI Agent Portfolio</span>
        </div>

        <h2 className="text-4xl font-light text-white mb-6 leading-tight">
          Agents That Power <span className="text-gold">Every Part</span> of Your Business
        </h2>

        <p className="text-lg text-white/60 max-w-3xl mx-auto">
          Specialized AI agents designed to transform each critical function of your organization
        </p>
      </div>

      {/* Agent Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {agents.map((agent, index) => (
          <div
            key={index}
            className={`group transition-all duration-700 delay-${index * 100 + 300} ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full group-hover:border-gold/30">
              {/* Icon */}
              <div className="mb-6">
                <div className="p-3 rounded-full w-12 h-12 flex items-center justify-center bg-gold/10 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-gold">{agent.icon}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-white mb-2 group-hover:text-gold transition-colors duration-300">
                {agent.title}
              </h3>
              <p className="text-white/60 mb-6">{agent.description}</p>

              {/* Capabilities List */}
              <ul className="space-y-3 mb-6">
                {agent.capabilities.map((capability, capIndex) => (
                  <li key={capIndex} className="flex items-center gap-3 text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-sm">{capability}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="flex items-center gap-2 text-sm font-medium text-gold group-hover:gap-3 transition-all duration-300">
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* "And much more..." text */}
      <div className="text-right mt-12 pr-10 mr-12">
        <p className="text-white/40 italic">and much more...</p>
      </div>
    </div>
  )
}

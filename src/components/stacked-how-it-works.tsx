"use client"

import { useEffect, useState, useRef } from "react"
import { Search, Cpu, Settings } from "lucide-react"

export function StackedHowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      number: "01",
      icon: <Search className="w-8 h-8" />,
      title: "Discovery + Mapping",
      description: "We audit your workflows & pain points",
      details: [
        "Comprehensive business process analysis",
        "Identification of automation opportunities",
        "Workflow mapping and bottleneck detection",
        "Data flow assessment and optimization planning",
      ],
      color: "#D4AF37",
    },
    {
      number: "02",
      icon: <Cpu className="w-8 h-8" />,
      title: "Agent Architecture",
      description: "We design & build bespoke agents for your needs",
      details: [
        "Custom AI agent blueprint development",
        "Integration planning with existing systems",
        "Intelligent workflow design and optimization",
        "Security and compliance framework implementation",
      ],
      color: "#3D9EFF",
    },
    {
      number: "03",
      icon: <Settings className="w-8 h-8" />,
      title: "Integration + Optimization",
      description: "We deploy, integrate & fine-tune inside your business",
      details: [
        "Seamless deployment into your environment",
        "Staff training and adoption support",
        "Continuous performance monitoring",
        "Iterative optimization based on business outcomes",
      ],
      color: "#10B981",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = rect.height
      const sectionTop = rect.top
      const windowHeight = window.innerHeight

      // Calculate how far we've scrolled into the section
      const scrollPosition = windowHeight - sectionTop
      const scrollPercentage = Math.max(0, Math.min(1, scrollPosition / (sectionHeight * 0.8)))

      // Map scroll percentage to step index
      const stepIndex = Math.min(Math.floor(scrollPercentage * steps.length), steps.length - 1)
      setActiveStep(stepIndex)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [steps.length])

  return (
    <section ref={sectionRef} id="how-it-works-section" className="relative py-32 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gray-100">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            <span className="text-xs font-medium text-gray-600">Our Process</span>
          </div>

          <h2 className="text-4xl font-light text-gray-900 mb-6">How It Works</h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven methodology that transforms your business operations with intelligent automation
          </p>
        </div>

        {/* Stacked Cards */}
        <div className="max-w-4xl mx-auto relative min-h-[600px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`absolute inset-x-0 transition-all duration-700 ease-in-out ${
                index === activeStep
                  ? "opacity-100 translate-y-0 z-30"
                  : index < activeStep
                    ? "opacity-0 -translate-y-16 z-20"
                    : "opacity-0 translate-y-16 z-10"
              }`}
              style={{
                transitionDelay: `${Math.abs(index - activeStep) * 100}ms`,
              }}
            >
              <div
                className="p-10 rounded-2xl bg-white shadow-xl border border-gray-100"
                style={{
                  boxShadow: index === activeStep ? `0 10px 50px rgba(0, 0, 0, 0.08)` : "",
                }}
              >
                <div className="flex flex-col md:flex-row gap-10">
                  {/* Left Column - Icon and Number */}
                  <div className="md:w-1/3">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${step.color}10` }}
                    >
                      <div style={{ color: step.color }}>{step.icon}</div>
                    </div>

                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-5xl font-light" style={{ color: step.color }}>
                        {step.number}
                      </span>
                      <div className="w-12 h-px bg-gray-200" />
                    </div>

                    <h3 className="text-2xl font-medium text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>

                  {/* Right Column - Details */}
                  <div className="md:w-2/3">
                    <div className="space-y-6">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-4">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                            style={{ backgroundColor: `${step.color}10` }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.color }} />
                          </div>
                          <p className="text-gray-700">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Step Indicators */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-8">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeStep ? "scale-150" : "scale-100"
                }`}
                style={{
                  backgroundColor: index === activeStep ? steps[index].color : "#E5E7EB",
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-24">
          <p className="text-gray-500 italic">Scroll to explore our process</p>
        </div>
      </div>
    </section>
  )
}

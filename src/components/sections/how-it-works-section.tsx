"use client"

import { useEffect, useState, useRef } from "react"
import { Search, Cpu, Settings } from "lucide-react"

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [isHydrated, setIsHydrated] = useState(false)
  const [isHeaderSticky, setIsHeaderSticky] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      number: "01",
      icon: <Search className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Discovery + Mapping",
      description: "We audit your workflows & pain points",
      details: [
        "Comprehensive business process analysis",
        "Understanding current process of doing tasks manually",
        "Identification of automation opportunities that drive ROI",
        "Workflow mapping and bottleneck detection",
        "Data flow assessment and optimization planning",
      ],
      color: "#D4AF37"
    },
    {
      number: "02",
      icon: <Cpu className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Agent Architecture",
      description: "We design & build bespoke agents for your needs",
      details: [
        "Custom AI agent blueprint development",
        "Integration planning with existing systems",
        "Intelligent workflow design and optimization",
        "Security and compliance framework implementation",
      ],
      color: "#3D9EFF"
    },
    {
      number: "03",
      icon: <Settings className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Integration + Optimization",
      description: "We deploy, integrate & fine-tune inside your business",
      details: [
        "Seamless deployment into your environment",
        "Staff training and adoption support",
        "Continuous performance monitoring",
        "Iterative optimization based on business outcomes",
      ],
      color: "#10B981"
    },
  ]

  // Hydration effect
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // Smart header behavior based on scroll position
  useEffect(() => {
    if (!isHydrated) return

    const handleScroll = () => {
      if (!cardsRef.current || !headerRef.current) return

      const cardsTop = cardsRef.current.offsetTop
      const headerHeight = headerRef.current.offsetHeight
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      
      // Allow header to scroll with the first card for proper centering
      // Only make header sticky when user has scrolled past the first card significantly
      const firstCardHeight = viewportHeight // Each card is min-h-screen
      const stickyThreshold = cardsTop + firstCardHeight * 0.7 // 70% through first card
      
      const shouldBeSticky = scrollY > stickyThreshold
      setIsHeaderSticky(shouldBeSticky)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHydrated])

  // Set up intersection observers for each step
  useEffect(() => {
    if (!isHydrated || !sectionRef.current) return

    // Wait for next tick to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      if (!sectionRef.current) return

      // Create step elements
      const stepElements = Array.from(sectionRef.current.querySelectorAll(".step-card"))

      if (stepElements.length === 0) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = stepElements.findIndex((el) => el === entry.target)
              if (index !== -1) {
                setActiveStep(index)
              }
            }
          })
        },
        {
          root: null,
          rootMargin: "-20% 0px -20% 0px", // Better centering detection
          threshold: 0.2, // More sensitive to card visibility
        },
      )

      // Observe each step element
      stepElements.forEach((element) => {
        observer.observe(element)
      })

      return () => {
        stepElements.forEach((element) => {
          observer.unobserve(element)
        })
      }
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [isHydrated])

  return (
    <section className="relative">
      <div ref={sectionRef} className="relative z-10">
        {/* Smart Header - Scrollable initially, then sticky */}
        <div 
          ref={headerRef}
          className={`transition-all duration-300 ${
            isHeaderSticky 
              ? 'sticky top-0 bg-black/90 backdrop-blur-md shadow-lg' 
              : 'relative'
          } pt-16 md:pt-24 pb-6 md:pb-8 z-30`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 mb-4 md:mb-6 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10">
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="text-xs font-medium text-[#D4AF37]">Our Process</span>
              </div>

              <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                We Start With The <span className="text-[#D4AF37]">Basics</span>
              </h2>

              <p className="text-sm md:text-lg text-white/60 max-w-xl md:max-w-2xl mx-auto px-4">
                A proven, done-for-you path that transforms your business operations with intelligent automation
              </p>
            </div>
          </div>
        </div>

        {/* Cards - Mobile optimized with proper spacing */}
        <div ref={cardsRef} className="relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card min-h-screen flex items-center justify-center py-16 md:py-20"
              id={`step-${index}`}
            >
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                  <div className="p-6 md:p-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                      {/* Left Column - Icon and Number */}
                      <div className="md:w-1/3">
                        <div 
                          className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 border border-white/10"
                          style={{ backgroundColor: `${step.color}20` }}
                        >
                          <div style={{ color: step.color }}>{step.icon}</div>
                        </div>

                        <div className="flex items-baseline gap-2 md:gap-3 mb-3 md:mb-4">
                          <span className="text-3xl md:text-5xl font-light" style={{ color: step.color }}>
                            {step.number}
                          </span>
                          <div className="w-8 md:w-12 h-px bg-white/20" />
                        </div>

                        <h3 className="text-xl md:text-2xl font-medium text-white mb-2">{step.title}</h3>
                        <p className="text-sm md:text-base text-white/60">{step.description}</p>
                      </div>

                      {/* Right Column - Details */}
                      <div className="md:w-2/3">
                        <div className="space-y-4 md:space-y-6">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-3 md:gap-4">
                              <div 
                                className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0 border border-white/10"
                                style={{ backgroundColor: `${step.color}20` }}
                              >
                                <div 
                                  className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full" 
                                  style={{ backgroundColor: step.color }}
                                />
                              </div>
                              <p className="text-white/95 text-sm md:text-base font-medium leading-relaxed">{detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

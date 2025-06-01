"use client"

import { useEffect } from "react"
import { Navigation } from "@/src/components/ui/navigation"
import { HeroSection } from "@/src/components/sections/hero-section"
import { SocialProofSection } from "@/src/components/sections/social-proof-section"
import { ClientLogoStrip } from "@/src/components/sections/client-logo-strip"
import { HowItWorksSection } from "@/src/components/sections/how-it-works-section"
import { UseCasesSection } from "@/src/components/sections/use-cases-section"
import { WhyChooseUsSection } from "@/src/components/sections/why-choose-us-section"
import { AboutFounderSection } from "@/src/components/sections/about-founder-section"
import { ContactSection } from "@/src/components/sections/contact-section"
import { Footer } from "@/src/components/sections/footer"

export default function HomePage() {
  // Smooth scroll implementation
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
        if (!href) return
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  }, [])

  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative">
        <HeroSection />
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="relative">
        <SocialProofSection />
      </section>

      {/* Client Logo Strip */}
      <ClientLogoStrip />

      {/* How It Works Section */}
      <section id="how-it-works" className="relative">
        <HowItWorksSection />
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="relative">
        <UseCasesSection />
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="relative">
        <WhyChooseUsSection />
      </section>

      {/* About Founder Section */}
      <section id="about-founder" className="relative">
        <AboutFounderSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

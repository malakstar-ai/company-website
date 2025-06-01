"use client"

import { useEffect } from "react"
import { HeroSection } from "@/src/components/sections/hero-section"
import { SocialProofSection } from "@/src/components/sections/social-proof-section"
import { ClientLogoStrip } from "@/src/components/sections/client-logo-strip"
import { HowItWorksSection } from "@/src/components/sections/how-it-works-section"
import { UseCasesSection } from "@/src/components/sections/use-cases-section"
import { WhyChooseUsSection } from "@/src/components/sections/why-choose-us-section"
import { AboutFounderSection } from "@/src/components/sections/about-founder-section"
import { ContactSection } from "@/src/components/sections/contact-section"
import { Footer } from "@/src/components/sections/footer"
import { Navigation } from "@/src/components/ui/navigation"
import { BackgroundPattern } from "@/src/components/ui/background-pattern"

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

      {/* Hero Section - Dark */}
      <section id="hero" className="relative bg-black">
        <BackgroundPattern variant="dark" />
        <HeroSection />
      </section>

      {/* Social Proof Section - Dark */}
      <section id="social-proof" className="relative bg-black">
        <BackgroundPattern variant="dark" />
        <SocialProofSection />
      </section>

      {/* Client Logo Strip */}
      <ClientLogoStrip />

      {/* How It Works Section - Dark */}
      <section id="how-it-works" className="relative bg-[#1A1A1A]">
        <BackgroundPattern variant="dark" />
        <HowItWorksSection />
      </section>

      {/* Use Cases Section - Dark */}
      <section id="use-cases" className="relative bg-black">
        <BackgroundPattern variant="dark" />
        <UseCasesSection />
      </section>

      {/* Why Choose Us Section - Dark */}
      <section id="why-choose-us" className="relative bg-[#1A1A1A]">
        <BackgroundPattern variant="dark" />
        <WhyChooseUsSection />
      </section>

      {/* About Founder Section - Dark */}
      <section id="about-founder" className="relative bg-black">
        <BackgroundPattern variant="dark" />
        <AboutFounderSection />
      </section>

      {/* Contact Section - Dark */}
      <section id="contact" className="relative bg-[#1A1A1A]">
        <BackgroundPattern variant="dark" />
        <ContactSection />
      </section>

      {/* Footer - Dark */}
      <Footer />
    </main>
  )
}

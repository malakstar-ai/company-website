"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Services", href: "#use-cases" },
    { name: "About", href: "#about-founder" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3 bg-black/90 backdrop-blur-md shadow-md" : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-transparent">
                <Image 
                  src="/circle-logo.png" 
                  alt="Malak Star AI" 
                  width={40} 
                  height={40}
                  className="w-full h-full object-cover mix-blend-screen filter brightness-110 contrast-125"
                />
              </div>
              <span className="ml-3 text-white font-light text-xl">Malak Star AI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-gold transition-colors duration-300 text-sm font-light focus:outline-none focus:text-gold"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact">
                <Button size="sm" variant="outline" className="ml-4 border-gold text-gold hover:bg-gold hover:text-black focus:outline-none focus:ring-0">
                  Book a Call
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none focus:text-gold"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-2xl font-light hover:text-gold transition-colors duration-300 focus:outline-none focus:text-gold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button size="lg" variant="outline" className="mt-8 border-gold text-gold hover:bg-gold hover:text-black focus:outline-none focus:ring-0">
              Book a Call
            </Button>
          </a>
        </div>
      </div>
    </>
  )
}

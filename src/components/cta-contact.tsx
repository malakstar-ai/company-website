"use client"

import { useEffect, useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { Calendar, Clock, ArrowRight, CheckCircle, Phone, Mail, MapPin } from "lucide-react"

export function CTAContact() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("cta-contact-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const availableDates = [
    { date: "Dec 15", day: "Mon", available: true },
    { date: "Dec 16", day: "Tue", available: true },
    { date: "Dec 17", day: "Wed", available: false },
    { date: "Dec 18", day: "Thu", available: true },
    { date: "Dec 19", day: "Fri", available: true },
  ]

  const availableTimes = ["9:00 AM", "10:30 AM", "2:00 PM", "3:30 PM", "4:00 PM"]

  return (
    <section id="cta-contact-section" className="relative py-32 bg-[#0B0B0F] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/8 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#3D9EFF]/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-[#D4AF37]/5 to-[#3D9EFF]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 backdrop-blur-sm transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm font-medium text-[#D4AF37]">Ready to Transform</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            You're one call away from{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#3D9EFF] bg-clip-text text-transparent">
              transforming your business
            </span>{" "}
            with AI
          </h2>

          <p
            className={`text-xl text-white/70 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Schedule a confidential strategy session with our AI specialists
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calendar Booking Interface */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                  <Calendar className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Book a Strategy Call</h3>
              </div>

              {/* Date Selection */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">Select a Date</h4>
                <div className="grid grid-cols-5 gap-2">
                  {availableDates.map((dateOption, index) => (
                    <button
                      key={index}
                      onClick={() => dateOption.available && setSelectedDate(dateOption.date)}
                      disabled={!dateOption.available}
                      className={`p-3 rounded-xl text-center transition-all duration-300 ${
                        selectedDate === dateOption.date
                          ? "bg-[#D4AF37] text-black"
                          : dateOption.available
                            ? "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                            : "bg-white/5 border border-white/5 text-white/30 cursor-not-allowed"
                      }`}
                    >
                      <div className="text-sm font-medium">{dateOption.date}</div>
                      <div className="text-xs">{dateOption.day}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Select a Time</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {availableTimes.map((time, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-xl text-center transition-all duration-300 ${
                          selectedTime === time
                            ? "bg-[#3D9EFF] text-white"
                            : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                        }`}
                      >
                        <Clock className="w-4 h-4 mx-auto mb-1" />
                        <div className="text-sm">{time}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Confirmation */}
              {selectedDate && selectedTime && (
                <div className="p-4 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 mb-6">
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">
                      {selectedDate} at {selectedTime} - 45 minutes
                    </span>
                  </div>
                </div>
              )}

              <Button
                size="lg"
                disabled={!selectedDate || !selectedTime}
                className="w-full group px-6 py-4 text-lg font-semibold bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black rounded-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Confirm Strategy Call
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-[#3D9EFF]/10 border border-[#3D9EFF]/20">
                  <Mail className="w-5 h-5 text-[#3D9EFF]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Tell Us About Your Business</h3>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                  />
                  <Input
                    placeholder="Last Name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                  />
                </div>

                <Input
                  placeholder="Business Email"
                  type="email"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                />

                <Input
                  placeholder="Company Name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                />

                <Textarea
                  placeholder="What AI challenges are you looking to solve?"
                  rows={4}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-[#D4AF37] focus:ring-[#D4AF37] resize-none"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full group px-6 py-4 text-lg font-semibold bg-[#3D9EFF] hover:bg-[#3D9EFF]/90 text-white rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  Send Information
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Prefer to reach out directly?</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/70">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                    <span>hello@eliteai.agency</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#10B981]" />
              <span className="text-white/80">Confidential</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#10B981]" />
              <span className="text-white/80">No Commitment</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#10B981]" />
              <span className="text-white/80">45 Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { Calendar, Clock, ArrowRight, CheckCircle, Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
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

    const element = document.getElementById("contact")
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
    <div className="container mx-auto px-6 py-24 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="text-xs font-medium text-white/80">Ready to Transform</span>
        </div>

        <h2 className="text-4xl font-light text-white mb-6 leading-tight">
          You're one call away from <span className="text-gold">transforming your business</span> with AI
        </h2>

        <p className="text-lg text-white/60 max-w-2xl mx-auto">
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
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-gold/10 border border-gold/20">
                <Calendar className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-2xl font-light text-white">Book a Strategy Call</h3>
            </div>

            {/* Date Selection */}
            <div className="mb-6">
              <h4 className="text-lg font-medium text-white mb-4">Select a Date</h4>
              <div className="grid grid-cols-5 gap-2">
                {availableDates.map((dateOption, index) => (
                  <button
                    key={index}
                    onClick={() => dateOption.available && setSelectedDate(dateOption.date)}
                    disabled={!dateOption.available}
                    className={`p-3 rounded-xl text-center transition-all duration-300 ${
                      selectedDate === dateOption.date
                        ? "bg-gold text-black"
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
                <h4 className="text-lg font-medium text-white mb-4">Select a Time</h4>
                <div className="grid grid-cols-2 gap-2">
                  {availableTimes.map((time, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-xl text-center transition-all duration-300 ${
                        selectedTime === time
                          ? "bg-white text-black"
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
              className="w-full group px-6 py-6 text-sm font-medium bg-gold hover:bg-gold/90 text-black rounded-full transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Confirm Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Lead Capture Form */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-white/10 border border-white/20">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-light text-white">Tell Us About Your Business</h3>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold"
                />
                <Input
                  placeholder="Last Name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold"
                />
              </div>

              <Input
                placeholder="Business Email"
                type="email"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold"
              />

              <Input
                placeholder="Company Name"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold"
              />

              <Textarea
                placeholder="What AI challenges are you looking to solve?"
                rows={4}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold resize-none"
              />

              <Button
                type="submit"
                size="lg"
                className="w-full group px-6 py-6 text-sm font-medium bg-white hover:bg-white/90 text-black rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Send Information
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-lg font-medium text-white mb-4">Prefer to reach out directly?</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/60">
                  <Phone className="w-4 h-4 text-gold" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Mail className="w-4 h-4 text-gold" />
                  <span>hello@eliteai.agency</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-4 h-4 text-gold" />
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
        <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl border border-white/10 bg-white/5">
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
  )
}

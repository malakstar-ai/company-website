"use client"

import { useEffect, useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, ArrowLeft, Loader } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/src/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"

// Form schemas for each step
const step1Schema = z.object({
  firstName: z.string().min(3, { message: "First name is required" }),
  lastName: z.string().optional(),
})

const step2Schema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string({ message: "Please use 00 before typing your country code and phone number. For example, 0092 300 1234567"}).optional(),
})

const step3Schema = z.object({
  company: z.string().min(2, { message: "Company name is required" }),
  role: z.string().min(2, { message: "Your role is required" }),
})

const step4Schema = z.object({
  aiChallenges: z.string().min(5, { message: "Please describe your AI challenges (min 10 characters). If you're not sure, just say 'I'm not sure'" }),
})

const step5Schema = z.object({
  industry: z.string().min(2, { message: "Please select your industry" }),
  companySize: z.string().min(1, { message: "Please select your company size" }),
})

const step6Schema = z.object({
  budget: z.string().min(2, { message: "Please enter the investment you're willing to make" }),
  urgency: z.string().min(1, { message: "How urgent is this for you?" }),
})

export function ContactSection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    aiChallenges: "",
    industry: "",
    companySize: "",
    budget: "",
    urgency: "",
  })

  // Forms for each step
  const step1Form = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
    },
  })

  const step2Form = useForm<z.infer<typeof step2Schema>>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      email: formData.email,
      phone: formData.phone,
    },
  })

  const step3Form = useForm<z.infer<typeof step3Schema>>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      company: formData.company,
      role: formData.role,
    },
  })

  // Form for step 4
  const step4Form = useForm<z.infer<typeof step4Schema>>({
    resolver: zodResolver(step4Schema),
    defaultValues: {
      aiChallenges: formData.aiChallenges,
    },
  })

  // Form for step 5
  const step5Form = useForm<z.infer<typeof step5Schema>>({
    resolver: zodResolver(step5Schema),
    defaultValues: {
      industry: formData.industry,
      companySize: formData.companySize,
    },
  })

  // Form for step 6
  const step6Form = useForm<z.infer<typeof step6Schema>>({
    resolver: zodResolver(step6Schema),
    defaultValues: {
      budget: formData.budget,
      urgency: formData.urgency,
    },
  })

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

  // Handle step submissions
  const onStep1Submit = (data: z.infer<typeof step1Schema>) => {
    setFormData({ ...formData, ...data })
    setCurrentStep(2)
  }

  const onStep2Submit = (data: z.infer<typeof step2Schema>) => {
    setFormData({ ...formData, ...data })
    setCurrentStep(3)
  }

  const onStep3Submit = (data: z.infer<typeof step3Schema>) => {
    setFormData({ ...formData, ...data })
    setCurrentStep(4)
  }

  const onStep4Submit = (data: z.infer<typeof step4Schema>) => {
    setFormData({ ...formData, ...data })
    setCurrentStep(5)
  }

  const onStep5Submit = (data: z.infer<typeof step5Schema>) => {
    setFormData({ ...formData, ...data })
    setCurrentStep(6)
  }

  const onStep6Submit = async (data: z.infer<typeof step6Schema>) => {
    const finalFormData = { ...formData, ...data }
    setFormData(finalFormData)
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Prepare data for submission to Google Sheets
      const submissionData = {
        fullName: `${finalFormData.firstName} ${finalFormData.lastName}`.trim(),
        email: finalFormData.email,
        phone: finalFormData.phone || '',
        companyName: finalFormData.company,
        companySize: finalFormData.companySize,
        role: finalFormData.role,
        aiChallenges: finalFormData.aiChallenges,
        currentProcess: finalFormData.industry, // Using industry field for current process
        biggestChallenge: finalFormData.aiChallenges, // Using AI challenges as biggest challenge
        budget: finalFormData.budget,
        urgency: finalFormData.urgency,
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage(result.message || 'Thank you! Your information has been submitted successfully.')
        setCurrentStep(7)
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.message || 'There was an error submitting your information. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setSubmitMessage('There was an error submitting your information. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle final submission (this is now just for the "Submit Another Request" button)
  const onFinalSubmit = () => {
    // Reset form and start over
    setCurrentStep(1)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      role: "",
      aiChallenges: "",
      industry: "",
      companySize: "",
      budget: "",
      urgency: "",
    })
    setSubmitStatus('idle')
    setSubmitMessage('')
    
    // Reset all forms
    step1Form.reset()
    step2Form.reset()
    step3Form.reset()
    step4Form.reset()
    step5Form.reset()
    step6Form.reset()
  }

  // Go back to previous step
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 mb-4 md:mb-6 rounded-full border border-white/10 bg-white/5">
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gold" />
          <span className="text-xs font-medium text-white/80">Ready to Transform</span>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 md:mb-6 leading-tight px-4 md:px-0">
          You're one step away from <span className="text-gold">transforming your business</span> with AI
        </h2>

        <p className="text-sm md:text-base lg:text-lg text-white/60 max-w-xl md:max-w-2xl mx-auto px-4 md:px-0">Tell us about your business and AI needs</p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-6 md:mb-8">
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gold transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / 7) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-white/60">
            <span>Start</span>
            <span>Complete</span>
          </div>
        </div>

        {/* Form Container */}
        <div
          className={`p-4 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className={`relative ${currentStep === 7 ? '' : 'overflow-hidden'}`} style={{ minHeight: currentStep === 7 ? 'auto' : "320px" }}>
            {/* Step 1: Personal Information */}
            <div
              className={`transition-all duration-500 ${currentStep === 7 ? 'hidden' : 'absolute'} w-full ${
                currentStep === 1
                  ? "translate-x-0 opacity-100"
                  : currentStep < 1
                    ? "translate-x-full opacity-0"
                    : "-translate-x-full opacity-0"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-light text-white mb-4 md:mb-6">Tell us about yourself</h3>

              <Form {...step1Form}>
                <form onSubmit={step1Form.handleSubmit(onStep1Submit)} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={step1Form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80 text-sm">First Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John"
                              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={step1Form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80 text-sm">Last Name (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Doe"
                              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full group px-6 py-4 md:py-6 text-sm font-medium bg-gold hover:bg-gold/90 text-black rounded-full transition-all duration-300 hover:shadow-lg"
                  >
                    Continue
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </Form>
            </div>

            {/* Step 2: Contact Information */}
            <div
              className={`transition-all duration-500 ${currentStep === 7 ? 'hidden' : 'absolute'} w-full ${
                currentStep === 2
                  ? "translate-x-0 opacity-100"
                  : currentStep < 2
                    ? "translate-x-full opacity-0"
                    : "-translate-x-full opacity-0"
              }`}
            >
              <h3 className="text-2xl font-light text-white mb-6">How can we reach you?</h3>

              <Form {...step2Form}>
                <form onSubmit={step2Form.handleSubmit(onStep2Submit)} className="space-y-6">
                  <FormField
                    control={step2Form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={step2Form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="0092 12345678"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={goToPreviousStep}
                      className="flex-1 group px-6 py-6 text-sm font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-full transition-all duration-300"
                    >
                      <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 group px-6 py-6 text-sm font-medium bg-gold hover:bg-gold/90 text-black rounded-full transition-all duration-300 hover:shadow-lg"
                    >
                      Continue
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

            {/* Step 3: Company Information */}
            <div
              className={`transition-all duration-500 ${currentStep === 7 ? 'hidden' : 'absolute'} w-full ${
                currentStep === 3
                  ? "translate-x-0 opacity-100"
                  : currentStep < 3
                    ? "translate-x-full opacity-0"
                    : "-translate-x-full opacity-0"
              }`}
            >
              <h3 className="text-2xl font-light text-white mb-6">Tell us about your company</h3>

              <Form {...step3Form}>
                <form onSubmit={step3Form.handleSubmit(onStep3Submit)} className="space-y-6">
                  <FormField
                    control={step3Form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Company Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Acme Inc."
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={step3Form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Your Role</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="CEO, CTO, Marketing Director, etc."
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={goToPreviousStep}
                      className="flex-1 group px-6 py-6 text-sm font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-full transition-all duration-300"
                    >
                      <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 group px-6 py-6 text-sm font-medium bg-gold hover:bg-gold/90 text-black rounded-full transition-all duration-300 hover:shadow-lg"
                    >
                      Continue
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

            {/* Step 4: AI Challenges */}
            <div
              className={`transition-all duration-500 ${currentStep === 7 ? 'hidden' : 'absolute'} w-full ${
                currentStep === 4
                  ? "translate-x-0 opacity-100"
                  : currentStep < 4
                    ? "translate-x-full opacity-0"
                    : "-translate-x-full opacity-0"
              }`}
            >
              <h3 className="text-2xl font-light text-white mb-6">Your AI Challenges</h3>

              <Form {...step4Form}>
                <form onSubmit={step4Form.handleSubmit(onStep4Submit)} className="space-y-6">
                  <FormField
                    control={step4Form.control}
                    name="aiChallenges"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">What AI challenges are you looking to solve?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your specific needs and challenges..."
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold resize-none min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={goToPreviousStep}
                      className="flex-1 group px-6 py-6 text-sm font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-full transition-all duration-300"
                    >
                      <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 group px-6 py-6 text-sm font-medium bg-gold hover:bg-gold/90 text-black rounded-full transition-all duration-300 hover:shadow-lg"
                    >
                      Continue
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

            {/* Step 5: Business Context */}
            <div
              className={`transition-all duration-500 ${currentStep === 7 ? 'hidden' : 'absolute'} w-full ${
                currentStep === 5
                  ? "translate-x-0 opacity-100"
                  : currentStep < 5
                    ? "translate-x-full opacity-0"
                    : "-translate-x-full opacity-0"
              }`}
            >
              <h3 className="text-2xl font-light text-white mb-6">Business Context</h3>

              <Form {...step5Form}>
                <form onSubmit={step5Form.handleSubmit(onStep5Submit)} className="space-y-6">
                  <FormField
                    control={step5Form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Industry</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-gold focus:ring-gold">
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black/90 border-white/10 text-white">
                            <SelectItem value="technology" className="focus:bg-gold/20 focus:text-white">Technology</SelectItem>
                            <SelectItem value="finance" className="focus:bg-gold/20 focus:text-white">Finance</SelectItem>
                            <SelectItem value="healthcare" className="focus:bg-gold/20 focus:text-white">Healthcare</SelectItem>
                            <SelectItem value="retail" className="focus:bg-gold/20 focus:text-white">Retail</SelectItem>
                            <SelectItem value="manufacturing" className="focus:bg-gold/20 focus:text-white">Manufacturing</SelectItem>
                            <SelectItem value="education" className="focus:bg-gold/20 focus:text-white">Education</SelectItem>
                            <SelectItem value="other" className="focus:bg-gold/20 focus:text-white">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={step5Form.control}
                    name="companySize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Company Size</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-gold focus:ring-gold">
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black/90 border-white/10 text-white">
                            <SelectItem value="1-10" className="focus:bg-gold/20 focus:text-white">1-10 employees</SelectItem>
                            <SelectItem value="11-50" className="focus:bg-gold/20 focus:text-white">11-50 employees</SelectItem>
                            <SelectItem value="51-200" className="focus:bg-gold/20 focus:text-white">51-200 employees</SelectItem>
                            <SelectItem value="201-500" className="focus:bg-gold/20 focus:text-white">201-500 employees</SelectItem>
                            <SelectItem value="501+" className="focus:bg-gold/20 focus:text-white">501+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={goToPreviousStep}
                      className="flex-1 group px-6 py-6 text-sm font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-full transition-all duration-300"
                    >
                      <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 group px-6 py-6 text-sm font-medium bg-gold hover:bg-gold/90 text-black rounded-full transition-all duration-300 hover:shadow-lg"
                    >
                      Continue
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

            {/* Step 6: Budget & Urgency */}
            <div
              className={`transition-all duration-500 ${currentStep === 7 ? 'hidden' : 'absolute'} w-full ${
                currentStep === 6
                  ? "translate-x-0 opacity-100"
                  : currentStep < 6
                    ? "translate-x-full opacity-0"
                    : "-translate-x-full opacity-0"
              }`}
            >
              <h3 className="text-2xl font-light text-white mb-6">Investment & Timeline</h3>

              <Form {...step6Form}>
                <form onSubmit={step6Form.handleSubmit(onStep6Submit)} className="space-y-6">
                  <FormField
                    control={step6Form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">What's your investment range?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-gold focus:ring-gold">
                              <SelectValue placeholder="Select your budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black/90 border-white/10 text-white">
                            <SelectItem value="$1k-$5k" className="focus:bg-gold/20 focus:text-white">$1k-$5k</SelectItem>
                            <SelectItem value="$6k-$10k" className="focus:bg-gold/20 focus:text-white">$6k-$10k</SelectItem>
                            <SelectItem value="$10k+" className="focus:bg-gold/20 focus:text-white">$10k+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={step6Form.control}
                    name="urgency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">How urgent is this for you?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-gold focus:ring-gold">
                              <SelectValue placeholder="Select urgency level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black/90 border-white/10 text-white">
                            <SelectItem value="very urgent" className="focus:bg-gold/20 focus:text-white">Very urgent</SelectItem>
                            <SelectItem value="want to implement in the next 1-3 months" className="focus:bg-gold/20 focus:text-white">Want to implement in the next 1-3 months</SelectItem>
                            <SelectItem value="simply want to understand whats possible" className="focus:bg-gold/20 focus:text-white">Simply want to understand what's possible</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={goToPreviousStep}
                      disabled={isSubmitting}
                      className="flex-1 group px-6 py-6 text-sm font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 group px-6 py-6 text-sm font-medium bg-gold hover:bg-gold/90 text-black rounded-full transition-all duration-300 hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader className="mr-2 w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

            {/* Step 7: Thank You */}
            <div
              className={`transition-all duration-500 ${currentStep === 7 ? 'relative' : 'absolute hidden'} w-full ${
                currentStep === 7
                  ? "translate-x-0 opacity-100"
                  : currentStep < 7
                    ? "translate-x-full opacity-0"
                    : "-translate-x-full opacity-0"
              }`}
            >
              <div className="text-center py-8">
                <div className="mb-6">
                  <CheckCircle className="w-16 h-16 text-[#10B981] mx-auto mb-4" />
                  <h3 className="text-3xl font-light text-white mb-4">Thank you for reaching out!</h3>
                  <p className="text-lg text-white/60 max-w-md mx-auto mb-6">
                    {submitMessage}
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
                  <h4 className="text-lg font-medium text-white mb-3">What happens next?</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                        <span className="text-xs font-medium text-gold">1</span>
                      </div>
                      <div>
                        <p className="text-white/80 text-sm">We'll review your requirements and prepare a customized approach</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                        <span className="text-xs font-medium text-gold">2</span>
                      </div>
                      <div>
                        <p className="text-white/80 text-sm">Schedule a 30-minute discovery call to discuss your AI opportunities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                        <span className="text-xs font-medium text-gold">3</span>
                      </div>
                      <div>
                        <p className="text-white/80 text-sm">Receive a detailed proposal with timeline and investment options</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={onFinalSubmit}
                  className="group px-8 py-6 text-sm font-medium bg-gold hover:bg-gold/90 text-black rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  Submit Another Request
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div
          className={`mt-12 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h4 className="text-lg font-medium text-white mb-4">Prefer to reach out directly?</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 text-white/60">
              <Mail className="w-4 h-4 text-gold" />
              <span>hussain.b@malakstar.com</span>
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
            <span className="text-white/80">30 Minutes</span>
          </div>
        </div>
      </div>
    </div>
  )
}

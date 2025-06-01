"use client"

import { ArrowLeft, Shield, Lock, Eye, UserCheck, FileText, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"

export default function PrivacyPolicy() {
  const lastUpdated = "December 2024"

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <UserCheck className="w-5 h-5" />,
      content: [
        {
          subtitle: "Information You Provide",
          details: [
            "Contact information (name, email, phone number)",
            "Company details (company name, size, industry, role)",
            "Business requirements and AI challenges",
            "Project specifications and preferences",
            "Communication preferences and feedback"
          ]
        },
        {
          subtitle: "Automatically Collected Information",
          details: [
            "Website usage data and analytics",
            "IP address and browser information",
            "Device type and operating system",
            "Pages visited and time spent on site",
            "Referral sources and search terms"
          ]
        }
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: <Eye className="w-5 h-5" />,
      content: [
        {
          subtitle: "Primary Uses",
          details: [
            "Provide AI consulting and development services",
            "Communicate about your project requirements",
            "Schedule and conduct discovery calls",
            "Develop customized AI solutions",
            "Provide ongoing support and maintenance"
          ]
        },
        {
          subtitle: "Secondary Uses",
          details: [
            "Improve our website and service offerings",
            "Send relevant industry insights and updates",
            "Analyze market trends and client needs",
            "Enhance our AI development methodologies"
          ]
        }
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing & Disclosure",
      icon: <Shield className="w-5 h-5" />,
      content: [
        {
          subtitle: "We Do NOT Share Your Information With",
          details: [
            "Third-party marketing companies",
            "Data brokers or resellers",
            "Competitors or other AI agencies",
            "Social media platforms for advertising",
            "Any unauthorized parties"
          ]
        },
        {
          subtitle: "Limited Sharing for Service Delivery",
          details: [
            "Trusted technical partners (under strict NDAs)",
            "Cloud infrastructure providers (AWS, Google Cloud)",
            "Legal advisors when required by law",
            "Financial institutions for payment processing"
          ]
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security & Protection",
      icon: <Lock className="w-5 h-5" />,
      content: [
        {
          subtitle: "Technical Safeguards",
          details: [
            "End-to-end encryption for all data transmission",
            "Secure cloud storage with enterprise-grade security",
            "Regular security audits and vulnerability assessments",
            "Multi-factor authentication for all team access",
            "Automated backup and disaster recovery systems"
          ]
        },
        {
          subtitle: "Operational Security",
          details: [
            "Non-disclosure agreements with all team members",
            "Limited access on a need-to-know basis",
            "Regular security training for our team",
            "Incident response and breach notification procedures"
          ]
        }
      ]
    },
    {
      id: "your-rights",
      title: "Your Privacy Rights",
      icon: <FileText className="w-5 h-5" />,
      content: [
        {
          subtitle: "You Have the Right To",
          details: [
            "Access all personal data we have about you",
            "Correct any inaccurate or incomplete information",
            "Delete your personal data (subject to legal obligations)",
            "Restrict or object to certain processing activities",
            "Data portability - receive your data in a structured format"
          ]
        },
        {
          subtitle: "How to Exercise Your Rights",
          details: [
            "Email us at hussain.b@malakstar.com",
            "Include your full name and email address",
            "Specify which right you wish to exercise",
            "We will respond within 30 days of your request"
          ]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-0">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5">
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-xs font-medium text-white/80">Privacy & Security</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              At Malak Star AI, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-white/60">
              <Clock className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12 p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-medium text-white mb-4">Our Commitment to Your Privacy</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              As an AI development agency, we understand the critical importance of data privacy and security. This Privacy Policy outlines our practices regarding the collection, use, and protection of your personal information when you use our website or engage our services.
            </p>
            <p className="text-white/70 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy. We will not use or share your information except as described in this Privacy Policy.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gold/10 text-gold">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-medium text-white">{section.title}</h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-6 rounded-xl border border-white/10 bg-white/5">
                      <h3 className="text-lg font-medium text-white mb-4">{item.subtitle}</h3>
                      <ul className="space-y-2">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3 text-white/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-2xl font-medium text-white mb-4">Questions About This Policy?</h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy, your personal data, or how we handle your information, please don't hesitate to reach out to us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white">Contact Information</h3>
                <div className="space-y-2 text-white/70">
                  <p><strong>Email:</strong> hussain.b@malakstar.com</p>
                  <p><strong>Company:</strong> Malak Star AI</p>
                  <p><strong>Response Time:</strong> Within 48 hours</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white">Data Protection Officer</h3>
                <p className="text-white/70">
                  For specific privacy concerns or data protection inquiries, you can contact our Data Protection Officer directly at the email above with "Privacy Inquiry" in the subject line.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Link href="/#contact">
                <Button 
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-black font-medium px-8 py-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-0"
                >
                  Contact Us About Privacy
                </Button>
              </Link>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 rounded-xl border border-white/10 bg-gold/5 text-center">
            <p className="text-white/80 text-sm">
              This Privacy Policy is effective as of {lastUpdated} and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 
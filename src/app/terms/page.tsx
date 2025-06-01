"use client"

import { ArrowLeft, Scale, Handshake, AlertTriangle, Users, CreditCard, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"

export default function TermsOfService() {
  const lastUpdated = "December 2024"

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <Handshake className="w-5 h-5" />,
      content: [
        {
          subtitle: "Agreement to Terms",
          details: [
            "By accessing our website or engaging our services, you agree to these Terms of Service",
            "These terms constitute a legally binding agreement between you and Malak Star AI",
            "If you do not agree to these terms, please do not use our services",
            "We reserve the right to modify these terms at any time with notice",
            "Continued use after changes constitutes acceptance of new terms"
          ]
        },
        {
          subtitle: "Scope of Agreement",
          details: [
            "These terms apply to all services provided by Malak Star AI",
            "Includes website usage, consultations, AI development, and ongoing support",
            "May be supplemented by separate service agreements for specific projects",
            "Supersedes all prior agreements unless otherwise specified"
          ]
        }
      ]
    },
    {
      id: "services",
      title: "Our Services",
      icon: <Users className="w-5 h-5" />,
      content: [
        {
          subtitle: "AI Development Services",
          details: [
            "Custom AI agent development and implementation",
            "AI strategy consultation and planning",
            "System integration and workflow automation",
            "Ongoing support and maintenance services",
            "Training and knowledge transfer"
          ]
        },
        {
          subtitle: "Service Limitations",
          details: [
            "Services are provided on a project basis or retainer agreement",
            "Delivery timelines are estimates and may vary based on project complexity",
            "We reserve the right to refuse service for projects outside our expertise",
            "All services are subject to availability and resource constraints"
          ]
        }
      ]
    },
    {
      id: "client-responsibilities",
      title: "Client Responsibilities",
      icon: <Users className="w-5 h-5" />,
      content: [
        {
          subtitle: "Information and Cooperation",
          details: [
            "Provide accurate and complete information about your business needs",
            "Grant necessary access to systems and data for project completion",
            "Respond to requests for feedback and approvals in a timely manner",
            "Designate appropriate stakeholders for project communication",
            "Maintain confidentiality of proprietary methodologies shared"
          ]
        },
        {
          subtitle: "Acceptable Use",
          details: [
            "Use our services only for lawful business purposes",
            "Do not attempt to reverse engineer or copy our proprietary solutions",
            "Respect intellectual property rights in all AI systems developed",
            "Comply with all applicable laws and regulations",
            "Not use services for competitive intelligence against other clients"
          ]
        }
      ]
    },
    {
      id: "payment-terms",
      title: "Payment & Billing",
      icon: <CreditCard className="w-5 h-5" />,
      content: [
        {
          subtitle: "Payment Structure",
          details: [
            "Project payments are typically structured as milestone-based or monthly retainers",
            "Initial deposit may be required before project commencement",
            "Payment terms are Net 15 days unless otherwise agreed",
            "Late payments may incur interest charges and service suspension",
            "All payments are non-refundable unless specified in project agreement"
          ]
        },
        {
          subtitle: "Pricing and Changes",
          details: [
            "Pricing is based on project scope and complexity",
            "Changes to project scope may result in additional charges",
            "We will provide written notice of any pricing changes",
            "Ongoing retainer rates may be adjusted annually with 30 days notice"
          ]
        }
      ]
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: <Scale className="w-5 h-5" />,
      content: [
        {
          subtitle: "Ownership Rights",
          details: [
            "Client retains ownership of their business data and proprietary information",
            "Malak Star AI retains ownership of proprietary methodologies and frameworks",
            "Custom AI solutions developed for clients belong to the client upon full payment",
            "We retain the right to use general knowledge and techniques in future projects",
            "Third-party software and services remain property of their respective owners"
          ]
        },
        {
          subtitle: "Usage Rights",
          details: [
            "Client grants us limited rights to use their data for project completion",
            "We may use anonymized project outcomes as case studies with prior consent",
            "Client may not resell or redistribute AI solutions to third parties",
            "Both parties respect each other's confidential and proprietary information"
          ]
        }
      ]
    },
    {
      id: "limitations",
      title: "Limitations & Disclaimers",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: [
        {
          subtitle: "Service Disclaimers",
          details: [
            "AI systems are provided 'as-is' without warranties of specific performance outcomes",
            "We cannot guarantee specific business results or ROI from AI implementations",
            "Performance may vary based on data quality, user adoption, and external factors",
            "AI systems require ongoing monitoring and may need adjustments over time",
            "We are not liable for decisions made based on AI system recommendations"
          ]
        },
        {
          subtitle: "Limitation of Liability",
          details: [
            "Our liability is limited to the amount paid for the specific service in question",
            "We are not liable for indirect, consequential, or punitive damages",
            "Force majeure events (natural disasters, pandemics, etc.) may excuse performance delays",
            "Client is responsible for backup systems and business continuity planning"
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
              <Scale className="w-4 h-4 text-gold" />
              <span className="text-xs font-medium text-white/80">Legal Terms</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              Terms of Service
            </h1>
            
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              These terms govern your use of Malak Star AI services. Please read them carefully as they contain important information about your rights and obligations.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-white/60">
              <Clock className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12 p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-medium text-white mb-4">Welcome to Malak Star AI</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              These Terms of Service outline the rules and regulations for the use of Malak Star AI's services, including our website, AI development services, and ongoing support. These terms are designed to protect both our clients and our business while ensuring clear expectations for all parties.
            </p>
            <p className="text-white/70 leading-relaxed">
              By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these terms. If you have any questions about these terms, please contact us before proceeding.
            </p>
          </div>

          {/* Terms Sections */}
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
            <h2 className="text-2xl font-medium text-white mb-4">Questions About These Terms?</h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              If you have any questions about these Terms of Service or need clarification on any aspect of our service agreement, we're here to help.
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
                <h3 className="text-lg font-medium text-white">Legal Department</h3>
                <p className="text-white/70">
                  For specific legal inquiries or contract discussions, please contact us with "Legal Inquiry" in the subject line, and we'll connect you with the appropriate team member.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Link href="/#contact">
                <Button 
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-black font-medium px-8 py-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-0"
                >
                  Contact Us About Terms
                </Button>
              </Link>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 rounded-xl border border-white/10 bg-gold/5 text-center">
            <p className="text-white/80 text-sm">
              These Terms of Service are effective as of {lastUpdated} and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 
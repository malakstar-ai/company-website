import type React from "react"
import type { Metadata } from "next"
import { EnhancedBackground } from "@/src/components/ui/enhanced-background"
import { FloatingOrbs } from "@/src/components/ui/floating-orbs"
import { ParallaxBackground } from "@/src/components/ui/parallax-background"
import "./globals.css"

export const metadata: Metadata = {
  title: "Malak Star AI",
  description: "For B2B businesses ready to scale sales, operations, and delivery with intelligence.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/circle-logo.png" />
        <link rel="apple-touch-icon" href="/circle-logo.png" />
      </head>
      <body className="font-satoshi" suppressHydrationWarning={true}>
        <EnhancedBackground />
        <FloatingOrbs />
        <ParallaxBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}


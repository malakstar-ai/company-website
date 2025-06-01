"use client"

export function SectionDivider() {
  return (
    <div className="relative h-32 overflow-hidden">
      {/* Animated gradient line */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent animate-pulse" />
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0">
        <div
          className="absolute left-1/4 top-1/2 w-2 h-2 bg-gold/40 rounded-full animate-ping"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute left-1/2 top-1/2 w-1 h-1 bg-gold/60 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute left-3/4 top-1/2 w-1.5 h-1.5 bg-gold/50 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </div>
  )
}

"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple parallax on scroll
    const handleScroll = () => {
      if (ref.current) {
        ref.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="hero-gradient min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Decorative sketch illustrations (CSS-based placeholders for marketing equipment) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Megaphone top-right area */}
        <div className="absolute top-16 right-[10%] opacity-20">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <path d="M20 50 L70 30 L70 70 L20 70 Z" stroke="white" strokeWidth="2" fill="none" />
            <path d="M70 35 Q100 20 100 50 Q100 80 70 65" stroke="white" strokeWidth="2" fill="none" />
            <path d="M20 70 L15 90 L25 90 L30 70" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>
        {/* Camera right side */}
        <div className="absolute top-1/2 right-[5%] opacity-15 -translate-y-1/2">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <rect x="10" y="25" width="60" height="40" rx="4" stroke="white" strokeWidth="2" />
            <circle cx="40" cy="45" r="12" stroke="white" strokeWidth="2" />
            <circle cx="40" cy="45" r="6" stroke="white" strokeWidth="2" />
            <rect x="25" y="17" width="20" height="10" rx="2" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        {/* Stars scattered */}
        {[
          { x: "15%", y: "20%", size: 4 },
          { x: "80%", y: "15%", size: 3 },
          { x: "60%", y: "80%", size: 5 },
          { x: "25%", y: "75%", size: 3 },
          { x: "90%", y: "60%", size: 4 },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container relative z-10 pt-8 pb-20">
        <div className="max-w-3xl">
          {/* Hero Headline */}
          <h1 className="leading-[0.95] tracking-tight select-none">
            <span className="block">
              <span
                style={{
                  fontSize: "clamp(56px, 10vw, 120px)",
                  fontWeight: 900,
                  color: "#001A33",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                BOLD
              </span>
              <span
                style={{
                  fontSize: "clamp(20px, 3.5vw, 42px)",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.9)",
                  marginLeft: "8px",
                  verticalAlign: "middle",
                }}
              >
                ideas
              </span>
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(56px, 10vw, 120px)",
                fontWeight: 900,
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              DESERVE
            </span>
            <span className="block">
              <span
                style={{
                  fontSize: "clamp(56px, 10vw, 120px)",
                  fontWeight: 900,
                  color: "#001A33",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                FLAWLESS
              </span>
            </span>
            <span className="block" style={{ lineHeight: 1 }}>
              <span
                style={{
                  fontSize: "clamp(16px, 2.5vw, 30px)",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.85)",
                  marginRight: "6px",
                  verticalAlign: "middle",
                }}
              >
                execution
              </span>
              <span
                style={{
                  fontSize: "clamp(56px, 10vw, 120px)",
                  fontWeight: 900,
                  color: "#001A33",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                ALWAYS
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="mt-8 max-w-xl"
            style={{
              fontSize: "clamp(16px, 2vw, 18px)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.6,
            }}
          >
            Trusted by founders and business owners who value ROI over hype.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white border border-white/50 hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              Get Started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

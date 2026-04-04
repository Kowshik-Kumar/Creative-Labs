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
      {/* Decorative sketch illustrations (CSS-based placeholders for technical systems) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right service node */}
        <div className="absolute top-16 right-[10%] opacity-20">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <rect x="24" y="34" width="44" height="34" rx="6" stroke="white" strokeWidth="2" fill="none" />
            <path d="M31 46H61M31 54H52" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M74 42H92M74 58H96" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        {/* Infrastructure node */}
        <div className="absolute top-1/2 right-[5%] opacity-15 -translate-y-1/2">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <rect x="12" y="20" width="56" height="40" rx="4" stroke="white" strokeWidth="2" />
            <path d="M22 30H58M22 40H46M22 50H54" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <circle cx="58" cy="40" r="4" fill="white" />
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
                BUILD
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
                systems
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
                engineering
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
            We design and build reliable digital products, internal tools, and cloud-connected systems for teams that need speed without sacrificing quality.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 text-lg font-bold text-[#0B0F14] transition-opacity hover:opacity-80"
            >
              Start a Project
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 text-lg font-bold text-[#0B0F14] transition-opacity hover:opacity-80"
            >
              View Services
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

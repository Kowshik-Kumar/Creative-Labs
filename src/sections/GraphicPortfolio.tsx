"use client";
import { useEffect, useRef } from "react";

const portfolioItems = [
  { brand: "Atlas Core", category: "SaaS Platform", color: "#0F62FE" },
  { brand: "Northstar CRM", category: "Internal Tooling", color: "#0052CC" },
  { brand: "Helix Health", category: "Web App", color: "#0F766E" },
  { brand: "Relay Ops", category: "Automation", color: "#7C3AED" },
  { brand: "Ledger Grid", category: "Fintech", color: "#D97706" },
  { brand: "Nova Cloud", category: "Infrastructure", color: "#111827" },
];

export default function GraphicPortfolio() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ background: "#000000", padding: "80px 0" }}>
      <div className="container">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="serif-italic" style={{
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 400,
            color: "white",
            letterSpacing: "-0.01em",
          }}>
            Selected Work
          </h2>
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "#FF5722",
              margin: "16px auto 0",
            }}
          />
        </div>

        {/* Poster grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 opacity-0 translate-y-8 transition-all duration-700"
        >
          {portfolioItems.map((item, i) => (
            <div
              key={item.brand}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              style={{
                aspectRatio: "3/4",
                background: `linear-gradient(135deg, ${item.color}dd, ${item.color}55)`,
              }}
            >
              {/* Decorative poster layout */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Top brand name */}
                <div>
                  <p
                    className="serif-italic"
                    style={{
                      fontSize: "clamp(16px, 2.5vw, 22px)",
                      color: "white",
                      fontWeight: 400,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.brand}
                  </p>
                  <p
                    style={{
                      fontSize: "10px",
                      color: "rgba(255,255,255,0.6)",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      marginTop: "4px",
                    }}
                  >
                    {item.category}
                  </p>
                </div>

                {/* Center decorative element */}
                <div className="flex-1 flex items-center justify-center">
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.1)",
                      }}
                    />
                  </div>
                </div>

                {/* Bottom label */}
                <div className="border-t border-white/10 pt-3">
                  <p
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Technical Delivery
                  </p>
                </div>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    fontWeight: 600,
                    border: "1px solid white",
                    padding: "8px 16px",
                    borderRadius: "20px",
                  }}
                >
                  View Work
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

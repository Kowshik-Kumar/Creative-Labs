"use client";
import { useEffect, useRef } from "react";

export default function TrustedBy() {
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
    <section style={{ background: "#FDFBF7", padding: "80px 0" }}>
      <div className="container">
        <div
          ref={ref}
          className="flex flex-col lg:flex-row items-center gap-16 opacity-0 translate-y-8 transition-all duration-700"
        >
          {/* Left: headline + description */}
          <div className="flex-1 max-w-lg">
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 800,
                color: "#001A33",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Trusted by product teams who value reliability over hype.
            </h2>
            <p
              className="mt-6"
              style={{
                fontSize: "15px",
                color: "#666",
                lineHeight: 1.7,
                borderLeft: "3px solid #FF5722",
                paddingLeft: "16px",
              }}
            >
              From startups to growing platforms, we partner with teams that need clean architecture, dependable delivery, and measurable performance.
            </p>
          </div>

          {/* Right: Delivery metrics card */}
          <div className="flex-1 w-full max-w-md">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "white",
                boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
                padding: "24px",
              }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#1E88E5">
                      <path d="M3 3h18v18H3zM7 17V10m4 7V7m4 10v-4" stroke="#1E88E5" strokeWidth="2" fill="none" />
                    </svg>
                    <p style={{ fontSize: "13px", fontWeight: 700, color: "#001A33" }}>Delivery Dashboard</p>
                  </div>
                  <p style={{ fontSize: "11px", color: "#999", marginTop: "2px" }}>Engineering Health Overview</p>
                </div>
                <span
                  style={{
                    background: "#F0F4FF",
                    color: "#1E88E5",
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: "20px",
                  }}
                >
                  Last 30 Days
                </span>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                {[
                  { label: "UPTIME", value: "99.98%", change: "+0.2%", up: true },
                  { label: "DEPLOYS", value: "128", change: "+18%", up: true },
                  { label: "AVG. LATENCY", value: "84ms", change: "-11%", up: true },
                  { label: "ISSUES RESOLVED", value: "2,845", change: "+24%", up: true },
                ].map((m) => (
                  <div key={m.label}>
                    <p style={{ fontSize: "9px", color: "#999", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {m.label}
                    </p>
                    <p style={{ fontSize: "16px", fontWeight: 800, color: "#001A33", marginTop: "2px" }}>{m.value}</p>
                    <p style={{ fontSize: "10px", color: m.up ? "#22C55E" : "#FF5722", fontWeight: 600 }}>
                      {m.change}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart area */}
              <div style={{ height: "100px", position: "relative" }}>
                <svg width="100%" height="100" viewBox="0 0 300 100" preserveAspectRatio="none">
                  {/* Main blue line */}
                  <polyline
                    points="0,78 40,70 80,58 120,46 160,48 200,34 240,28 280,22 300,18"
                    fill="none"
                    stroke="#1E88E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Fill area */}
                  <polygon
                    points="0,78 40,70 80,58 120,46 160,48 200,34 240,28 280,22 300,18 300,100 0,100"
                    fill="rgba(30,136,229,0.08)"
                  />
                  {/* Orange accent line */}
                  <polyline
                    points="0,88 40,82 80,78 120,66 160,68 200,58 240,54 280,42 300,44"
                    fill="none"
                    stroke="#FF5722"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="4 2"
                  />
                </svg>
                {/* Reference lines */}
                {[0, 25, 50, 75, 100].map((y, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0"
                    style={{
                      top: `${y}%`,
                      borderTop: "1px solid rgba(0,0,0,0.06)",
                      fontSize: "9px",
                      color: "#ccc",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

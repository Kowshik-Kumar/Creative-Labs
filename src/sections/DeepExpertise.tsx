"use client";
import { useEffect, useRef } from "react";

const industries = [
  { label: "SaaS Platforms", icon: "🧩", angle: 0 },
  { label: "Fintech", icon: "💳", angle: 60 },
  { label: "Healthcare", icon: "🩺", angle: 120 },
  { label: "Logistics", icon: "🚚", angle: 180 },
  { label: "EdTech", icon: "🎓", angle: 240 },
  { label: "Internal Tools", icon: "⚙️", angle: 300 },
];

export default function DeepExpertise() {
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
    <section style={{ background: "#F7F6F3", padding: "80px 0" }}>
      <div className="container">
        <div
          ref={ref}
          className="opacity-0 translate-y-8 transition-all duration-700"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 800,
                color: "#001A33",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Deep Technical Expertise Across the Board.
            </h2>
            <p
              className="mt-4 mx-auto"
              style={{
                fontSize: "16px",
                color: "#666",
                maxWidth: "540px",
                lineHeight: 1.6,
              }}
            >
              We adapt our delivery process to fit the architecture, compliance, and performance needs of each product.
            </p>
          </div>

          {/* Industry diagram */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Circular diagram */}
            <div className="relative flex-shrink-0" style={{ width: "320px", height: "320px" }}>
              {/* Orbit rings */}
              <div
                className="absolute rounded-full border border-dashed"
                style={{
                  top: "50%", left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: "300px", height: "300px",
                  borderColor: "rgba(30,136,229,0.2)",
                }}
              />
              <div
                className="absolute rounded-full border border-dashed"
                style={{
                  top: "50%", left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: "200px", height: "200px",
                  borderColor: "rgba(30,136,229,0.12)",
                }}
              />

              {/* Center */}
              <div
                className="absolute flex items-center justify-center text-center rounded-full"
                style={{
                  top: "50%", left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: "110px", height: "110px",
                  background: "linear-gradient(135deg, #1565C0, #1E88E5)",
                  boxShadow: "0 8px 32px rgba(21,101,192,0.35)",
                }}
              >
                <div>
                  <p style={{ fontSize: "13px", fontWeight: 800, color: "white", lineHeight: 1.2 }}>PRODUCT</p>
                  <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>Engineering</p>
                </div>
              </div>

              {/* Industry nodes */}
              {industries.map((ind) => {
                const rad = (ind.angle * Math.PI) / 180;
                const r = 140;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                return (
                  <div
                    key={ind.label}
                    className="absolute flex flex-col items-center text-center"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%,-50%)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-md"
                      style={{ background: "white", border: "2px solid rgba(30,136,229,0.2)" }}
                    >
                      {ind.icon}
                    </div>
                    <p style={{ fontSize: "9px", color: "#444", fontWeight: 600, marginTop: "4px", maxWidth: "70px", lineHeight: 1.2 }}>
                      {ind.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right side: categories list */}
            <div className="flex-1 max-w-lg">
              {[
                {
                  title: "Web Platforms",
                  icon: "🛍️",
                  tags: ["SaaS", "Portals", "Dashboards", "Customer Apps"],
                  color: "#1E88E5",
                },
                {
                  title: "Mobile & APIs",
                  icon: "🎓",
                  tags: ["iOS", "Android", "REST APIs", "Integrations"],
                  color: "#FF5722",
                },
                {
                  title: "Cloud & DevOps",
                  icon: "🌟",
                  tags: ["CI/CD", "Monitoring", "Scalability", "Security"],
                  color: "#7C3AED",
                },
              ].map((cat) => (
                <div
                  key={cat.title}
                  className="mb-4 rounded-xl p-5 flex items-start gap-4"
                  style={{ background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${cat.color}15` }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "15px", fontWeight: 700, color: "#001A33" }}>{cat.title}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {cat.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "11px",
                            color: cat.color,
                            background: `${cat.color}12`,
                            padding: "2px 8px",
                            borderRadius: "20px",
                            fontWeight: 600,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef } from "react";

const services = [
  {
    id: "website-design",
    title: "Website Design",
    number: "01",
    quote: "First impressions happen in seconds. Make every pixel count.",
    translation: "",
    description:
      "Conversion-first website experiences crafted for speed, clarity, and trust. From landing pages to complete business sites, we design for growth.",
    tags: ["Landing Pages", "Corporate Sites", "UX Writing", "Responsive UI"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="20" rx="3" stroke="#001A33" strokeWidth="2" />
        <line x1="8" y1="12" x2="24" y2="12" stroke="#001A33" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="17" x2="18" y2="17" stroke="#001A33" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="23" cy="17" r="2" fill="#FF5722" />
      </svg>
    ),
  },
  {
    id: "dashboard-design",
    title: "Dashboard Design",
    number: "02",
    quote: "Complex data should feel simple, clear, and actionable.",
    translation: "",
    description:
      "We design product dashboards and internal tools that help teams track, decide, and execute faster with confidence.",
    tags: ["Data UI", "Admin Panels", "SaaS Dashboards", "Design Systems"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="5" y="7" width="22" height="18" rx="2" stroke="#001A33" strokeWidth="2" />
        <rect x="8" y="18" width="4" height="4" fill="#001A33" />
        <rect x="14" y="15" width="4" height="7" fill="#001A33" />
        <rect x="20" y="12" width="4" height="10" fill="#FF5722" />
      </svg>
    ),
  },
];

const comingSoonServices = [
  "Full Stack Website",
  "Marketing Services",
  "Video Services",
];

export default function MarketingServices() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" style={{ background: "#F4F0E6", padding: "80px 0" }}>
      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#FF5722",
              marginBottom: "12px",
            }}
          >
            What We Do
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 200,
              color: "#001A33",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Marketing <br />
            <span style={{ fontWeight: 800 }}>Services</span>
          </h2>
        </div>

        {/* Services list */}
        <div
          ref={ref}
          className="opacity-0 translate-y-8 transition-all duration-700"
        >
          {services.map((svc, idx) => (
            <div
              key={svc.id}
              className="group"
              style={{
                borderTop: "1px solid rgba(0,26,51,0.12)",
                padding: "40px 0",
                ...(idx === services.length - 1
                  ? { borderBottom: "1px solid rgba(0,26,51,0.12)" }
                  : {}),
              }}
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                {/* Number & icon */}
                <div className="flex items-center gap-4 lg:w-32 flex-shrink-0">
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#999",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {svc.number}
                  </span>
                  <div>{svc.icon}</div>
                </div>

                {/* Title + tags */}
                <div className="lg:w-64 flex-shrink-0">
                  <h3
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 26px)",
                      fontWeight: 700,
                      color: "#001A33",
                      lineHeight: 1.2,
                    }}
                  >
                    {svc.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "11px",
                          color: "#555",
                          background: "rgba(0,26,51,0.06)",
                          padding: "3px 10px",
                          borderRadius: "20px",
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quote + description */}
                <div className="flex-1">
                  <blockquote
                    style={{
                      fontSize: "clamp(16px, 2.5vw, 24px)",
                      fontWeight: 600,
                      color: "#001A33",
                      lineHeight: 1.4,
                      marginBottom: "12px",
                      fontStyle: "italic",
                    }}
                  >
                    "{svc.quote}"
                  </blockquote>
                  {svc.translation && (
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#999",
                        fontStyle: "italic",
                        marginBottom: "12px",
                      }}
                    >
                      {svc.translation}
                    </p>
                  )}
                  <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7 }}>
                    {svc.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div
            className="mt-8 rounded-2xl p-6"
            style={{ background: "rgba(0,26,51,0.04)", border: "1px solid rgba(0,26,51,0.08)" }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#FF5722",
                marginBottom: "10px",
              }}
            >
              Coming Soon Category
            </p>
            <div className="flex flex-wrap gap-2">
              {comingSoonServices.map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: "12px",
                    color: "#001A33",
                    background: "white",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    border: "1px solid rgba(0,26,51,0.12)",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We work primarily with D2C brands, e-commerce stores, high-ticket education businesses, and personal brands. If you're selling online and want predictable, scalable growth — we're a fit.",
  },
  {
    question: "How long does it take to see results from performance marketing?",
    answer:
      "Most clients see measurable improvement in ROAS and conversion rates within the first 30–60 days. We audit existing campaigns, fix fundamental issues, and launch optimized structures rapidly.",
  },
  {
    question: "Do you guarantee ROI?",
    answer:
      "We don't offer empty guarantees — but we do bring a proven system, full transparency, and weekly reporting. Our track record speaks: clients average 3–5x ROAS within 90 days.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing depends on the scope and scale of your goals. We offer tailored packages starting from ₹25,000/month. Book a call and we'll create a custom proposal for you.",
  },
  {
    question: "Do you handle both content creation and paid advertising?",
    answer:
      "Yes! We offer end-to-end marketing — from ad creatives and content strategy to paid campaign management and social media growth. You get one team, full execution.",
  },
  {
    question: "Can I work with you if I'm just starting out?",
    answer:
      "Absolutely. We've helped startups go from zero to their first ₹10L month. We'll build the right foundation from day one.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <span
          style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            fontWeight: 600,
            color: "#001A33",
            paddingRight: "24px",
            lineHeight: 1.4,
          }}
        >
          {question}
        </span>
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            border: "1.5px solid rgba(0,26,51,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "transform 0.3s, background 0.2s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            background: open ? "#001A33" : "transparent",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <line x1="6" y1="1" x2="6" y2="11" stroke={open ? "white" : "#001A33"} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="1" y1="6" x2="11" y2="6" stroke={open ? "white" : "#001A33"} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </button>
      <div
        style={{
          maxHeight: open ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p
          style={{
            fontSize: "15px",
            color: "#555",
            lineHeight: 1.7,
            paddingBottom: "20px",
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
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
    <section style={{ background: "#F4F0E6", padding: "80px 0" }}>
      <div className="container">
        <div
          ref={ref}
          className="flex flex-col lg:flex-row gap-12 lg:gap-24 opacity-0 translate-y-8 transition-all duration-700"
        >
          {/* Left */}
          <div className="lg:w-80 flex-shrink-0">
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
              FAQ
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                color: "#001A33",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Got Questions?
            </h2>
            <p style={{ fontSize: "15px", color: "#777", marginTop: "16px", lineHeight: 1.6 }}>
              Everything you need to know about working with Creative Labz.
            </p>
            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "24px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#1E88E5",
                textDecoration: "none",
              }}
            >
              Still have questions? Talk to us →
            </a>
          </div>

          {/* Right: FAQ items */}
          <div className="flex-1">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    title: "Brand Design",
    items: ["Identity", "Product", "Assets", "Packaging"],
  },
  {
    title: "Video & Motion",
    items: ["Video Editing", "AI Ads", "Short-form", "UGC-style", "Explainers"],
  },
  {
    title: "UI/UX",
    items: ["Research", "Design", "Micro-interactions", "Prototyping"],
  },
  {
    title: "Web",
    items: ["Website Dev", "App Dev", "Interactive", "E-commerce"],
  },
];

export default function Services() {
  return (
    <Section id="services" title="Services©" subtitle="Digital Execution">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, idx) => (
          <FadeIn key={s.title} delay={idx * 0.1}>
            <div className="glass rounded-xl p-5">
              <h3 className="text-white font-semibold">{s.title}</h3>
              <ul className="mt-3 text-sm text-zinc-400 space-y-1">
                {s.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

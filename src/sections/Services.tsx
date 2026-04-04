import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    title: "Product Engineering",
    items: ["Discovery", "Architecture", "Build", "Iteration"],
  },
  {
    title: "Cloud & DevOps",
    items: ["CI/CD", "Monitoring", "Deployments", "Security", "Scaling"],
  },
  {
    title: "UI/UX",
    items: ["Research", "Design Systems", "Flows", "Prototyping"],
  },
  {
    title: "Integrations",
    items: ["APIs", "Automation", "Data Sync", "Third-party Tools"],
  },
];

export default function Services() {
  return (
    <Section id="services" title="Services" subtitle="Technical Delivery">
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

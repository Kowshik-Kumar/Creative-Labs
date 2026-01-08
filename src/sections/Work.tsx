import Image from "next/image";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import { projects } from "@/data/projects";

export default function Work() {
  return (
    <Section id="work" title="Featured Works©" subtitle="Digital Showcase">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <FadeIn key={p.title} delay={idx * 0.1}>
            <a href={p.href ?? "#"} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  unoptimized
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="mt-3">
                <p className="text-zinc-300 font-medium">{p.title}</p>
                <p className="text-zinc-500 text-sm">{p.category}</p>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

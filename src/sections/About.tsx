import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <Section id="about" title="About Us" subtitle="Technical Services">
      <FadeIn>
        <div className="glass rounded-xl p-6">
          <p className="text-zinc-300 text-lg">
            We're a technical services studio based in India, working across product engineering, UI/UX, cloud infrastructure, and interactive web experiences. Our focus is on building digital systems that are clear, scalable, and designed to last.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}

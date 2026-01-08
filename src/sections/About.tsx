import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <Section id="about" title="About Us" subtitle="Design Studio">
      <FadeIn>
        <div className="glass rounded-xl p-6">
          <p className="text-zinc-300 text-lg">
            We're a creative design and development studio based in India, working across branding, UI/UX, motion, and interactive web experiences. Our focus is on building digital systems that are clear, scalable, and designed to last.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}

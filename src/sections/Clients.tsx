import Image from "next/image";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";

const clients = [
  "/clients/01.png",
  "/clients/02.png",
  "/clients/03.png",
  "/clients/04.png",
  "/clients/05.png",
  "/clients/06.png",
  "/clients/07.png",
  "/clients/08.png",
];

export default function Clients() {
  return (
    <Section id="clients" title="Clients©" subtitle="Brand Partners">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {clients.map((c, idx) => (
          <FadeIn key={idx} delay={idx * 0.05}>
            <div className="glass rounded-xl p-6 flex items-center justify-center">
              <Image src={c} alt={`Client ${idx + 1}`} width={120} height={48} unoptimized />
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

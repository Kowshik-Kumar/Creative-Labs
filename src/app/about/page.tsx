"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="container px-6 max-w-4xl mx-auto">
          <FadeIn>
            <div className="mb-12">
              <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">
                Technical Services Agency
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                About Us
              </h1>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="glass rounded-xl p-8 mb-8">
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                We're a technical services agency based in India, working across web development, product engineering, UI/UX, cloud infrastructure, and internal tools. Our focus is on building digital systems that are fast, stable, and designed to last.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                Creative Labz combines product thinking with practical engineering. We believe strong architecture, clean interfaces, and disciplined delivery create better outcomes for teams and users.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed">
                Our approach is rooted in collaboration, reliability, and attention to detail. We work closely with clients to understand their constraints and craft solutions that fit real technical requirements.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="glass rounded-xl p-6">
                <h3 className="text-accent text-lg font-semibold mb-3">Our Mission</h3>
                <p className="text-zinc-400">
                  To create dependable digital products that are useful, maintainable, and built to scale.
                </p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-accent text-lg font-semibold mb-3">Our Vision</h3>
                <p className="text-zinc-400">
                  To be the go-to technical partner for teams that need software shipped with clarity and discipline.
                </p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-accent text-lg font-semibold mb-3">Our Values</h3>
                <p className="text-zinc-400">
                  Reliability, transparency, collaboration, and engineering excellence in everything we do.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">What We Do</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-accent text-xl font-semibold mb-2">Web Application Development</h3>
                  <p className="text-zinc-400">
                    Building fast, modern web products with responsive interfaces and maintainable code.
                  </p>
                </div>
                <div>
                  <h3 className="text-accent text-xl font-semibold mb-2">UI/UX Systems</h3>
                  <p className="text-zinc-400">
                    Crafting intuitive design systems and interfaces that make complex workflows easier to use.
                  </p>
                </div>
                <div>
                  <h3 className="text-accent text-xl font-semibold mb-2">Cloud & DevOps</h3>
                  <p className="text-zinc-400">
                    Setting up deployment pipelines, monitoring, and infrastructure that support stable delivery.
                  </p>
                </div>
                <div>
                  <h3 className="text-accent text-xl font-semibold mb-2">Product Support</h3>
                  <p className="text-zinc-400">
                    Maintaining existing systems with audits, bug fixes, performance tuning, and ongoing improvements.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}

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
                Design Studio
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                About Us
              </h1>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="glass rounded-xl p-8 mb-8">
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                We're a creative design and development studio based in India, working across branding, UI/UX, motion, and interactive web experiences. Our focus is on building digital systems that are clear, scalable, and designed to last.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                Founded with a vision to create timeless design solutions, Creative Labz combines strategic thinking with creative execution. We believe in the power of thoughtful design to transform brands and create meaningful connections with audiences.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed">
                Our approach is rooted in collaboration, innovation, and attention to detail. We work closely with our clients to understand their unique challenges and craft solutions that not only meet their needs but exceed their expectations.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="glass rounded-xl p-6">
                <h3 className="text-accent text-lg font-semibold mb-3">Our Mission</h3>
                <p className="text-zinc-400">
                  To create exceptional digital experiences that drive results and leave lasting impressions.
                </p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-accent text-lg font-semibold mb-3">Our Vision</h3>
                <p className="text-zinc-400">
                  To be the go-to design partner for brands looking to make a meaningful impact in the digital world.
                </p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-accent text-lg font-semibold mb-3">Our Values</h3>
                <p className="text-zinc-400">
                  Innovation, integrity, collaboration, and excellence in everything we do.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">What We Do</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-accent text-xl font-semibold mb-2">Branding</h3>
                  <p className="text-zinc-400">
                    Creating distinctive brand identities that resonate with your target audience and stand the test of time.
                  </p>
                </div>
                <div>
                  <h3 className="text-accent text-xl font-semibold mb-2">UI/UX Design</h3>
                  <p className="text-zinc-400">
                    Crafting intuitive and beautiful user interfaces that provide seamless experiences across all touchpoints.
                  </p>
                </div>
                <div>
                  <h3 className="text-accent text-xl font-semibold mb-2">Motion Design</h3>
                  <p className="text-zinc-400">
                    Bringing your brand to life with engaging animations and motion graphics that captivate and inform.
                  </p>
                </div>
                <div>
                  <h3 className="text-accent text-xl font-semibold mb-2">Web Development</h3>
                  <p className="text-zinc-400">
                    Building fast, responsive, and scalable web applications using modern technologies and best practices.
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

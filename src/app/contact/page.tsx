"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="container px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  Get in touch
                </h1>
                <p className="text-xl text-zinc-400">
                  Studio Wrap
                </p>
              </div>

              <div className="glass rounded-xl p-8 md:p-12">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Let's create something amazing together!
                </h2>
                <p className="text-zinc-400 mb-8">
                  Reach out — we'd love to hear about your project and ideas.
                </p>
                
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    className="rounded-md border border-zinc-700 bg-transparent px-4 py-3 text-zinc-200 focus:border-accent focus:outline-none" 
                    placeholder="Name" 
                    type="text"
                  />
                  <input 
                    className="rounded-md border border-zinc-700 bg-transparent px-4 py-3 text-zinc-200 focus:border-accent focus:outline-none" 
                    placeholder="Email" 
                    type="email"
                  />
                  <input 
                    className="md:col-span-2 rounded-md border border-zinc-700 bg-transparent px-4 py-3 text-zinc-200 focus:border-accent focus:outline-none" 
                    placeholder="Subject" 
                    type="text"
                  />
                  <textarea 
                    className="md:col-span-2 rounded-md border border-zinc-700 bg-transparent px-4 py-3 text-zinc-200 focus:border-accent focus:outline-none" 
                    rows={6} 
                    placeholder="Tell us about your project"
                  />
                  <button 
                    className="md:col-span-2 rounded-full bg-accent px-6 py-3 text-black font-medium w-fit hover:opacity-90 transition-opacity"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
                
                <div className="mt-8 pt-8 border-t border-zinc-800">
                  <p className="text-sm text-zinc-400">Or reach us directly at:</p>
                  <p className="text-lg text-zinc-200 mt-2">connect@creativelabz.studio</p>
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

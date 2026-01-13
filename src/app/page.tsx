"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Work from "@/sections/Work";
import Services from "@/sections/Services";
import Clients from "@/sections/Clients";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <div className="space-y-24 mt-16">
          <Work />
          <Services />
          <Clients />
        </div>
      </main>
      <Footer />
    </>
  );
}

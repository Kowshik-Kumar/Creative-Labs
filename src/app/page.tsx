"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import TrustedBy from "@/sections/TrustedBy";
import DeepExpertise from "@/sections/DeepExpertise";
import ParallaxTransition from "@/sections/ParallaxTransition";
import GraphicPortfolio from "@/sections/GraphicPortfolio";
import TechnicalServices from "@/sections/MarketingServices";
import FAQ from "@/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <DeepExpertise />
        <ParallaxTransition />
        <GraphicPortfolio />
        <TechnicalServices />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

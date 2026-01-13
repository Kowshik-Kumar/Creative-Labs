"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const navItems = [
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "#clients", label: "Clients" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page
      if (currentScrollY < 50) {
        setVisible(true);
      } 
      // Hide when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } 
      // Show when scrolling up
      else if (currentScrollY < lastScrollY) {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
      visible ? "top-0" : "-top-24"
    }`}>
      <div className="container px-6 py-4 flex items-center justify-between backdrop-blur-md bg-background/30">
        <Link href="/" className="font-semibold tracking-tight text-zinc-200 hover:text-white transition-colors">
          Creative Labz
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300 absolute left-1/2 -translate-x-1/2">
          {navItems.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-white">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-black hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
        <button
          className="md:hidden rounded-md px-3 py-2 text-zinc-300 hover:bg-zinc-800/50"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden container px-6 pb-4">
          <div className="backdrop-blur-md bg-background/50 rounded-xl p-4 flex flex-col gap-3 text-zinc-300">
            {navItems.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-black"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

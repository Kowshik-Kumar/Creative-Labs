"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#clients", label: "Clients" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container px-6 py-4 flex items-center justify-between glass rounded-b-xl">
        <Link href="#top" className="font-semibold tracking-tight text-zinc-200">
          Creative Labz
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          {navItems.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-white">
              {n.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-4 rounded-full bg-accent px-4 py-2 text-sm font-medium text-black hover:opacity-90"
          >
            Get in touch
          </Link>
        </nav>
        <button
          className="md:hidden rounded-md border px-3 py-2 text-zinc-300"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden container px-6 pb-4">
          <div className="glass rounded-xl p-4 flex flex-col gap-3 text-zinc-300">
            {navItems.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <Link
              href="#contact"
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

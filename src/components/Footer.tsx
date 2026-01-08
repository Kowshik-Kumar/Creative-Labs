import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="container px-6">
        <div className="glass rounded-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Let’s create something amazing together!</h3>
              <p className="text-sm text-zinc-400 mt-2">
                We craft timeless design, motion, and interactive web experiences.
              </p>
            </div>
            <Link href="#contact" className="rounded-full bg-accent px-5 py-2 text-black font-medium">
              Contact
            </Link>
          </div>
        </div>
        <div className="py-8 text-zinc-400 text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p>© {new Date().getFullYear()} Creative Labz</p>
          <div className="flex gap-4">
            <Link href="#top">Home</Link>
            <Link href="#work">Work</Link>
            <Link href="#services">Services</Link>
            <Link href="#about">About</Link>
            <Link href="#clients">Clients</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="container px-6 pt-28 md:pt-40 pb-32 md:pb-48 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Design studio for timeless motion and branding.
        </motion.h1>
        <motion.p
          className="mt-8 md:mt-12 text-zinc-400 text-xl md:text-2xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We build clear, scalable digital systems across branding, motion, UI/UX, and interactive web experiences.
        </motion.p>
        <motion.div
          className="mt-10 md:mt-12 flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#work" className="rounded-full bg-accent px-6 py-3 text-base md:text-lg text-black font-medium hover:opacity-90 transition-opacity">View work</a>
          <a href="/contact" className="rounded-full border border-zinc-700 px-6 py-3 text-base md:text-lg text-zinc-200 hover:bg-zinc-800/50 transition-colors">Contact</a>
        </motion.div>
      </div>
    </div>
  );
}

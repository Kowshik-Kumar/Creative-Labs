import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="container px-6 pt-28 md:pt-40 pb-16">
      <div className="max-w-3xl">
        <motion.h1
          className="text-4xl md:text-6xl font-semibold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Design studio for timeless motion and branding.
        </motion.h1>
        <motion.p
          className="mt-6 text-zinc-400 text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We build clear, scalable digital systems across branding, motion, UI/UX, and interactive web experiences.
        </motion.p>
        <motion.div
          className="mt-8 flex gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#work" className="rounded-full bg-accent px-5 py-2 text-black font-medium">View work</a>
          <a href="#contact" className="rounded-full border px-5 py-2 text-zinc-200">Contact</a>
        </motion.div>
      </div>
    </div>
  );
}

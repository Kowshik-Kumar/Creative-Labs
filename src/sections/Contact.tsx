import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch" subtitle="Technical Intake">
      <FadeIn>
        <div className="glass rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white">Let’s plan your next build.</h3>
        <p className="text-zinc-400 mt-2">
          Reach out with your product goals, platform constraints, or support needs.
        </p>
        <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="rounded-md border bg-transparent px-4 py-3 text-zinc-200" placeholder="Name" />
          <input className="rounded-md border bg-transparent px-4 py-3 text-zinc-200" placeholder="Email" />
          <input className="md:col-span-2 rounded-md border bg-transparent px-4 py-3 text-zinc-200" placeholder="Subject" />
          <textarea className="md:col-span-2 rounded-md border bg-transparent px-4 py-3 text-zinc-200" rows={5} placeholder="Tell us about your project" />
          <button className="md:col-span-2 rounded-full bg-accent px-5 py-2 text-black font-medium w-fit">Submit</button>
        </form>
        <p className="mt-6 text-sm text-zinc-500">connect@creativelabz.studio</p>
        </div>
      </FadeIn>
    </Section>
  );
}

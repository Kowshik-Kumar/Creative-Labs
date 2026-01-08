import { ReactNode } from "react";

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, title, subtitle, children, className }: Props) {
  return (
    <section id={id} className={`container px-6 ${className ?? ""}`}>
      {(title || subtitle) && (
        <header className="mb-8">
          {subtitle && (
            <p className="uppercase tracking-[0.2em] text-xs text-zinc-500">{subtitle}</p>
          )}
          {title && <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">{title}</h2>}
        </header>
      )}
      {children}
    </section>
  );
}

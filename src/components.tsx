import { Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import type { ComponentType, ReactNode } from 'react';

export const listMotion = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.055 },
  },
};

export const itemMotion = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export function PageShell({
  kicker,
  title,
  intro,
  children,
}: {
  kicker: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <section className="section-shell">
      <SectionHeader kicker={kicker} title={title} intro={intro} />
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function SectionHeader({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <div className="max-w-4xl">
      <p className="eyebrow">{kicker}</p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">{title}</h1>
      {intro ? <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{intro}</p> : null}
    </div>
  );
}

export function Card({
  children,
  className = '',
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.article
      className={`soft-card ${className}`}
      variants={itemMotion}
      whileHover={hover ? { y: -4, transition: { duration: 0.18 } } : undefined}
    >
      {children}
    </motion.article>
  );
}

export function ButtonLink({
  href,
  variant,
  icon: Icon,
  children,
}: {
  href: string;
  variant: 'primary' | 'secondary' | 'ghost';
  icon: ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  const variants = {
    primary: 'border-blue bg-blue text-white hover:bg-[#7cb2fb]',
    secondary: 'border-gold/50 bg-gold/[0.12] text-gold hover:bg-gold/[0.18]',
    ghost: 'border-white/10 bg-transparent text-slate-200 hover:bg-white/[0.07]',
  };

  return (
    <Button
      component="a"
      href={href}
      variant={variant === 'primary' ? 'contained' : 'outlined'}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border px-5 text-sm font-semibold transition ${variants[variant]}`}
      startIcon={<Icon className="h-4 w-4" />}
    >
      {children}
    </Button>
  );
}

export function ExternalLinkCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a href={href} className="focus-ring soft-card block p-5 transition hover:border-gold/60">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
        </div>
        <ExternalLink className="h-4 w-4 shrink-0 text-gold" />
      </div>
    </a>
  );
}

export function StatusChip({ status }: { status: string }) {
  const color =
    status === 'Completed'
      ? 'border-blue/60 text-blue'
      : status === 'In Progress'
        ? 'border-gold/70 text-gold'
        : 'border-white/15 text-slate-300';

  return <span className={`rounded-md border px-2.5 py-1 text-xs ${color}`}>{status}</span>;
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Chip key={tag} label={tag} size="small" variant="outlined" />
      ))}
    </div>
  );
}

export function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-gold">
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

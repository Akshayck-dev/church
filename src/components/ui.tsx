import React, { useEffect, useRef, useState } from 'react';

/* ------------------------------------------------------------------ */
/* Reveal — subtle scroll-triggered fade-up                             */
/* ------------------------------------------------------------------ */
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '', as = 'div' }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Tag = as as any;
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
};

/* ------------------------------------------------------------------ */
/* SectionHeading — eyebrow + serif title + lede                        */
/* ------------------------------------------------------------------ */
interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}) => {
  const alignCls = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-3 ${alignCls} ${className}`}>
      <span className={`eyebrow ${align === 'center' ? 'eyebrow-centered' : ''} ${dark ? 'eyebrow-on-dark' : ''}`}>
        {eyebrow}
      </span>
      <h2 className={`t-h2 text-balance ${dark ? 'text-ivory-50' : 'text-ink-950'}`}>{title}</h2>
      {description && (
        <p className={`t-lead ${dark ? 'text-ivory-200/85' : ''}`}>{description}</p>
      )}
    </Reveal>
  );
};

/* ------------------------------------------------------------------ */
/* PageHero — consistent inner-page banner                              */
/* ------------------------------------------------------------------ */
interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  /** Show a pulsing live indicator before the eyebrow text */
  live?: boolean;
  /** Optional secondary pill shown after the eyebrow */
  badge?: string;
  /** Optional small kicker line rendered just above the title */
  kicker?: string;
  /** Optional CTA row rendered under the description */
  actions?: React.ReactNode;
  /** Optional caption overlaid at the bottom-left of the hero image */
  imageCaption?: string;
  imageCaptionSub?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, description, image, imageAlt, live = false, badge, kicker, actions, imageCaption, imageCaptionSub }) => {
  return (
    <section className="relative overflow-hidden bg-maroon-900 text-ivory-50">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt ?? ''}
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/70 via-maroon-900/80 to-maroon-950" />
        </>
      )}
      {!image && (
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(201,164,94,0.25), transparent 45%), radial-gradient(circle at 85% 80%, rgba(201,164,94,0.15), transparent 40%)',
          }}
        />
      )}
      <div className="container-site relative py-16 sm:py-20 lg:py-24">
        <Reveal className="flex max-w-3xl flex-col items-start gap-4">
          <span className="flex flex-wrap items-center gap-2.5">
            <span className="eyebrow eyebrow-on-dark">
              {live && <span className="live-dot mr-1.5 inline-block h-2 w-2 rounded-full bg-red-500" aria-hidden="true" />}
              {eyebrow}
            </span>
            {badge && (
              <span className="rounded-full border border-gold-400/50 bg-gold-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-200">
                {badge}
              </span>
            )}
          </span>
          {kicker && (
            <p className="-mb-1 text-[12px] font-bold uppercase tracking-[0.22em] text-gold-300">{kicker}</p>
          )}
          <h1 className="t-h1 text-balance text-ivory-50">{title}</h1>
          {description && <p className="t-lead max-w-2xl text-ivory-200/85">{description}</p>}
          {actions && <div className="mt-1 flex flex-wrap gap-3">{actions}</div>}
          <div className="mt-1 flex items-center gap-3 text-gold-300" aria-hidden="true">
            <span className="h-px w-16 bg-gold-400/60" />
            <span className="font-serif text-lg leading-none">✝</span>
            <span className="h-px w-16 bg-gold-400/60" />
          </div>
        </Reveal>
      </div>
      {image && imageCaption && (
        <div className="container-site relative pb-6">
          <div className="max-w-3xl rounded-xl border border-ivory-100/15 bg-maroon-950/55 px-4 py-3 backdrop-blur-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-300">{imageCaption}</p>
            {imageCaptionSub && <p className="mt-0.5 font-serif text-[15px] text-ivory-100">{imageCaptionSub}</p>}
          </div>
        </div>
      )}
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* DividerCross — small centered ornament                              */
/* ------------------------------------------------------------------ */
export const DividerCross: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`divider-cross ${className}`} aria-hidden="true">
    <span className="font-serif text-xl leading-none">✝</span>
  </div>
);

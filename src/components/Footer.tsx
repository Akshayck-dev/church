import React from 'react';
import { NavigationTab } from '../types';
import { SHRINE_LOGO } from '../data/parishData';

interface FooterProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenPrayerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrayerModal }) => {
  const scheduleCol1: [string, string][] = [
    ['Daily Holy Qurbana', 'Mon–Fri 6:30 AM'],
    ['Sunday Holy Qurbana', '7:00 & 9:30 AM'],
    ['Perpetual Novena', 'Wed 5:30 PM & Sat 9:00 AM'],
    ['Eucharistic Adoration', 'Thursdays 9 AM – 7 PM'],
  ];
  const scheduleCol2: [string, string][] = [
    ['Daily Confession', '30 mins before Qurbana'],
    ['Saturday Confession', '5:00 PM – 6:00 PM'],
    ['Parish Office Hours', 'Mon–Sat 9 AM – 5 PM'],
    ['Church Grounds', 'Open Daily 6 AM – 9 PM'],
  ];

  return (
    <footer id="parish-contact" className="scroll-mt-24 bg-maroon-950 text-ivory-200">
      {/* Gold hairline */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" aria-hidden="true" />

      <div className="container-site pb-8 pt-12 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Lourde Matha Church Logo"
                className="h-12 w-auto rounded-full object-contain ring-1 ring-gold-400/40"
                src={SHRINE_LOGO}
              />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl font-semibold text-ivory-50">Lourde Matha Church</span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-300">
                  Thalayanadu • Est. 1935
                </span>
                </span>
              </div>
            </div>
            <p className="serif-italic text-[1.05rem] leading-relaxed text-gold-200">
              “A Place of Prayer, Hope &amp; Grace under the mantle of Our Lady of Lourdes”
            </p>
            <p className="t-small !text-ivory-200/70">
              Come lay your intentions before the Blessed Mother and partake in the holy mysteries of Christ.
            </p>
          </div>

          {/* Mass & Devotions */}
          <nav aria-label="Mass and devotions schedule">
            <h3 className="mb-4 border-b border-ivory-100/15 pb-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-300">
              Qurbana &amp; Devotions
            </h3>
            <ul className="space-y-1 text-[13px]">
              {scheduleCol1.map(([label, time]) => (
                <li key={label} className="flex items-baseline justify-between gap-3 border-b border-ivory-100/5 py-2">
                  <span className="text-ivory-200/80">{label}</span>
                  <span className="shrink-0 text-right font-semibold text-ivory-50">{time}</span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Reconciliation & Office */}
          <nav aria-label="Reconciliation and office schedule">
            <h3 className="mb-4 border-b border-ivory-100/15 pb-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-300">
              Reconciliation &amp; Office
            </h3>
            <ul className="space-y-1 text-[13px]">
              {scheduleCol2.map(([label, time]) => (
                <li key={label} className="flex items-baseline justify-between gap-3 border-b border-ivory-100/5 py-2">
                  <span className="text-ivory-200/80">{label}</span>
                  <span className="shrink-0 text-right font-semibold text-ivory-50">{time}</span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="mb-4 border-b border-ivory-100/15 pb-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-300">
              Sacred Pilgrimage
            </h3>
            <address className="space-y-2.5 text-[13px] not-italic text-ivory-200/85">
              <p className="flex items-start gap-2.5">
                <span className="material-symbols-outlined mt-0.5 shrink-0 text-[18px] text-gold-300">location_on</span>
                <span>Kolapra – Thalayanadu Road, Thalayanadu P.O., Thodupuzha, Idukki, Kerala 685585</span>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="material-symbols-outlined shrink-0 text-[18px] text-gold-300">call</span>
                <a href="tel:+914862258257" className="transition-colors hover:text-gold-200">+91 4862 258 257</a>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="material-symbols-outlined shrink-0 text-[18px] text-gold-300">mail</span>
                <a href="mailto:lourdemathathalayanadu@gmail.com" className="break-all transition-colors hover:text-gold-200">
                  lourdemathathalayanadu@gmail.com
                </a>
              </p>
            </address>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => onNavigate('devotions-shrine')}
                className="cursor-pointer rounded-lg border border-ivory-100/20 px-3.5 py-1.5 text-[12px] font-semibold text-ivory-100 transition-colors hover:border-gold-400 hover:text-gold-200"
              >
                Pilgrim Guide
              </button>
              <button
                onClick={onOpenPrayerModal}
                className="cursor-pointer rounded-lg border border-ivory-100/20 px-3.5 py-1.5 text-[12px] font-semibold text-ivory-100 transition-colors hover:border-gold-400 hover:text-gold-200"
              >
                Intentions
              </button>
              <button
                onClick={() => onNavigate('offerings')}
                className="cursor-pointer rounded-lg border border-ivory-100/20 px-3.5 py-1.5 text-[12px] font-semibold text-ivory-100 transition-colors hover:border-gold-400 hover:text-gold-200"
              >
                Donate
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-ivory-100/10 pt-6 text-center md:flex-row md:text-left">
          <p className="text-[12px] text-ivory-200/60">
            © 2026 Lourde Matha Church, Thalayanadu. All rights reserved.
          </p>
          <p className="serif-italic text-[15px] tracking-wide text-gold-300">
            Ad Jesum per Mariam
          </p>
        </div>
      </div>
    </footer>
  );
};

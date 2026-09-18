import React from 'react';
import { NavigationTab } from '../types';
import { SHRINE_LOGO } from '../data/parishData';

interface FooterProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenPrayerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrayerModal }) => {
  return (
    <footer className="w-full bg-[#006687] text-[#ffffff] border-t-2 border-[#67c7e8]/80">
      <div className="w-full px-4 sm:px-6 lg:px-12 pt-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Col 1: Brand & Marian Motto */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                alt="Sancta Maria Marian Shrine Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
                src={SHRINE_LOGO}
              />
              <div className="flex flex-col">
                <span className="font-title-lg text-lg text-white font-semibold">Sancta Maria</span>
                <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#c1e8ff]">
                  Marian Shrine &amp; Parish
                </span>
              </div>
            </div>
            <p className="font-headline-sm text-base italic text-[#c1e8ff] font-normal leading-relaxed">
              “A Place of Prayer, Hope &amp; Grace under the mantle of Our Lady of Grace”
            </p>
            <p className="font-body-sm text-xs text-[#e8f6ff]/90 leading-relaxed">
              Come lay your intentions before the Blessed Mother and partake in the holy mysteries of Christ.
            </p>
          </div>

          {/* Col 2: Mass & Devotions */}
          <div className="space-y-3">
            <h3 className="font-title-md text-sm uppercase tracking-wider text-[#ffdf98] border-b border-white/15 pb-2 font-semibold">
              Mass &amp; Devotions
            </h3>
            <ul className="space-y-2 font-body-sm text-xs">
              <li className="flex justify-between py-1 border-b border-white/5">
                <span className="text-[#e8f6ff]">Daily Morning Mass</span>
                <span className="font-medium text-white">6:30 AM &amp; 8:00 AM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-white/5">
                <span className="text-[#e8f6ff]">Sunday Solemn Mass</span>
                <span className="font-medium text-white">8:00, 10:30 AM, 6:00 PM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-white/5">
                <span className="text-[#e8f6ff]">Perpetual Novena</span>
                <span className="font-medium text-white">Wed 5:30 PM &amp; Sat 9:00 AM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-white/5">
                <span className="text-[#e8f6ff]">Eucharistic Adoration</span>
                <span className="font-medium text-white">Thursdays 9 AM – 7 PM</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Reconciliation & Office */}
          <div className="space-y-3">
            <h3 className="font-title-md text-sm uppercase tracking-wider text-[#ffdf98] border-b border-white/15 pb-2 font-semibold">
              Reconciliation &amp; Office
            </h3>
            <ul className="space-y-2 font-body-sm text-xs">
              <li className="flex justify-between py-1 border-b border-white/5">
                <span className="text-[#e8f6ff]">Daily Confession</span>
                <span className="font-medium text-white">30 mins before Mass</span>
              </li>
              <li className="flex justify-between py-1 border-b border-white/5">
                <span className="text-[#e8f6ff]">Saturday Confession</span>
                <span className="font-medium text-white">4:00 PM – 5:30 PM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-white/5">
                <span className="text-[#e8f6ff]">Parish Office Hours</span>
                <span className="font-medium text-white">Tue–Sat 9 AM – 4 PM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-white/5">
                <span className="text-[#e8f6ff]">Shrine Courtyard</span>
                <span className="font-medium text-white">Open Daily 6 AM – 9 PM</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Sacred Pilgrimage */}
          <div className="space-y-3">
            <h3 className="font-title-md text-sm uppercase tracking-wider text-[#ffdf98] border-b border-white/15 pb-2 font-semibold">
              Sacred Pilgrimage
            </h3>
            <div className="space-y-2 font-body-sm text-xs text-[#e8f6ff]">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#67c7e8] shrink-0 mt-0.5">location_on</span>
                <span>108 Ave Maria Boulevard, Marian Sanctuary Hill</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#67c7e8] shrink-0">call</span>
                <a href="tel:+18005556274" className="hover:text-white transition-colors">+1 (800) 555-MARIA</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#67c7e8] shrink-0">mail</span>
                <a href="mailto:office@sanctamaria-shrine.org" className="hover:text-white transition-colors">office@sanctamaria-shrine.org</a>
              </p>
            </div>
            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={() => onNavigate('devotions-shrine')}
                className="px-3 py-1 rounded-lg bg-[#c1e8ff]/20 hover:bg-[#67c7e8] hover:text-[#005266] text-white font-label-sm text-xs transition-colors"
              >
                Pilgrim Guide
              </button>
              <button
                onClick={onOpenPrayerModal}
                className="px-3 py-1 rounded-lg bg-[#c1e8ff]/20 hover:bg-[#67c7e8] hover:text-[#005266] text-white font-label-sm text-xs transition-colors"
              >
                Intentions
              </button>
              <button
                onClick={() => onNavigate('offerings')}
                className="px-3 py-1 rounded-lg bg-[#c1e8ff]/20 hover:bg-[#67c7e8] hover:text-[#005266] text-white font-label-sm text-xs transition-colors"
              >
                Donate
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="font-body-sm text-xs text-[#e8f6ff]/80">
            © 2026 Sancta Maria Marian Shrine &amp; Parish. All sacred rights reserved.
          </p>
          <p className="font-headline-sm text-sm text-[#ffdf98] italic font-normal tracking-wide">
            Sub Tuum Praesidium Confugimus, Sancta Dei Genetrix
          </p>
        </div>
      </div>
    </footer>
  );
};

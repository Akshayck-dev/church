import React, { useEffect, useState } from 'react';
import { NavigationTab } from '../types';
import { SHRINE_LOGO } from '../data/parishData';

interface HeaderProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  onOpenPrayerModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab, onOpenPrayerModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems: { id: NavigationTab; label: string; isLive?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'mass-timings', label: 'Qurbana Timings' },
    { id: 'devotions-shrine', label: 'Devotions' },
    { id: 'sacraments', label: 'Sacraments' },
    { id: 'live-mass', label: 'Live Mass', isLive: true },
    { id: 'vicar-parish', label: 'Vicar & Parish' },
    { id: 'news-events', label: 'News & Events' },
    { id: 'offerings', label: 'Offerings' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setPortalOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Close portal when clicking outside
  useEffect(() => {
    if (!portalOpen) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-portal-root]')) setPortalOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [portalOpen]);

  const handleNavClick = (tab: NavigationTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    setPortalOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Utility top bar */}
      <div className="hidden bg-maroon-950 text-ivory-200 md:block">
        <div className="container-site flex h-9 items-center justify-between text-[12px]">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-gold-300">location_on</span>
              Kolapra – Thalayanadu Road, Thalayanadu, Thodupuzha
            </span>
            <a href="tel:+914862258257" className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-200">
              <span className="material-symbols-outlined text-[15px] text-gold-300">call</span>
              +91 4862 258 257
            </a>
          </div>
          <button
            onClick={onOpenPrayerModal}
            className="inline-flex cursor-pointer items-center gap-1.5 font-medium transition-colors hover:text-gold-200"
          >
            <span className="material-symbols-outlined text-[15px] text-gold-300">edit_note</span>
            Submit a Prayer Request
          </button>
        </div>
      </div>

      {/* Main navigation bar */}
      <div
        className={`border-b border-line bg-ivory-50/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_6px_24px_-12px_rgba(51,12,19,0.25)]' : ''
        }`}
      >
        <div className="container-site flex h-[72px] items-center justify-between gap-4">
          {/* Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex shrink-0 cursor-pointer items-center gap-2.5 text-left sm:gap-3"
            aria-label="Lourde Matha Church, Thalayanadu — home"
          >
            <img
              alt="Lourde Matha Church Logo"
              className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-gold-400/50 transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11"
              src={SHRINE_LOGO}
            />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-[1.15rem] font-semibold tracking-tight text-maroon-800 min-[420px]:text-[1.35rem]">
                Lourde Matha Church
              </span>
              <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-600 min-[420px]:block">
                Thalayanadu • Est. 1935
              </span>
            </span>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative cursor-pointer rounded-md px-2.5 py-2 text-[13px] font-semibold transition-colors xl:px-3 ${
                    isActive ? 'text-maroon-700' : 'text-ink-700 hover:bg-maroon-600/5 hover:text-maroon-700'
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {item.isLive && (
                      <span className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-maroon-600" aria-hidden="true" />
                    )}
                    {item.label}
                  </span>
                  <span
                    className={`absolute inset-x-2.5 -bottom-[1px] h-[2px] rounded-full bg-gold-500 transition-all duration-300 xl:inset-x-3 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={() => handleNavClick('live-mass')}
              className="btn-primary btn-sm hidden !px-4 sm:inline-flex"
            >
              <span className="live-dot inline-block h-2 w-2 rounded-full bg-gold-300" aria-hidden="true" />
              Watch Live
            </button>

            {/* Parishioner portal */}
            <div className="relative hidden sm:block" data-portal-root>
              <button
                onClick={() => setPortalOpen((v) => !v)}
                aria-expanded={portalOpen}
                aria-haspopup="menu"
                aria-label="Parishioner portal menu"
                title="Parishioner Sanctuary Portal"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line bg-white text-maroon-700 transition-colors hover:border-gold-400 hover:text-maroon-600"
              >
                <span className="material-symbols-outlined text-[20px]">person</span>
              </button>
              {portalOpen && (
                <div
                  role="menu"
                  className="animate-fade-in absolute right-0 z-50 mt-2 w-64 rounded-xl border border-line bg-white p-2 shadow-card"
                >
                  <p className="border-b border-line-soft px-3 pb-2 pt-1">
                    <span className="block text-sm font-semibold text-ink-900">Welcome, Pilgrim</span>
                    <span className="block text-xs text-ink-500">Guest Session</span>
                  </p>
                  {[
                    { icon: 'local_fire_department', label: 'My Votive Candles', action: () => onOpenPrayerModal() },
                    { icon: 'church', label: 'Mass Intentions Booking', action: () => handleNavClick('mass-timings') },
                    { icon: 'assignment', label: 'Pastoral Consultation', action: () => handleNavClick('sacraments') },
                  ].map((row) => (
                    <button
                      key={row.label}
                      role="menuitem"
                      onClick={() => {
                        row.action();
                        setPortalOpen(false);
                      }}
                      className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm text-ink-700 transition-colors hover:bg-ivory-100"
                    >
                      <span className="material-symbols-outlined text-[18px] text-maroon-600">{row.icon}</span>
                      {row.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-line bg-white text-maroon-800 transition-colors hover:border-gold-400 xl:hidden"
            >
              <span className="material-symbols-outlined text-[22px]">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <nav
            className="animate-fade-in border-t border-line bg-ivory-50 xl:hidden"
            aria-label="Mobile"
          >
            <div className="container-site flex max-h-[calc(100dvh-120px)] flex-col gap-1 overflow-y-auto py-4">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 text-[15px] font-semibold transition-colors ${
                      isActive
                        ? 'bg-maroon-600/10 text-maroon-700'
                        : 'text-ink-700 hover:bg-ivory-100'
                    }`}
                  >
                    <span className="inline-flex items-center gap-2.5">
                      {item.isLive && (
                        <span className="live-dot inline-block h-2 w-2 rounded-full bg-maroon-600" aria-hidden="true" />
                      )}
                      {item.label}
                    </span>
                    <span className="material-symbols-outlined text-[20px] text-ink-400">chevron_right</span>
                  </button>
                );
              })}
              <div className="mt-3 flex flex-col gap-2 border-t border-line pt-4">
                <button onClick={() => handleNavClick('live-mass')} className="btn-primary w-full">
                  <span className="live-dot inline-block h-2 w-2 rounded-full bg-gold-300" aria-hidden="true" />
                  Watch Live Stream
                </button>
                <button
                  onClick={() => {
                    onOpenPrayerModal();
                    setMobileMenuOpen(false);
                  }}
                  className="btn-outline w-full"
                >
                  Submit Prayer Request
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

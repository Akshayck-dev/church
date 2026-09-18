import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { SHRINE_LOGO } from '../data/parishData';

interface HeaderProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  onOpenPrayerModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenPrayerModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navItems: { id: NavigationTab; label: string; isLive?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'mass-timings', label: 'Mass Timings' },
    { id: 'devotions-shrine', label: 'Devotions & Shrine' },
    { id: 'sacraments', label: 'Sacraments' },
    { id: 'live-mass', label: 'Live Mass', isLive: true },
    { id: 'vicar-parish', label: 'Vicar & Parish' },
    { id: 'news-events', label: 'News & Events' },
    { id: 'offerings', label: 'Offerings' },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/90 backdrop-blur-md border-b border-[#67c7e8]/30 shadow-[0_4px_20px_-2px_rgba(40,127,163,0.06)]">
      <div className="h-20 w-full px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group text-left focus:outline-none"
          >
            <img
              alt="Sancta Maria Marian Shrine Logo"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              src={SHRINE_LOGO}
            />
            <div className="flex flex-col">
              <span className="font-title-md text-base text-[#071e28] group-hover:text-[#006780] transition-colors leading-tight">
                Sancta Maria
              </span>
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#006780]">
                Marian Shrine &amp; Parish
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#dbf1ff] text-[#006780] shadow-xs'
                    : 'text-[#3e484d] hover:bg-[#d5ecfa] hover:text-[#071e28]'
                }`}
              >
                {item.isLive && (
                  <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-pulse"></span>
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenPrayerModal}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-[#d7b76e]/60 rounded-xl font-label-md text-xs text-[#745b1b] hover:bg-[#ffdf98]/30 transition-colors shadow-2xs"
          >
            Submit Prayer Request
          </button>

          <button
            onClick={() => handleNavClick('live-mass')}
            className="inline-flex items-center justify-center px-4 py-2 bg-[#67c7e8] text-[#005266] hover:bg-[#006687] hover:text-white rounded-xl font-label-md text-xs shadow-[0_2px_8px_rgba(103,199,232,0.3)] transition-all font-semibold gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-ping sm:hidden"></span>
            <span>Watch Live</span>
          </button>

          {/* Parishioner Portal Icon with Menu */}
          <div className="relative">
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="w-9 h-9 rounded-full bg-[#006780] hover:bg-[#005266] text-white flex items-center justify-center transition-colors shadow-xs"
              title="Parishioner Sanctuary Portal"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </button>

            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-[#ffffff] shadow-xl border border-[#dbf1ff] p-3 z-50 text-xs text-[#071e28] animate-in fade-in zoom-in-95">
                <div className="p-2 border-b border-[#dbf1ff] mb-2">
                  <p className="font-semibold text-sm">Welcome, Pilgrim</p>
                  <p className="text-[11px] text-[#3e484d]">Sanctuary Guest Session</p>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      onOpenPrayerModal();
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-[#f4faff] flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base text-[#006780]">local_fire_department</span>
                    <span>My Votive Candles</span>
                  </button>
                  <button
                    onClick={() => {
                      handleNavClick('mass-timings');
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-[#f4faff] flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base text-[#006780]">church</span>
                    <span>Mass Intentions Booking</span>
                  </button>
                  <button
                    onClick={() => {
                      handleNavClick('sacraments');
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-[#f4faff] flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base text-[#006780]">assignment</span>
                    <span>Pastoral Consultation</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-xl bg-[#dbf1ff] text-[#071e28] flex items-center justify-center"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#ffffff] border-b border-[#dbf1ff] px-6 py-5 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#dbf1ff] text-[#006780]'
                      : 'text-[#3e484d] hover:bg-[#f4faff]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.isLive && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a] animate-pulse"></span>
                    )}
                    <span>{item.label}</span>
                  </div>
                  <span className="material-symbols-outlined text-base text-[#bec8cd]">
                    chevron_right
                  </span>
                </button>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-[#dbf1ff] flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenPrayerModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl border border-[#d7b76e] text-[#745b1b] font-semibold text-xs text-center"
            >
              Submit Prayer Request
            </button>
            <button
              onClick={() => {
                handleNavClick('live-mass');
              }}
              className="w-full py-2.5 rounded-xl bg-[#67c7e8] text-[#005266] font-semibold text-xs text-center"
            >
              Watch Sanctuary Live Stream
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

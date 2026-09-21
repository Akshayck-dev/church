import React, { useState, useEffect } from 'react';
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
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topNavItems: { id: NavigationTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const moreNavItems: { id: NavigationTab; label: string; isLive?: boolean }[] = [
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

  const isHomeTop = currentTab === 'home' && !isScrolled;

  return (
    <header className={`fixed z-50 transition-all duration-500 ease-in-out ${
      isHomeTop 
        ? 'top-0 left-0 right-0 w-full bg-transparent border-transparent' 
        : 'top-4 left-4 right-4 max-w-[1280px] mx-auto bg-white/30 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_-4px_rgba(0,103,128,0.15)] rounded-2xl'
    }`}>
      <div className={`h-16 w-full mx-auto flex items-center justify-between gap-4 transition-all duration-500 ${
        isHomeTop ? 'max-w-[1280px] px-4 sm:px-6 lg:px-12' : 'px-4 sm:px-6 lg:px-8'
      }`}>
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group text-left focus:outline-none"
          >

            <div className="flex flex-col">
              <span className={`font-title-md text-base leading-tight transition-colors ${
                isHomeTop ? 'text-white group-hover:text-white/80' : 'text-[#071e28] group-hover:text-[#006780]'
              }`}>
                Lourde Matha Church
              </span>
              <span className={`font-label-sm text-[11px] uppercase tracking-widest transition-colors ${
                isHomeTop ? 'text-[#ffdf98]' : 'text-[#006780]'
              }`}>
                Thalayanadu
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {topNavItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? (isHomeTop ? 'bg-white/20 text-white shadow-sm' : 'bg-[#dbf1ff] text-[#006780] shadow-sm')
                    : (isHomeTop ? 'text-white hover:bg-white/10' : 'text-[#3e484d] hover:bg-[#d5ecfa] hover:text-[#071e28]')
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
          
          <div className="relative">
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1 ${
                isHomeTop ? 'text-white hover:bg-white/10' : 'text-[#3e484d] hover:bg-[#d5ecfa] hover:text-[#071e28]'
              }`}
            >
              <span>Explore</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </button>
            {moreDropdownOpen && (
              <div className="absolute top-full right-0 mt-3 w-56 rounded-2xl bg-[#ffffff] shadow-xl border border-[#dbf1ff] py-2 z-50 animate-in fade-in zoom-in-95">
                {moreNavItems.map((item) => {
                  const isActive = currentTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleNavClick(item.id);
                        setMoreDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-semibold flex items-center gap-2 transition-colors ${
                        isActive ? 'bg-[#f4faff] text-[#006780]' : 'text-[#3e484d] hover:bg-[#f4faff]'
                      }`}
                    >
                      {item.isLive && (
                        <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-pulse"></span>
                      )}
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">

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
            {topNavItems.map((item) => {
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
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-base text-[#bec8cd]">
                    chevron_right
                  </span>
                </button>
              );
            })}

            <div className="border-t border-[#f0f7fb] mt-2 pt-2">
              <button
                onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-[#3e484d] hover:bg-[#f4faff] flex items-center justify-between"
              >
                <span>Explore More</span>
                <span className="material-symbols-outlined text-base text-[#bec8cd] transition-transform" style={{ transform: mobileMoreOpen ? 'rotate(180deg)' : 'none' }}>
                  expand_more
                </span>
              </button>
              
              {mobileMoreOpen && (
                <div className="pl-4 pr-2 py-2 flex flex-col space-y-1 animate-in slide-in-from-top-1">
                  {moreNavItems.map((item) => {
                    const isActive = currentTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                          isActive
                            ? 'bg-[#f4faff] text-[#006780]'
                            : 'text-[#5a656a] hover:bg-[#f4faff]'
                        }`}
                      >
                        {item.isLive && (
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a] animate-pulse"></span>
                        )}
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

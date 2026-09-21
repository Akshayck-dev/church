import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { IMAGES } from '../data/parishData';
import desktopBg from '../assets/desktop.png';
import mobBg from '../assets/mob.png';
interface HomeScreenProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenPrayerModal: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, onOpenPrayerModal }) => {
  const [petitionName, setPetitionName] = useState('');
  const [petitionEmail, setPetitionEmail] = useState('');
  const [petitionCategory, setPetitionCategory] = useState('healing');
  const [petitionText, setPetitionText] = useState('');
  const [publicNovena, setPublicNovena] = useState(false);
  const [petitionSuccess, setPetitionSuccess] = useState(false);
  const [isPlayingStream, setIsPlayingStream] = useState(false);

  const handlePetitionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPetitionSuccess(true);
    setTimeout(() => {
      setPetitionSuccess(false);
      setPetitionName('');
      setPetitionEmail('');
      setPetitionText('');
    }, 3500);
  };

  const todayDateString = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="flex flex-col w-full font-body-md text-[#071e28]">
      {/* ============================================================ */}
      {/* 1. HERO SECTION: Luminous Sanctuary & Marian Welcome        */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Full Image (Stretched to Fit) */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(min-width: 1024px)" srcSet={desktopBg} />
            <img
              className="w-full h-full object-fill"
              alt="Lourde Matha Church Sanctuary"
              src={mobBg}
            />
          </picture>
          {/* Dark Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#001a24]/70 via-[#003144]/50 to-[#001a24]/90 pointer-events-none"></div>
        </div>
        
        {/* Content Overlaid */}
        <div className="relative z-10 w-full h-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12">
          <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center">
            {/* Removed Sacred Eyebrow Tag */}

          {/* Main Serif Headline */}
          <h1 className="font-display-lg text-5xl sm:text-6xl lg:text-[72px] text-white tracking-tight leading-tight mb-6">
            Embrace the <span className="text-[#ffdf98] italic font-normal">Sacred</span>, <br className="hidden sm:inline" />
            Find Your Peace
          </h1>

          {/* Delicate Decorative Flourish */}
          <div className="flex items-center gap-3 w-full max-w-sm py-2 mb-6">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-white/50 to-transparent rounded-full"></div>
            <span className="material-symbols-outlined text-[#ffdf98] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <div className="h-[2px] flex-1 bg-gradient-to-l from-white/50 to-transparent rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="font-body-lg text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed mb-10">
            Step into the radiant sanctuary of Lourde Matha Church. Experience a community of unwavering faith, divine worship, and the enduring grace of our Lord.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
            <button
              onClick={() => onNavigate('mass-timings')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#67c7e8] hover:bg-[#ffdf98] text-[#005266] hover:text-[#745b1b] rounded-xl font-label-md text-sm font-bold transition-all shadow-lg cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">schedule</span>
              <span>Explore Mass Timings</span>
            </button>
            <button
              onClick={onOpenPrayerModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-xl font-label-md text-sm font-bold transition-all shadow-lg border border-white/30 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#ffdf98] text-xl">edit_note</span>
              <span>Submit Prayer Petition</span>
            </button>
          </div>

          {/* Stats Bar Removed */}
        </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. TODAY'S MASS & COMPREHENSIVE SCHEDULE SECTION            */}
      {/* ============================================================ */}
      <section className="w-full bg-[#e8f6ff] py-12" id="schedule">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
            <div>
              <span className="font-label-md text-xs uppercase tracking-widest text-[#006780] block mb-1 font-semibold">
                Daily Liturgy &amp; Devotions
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28]">Holy Mass &amp; Liturgical Timings</h2>
            </div>
            <div className="flex items-center gap-2 text-[#3e484d] font-body-sm text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#67c7e8] animate-ping"></span>
              <span>All liturgies open to public worship and live stream</span>
            </div>
          </div>

          {/* Hero Highlight Card: TODAY'S ACTIVE SCHEDULE */}
          <div className="w-full bg-[#ffffff] rounded-2xl p-4 sm:p-6 shadow-md relative overflow-hidden border border-[#dbf1ff]">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#67c7e8] via-[#006687] to-[#67c7e8]"></div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 gap-2 border-b border-[#dbf1ff]/60">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-[#67c7e8] text-[#005266] font-label-md text-xs uppercase tracking-wider font-semibold">
                  Today's Schedule
                </span>
                <span className="font-title-md text-sm sm:text-base text-[#071e28] font-semibold">
                  {todayDateString} • <span className="text-[#006780]">Perpetual Novena Day</span>
                </span>
              </div>
              <button
                onClick={() => onNavigate('mass-timings')}
                className="text-[#006687] hover:text-[#006780] font-label-md text-xs inline-flex items-center gap-1 transition-colors cursor-pointer font-semibold"
              >
                <span>Request Intention for Next Mass</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-4">
              {/* Timetable 1 */}
              <div className="p-3.5 rounded-xl bg-[#e8f6ff]/70 flex flex-col justify-between hover:bg-[#dbf1ff] transition-all border border-[#dbf1ff]">
                <span className="font-label-md text-xs text-[#006780] font-bold uppercase">06:30 AM</span>
                <div className="mt-2">
                  <h4 className="font-title-md text-sm text-[#071e28] font-semibold">Holy Mass</h4>
                  <p className="font-body-sm text-xs text-[#3e484d]">Morning Praise &amp; Eucharist</p>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-label-sm text-[#006687]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#006687]"></span>Main Sanctuary
                </span>
              </div>

              {/* Timetable 2 */}
              <div className="p-3.5 rounded-xl bg-[#e8f6ff]/70 flex flex-col justify-between hover:bg-[#dbf1ff] transition-all border border-[#dbf1ff]">
                <span className="font-label-md text-xs text-[#006780] font-bold uppercase">12:00 PM</span>
                <div className="mt-2">
                  <h4 className="font-title-md text-sm text-[#071e28] font-semibold">Angelus Prayer</h4>
                  <p className="font-body-sm text-xs text-[#3e484d]">Midday Holy Rosary</p>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-label-sm text-[#006687]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#006687]"></span>Grotto Chapel
                </span>
              </div>

              {/* Timetable 3 */}
              <div className="p-3.5 rounded-xl bg-[#e8f6ff]/70 flex flex-col justify-between hover:bg-[#dbf1ff] transition-all border border-[#dbf1ff]">
                <span className="font-label-md text-xs text-[#006780] font-bold uppercase">05:30 PM</span>
                <div className="mt-2">
                  <h4 className="font-title-md text-sm text-[#071e28] font-semibold">Marian Devotion</h4>
                  <p className="font-body-sm text-xs text-[#3e484d]">Holy Rosary &amp; Litany</p>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-label-sm text-[#006687]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#006687]"></span>Shrine Altar
                </span>
              </div>

              {/* Timetable 4 */}
              <div className="p-3.5 rounded-xl bg-[#e8f6ff]/70 flex flex-col justify-between hover:bg-[#dbf1ff] transition-all border border-[#dbf1ff]">
                <span className="font-label-md text-xs text-[#006780] font-bold uppercase">06:00 PM</span>
                <div className="mt-2">
                  <h4 className="font-title-md text-sm text-[#071e28] font-semibold">Evening Mass</h4>
                  <p className="font-body-sm text-xs text-[#3e484d]">Parish Community Intention</p>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-label-sm text-[#006687]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#006687]"></span>Main Sanctuary
                </span>
              </div>

              {/* Timetable 5: Novena Highlight */}
              <div className="p-3.5 rounded-xl bg-[#ffdf98]/50 flex flex-col justify-between shadow-xs border border-[#d7b76e]">
                <span className="font-label-md text-xs text-[#745b1b] font-bold uppercase">06:45 PM</span>
                <div className="mt-2">
                  <h4 className="font-title-md text-sm text-[#071e28] font-semibold">Perpetual Novena</h4>
                  <p className="font-body-sm text-xs text-[#3e484d]">Our Lady of Grace &amp; Benediction</p>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-label-sm text-[#745b1b] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#745b1b]"></span>Solemn Blessing
                </span>
              </div>
            </div>
          </div>

          {/* Grid of Mass Schedule Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Weekday Masses */}
            <div className="bg-[#ffffff] rounded-2xl p-5 shadow-xs hover:-translate-y-1 transition-all flex flex-col justify-between border border-[#dbf1ff]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#dbf1ff] flex items-center justify-center text-[#006780] mb-3">
                  <span className="material-symbols-outlined text-2xl">wb_twilight</span>
                </div>
                <h3 className="font-title-lg text-base text-[#071e28] mb-1 font-semibold">Weekday Masses</h3>
                <p className="font-body-sm text-xs text-[#3e484d] mb-3">Daily spiritual bread for pilgrims and workers.</p>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-[#f4faff] flex justify-between items-center">
                    <span className="font-semibold text-[#071e28]">06:30 AM</span>
                    <span className="text-[#3e484d]">English Spoken</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#f4faff] flex justify-between items-center">
                    <span className="font-semibold text-[#071e28]">06:00 PM</span>
                    <span className="text-[#3e484d]">Bilingual / Regional</span>
                  </div>
                </div>
              </div>
              <span className="font-label-sm text-[11px] text-[#006780] font-semibold mt-4 block">
                Mon – Fri Morning &amp; Evening
              </span>
            </div>

            {/* Card 2: Saturday Devotional */}
            <div className="bg-[#ffffff] rounded-2xl p-5 shadow-xs hover:-translate-y-1 transition-all flex flex-col justify-between border border-[#dbf1ff]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ffdf98]/50 flex items-center justify-center text-[#745b1b] mb-3">
                  <span className="material-symbols-outlined text-2xl">auto_awesome</span>
                </div>
                <h3 className="font-title-lg text-base text-[#071e28] mb-1 font-semibold">Saturday Marian</h3>
                <p className="font-body-sm text-xs text-[#3e484d] mb-3">Dedicated to Our Lady with Healing Anointing.</p>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-[#f4faff] flex justify-between items-center">
                    <span className="font-semibold text-[#071e28]">06:30 AM</span>
                    <span className="text-[#3e484d]">Memorial Mass</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#f4faff] flex justify-between items-center">
                    <span className="font-semibold text-[#071e28]">10:00 AM</span>
                    <span className="text-[#006687] font-semibold">Anointing &amp; Novena</span>
                  </div>
                </div>
              </div>
              <span className="font-label-sm text-[11px] text-[#745b1b] font-semibold mt-4 block">
                Pilgrim Rosary at 9:15 AM
              </span>
            </div>

            {/* Card 3: Sunday Solemn Liturgies */}
            <div className="bg-[#ffffff] rounded-2xl p-5 shadow-xs hover:-translate-y-1 transition-all flex flex-col justify-between border border-[#dbf1ff]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#dbf1ff] flex items-center justify-center text-[#006687] mb-3">
                  <span className="material-symbols-outlined text-2xl">church</span>
                </div>
                <h3 className="font-title-lg text-base text-[#071e28] mb-1 font-semibold">Sunday Liturgies</h3>
                <p className="font-body-sm text-xs text-[#3e484d] mb-3">Solemn community celebration of the Lord's Day.</p>
                <div className="space-y-1 text-xs">
                  <div className="p-1.5 rounded-lg bg-[#f4faff] flex justify-between items-center">
                    <span>06:00 AM</span>
                    <span className="text-[#3e484d]">Dawn Mass</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-[#006687]/10 flex justify-between items-center font-semibold text-[#006687]">
                    <span>08:00 AM</span>
                    <span>Solemn High Mass</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-[#f4faff] flex justify-between items-center">
                    <span>10:30 AM</span>
                    <span className="text-[#3e484d]">Youth &amp; Children</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-[#f4faff] flex justify-between items-center">
                    <span>05:30 PM</span>
                    <span className="text-[#3e484d]">Evening Mass</span>
                  </div>
                </div>
              </div>
              <span className="font-label-sm text-[11px] text-[#006687] font-semibold mt-4 block">
                Parish Choir &amp; Organ Accompaniment
              </span>
            </div>

            {/* Card 4: Reconciliation */}
            <div className="bg-[#ffffff] rounded-2xl p-5 shadow-xs hover:-translate-y-1 transition-all flex flex-col justify-between border border-[#dbf1ff]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#dbf1ff] flex items-center justify-center text-[#006780] mb-3">
                  <span className="material-symbols-outlined text-2xl">favorite</span>
                </div>
                <h3 className="font-title-lg text-base text-[#071e28] mb-1 font-semibold">Confession &amp; Mercy</h3>
                <p className="font-body-sm text-xs text-[#3e484d] mb-3">Sacrament of Reconciliation and spiritual counsel.</p>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-[#f4faff] flex justify-between items-center">
                    <span className="font-semibold text-[#071e28]">Daily</span>
                    <span className="text-[#3e484d]">30 min prior to Mass</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#f4faff] flex justify-between items-center">
                    <span className="font-semibold text-[#071e28]">Saturday</span>
                    <span className="text-[#3e484d]">4:00 PM – 5:30 PM</span>
                  </div>
                </div>
              </div>
              <span className="font-label-sm text-[11px] text-[#006780] font-semibold mt-4 block">
                Private Confessionals in St. Joseph Wing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. LIVE MASS BROADCAST SECTION: Deep Marian Blue          */}
      {/* ============================================================ */}
      <section className="w-full bg-[#006687] text-[#ffffff] py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#006687] via-[#006780]/30 to-transparent pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-6">
          {/* Broadcast Heading */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="px-3 py-1 rounded-full bg-[#ffffff]/15 text-[#67c7e8] font-label-md text-xs uppercase tracking-widest inline-block font-semibold">
              Virtual Sanctuary • Worldwide Communion
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl text-white">Live From Our Sanctuary &amp; Shrine</h2>
            <p className="font-body-md text-sm sm:text-base text-[#c1e8ff]">
              Join our liturgical celebrations and Marian devotions in real-time from anywhere in the world. Experience the grace of the Holy Mass.
            </p>
          </div>

          {/* Live Broadcast Player Frame */}
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden bg-[#071e28] shadow-2xl p-2 sm:p-4 border border-[#67c7e8]/30">
            <div className="relative rounded-xl overflow-hidden aspect-video bg-[#1e333e] flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                alt="Live Holy Mass High Altar Cam"
                src={IMAGES.liveStreamAltar}
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

              {/* Live Floating Top Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ba1a1a] text-white font-label-md text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                  <span>LIVE NOW</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 text-white font-label-md text-xs backdrop-blur-md">
                  <span className="material-symbols-outlined text-sm text-[#67c7e8]">group</span>
                  <span>1,420 Worshippers Praying Online</span>
                </div>
              </div>

              {/* Play Center Overlay Button */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <button
                  aria-label="Play Live Mass Broadcast"
                  onClick={() => setIsPlayingStream(!isPlayingStream)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#67c7e8] hover:bg-white text-[#005266] hover:text-[#006780] transition-all flex items-center justify-center shadow-xl hover:scale-105 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-3xl sm:text-4xl">
                    {isPlayingStream ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <span className="text-white text-xs sm:text-sm font-label-md tracking-wider uppercase bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                  Holy Mass • Perpetual Novena to Our Lady of Grace
                </span>
              </div>

              {/* Bottom Control Bar Replica */}
              <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-white/90 text-xs">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#67c7e8]">hd</span>
                  <span>1080p Sanctuary Cam 1 (High Altar)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-base cursor-pointer">volume_up</span>
                  <span className="material-symbols-outlined text-base cursor-pointer">fullscreen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('live-mass')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#67c7e8] hover:bg-white text-[#005266] hover:text-[#006780] rounded-xl font-label-md text-xs font-semibold transition-all shadow-md cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">live_tv</span>
              <span>WATCH FULL LIVE STREAM</span>
            </button>
            <a
              href="#bulletins"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('news-events');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ffffff]/15 hover:bg-[#ffffff]/25 text-white rounded-xl font-label-md text-xs font-semibold transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg text-[#67c7e8]">description</span>
              <span>Download Mass Leaflet (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. DEVOTIONAL MARIAN SECTION: Our Lady of Grace             */}
      {/* ============================================================ */}
      <section className="w-full bg-[#ffffff] py-14 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
          {/* Top Center Devotional Header */}
          <div className="max-w-3xl mx-auto text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbf1ff] text-[#006780] font-label-md text-xs uppercase tracking-widest font-semibold">
              <span className="text-[#745b1b]">★</span>
              <span>Shrine Devotion • 120 Years of Miracles</span>
              <span className="text-[#745b1b]">★</span>
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28]">
              Our Lady of Grace — Mother of Mercy &amp; Peace
            </h2>
            <p className="font-body-md text-sm sm:text-base text-[#3e484d] leading-relaxed">
              For over a century, countless pilgrims have journeyed to our sacred shrine to seek the powerful maternal intercession of the Blessed Virgin Mary. Her open arms remain a welcoming sanctuary for broken hearts, families yearning for concord, and the sick longing for divine renewal.
            </p>
          </div>

          {/* Sacred Feature: Statue & Core Charisms Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sacred Image Frame with Ethereal Aura */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="absolute w-80 h-80 bg-[#67c7e8]/25 rounded-full blur-3xl -z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl bg-[#e8f6ff] p-3 max-w-md w-full border border-[#dbf1ff]">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#c7ddeb]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Miraculous Icon of Our Lady of Grace"
                    src={IMAGES.statueOurLadyRays}
                  />
                </div>
                <div className="p-3 text-center">
                  <span className="font-headline-sm text-lg italic text-[#006687] block font-serif">
                    Miraculous Icon of Our Lady of Grace
                  </span>
                  <span className="font-label-sm text-xs text-[#745b1b] uppercase tracking-wider block mt-0.5 font-semibold">
                    Consecrated A.D. 1904
                  </span>
                </div>
              </div>
            </div>

            {/* Charisms: Faith, Hope, Grace */}
            <div className="lg:col-span-6 space-y-4">
              {/* Pillar 1: Faith */}
              <div className="p-5 rounded-2xl bg-[#e8f6ff] hover:bg-[#dbf1ff] transition-all shadow-xs flex items-start gap-4 border border-[#dbf1ff]">
                <div className="w-12 h-12 rounded-xl bg-[#67c7e8] text-[#005266] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">flare</span>
                </div>
                <div>
                  <h3 className="font-title-lg text-base text-[#071e28] mb-1 font-semibold">
                    Unwavering Faith (Fides)
                  </h3>
                  <p className="font-body-sm text-xs sm:text-sm text-[#3e484d] leading-relaxed">
                    Emulating Mary's 'Fiat'—her fearless 'Yes' to God's holy will. Pilgrims are invited to deepen their trust through perpetual Eucharistic adoration and daily Rosary mysteries.
                  </p>
                </div>
              </div>

              {/* Pillar 2: Hope */}
              <div className="p-5 rounded-2xl bg-[#e8f6ff] hover:bg-[#dbf1ff] transition-all shadow-xs flex items-start gap-4 border border-[#dbf1ff]">
                <div className="w-12 h-12 rounded-xl bg-[#ffdf98] text-[#5e4706] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">anchor</span>
                </div>
                <div>
                  <h3 className="font-title-lg text-base text-[#071e28] mb-1 font-semibold">
                    Anchored Hope (Spes)
                  </h3>
                  <p className="font-body-sm text-xs sm:text-sm text-[#3e484d] leading-relaxed">
                    The Blessed Mother stands as the Star of the Sea amidst life's turbulent storms, guiding souls safely into the harbor of Christ's unfathomable mercy.
                  </p>
                </div>
              </div>

              {/* Pillar 3: Grace */}
              <div className="p-5 rounded-2xl bg-[#e8f6ff] hover:bg-[#dbf1ff] transition-all shadow-xs flex items-start gap-4 border border-[#dbf1ff]">
                <div className="w-12 h-12 rounded-xl bg-[#c1e8ff] text-[#005d7c] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">spa</span>
                </div>
                <div>
                  <h3 className="font-title-lg text-base text-[#071e28] mb-1 font-semibold">
                    Abundant Grace (Gratia)
                  </h3>
                  <p className="font-body-sm text-xs sm:text-sm text-[#3e484d] leading-relaxed">
                    Experience physical and interior healing through the holy anointing Masses held every Saturday, accompanied by personalized intercessory prayer.
                  </p>
                </div>
              </div>

              {/* Link to shrine history */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('devotions-shrine')}
                  className="inline-flex items-center gap-2 text-[#006687] hover:text-[#006780] font-label-md text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Read the Shrine History &amp; Testimonies</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. PASTORAL MESSAGE FROM THE VICAR: Very Light Blue         */}
      {/* ============================================================ */}
      <section className="w-full bg-[#e8f6ff] py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-[#ffffff] rounded-3xl p-6 lg:p-10 shadow-md border border-[#dbf1ff]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Vicar Portrait */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-lg p-2 bg-[#e8f6ff] max-w-sm w-full border border-[#dbf1ff]">
                  <div className="rounded-xl overflow-hidden aspect-square bg-[#c7ddeb]">
                    <img
                      alt="Rev. Fr. Joseph Mathew, Parish Vicar & Shrine Rector"
                      className="w-full h-full object-cover"
                      src={IMAGES.vicarPortrait}
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <span className="font-title-md text-base text-[#071e28] block font-semibold">
                      Rev. Fr. Joseph Mathew
                    </span>
                    <span className="font-label-sm text-xs text-[#006780] uppercase tracking-wider block font-semibold">
                      Parish Vicar &amp; Shrine Rector
                    </span>
                  </div>
                </div>
              </div>

              {/* Pastoral Message Content */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbf1ff] text-[#006687] font-label-md text-xs uppercase tracking-widest font-semibold">
                  <span className="material-symbols-outlined text-sm">church</span>
                  <span>Pastoral Reflection</span>
                </div>

                {/* Serif Quote */}
                <blockquote className="font-headline-md text-xl sm:text-2xl text-[#006687] italic leading-relaxed font-serif">
                  “May everyone who enters this sacred place discover the enduring peace of Christ and the tender maternal solace of Mother Mary.”
                </blockquote>

                {/* Pastoral Body Text */}
                <div className="space-y-3 font-body-md text-sm sm:text-base text-[#3e484d] leading-relaxed">
                  <p>
                    Dear Pilgrim and beloved Parishioner, whether you come carrying the heavy burden of illness, a petition for your children, or a heart full of thanksgiving, Sancta Maria Marian Shrine welcomes you with open arms.
                  </p>
                  <p>
                    Under the mantle of Our Lady of Grace, no prayer is too small and no cross is borne alone. Join us for our daily liturgies, receive the grace of Reconciliation, or spend an hour in quiet adoration before the Blessed Sacrament. May Our Lady watch over you and your home.
                  </p>
                </div>

                {/* Gold Line Divider */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-16 h-0.5 bg-[#d7b76e]"></div>
                  <span className="text-[#745b1b] font-serif text-sm italic">In Christo per Mariam</span>
                </div>

                {/* Vicar Signoff Details */}
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#3e484d]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006780] text-base">schedule</span>
                    <span>Vicar Office Hours: Tue–Sat 9 AM – 1 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006780] text-base">mark_email_read</span>
                    <span>vicar@sanctamaria-shrine.org</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. PRAYER PETITIONS & NOVENA INTENTIONS: White Canvas       */}
      {/* ============================================================ */}
      <section className="w-full bg-[#ffffff] py-14" id="petitions">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Explanatory Column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="font-label-md text-xs uppercase tracking-widest text-[#006780] block font-semibold">
                Intercessory Ministry
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28]">Let Us Pray With You</h2>
              <p className="font-body-md text-sm sm:text-base text-[#3e484d] leading-relaxed">
                Place your spiritual intentions, thanksgiving, and healing requests at the altar of Our Lady of Grace. Our resident priests and the Confraternity of the Rosary lift every petition daily during the Perpetual Novena.
              </p>

              {/* Devotional Vigil Candle Box */}
              <div className="p-5 rounded-2xl bg-[#e8f6ff] space-y-2 mt-4 shadow-xs border border-[#dbf1ff]">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#745b1b] text-2xl animate-pulse">local_fire_department</span>
                  <h4 className="font-title-md text-base text-[#071e28] font-semibold">Vigil Candle Offerings</h4>
                </div>
                <p className="font-body-sm text-xs text-[#3e484d]">
                  Every petition received is recorded in the Shrine Book of Intentions and remembered with a sanctuary vigil candle lit for 7 consecutive days.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-[#745b1b] font-semibold">
                  <span className="material-symbols-outlined text-sm">done_all</span>
                  <span>4,380 candles burning this month</span>
                </div>
              </div>

              {/* Confidentiality Note */}
              <div className="flex items-start gap-2 text-xs text-[#3e484d] pt-1">
                <span className="material-symbols-outlined text-[#006687] text-base shrink-0 mt-0.5">lock</span>
                <span>All prayer petitions are treated as sacred confidences and laid reverently before the Blessed Sacrament.</span>
              </div>
            </div>

            {/* Right: Intentions Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#e8f6ff] rounded-2xl p-6 sm:p-8 shadow-xs border border-[#dbf1ff]">
                {petitionSuccess ? (
                  <div className="p-6 rounded-2xl bg-white border border-[#dbf1ff] text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#67c7e8]/30 text-[#006780] flex items-center justify-center mx-auto">
                      <span className="material-symbols-outlined text-2xl">check</span>
                    </div>
                    <h3 className="font-headline-sm text-xl text-[#071e28]">Petition Received With Reverence</h3>
                    <p className="font-body-sm text-xs text-[#3e484d]">
                      Your prayer petition has been reverently recorded and will be placed at the altar of Our Lady of Grace.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handlePetitionSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="font-label-md text-xs text-[#071e28] block font-semibold">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={petitionName}
                          onChange={(e) => setPetitionName(e.target.value)}
                          placeholder="e.g. Maria Grace"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#ffffff] text-[#071e28] placeholder:text-[#6e797d] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#67c7e8] border border-[#dbf1ff]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-label-md text-xs text-[#071e28] block font-semibold">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={petitionEmail}
                          onChange={(e) => setPetitionEmail(e.target.value)}
                          placeholder="name@domain.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#ffffff] text-[#071e28] placeholder:text-[#6e797d] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#67c7e8] border border-[#dbf1ff]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-label-md text-xs text-[#071e28] block font-semibold">Type of Petition</label>
                      <select
                        value={petitionCategory}
                        onChange={(e) => setPetitionCategory(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#ffffff] text-[#071e28] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#67c7e8] border border-[#dbf1ff]"
                      >
                        <option value="healing">Health &amp; Physical / Emotional Healing</option>
                        <option value="thanksgiving">Thanksgiving for Prayers Answered</option>
                        <option value="family">Peace in the Family &amp; Reconciliation</option>
                        <option value="souls">Repose of Deceased Souls (Requiem)</option>
                        <option value="vocation">Vocations, Employment &amp; Studies</option>
                        <option value="other">Special Intention / General Blessing</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-label-md text-xs text-[#071e28] block font-semibold">Your Prayer Petition *</label>
                      <textarea
                        rows={4}
                        required
                        value={petitionText}
                        onChange={(e) => setPetitionText(e.target.value)}
                        placeholder="Write your intention or prayer request here..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#ffffff] text-[#071e28] placeholder:text-[#6e797d] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#67c7e8] border border-[#dbf1ff] resize-none"
                      ></textarea>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="publicNovenaHome"
                        checked={publicNovena}
                        onChange={(e) => setPublicNovena(e.target.checked)}
                        className="w-4 h-4 rounded accent-[#006780]"
                      />
                      <label htmlFor="publicNovenaHome" className="font-body-sm text-xs text-[#3e484d] cursor-pointer">
                        Include my intention aloud during the Wednesday Perpetual Novena
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 px-6 rounded-xl bg-[#67c7e8] hover:bg-[#006687] text-[#005266] hover:text-white font-label-md text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-lg">send</span>
                        <span>Submit Prayer Petition to the Altar</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. PARISH NEWS & UPCOMING EVENTS: Very Light Blue           */}
      {/* ============================================================ */}
      <section className="w-full bg-[#e8f6ff] py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
          {/* News Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="font-label-md text-xs uppercase tracking-widest text-[#006780] block mb-1 font-semibold">
                Parish Life &amp; Community
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28]">Announcements &amp; Spiritual Events</h2>
            </div>
            <button
              onClick={() => onNavigate('news-events')}
              className="inline-flex items-center gap-1 text-[#006687] hover:text-[#006780] font-label-md text-xs font-semibold transition-colors cursor-pointer"
            >
              <span>View All Parish Calendar</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>

          {/* Events Bento Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Event 1: Annual Feast */}
            <div
              onClick={() => onNavigate('news-events')}
              className="group bg-[#ffffff] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between border border-[#dbf1ff] cursor-pointer"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#c7ddeb]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Feast of the Nativity of Mary"
                    src={IMAGES.feastCandlelightProcession}
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-white/90 backdrop-blur text-[#006780] font-label-md text-xs shadow-xs font-semibold">
                    Sept 8 – 16
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#745b1b] font-bold block">
                    Solemn Annual Feast
                  </span>
                  <h3 className="font-title-lg text-base text-[#071e28] group-hover:text-[#006780] transition-colors font-semibold">
                    Feast of the Nativity of the Blessed Virgin Mary
                  </h3>
                  <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                    Join our 9-day preparatory Novena leading into the grand solemnity, candlelight Marian procession, and blessing of children.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="inline-flex items-center gap-1 font-label-md text-xs text-[#006687] group-hover:underline font-semibold">
                  <span>View Novena Schedule</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </div>

            {/* Event 2: Catechesis */}
            <div
              onClick={() => onNavigate('sacraments')}
              className="group bg-[#ffffff] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between border border-[#dbf1ff] cursor-pointer"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#c7ddeb]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="First Holy Communion Preparation"
                    src={IMAGES.firstCommunionJoy}
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-white/90 backdrop-blur text-[#006780] font-label-md text-xs shadow-xs font-semibold">
                    Registration Open
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#006687] font-bold block">
                    Faith Formation
                  </span>
                  <h3 className="font-title-lg text-base text-[#071e28] group-hover:text-[#006780] transition-colors font-semibold">
                    First Holy Communion &amp; Confirmation Catechesis
                  </h3>
                  <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                    Enrollment is now ongoing for the 2026–2027 parish academic year. Weekly Sunday classes beginning with the 8:00 AM Family Mass.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="inline-flex items-center gap-1 font-label-md text-xs text-[#006687] group-hover:underline font-semibold">
                  <span>Download Application Form</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </div>

            {/* Event 3: Youth & Charity Medical Camp */}
            <div
              onClick={() => onNavigate('news-events')}
              className="group bg-[#ffffff] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between border border-[#dbf1ff] cursor-pointer"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#c7ddeb]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Marian Youth Pilgrimage & Mercy Medical Camp"
                    src={IMAGES.medicalCharityCamp}
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-white/90 backdrop-blur text-[#006780] font-label-md text-xs shadow-xs font-semibold">
                    October 5
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#006780] font-bold block">
                    Youth Ministry &amp; Outreach
                  </span>
                  <h3 className="font-title-lg text-base text-[#071e28] group-hover:text-[#006780] transition-colors font-semibold">
                    Marian Youth Pilgrimage &amp; Mercy Medical Camp
                  </h3>
                  <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                    Free consultation, diabetic checkup, and eye screening for elderly pilgrims in collaboration with St. Luke's Catholic Hospital.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="inline-flex items-center gap-1 font-label-md text-xs text-[#006687] group-hover:underline font-semibold">
                  <span>Volunteer or Support</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. SACRED OFFERINGS & TITHES: Reverent & Dignified          */}
      {/* ============================================================ */}
      <section className="w-full bg-[#ffffff] py-14 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
          {/* Top Text */}
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <span className="font-label-md text-xs uppercase tracking-widest text-[#006780] block font-semibold">
              Stewardship &amp; Gratitude
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28]">
              Support the Shrine &amp; Charitable Ministries
            </h2>
            <p className="font-body-md text-sm sm:text-base text-[#3e484d] leading-relaxed">
              Your voluntary sacrificial offerings sustain our perpetual sanctuary, shelter homeless pilgrims, provide meals for impoverished families, and fund catechism materials for our youth.
            </p>
          </div>

          {/* Offering Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-[#e8f6ff] hover:bg-[#dbf1ff] transition-all shadow-xs flex flex-col justify-between text-center items-center border border-[#dbf1ff]">
              <div className="space-y-3 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#ffffff] flex items-center justify-center text-[#006780] shadow-xs">
                  <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
                </div>
                <h3 className="font-title-lg text-base text-[#071e28] font-semibold">Mass Offering / Intention</h3>
                <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                  Book a holy sacrifice of the Mass for thanksgiving, deceased loved ones, or urgent personal intentions celebrated at our altar.
                </p>
              </div>
              <div className="pt-6 w-full">
                <button
                  onClick={() => onNavigate('mass-timings')}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#ffffff] hover:bg-[#67c7e8] text-[#006687] hover:text-[#005266] font-label-md text-xs font-semibold transition-colors shadow-2xs border border-[#dbf1ff] cursor-pointer"
                >
                  Book Mass Offering
                </button>
              </div>
            </div>

            {/* Pillar 2: Featured */}
            <div className="p-6 rounded-2xl bg-[#dbf1ff] hover:bg-[#d5ecfa] transition-all shadow-md flex flex-col justify-between text-center items-center relative overflow-hidden border border-[#67c7e8]">
              <div className="absolute top-0 inset-x-0 h-1 bg-[#006780]"></div>
              <div className="space-y-3 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#006780] text-white flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-3xl">synagogue</span>
                </div>
                <h3 className="font-title-lg text-base text-[#071e28] font-semibold">Shrine &amp; Sanctuary Fund</h3>
                <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                  Preserve our historic marble chapel, maintain altar vestments, light perpetual vigil candles, and welcome weary pilgrims with dignity.
                </p>
              </div>
              <div className="pt-6 w-full">
                <button
                  onClick={() => onNavigate('offerings')}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#67c7e8] hover:bg-[#006687] text-[#005266] hover:text-white font-label-md text-xs font-semibold transition-colors shadow-xs cursor-pointer"
                >
                  Support Shrine Fund
                </button>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-[#e8f6ff] hover:bg-[#dbf1ff] transition-all shadow-xs flex flex-col justify-between text-center items-center border border-[#dbf1ff]">
              <div className="space-y-3 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#ffffff] flex items-center justify-center text-[#745b1b] shadow-xs">
                  <span className="material-symbols-outlined text-3xl">soup_kitchen</span>
                </div>
                <h3 className="font-title-lg text-base text-[#071e28] font-semibold">Mercy Charity Outreach</h3>
                <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                  Provides hot nutritious meals every Saturday for 300+ indigent brothers and sisters, medical medicines, and education aid for orphans.
                </p>
              </div>
              <div className="pt-6 w-full">
                <button
                  onClick={() => onNavigate('offerings')}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#ffffff] hover:bg-[#67c7e8] text-[#006687] hover:text-[#005266] font-label-md text-xs font-semibold transition-colors shadow-2xs border border-[#dbf1ff] cursor-pointer"
                >
                  Donate to Mercy Fund
                </button>
              </div>
            </div>
          </div>

          {/* Dignified Secure Transfer Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#e8f6ff] flex flex-col md:flex-row items-center justify-between gap-3 text-[#3e484d] text-xs border border-[#dbf1ff]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#006687] text-2xl">verified_user</span>
              <span>
                All financial donations are tax-deductible under 501(c)(3) religious status. Audited annual financial statements are openly published.
              </span>
            </div>
            <div className="shrink-0">
              <button
                onClick={() => onNavigate('offerings')}
                className="inline-flex items-center gap-2 px-5 py-2 bg-[#006687] text-white rounded-xl font-label-md text-xs font-semibold hover:bg-[#006780] transition-colors cursor-pointer shadow-xs"
              >
                <span>Make an Offering</span>
                <span className="material-symbols-outlined text-sm">favorite</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

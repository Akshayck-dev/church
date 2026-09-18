import React, { useState } from 'react';
import { NavigationTab, ParishEvent, Bulletin, GalleryPhoto } from '../types';
import { PARISH_EVENTS, BULLETINS, GALLERY_PHOTOS, IMAGES } from '../data/parishData';

interface NewsEventsScreenProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const NewsEventsScreen: React.FC<NewsEventsScreenProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const filteredEvents: ParishEvent[] = activeCategory === 'all'
    ? PARISH_EVENTS
    : PARISH_EVENTS.filter((ev: ParishEvent) => ev.category.toLowerCase() === activeCategory.toLowerCase());

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const handleDownloadBulletin = (b: Bulletin) => {
    alert(`Downloading ${b.title} (${b.date}). The PDF is being prepared.`);
  };

  return (
    <div className="flex flex-col w-full font-body-md text-[#071e28]">
      {/* Top Header Banner */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#e8f6ff] via-[#f4faff] to-[#ffffff] px-4 sm:px-6 lg:px-12 pt-8 pb-12">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dbf1ff] text-[#006780] font-label-sm text-[11px] uppercase tracking-widest font-semibold">
              <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                groups
              </span>
              Parish Life &amp; Chronicle
            </span>
            <span className="text-[#bec8cd] font-label-md">•</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ffdf98]/40 text-[#5e4706] font-label-sm text-[11px] font-semibold">
              <span className="material-symbols-outlined text-[14px]">local_activity</span>
              Living Stones of Sancta Maria
            </span>
          </div>

          <div className="space-y-3 max-w-3xl">
            <span className="font-label-md text-xs uppercase tracking-[0.2em] text-[#006687] font-semibold">
              Communion, Formation &amp; Apostolate
            </span>
            <h1 className="font-headline-lg lg:font-display-lg text-3xl sm:text-4xl lg:text-[48px] text-[#071e28] font-serif font-semibold leading-tight">
              Parish Announcements, Catechesis &amp; Sacred Events
            </h1>
            <p className="font-headline-sm text-base sm:text-lg italic text-[#006687] font-serif leading-relaxed">
              “So we, though many, are one body in Christ, and individually members one of another.”
              <span className="font-label-md text-xs not-italic text-[#745b1b] ml-2 font-semibold">— Romans 12:5</span>
            </p>
            <p className="font-body-lg text-sm sm:text-base text-[#3e484d] leading-relaxed">
              Stay connected with our lively parish fraternity. Discover upcoming patronal celebrations, retreat days, faith formation courses, charitable mercy projects, and download the current Sunday liturgical bulletin.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Solemn Parish Feast Banner */}
      <section className="w-full px-4 sm:px-6 lg:px-12 -mt-4 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#006687] via-[#006780] to-[#005266] text-white shadow-xl p-6 sm:p-10 border border-[#67c7e8]/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-[#ffdf98] font-label-sm text-xs uppercase tracking-wider font-semibold">
                  <span className="material-symbols-outlined text-sm">stars</span>
                  <span>Grand Solemnity • September 8–16, 2026</span>
                </div>
                <h2 className="font-headline-lg lg:font-display-md text-2xl sm:text-3xl lg:text-4xl text-white font-serif font-bold">
                  Feast of the Nativity of the Blessed Virgin Mary
                </h2>
                <p className="font-body-md text-xs sm:text-sm text-[#e8f6ff] leading-relaxed">
                  Join our nine days of solemn Novena culminating in the grand candlelight Eucharistic and Marian procession through the sanctuary gardens, blessing of newly born children, choral orchestra concert, and festive parish agape meal.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => alert("Feast of the Nativity 2026 complete 9-day schedule PDF initiated.")}
                    className="px-5 py-2.5 rounded-xl bg-[#67c7e8] hover:bg-white text-[#005266] hover:text-[#006780] font-label-md text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer"
                  >
                    Download Feast Programme (PDF)
                  </button>
                  <button
                    onClick={() => alert("Thank you for volunteering! Please contact the parish office.")}
                    className="px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-label-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Volunteer for Procession Guard
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] bg-[#1e333e] border border-white/20">
                  <img
                    alt="Candlelight procession during annual Marian feast"
                    className="w-full h-full object-cover"
                    src={IMAGES.feastCandlelightProcession}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold">
                      Candlelight Rosary Procession with Over 2,500 Pilgrims
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Filter Bar */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-4 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Calendar Events' },
              { id: 'liturgy', label: 'Liturgical Feasts' },
              { id: 'formation', label: 'Youth & Catechesis' },
              { id: 'charity', label: 'Charity Outreaches' },
              { id: 'community', label: 'Fellowship & Guilds' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl font-label-md text-xs font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#006780] text-white shadow-xs'
                    : 'bg-[#e8f6ff] text-[#3e484d] hover:bg-[#dbf1ff] hover:text-[#071e28]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <span className="font-label-sm text-xs text-[#6e797d]">
            Showing {filteredEvents.length} upcoming events
          </span>
        </div>
      </section>

      {/* Events Grid */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-8 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event: ParishEvent) => (
              <div
                key={event.id}
                className="rounded-2xl bg-[#ffffff] shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between border border-[#dbf1ff] group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#c7ddeb]">
                    <img
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={event.image}
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-white/90 backdrop-blur text-[#006780] font-label-md text-xs shadow-xs font-semibold">
                      {event.date}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#745b1b] font-bold block">
                      {event.category}
                    </span>
                    <h3 className="font-title-lg text-base text-[#071e28] font-bold group-hover:text-[#006780] transition-colors">
                      {event.title}
                    </h3>
                    <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                      {event.description}
                    </p>

                    <div className="pt-2 space-y-1 text-xs text-[#3e484d]">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-[#006780]">schedule</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-[#006780]">location_on</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => alert(`RSVP registered for ${event.title}. We look forward to seeing you!`)}
                    className="w-full py-2 px-3 rounded-xl bg-[#e8f6ff] hover:bg-[#dbf1ff] text-[#006780] font-label-md text-xs font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Register / Learn More</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Sunday Bulletins Archive Section */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-14 bg-[#e8f6ff]" id="bulletins">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="font-label-md text-xs uppercase tracking-widest text-[#006780] font-semibold block">
                Liturgical Publications
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28] font-serif font-semibold">
                Weekly Sunday Bulletins Archive
              </h2>
            </div>
            <p className="font-body-sm text-xs text-[#3e484d] max-w-sm">
              Read parish notices, Mass intention schedules, scripture commentary, and financial stewardship accounts published every Sunday.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BULLETINS.map((b: Bulletin) => (
              <div
                key={b.id}
                className="p-5 rounded-2xl bg-[#ffffff] shadow-xs flex flex-col justify-between border border-[#dbf1ff] hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#dbf1ff] text-[#006780] flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">menu_book</span>
                  </div>
                  <div>
                    <span className="font-label-sm text-[11px] text-[#745b1b] uppercase tracking-wider font-semibold block">
                      {b.date}
                    </span>
                    <h4 className="font-title-md text-sm text-[#071e28] font-bold mt-0.5">
                      {b.title}
                    </h4>
                  </div>
                  <p className="font-body-sm text-xs text-[#3e484d]">
                    Contains liturgical readings, parish financial report, and announcements.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#dbf1ff] flex items-center justify-between">
                  <span className="font-label-sm text-[11px] text-[#6e797d]">{b.fileSize}</span>
                  <button
                    onClick={() => handleDownloadBulletin(b)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#006780] hover:text-[#006687] transition-colors cursor-pointer"
                  >
                    <span>Download PDF</span>
                    <span className="material-symbols-outlined text-sm">download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parish Ministries & Fraternities */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-14 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-label-md text-xs uppercase tracking-widest text-[#006780] font-semibold">
              Parish Fraternity
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28] font-serif font-semibold">
              Ministries &amp; Devotional Societies
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-[#3e484d]">
              Every parishioner is invited to bear fruit in service. Find your community within our vibrant liturgical and charitable apostolates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#e8f6ff] space-y-2 border border-[#dbf1ff]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white text-[#006780] flex items-center justify-center shadow-2xs">
                  <span className="material-symbols-outlined text-2xl">shield</span>
                </div>
                <div>
                  <h4 className="font-title-md text-sm text-[#071e28] font-bold">Knights of Our Lady</h4>
                  <span className="text-[11px] text-[#006687] font-semibold">Men's Spiritual Fraternity</span>
                </div>
              </div>
              <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                Dedicated Catholic men guarding processions, serving at high solemnities, and maintaining the sanctuary grounds.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#e8f6ff] space-y-2 border border-[#dbf1ff]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white text-[#745b1b] flex items-center justify-center shadow-2xs">
                  <span className="material-symbols-outlined text-2xl">child_care</span>
                </div>
                <div>
                  <h4 className="font-title-md text-sm text-[#071e28] font-bold">Christian Mothers</h4>
                  <span className="text-[11px] text-[#745b1b] font-semibold">Confraternity of Intercession</span>
                </div>
              </div>
              <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                Mothers praying unitedly for the sanctification and Christian upbringing of their children and parish vocations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#e8f6ff] space-y-2 border border-[#dbf1ff]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white text-[#006780] flex items-center justify-center shadow-2xs">
                  <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
                </div>
                <div>
                  <h4 className="font-title-md text-sm text-[#071e28] font-bold">St. Vincent de Paul Society</h4>
                  <span className="text-[11px] text-[#006780] font-semibold">Poverty Relief &amp; Care</span>
                </div>
              </div>
              <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                Weekly food pantry distributions, rental assistance, and compassionate home visitations for homebound parishioners.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#e8f6ff] space-y-2 border border-[#dbf1ff]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white text-[#006780] flex items-center justify-center shadow-2xs">
                  <span className="material-symbols-outlined text-2xl">music_note</span>
                </div>
                <div>
                  <h4 className="font-title-md text-sm text-[#071e28] font-bold">Sancta Maria Polyphonic Choir</h4>
                  <span className="text-[11px] text-[#006780] font-semibold">Sacred Music Ministry</span>
                </div>
              </div>
              <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                Elevating the Sacred Liturgy through Gregorian chant, Renaissance polyphony, and traditional sacred hymns.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#e8f6ff] space-y-2 border border-[#dbf1ff]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white text-[#006780] flex items-center justify-center shadow-2xs">
                  <span className="material-symbols-outlined text-2xl">church</span>
                </div>
                <div>
                  <h4 className="font-title-md text-sm text-[#071e28] font-bold">St. Tarcisius Altar Guild</h4>
                  <span className="text-[11px] text-[#006780] font-semibold">Altar Servers &amp; Sacristans</span>
                </div>
              </div>
              <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                Training young boys and girls in reverent liturgical service at the altar of sacrifice and holy devotions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#e8f6ff] space-y-2 border border-[#dbf1ff]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white text-[#745b1b] flex items-center justify-center shadow-2xs">
                  <span className="material-symbols-outlined text-2xl">import_contacts</span>
                </div>
                <div>
                  <h4 className="font-title-md text-sm text-[#071e28] font-bold">Legion of Mary</h4>
                  <span className="text-[11px] text-[#745b1b] font-semibold">Praesidium Regina Pacis</span>
                </div>
              </div>
              <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                Apostolic evangelization through weekly home visits with the Pilgrim Virgin statue, hospital care, and rosaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sancta Maria in Pictures (Parish Photo Gallery) */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-14 bg-[#e8f6ff]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="font-label-md text-xs uppercase tracking-widest text-[#006780] font-semibold block">
                Visual Chronicle
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28] font-serif font-semibold">
                Sancta Maria in Pictures
              </h2>
            </div>
            <span className="font-body-sm text-xs text-[#3e484d]">
              Moments of communion, solemn liturgies, and sanctuary beauty.
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {GALLERY_PHOTOS.map((photo: GalleryPhoto) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo.src)}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-[#c7ddeb] shadow-2xs cursor-pointer border border-[#dbf1ff]"
              >
                <img
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={photo.src}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 text-white text-[11px] font-medium leading-tight">
                  {photo.caption}
                </div>
              </div>
            ))}
          </div>

          {selectedPhoto && (
            <div
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
            >
              <div className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img
                  src={selectedPhoto}
                  alt="Expanded view"
                  className="max-h-[80vh] w-auto object-contain mx-auto"
                />
                <div className="absolute top-3 right-3 text-white bg-black/60 rounded-full p-1 cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">close</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription Card (Sancta Maria Herald) */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-14 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-r from-[#006687] to-[#006780] p-8 sm:p-10 text-white shadow-xl text-center space-y-4">
            <span className="material-symbols-outlined text-4xl text-[#67c7e8]">mark_email_read</span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-serif text-white font-semibold">
              Subscribe to The Sancta Maria Herald
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-[#e8f6ff] max-w-xl mx-auto leading-relaxed">
              Receive the digital Sunday Bulletin, pastoral reflections from Fr. Joseph Mathew, liturgical calendar reminders, and emergency prayer requests directly in your email inbox every Friday morning.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-white/20 text-[#ffdf98] font-title-md text-sm font-semibold inline-block">
                Thank you for subscribing! You will receive this Friday's bulletin.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 pt-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-4 py-3 rounded-xl bg-white text-[#071e28] placeholder:text-[#6e797d] text-xs sm:text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#67c7e8] hover:bg-white text-[#005266] hover:text-[#006780] font-label-md text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
                >
                  Subscribe Free
                </button>
              </form>
            )}

            <p className="font-body-sm text-[11px] text-white/70">
              We respect your sacred privacy. Unsubscribe at any time with a single click.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

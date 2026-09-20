import React, { useState } from 'react';
import { NavigationTab, ParishEvent, Bulletin, GalleryPhoto } from '../types';
import { PARISH_EVENTS, BULLETINS, GALLERY_PHOTOS, IMAGES } from '../data/parishData';
import { Reveal, PageHero, SectionHeading } from '../components/ui';

interface NewsEventsScreenProps {
  onNavigate: (tab: NavigationTab) => void;
}

const ministries = [
  {
    icon: 'import_contacts',
    title: 'Legion of Mary',
    tagline: 'Praesidium of Our Lady',
    text: 'Apostolic service through weekly home visits with the Pilgrim Virgin statue, hospital care, and rosaries.',
  },
  {
    icon: 'groups',
    title: 'KCYM',
    tagline: 'Kerala Catholic Youth Movement',
    text: 'Youth apostolate animating the liturgy, retreats, and social service for young parishioners.',
  },
  {
    icon: 'child_care',
    title: 'Cherupushpa Mission League (CML)',
    tagline: "Children's Missionary League",
    text: "Forming 'little flowers' in faith through prayer, mission awareness, and acts of charity.",
  },
  {
    icon: 'volunteer_activism',
    title: 'St. Vincent de Paul Society',
    tagline: 'Poverty Relief & Care',
    text: 'Food distributions, emergency assistance, and compassionate home visitations for families in need.',
  },
  {
    icon: 'family_restroom',
    title: 'Mathruvedi',
    tagline: "Mothers' Association",
    text: 'Mothers praying unitedly for their families, parish vocations, and the sanctification of homes.',
  },
  {
    icon: 'shield',
    title: 'Pithruvedi',
    tagline: "Fathers' Association",
    text: "Fathers strengthening family prayer life and serving the parish in maintenance and outreach.",
  },
  {
    icon: 'church',
    title: 'Altar Servers',
    tagline: 'Ministry of the Altar',
    text: 'Training young boys and girls in reverent liturgical service at the altar of sacrifice.',
  },
  {
    icon: 'music_note',
    title: 'Parish Choir',
    tagline: 'Sacred Music Ministry',
    text: 'Leading the Holy Qurbana in song through traditional hymns and Syro-Malabar liturgical music.',
  },
];

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

  const categories = [
    { id: 'all', label: 'All Calendar Events' },
    { id: 'liturgy', label: 'Liturgical Feasts' },
    { id: 'formation', label: 'Youth & Catechesis' },
    { id: 'charity', label: 'Charity Outreaches' },
    { id: 'community', label: 'Fellowship & Guilds' },
  ];

  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Parish Life & Chronicle"
        title="Parish Announcements, Catechesis & Sacred Events"
        description="Stay connected with our lively parish fraternity. Discover upcoming patronal celebrations, retreat days, faith formation courses, charitable mercy projects, and download the current Sunday liturgical bulletin."
        image={IMAGES.feastCandlelightProcession}
        imageAlt="Candlelight procession during annual Marian feast"
      />

      {/* Scripture verse band */}
      <section className="border-b border-line-soft bg-ivory-100">
        <div className="container-site py-8">
          <Reveal className="flex max-w-3xl flex-col items-start gap-2">
            <span className="eyebrow">Communion, Formation &amp; Apostolate</span>
            <p className="serif-italic text-lg leading-relaxed text-maroon-700 sm:text-xl">
              “So we, though many, are one body in Christ, and individually members one of another.”
              <span className="ml-2 text-xs not-italic font-semibold text-gold-700">— Romans 12:5</span>
            </p>
            <p className="t-small">Living Stones of Lourde Matha</p>
          </Reveal>
        </div>
      </section>

      {/* Featured solemn parish feast banner */}
      <section className="bg-ivory-50">
        <div className="container-site py-10 lg:py-14">
          <Reveal>
            <div className="card overflow-hidden !border-0 bg-maroon-900 text-ivory-100 shadow-soft">
              <div className="grid grid-cols-1 items-center gap-8 p-6 sm:p-10 lg:grid-cols-12">
                <div className="space-y-4 lg:col-span-7">
                  <span className="inline-flex items-center gap-2 rounded-full bg-ivory-100/10 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-gold-300">
                    <span className="material-symbols-outlined text-[16px]">stars</span>
                    Grand Solemnity • September 8–16, 2026
                  </span>
                  <h2 className="t-h2 text-balance text-ivory-50">
                    Feast of the Nativity of the Blessed Virgin Mary
                  </h2>
                  <p className="text-[14px] leading-relaxed text-ivory-200/85 sm:text-[15px]">
                    Join our nine days of solemn Novena culminating in the grand candlelight Eucharistic and Marian procession through the sanctuary gardens, blessing of newly born children, choral orchestra concert, and festive parish agape meal.
                  </p>
                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <button
                      onClick={() => alert("Feast of the Nativity 2026 complete 9-day schedule PDF initiated.")}
                      className="btn-gold"
                    >
                      <span className="material-symbols-outlined text-[20px]">download</span>
                      Download Feast Programme (PDF)
                    </button>
                    <button
                      onClick={() => alert("Thank you for volunteering! Please contact the parish office.")}
                      className="btn-outline-light"
                    >
                      Volunteer for Procession Guard
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <figure className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-ivory-100/15">
                    <img
                      alt="Candlelight procession during annual Marian feast"
                      className="img-zoom h-full w-full object-cover"
                      src={IMAGES.feastCandlelightProcession}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/85 via-maroon-950/15 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-4 text-[13px] font-semibold text-ivory-100">
                      Candlelight Rosary Procession with Over 2,500 Pilgrims
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Events filter bar */}
      <section className="bg-ivory-50">
        <div className="container-site pb-2">
          <Reveal>
            <div className="card flex flex-col gap-2 p-2.5 sm:flex-row sm:items-center sm:justify-between" role="tablist" aria-label="Filter parish events">
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={activeCategory === cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`cursor-pointer rounded-lg px-4 py-2 text-[13px] font-semibold transition-all ${
                      activeCategory === cat.id
                        ? 'bg-maroon-600 text-ivory-50 shadow-sm'
                        : 'text-ink-700 hover:bg-ivory-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              <span className="t-small shrink-0 px-2">
                Showing {filteredEvents.length} upcoming events
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Events grid */}
      <section className="bg-ivory-50" aria-label="Upcoming parish events">
        <div className="container-site py-8 lg:py-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event: ParishEvent, i: number) => (
              <Reveal key={event.id} delay={(i % 3) * 80}>
                <article className="card card-hover group flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden bg-ivory-200">
                    <img
                      alt={event.title}
                      className="img-zoom h-full w-full object-cover"
                      src={event.image}
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 rounded-md bg-ivory-50/95 px-3 py-1.5 text-[12px] font-bold text-maroon-700 shadow-sm backdrop-blur">
                      {event.date}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-600">
                      {event.category}
                    </span>
                    <h3 className="t-h3 mt-2 !text-[1.08rem] text-ink-950 transition-colors group-hover:text-maroon-700">
                      {event.title}
                    </h3>
                    <p className="t-small mt-2 flex-1">
                      {event.description}
                    </p>
                    <dl className="mt-4 space-y-1.5 border-t border-line-soft pt-3.5 text-[13px] text-ink-700">
                      <div className="flex items-center gap-2">
                        <dt className="sr-only">Time</dt>
                        <dd className="inline-flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px] text-maroon-600">schedule</span>
                          <span>{event.time}</span>
                        </dd>
                      </div>
                      <div className="flex items-center gap-2">
                        <dt className="sr-only">Location</dt>
                        <dd className="inline-flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px] text-maroon-600">location_on</span>
                          <span>{event.location}</span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                    <button
                      onClick={() => alert(`RSVP registered for ${event.title}. We look forward to seeing you!`)}
                      className="btn-outline btn-sm w-full"
                    >
                      Register / Learn More
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Sunday bulletins archive */}
      <section className="bg-ivory-100" id="bulletins" aria-label="Weekly Sunday bulletins archive">
        <div className="container-site py-12 lg:py-16">
          <Reveal className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div className="flex max-w-2xl flex-col gap-3">
              <span className="eyebrow">Liturgical Publications</span>
              <h2 className="t-h2 text-balance text-ink-950">Weekly Sunday Bulletins Archive</h2>
            </div>
            <p className="t-small max-w-sm">
              Read parish notices, Qurbana intention schedules, scripture commentary, and financial stewardship accounts published every Sunday.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BULLETINS.map((b: Bulletin, i: number) => (
              <Reveal key={b.id} delay={i * 70}>
                <article className="card flex h-full flex-col p-5 transition-shadow hover:shadow-card-hover">
                  <span className="icon-tile"><span className="material-symbols-outlined text-[22px]">menu_book</span></span>
                  <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-600">
                    {b.date}
                  </p>
                  <h3 className="mt-1 text-[15px] font-bold leading-snug text-ink-950">
                    {b.title}
                  </h3>
                  <p className="t-small mt-2 flex-1">
                    Contains liturgical readings, parish financial report, and announcements.
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-line-soft pt-3.5">
                    <span className="text-[12px] text-ink-500">{b.fileSize}</span>
                    <button
                      onClick={() => handleDownloadBulletin(b)}
                      className="link-arrow !text-[13px]"
                    >
                      Download PDF
                      <span className="material-symbols-outlined text-[16px]">download</span>
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parish ministries & fraternities */}
      <section className="bg-ivory-50">
        <div className="container-site py-12 lg:py-16">
          <SectionHeading
            eyebrow="Parish Fraternity"
            title="Ministries & Devotional Societies"
            description="Every parishioner is invited to bear fruit in service. Find your community within our vibrant liturgical and charitable apostolates."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 80}>
                <article className="card h-full p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover sm:p-6">
                  <div className="flex items-center gap-3.5">
                    <span className={i % 3 === 1 ? 'icon-tile-gold' : 'icon-tile'}>
                      <span className="material-symbols-outlined text-[22px]">{m.icon}</span>
                    </span>
                    <div>
                      <h3 className="text-[15px] font-bold text-ink-950">{m.title}</h3>
                      <p className="text-[12px] font-semibold text-maroon-600">{m.tagline}</p>
                    </div>
                  </div>
                  <p className="t-small mt-3">{m.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lourde Matha in pictures — parish photo gallery */}
      <section className="bg-ivory-100">
        <div className="container-site py-12 lg:py-16">
          <Reveal className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div className="flex max-w-2xl flex-col gap-3">
              <span className="eyebrow">Visual Chronicle</span>
              <h2 className="t-h2 text-balance text-ink-950">Lourde Matha in Pictures</h2>
            </div>
            <p className="t-small max-w-sm">
              Moments of communion, solemn liturgies, and sanctuary beauty.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {GALLERY_PHOTOS.map((photo: GalleryPhoto, i: number) => (
              <Reveal key={photo.id} delay={(i % 6) * 60}>
                <button
                  onClick={() => setSelectedPhoto(photo.src)}
                  aria-label={`View photo: ${photo.caption}`}
                  className="group relative block aspect-square w-full cursor-pointer overflow-hidden rounded-xl border border-line bg-ivory-200 shadow-sm transition-shadow hover:shadow-card"
                >
                  <img
                    alt={photo.caption}
                    className="img-zoom h-full w-full object-cover"
                    src={photo.src}
                    loading="lazy"
                  />
                  <span className="absolute inset-0 flex items-end bg-gradient-to-t from-maroon-950/80 to-transparent p-3 text-left text-[11px] font-semibold leading-tight text-ivory-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    {photo.caption}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          {selectedPhoto && (
            <div
              onClick={() => setSelectedPhoto(null)}
              onKeyDown={(e) => e.key === 'Escape' && setSelectedPhoto(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Expanded photo view"
              className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-maroon-950/90 p-4"
            >
              <div className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl bg-maroon-950 shadow-2xl">
                <img
                  src={selectedPhoto}
                  alt="Expanded view"
                  className="mx-auto max-h-[80vh] w-auto object-contain"
                />
                <button
                  onClick={() => setSelectedPhoto(null)}
                  aria-label="Close photo viewer"
                  className="absolute right-3 top-3 cursor-pointer rounded-full bg-maroon-950/70 p-1.5 text-ivory-50 transition-colors hover:bg-maroon-950"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter subscription — Lourde Matha Herald */}
      <section className="bg-ivory-50">
        <div className="container-site py-12 lg:py-16">
          <Reveal>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-maroon-900 p-8 text-center shadow-soft sm:p-12">
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                aria-hidden="true"
                style={{
                  backgroundImage: 'radial-gradient(circle at 25% 15%, rgba(201,164,94,0.35), transparent 45%), radial-gradient(circle at 80% 90%, rgba(201,164,94,0.2), transparent 40%)',
                }}
              />
              <div className="relative space-y-4">
                <span className="icon-tile-gold mx-auto !h-14 !w-14">
                  <span className="material-symbols-outlined text-[28px]">mark_email_read</span>
                </span>
                <h2 className="t-h2 text-balance text-ivory-50">
                  Subscribe to The Lourde Matha Herald
                </h2>
                <p className="mx-auto max-w-xl text-[14px] leading-relaxed text-ivory-200/85">
                  Receive the digital Sunday Bulletin, pastoral reflections from Fr. Sebastian Thumbamattam, liturgical calendar reminders, and emergency prayer requests directly in your email inbox every Friday morning.
                </p>

                {subscribed ? (
                  <p className="inline-block rounded-xl bg-ivory-100/10 px-6 py-3.5 text-[14px] font-semibold text-gold-300 ring-1 ring-gold-400/40" role="status">
                    Thank you for subscribing! You will receive this Friday's bulletin.
                  </p>
                ) : (
                  <form onSubmit={handleSubscribe} className="mx-auto flex max-w-md flex-col gap-2.5 pt-1 sm:flex-row">
                    <label htmlFor="herald-email" className="sr-only">Email address</label>
                    <input
                      id="herald-email"
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="input !border-transparent !bg-ivory-50 !py-3"
                    />
                    <button type="submit" className="btn-gold shrink-0">
                      Subscribe Free
                    </button>
                  </form>
                )}

                <p className="text-[12px] text-ivory-200/60">
                  We respect your sacred privacy. Unsubscribe at any time with a single click.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

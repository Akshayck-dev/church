import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { IMAGES, GALLERY_PHOTOS, BULLETINS, SACRAMENTS_DATA } from '../data/parishData';
import { Reveal, SectionHeading, DividerCross } from '../components/ui';

interface HomeScreenProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenPrayerModal: () => void;
}

const scrollToContact = () => {
  document.getElementById('parish-contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

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

  const quickAccess = [
    { icon: 'schedule', title: 'Qurbana Timings', text: 'Daily, Sunday & feast day liturgies', tab: 'mass-timings' as NavigationTab },
    { icon: 'water_drop', title: 'Sacraments', text: 'Baptism, Communion, Matrimony & more', tab: 'sacraments' as NavigationTab },
    { icon: 'event', title: 'Events', text: 'Feasts, novenas & parish gatherings', tab: 'news-events' as NavigationTab },
    { icon: 'campaign', title: 'Announcements', text: 'Weekly bulletins & parish notices', tab: 'news-events' as NavigationTab },
  ];

  const todaySchedule = [
    { time: '06:30 AM', title: 'Holy Qurbana', desc: 'Morning Praise & Eucharist', place: 'Main Church', highlight: false },
    { time: '12:00 PM', title: 'Angelus Prayer', desc: 'Midday Holy Rosary', place: 'Lourdes Grotto', highlight: false },
    { time: '05:30 PM', title: 'Marian Devotion', desc: 'Holy Rosary & Litany', place: 'Church Altar', highlight: false },
    { time: '06:00 PM', title: 'Evening Prayer', desc: 'Parish Community Intention', place: 'Main Church', highlight: false },
    { time: '06:45 PM', title: 'Perpetual Novena', desc: 'Our Lady of Lourdes & Benediction', place: 'Solemn Blessing', highlight: true },
  ];

  return (
    <div className="flex w-full flex-col">
      {/* ============================================================ */}
      {/* 1. HERO — full-bleed sanctuary imagery                       */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-maroon-950 text-ivory-50" aria-label="Welcome">
        <img
          src={IMAGES.shrineAltarHero}
          alt="Lourde Matha Church altar with Our Lady of Lourdes"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/80 via-maroon-950/55 to-maroon-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950/60 via-transparent to-transparent" />

        <div className="container-site relative flex min-h-[78vh] flex-col justify-center py-20 sm:py-24 lg:min-h-[86vh]">
          <Reveal className="max-w-3xl">
            <span className="eyebrow eyebrow-on-dark">Welcome to Lourde Matha Church, Thalayanadu • Est. 1935</span>
            <h1 className="t-display mt-5 text-balance text-ivory-50">
              A Place of <em className="serif-italic text-gold-300">Prayer</em>, Hope &amp; Grace
            </h1>
            <div className="mt-6 flex items-center gap-3" aria-hidden="true">
              <span className="h-px w-20 bg-gold-400/70" />
              <span className="font-serif text-lg leading-none text-gold-300">✝</span>
              <span className="h-px w-20 bg-gold-400/70" />
            </div>
            <p className="t-lead mt-6 max-w-xl !text-ivory-200/90">
              Gather in sacred adoration under the gentle protective mantle of Our Lady of Lourdes. Find stillness, healing peace, and spiritual renewal in the communion of Christ.
            </p>

            <p className="mt-6 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-ivory-100/20 bg-ivory-100/10 px-4 py-2 text-[13px] text-ivory-100 backdrop-blur-sm">
              <span className="material-symbols-outlined text-[18px] text-gold-300">calendar_month</span>
              Liturgical Season: <strong className="font-semibold text-ivory-50">Ordinary Time • Marian Year of Hope</strong>
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button onClick={() => onNavigate('mass-timings')} className="btn-gold">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
                Explore Qurbana Timings
              </button>
              <button onClick={onOpenPrayerModal} className="btn-outline-light">
                <span className="material-symbols-outlined text-[20px]">edit_note</span>
                Submit Prayer Petition
              </button>
              <button onClick={scrollToContact} className="btn-outline-light">
                <span className="material-symbols-outlined text-[20px]">location_on</span>
                Contact
              </button>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3 sm:gap-4">
              {[
                ['Daily', 'Holy Qurbana'],
                ['Est. 1935', 'Syro-Malabar Parish'],
                ['Thalayanadu', 'Idukki, Kerala'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl border border-ivory-100/15 bg-ivory-100/5 px-3 py-3.5 text-center backdrop-blur-sm">
                  <dt className="order-2 mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-ivory-200/70">{label}</dt>
                  <dd className="order-1 font-serif text-xl font-semibold text-gold-200 sm:text-2xl">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Scripture ribbon */}
        <div className="relative border-t border-ivory-100/10 bg-maroon-950/70 backdrop-blur-sm">
          <div className="container-site flex flex-col items-start justify-between gap-2 py-4 sm:flex-row sm:items-center">
            <p className="serif-italic text-[1.05rem] text-ivory-100">“Do whatever He tells you.”</p>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-300">John 2:5 · Sanctuary of Our Lady of Lourdes</p>
          </div>
        </div>
        {/* Floating shrine badge */}
        <div className="absolute right-4 top-4 hidden items-center gap-2 rounded-xl border border-ivory-100/20 bg-maroon-950/60 px-3.5 py-2 text-ivory-100 shadow-card backdrop-blur-sm sm:flex lg:right-8">
          <span className="material-symbols-outlined text-[20px] text-gold-300">verified</span>
          <span className="text-[12px] font-semibold">Eparchy of Kothamangalam</span>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. QUICK ACCESS                                               */}
      {/* ============================================================ */}
      <section className="bg-ivory-50" aria-label="Quick access">
        <div className="container-site section-pad !pb-0">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickAccess.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <button
                  onClick={() => onNavigate(item.tab)}
                  className="card card-hover group flex w-full cursor-pointer items-center gap-4 p-5 text-left"
                >
                  <span className="icon-tile transition-colors duration-300 group-hover:bg-maroon-600 group-hover:text-ivory-50">
                    <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                  </span>
                  <span>
                    <span className="block font-serif text-[1.05rem] font-semibold text-ink-950">{item.title}</span>
                    <span className="t-small mt-0.5 block">{item.text}</span>
                  </span>
                  <span className="material-symbols-outlined ml-auto text-[20px] text-ink-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-maroon-600">
                    arrow_forward
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. TODAY'S MASS SCHEDULE                                      */}
      {/* ============================================================ */}
      <section className="border-t border-line-soft bg-white" aria-label="Holy Qurbana timings" id="schedule">
        <div className="container-site section-pad">
          <Reveal className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">Daily Liturgy &amp; Devotions</span>
              <h2 className="t-h2 mt-3 text-balance text-ink-950">Holy Qurbana &amp; Liturgical Timings</h2>
              <p className="t-lead mt-2">All liturgies open to public worship and live stream.</p>
            </div>
            <button onClick={() => onNavigate('mass-timings')} className="link-arrow shrink-0">
              View complete schedule <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </Reveal>

          <Reveal>
            <div className="card overflow-hidden">
              <div className="flex flex-col gap-2 border-b border-line-soft px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-maroon-600 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-ivory-50">
                    Today's Schedule
                  </span>
                  <span className="text-sm font-semibold text-ink-900">
                    {todayDateString} <span className="font-normal text-ink-500">• Perpetual Novena Day</span>
                  </span>
                </div>
                <button onClick={() => onNavigate('mass-timings')} className="link-arrow self-start sm:self-auto">
                  Request Intention for Next Mass <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
              <ol className="grid grid-cols-1 divide-y divide-line-soft sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
                {todaySchedule.map((s) => (
                  <li
                    key={s.time}
                    className={`flex flex-col justify-between gap-6 px-5 py-5 transition-colors sm:px-6 ${
                      s.highlight ? 'bg-gold-100/60' : 'hover:bg-ivory-100/70'
                    }`}
                  >
                    <div>
                      <p className={`text-[12px] font-bold uppercase tracking-[0.14em] ${s.highlight ? 'text-gold-700' : 'text-maroon-600'}`}>
                        {s.time}
                      </p>
                      <h3 className="mt-2 font-serif text-[1.05rem] font-semibold text-ink-950">{s.title}</h3>
                      <p className="t-small mt-1">{s.desc}</p>
                    </div>
                    <p className={`inline-flex items-center gap-1.5 text-[12px] font-semibold ${s.highlight ? 'text-gold-700' : 'text-ink-500'}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${s.highlight ? 'bg-gold-600' : 'bg-maroon-500'}`} aria-hidden="true" />
                      {s.place}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: 'wb_twilight', title: 'Weekday Qurbana', text: 'Daily spiritual bread for parishioners and workers.',
                rows: [['06:30 AM', 'Malayalam']], foot: 'Mon – Fri Morning Qurbana',
              },
              {
                icon: 'auto_awesome', title: 'Saturday Marian', text: 'Dedicated to Our Lady with the Sunday Vigil Qurbana.',
                rows: [['06:30 AM', 'Memorial Qurbana'], ['05:30 PM', 'Sunday Vigil Qurbana']], foot: 'Confession 5:00 – 6:00 PM',
              },
              {
                icon: 'church', title: 'Sunday Liturgies', text: "Solemn community celebration of the Lord's Day.",
                rows: [['07:00 AM', 'Morning Qurbana'], ['09:30 AM', 'Solemn Holy Qurbana']],
                foot: 'Parish Choir Accompaniment',
              },
              {
                icon: 'favorite', title: 'Confession & Mercy', text: 'Sacrament of Reconciliation and spiritual counsel.',
                rows: [['Daily', '30 min before Qurbana'], ['Saturday', '5:00 PM – 6:00 PM']], foot: 'Confessionals at the Church',
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 70}>
                <article className="card card-hover flex h-full flex-col p-6">
                  <span className="icon-tile"><span className="material-symbols-outlined text-[22px]">{card.icon}</span></span>
                  <h3 className="t-h3 mt-4 text-ink-950">{card.title}</h3>
                  <p className="t-small mt-1.5">{card.text}</p>
                  <dl className="mt-4 space-y-1.5">
                    {card.rows.map(([time, label]) => (
                      <div key={time} className="flex items-center justify-between rounded-lg bg-ivory-100 px-3 py-2 text-[13px]">
                        <dt className="font-bold text-ink-900">{time}</dt>
                        <dd className="text-ink-500">{label}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 border-t border-line-soft pt-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-maroon-600">
                    {card.foot}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. LIVE MASS BROADCAST — deep maroon                          */}
      {/* ============================================================ */}
      <section className="section-dark" aria-label="Live Mass broadcast">
        <div className="container-site section-pad">
          <SectionHeading
            dark
            eyebrow="Virtual Sanctuary • Worldwide Communion"
            title="Live From Our Church"
            description="Join our liturgical celebrations and Marian devotions in real-time from anywhere in the world. Experience the grace of the Holy Qurbana."
          />
          <Reveal className="mx-auto mt-10 max-w-4xl">
            <div className="rounded-2xl border border-ivory-100/15 bg-maroon-950/60 p-2 shadow-soft sm:p-3">
              <div className="group relative aspect-video overflow-hidden rounded-xl bg-maroon-950">
                <img
                  className="h-full w-full object-cover"
                  alt="Live Holy Qurbana Altar Cam"
                  src={IMAGES.liveStreamAltar}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-maroon-950/45" />
                <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-maroon-600 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-ivory-50">
                    <span className="live-dot h-2 w-2 rounded-full bg-gold-300" aria-hidden="true" />
                    LIVE NOW
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/45 px-3 py-1 text-[11px] font-semibold text-ivory-100 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[15px] text-gold-300">group</span>
                    1,420 Worshippers Praying Online
                  </span>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <button
                    aria-label={isPlayingStream ? 'Pause Live Mass Broadcast' : 'Play Live Mass Broadcast'}
                    aria-pressed={isPlayingStream}
                    onClick={() => setIsPlayingStream(!isPlayingStream)}
                    className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gold-500 text-maroon-950 shadow-soft transition-all duration-300 hover:scale-105 hover:bg-gold-400 sm:h-20 sm:w-20"
                  >
                    <span className="material-symbols-outlined text-3xl sm:text-4xl">
                      {isPlayingStream ? 'pause' : 'play_arrow'}
                    </span>
                  </button>
                  <span className="rounded-full bg-black/45 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ivory-100 backdrop-blur-sm">
                    Holy Qurbana • Perpetual Novena to Our Lady of Lourdes
                  </span>
                </div>
                <div className="absolute inset-x-4 bottom-3 flex items-center justify-between text-[12px] text-ivory-200/90">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-gold-300">hd</span>
                    1080p Sanctuary Cam 1 (High Altar)
                  </span>
                  <span className="flex items-center gap-3" aria-hidden="true">
                    <span className="material-symbols-outlined text-[18px]">volume_up</span>
                    <span className="material-symbols-outlined text-[18px]">fullscreen</span>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button onClick={() => onNavigate('live-mass')} className="btn-gold w-full sm:w-auto">
              <span className="material-symbols-outlined text-[20px]">live_tv</span>
              WATCH FULL LIVE STREAM
            </button>
            <button onClick={() => onNavigate('news-events')} className="btn-outline-light w-full sm:w-auto">
              <span className="material-symbols-outlined text-[20px]">description</span>
              Download Qurbana Leaflet (PDF)
            </button>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. UPCOMING EVENTS                                            */}
      {/* ============================================================ */}
      <section className="bg-ivory-100" aria-label="Upcoming events">
        <div className="container-site section-pad">
          <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">Parish Life &amp; Community</span>
              <h2 className="t-h2 mt-3 text-balance text-ink-950">Upcoming Events &amp; Feasts</h2>
            </div>
            <button onClick={() => onNavigate('news-events')} className="link-arrow shrink-0">
              View All Parish Calendar <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                img: IMAGES.feastCandlelightProcession, alt: 'Feast of the Nativity of Mary',
                badge: 'Sept 8 – 16', kicker: 'Solemn Annual Feast',
                title: 'Feast of the Nativity of the Blessed Virgin Mary',
                text: 'Join our 9-day preparatory Novena leading into the grand solemnity, candlelight Marian procession, and blessing of children.',
                cta: 'View Novena Schedule', tab: 'news-events' as NavigationTab,
              },
              {
                img: IMAGES.firstCommunionJoy, alt: 'Catechism enrollment',
                badge: 'Registration Open', kicker: 'Faith Formation',
                title: 'Catechism Enrollment 2026–27',
                text: 'Enrollment is now open for the 2026–27 catechism year. Weekly Sunday classes beginning with the 7:00 AM Holy Qurbana.',
                cta: 'Download Application Form', tab: 'sacraments' as NavigationTab,
              },
              {
                img: IMAGES.medicalCharityCamp, alt: 'Parish Youth (KCYM) Medical Camp',
                badge: 'October 5', kicker: 'Youth Ministry & Outreach',
                title: 'Parish Youth (KCYM) Medical Camp',
                text: 'Free medical checkups for underprivileged families organized by our KCYM youth.',
                cta: 'Volunteer or Support', tab: 'news-events' as NavigationTab,
              },
            ].map((ev, i) => (
              <Reveal key={ev.title} delay={i * 80}>
                <article
                  onClick={() => onNavigate(ev.tab)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onNavigate(ev.tab); } }}
                  tabIndex={0}
                  role="link"
                  aria-label={`${ev.title} — ${ev.cta}`}
                  className="card card-hover group flex h-full cursor-pointer flex-col overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ivory-200">
                    <img src={ev.img} alt={ev.alt} loading="lazy" className="img-zoom h-full w-full object-cover" />
                    <span className="absolute left-4 top-4 rounded-full bg-ivory-50/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-maroon-700 shadow-sm">
                      {ev.badge}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-600">{ev.kicker}</p>
                    <h3 className="t-h3 mt-2 text-ink-950 transition-colors group-hover:text-maroon-700">{ev.title}</h3>
                    <p className="t-small mt-2 flex-1">{ev.text}</p>
                    <span className="link-arrow mt-4">
                      {ev.cta} <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. ANNOUNCEMENTS / BULLETINS                                  */}
      {/* ============================================================ */}
      <section className="bg-ivory-50" aria-label="Parish announcements">
        <div className="container-site section-pad">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <span className="eyebrow">Stay Informed</span>
              <h2 className="t-h2 mt-3 text-balance text-ink-950">Announcements &amp; Spiritual Events</h2>
              <p className="t-lead mt-3">
                Read the weekly Sunday bulletin for feast schedules, catechism notices, and parish financial updates.
              </p>
              <button onClick={() => onNavigate('news-events')} className="btn-outline mt-6">
                <span className="material-symbols-outlined text-[20px]">description</span>
                Browse All Bulletins
              </button>
            </Reveal>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-line-soft overflow-hidden rounded-2xl border border-line bg-white shadow-card">
                {BULLETINS.map((b, i) => (
                  <Reveal as="li" key={b.id} delay={i * 60}>
                    <button
                      onClick={() => onNavigate('news-events')}
                      className="group flex w-full cursor-pointer items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-ivory-100 sm:px-6"
                    >
                      <span className="icon-tile"><span className="material-symbols-outlined text-[22px]">article</span></span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[15px] font-semibold text-ink-950">{b.title}</span>
                        <span className="t-small mt-0.5 block">{b.date} • {b.fileSize}</span>
                      </span>
                      <span className="material-symbols-outlined shrink-0 text-[20px] text-ink-400 transition-all group-hover:translate-y-0.5 group-hover:text-maroon-600">
                        download
                      </span>
                    </button>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. ABOUT — OUR LADY OF GRACE                                  */}
      {/* ============================================================ */}
      <section className="bg-white" aria-label="About the shrine">
        <div className="container-site section-pad">
          <SectionHeading
            eyebrow="Parish Devotion • 90 Years of Grace"
            title="Our Lady of Lourdes — Mother of Mercy & Peace"
            description="For nine decades, countless parishioners and pilgrims have turned to Lourde Matha to seek the powerful maternal intercession of the Blessed Virgin Mary. Her open arms remain a welcoming refuge for families, the sick, and all who carry heavy hearts."
          />
          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <figure className="img-frame group mx-auto max-w-md p-3">
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-ivory-200">
                  <img src={IMAGES.statueOurLadyRays} alt="Statue of Our Lady of Lourdes" loading="lazy" className="img-zoom h-full w-full object-cover" />
                </div>
                <figcaption className="px-2 py-4 text-center">
                  <span className="serif-italic block text-[1.15rem] text-maroon-700">Statue of Our Lady of Lourdes</span>
                  <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600">Lourde Matha Church • Est. 1935</span>
                </figcaption>
              </figure>
            </Reveal>
            <div className="space-y-4">
              {[
                { icon: 'flare', title: 'Unwavering Faith (Fides)', text: "Emulating Mary's 'Fiat'—her fearless 'Yes' to God's holy will. Pilgrims are invited to deepen their trust through perpetual Eucharistic adoration and daily Rosary mysteries." },
                { icon: 'anchor', title: 'Anchored Hope (Spes)', text: "The Blessed Mother stands as the Star of the Sea amidst life's turbulent storms, guiding souls safely into the harbor of Christ's unfathomable mercy." },
                { icon: 'spa', title: 'Abundant Grace (Gratia)', text: 'Experience physical and interior healing through the holy anointing Masses held every Saturday, accompanied by personalized intercessory prayer.' },
              ].map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="card flex items-start gap-4 p-5 sm:p-6">
                    <span className="icon-tile-gold"><span className="material-symbols-outlined text-[22px]">{p.icon}</span></span>
                    <div>
                      <h3 className="t-h3 text-ink-950">{p.title}</h3>
                      <p className="t-body mt-1.5">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={240}>
                <button onClick={() => onNavigate('devotions-shrine')} className="link-arrow mt-2">
                  Read the Parish History &amp; Testimonies <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. SACRAMENTS PREVIEW                                         */}
      {/* ============================================================ */}
      <section className="bg-ivory-100" aria-label="Sacraments">
        <div className="container-site section-pad">
          <SectionHeading
            eyebrow="The Seven Sacraments"
            title="Sacraments of the Church"
            description="Encounters with Christ through the sacred mysteries — from Baptism to Holy Orders."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SACRAMENTS_DATA.map((s, i) => (
              <Reveal key={s.key} delay={(i % 3) * 70}>
                <button
                  onClick={() => onNavigate('sacraments')}
                  className="card card-hover group flex h-full w-full cursor-pointer flex-col p-6 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="icon-tile transition-colors duration-300 group-hover:bg-maroon-600 group-hover:text-ivory-50">
                      <span className="material-symbols-outlined text-[22px]">{s.icon}</span>
                    </span>
                    <span className="rounded-full bg-ivory-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-ink-500">
                      {s.category}
                    </span>
                  </div>
                  <h3 className="t-h3 mt-4 text-ink-950">{s.title}</h3>
                  <p className="t-small mt-2 flex-1">{s.shortDesc}</p>
                  <span className="link-arrow mt-4">
                    Learn more <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <button onClick={() => onNavigate('sacraments')} className="btn-primary">
              <span className="material-symbols-outlined text-[20px]">water_drop</span>
              Explore All Sacraments
            </button>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. VICAR'S MESSAGE                                            */}
      {/* ============================================================ */}
      <section className="bg-ivory-50" aria-label="Message from the vicar">
        <div className="container-site section-pad">
          <Reveal>
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="relative min-h-[320px] bg-ivory-200 lg:col-span-5 lg:min-h-full">
                  <img src={IMAGES.vicarPortrait} alt="Fr. Sebastian Thumbamattam, Parish Vicar" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon-950/85 to-transparent p-6 pt-16">
                    <p className="font-serif text-lg font-semibold text-ivory-50">Fr. Sebastian Thumbamattam</p>
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-300">Parish Vicar</p>
                  </div>
                </div>
                <div className="p-7 sm:p-10 lg:col-span-7">
                  <span className="eyebrow">Pastoral Reflection</span>
                  <blockquote className="serif-italic mt-4 text-balance text-[1.35rem] leading-snug text-maroon-700 sm:text-[1.6rem]">
                    “May everyone who enters this sacred place discover the enduring peace of Christ and the tender maternal solace of Mother Mary.”
                  </blockquote>
                  <div className="t-body mt-5 space-y-3">
                    <p>
                      Dear Pilgrim and beloved Parishioner, whether you come carrying the heavy burden of illness, a petition for your children, or a heart full of thanksgiving, Lourde Matha Church welcomes you with open arms.
                    </p>
                    <p>
                      Under the mantle of Our Lady of Lourdes, no prayer is too small and no cross is borne alone. Join us for our daily liturgies, receive the grace of Reconciliation, or spend an hour in quiet adoration before the Blessed Sacrament. May Our Lady watch over you and your home.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3" aria-hidden="true">
                    <span className="h-px w-16 bg-gold-400" />
                    <span className="serif-italic text-[15px] text-gold-600">In Christo per Mariam</span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ink-500">
                    <span className="inline-flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-maroon-600">schedule</span>
                      Vicar Office Hours: Mon–Sat 9 AM – 5 PM
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-maroon-600">mark_email_read</span>
                      lourdemathathalayanadu@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. PRAYER PETITIONS                                          */}
      {/* ============================================================ */}
      <section className="bg-white" aria-label="Prayer petitions" id="petitions">
        <div className="container-site section-pad">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <span className="eyebrow">Intercessory Ministry</span>
              <h2 className="t-h2 mt-3 text-balance text-ink-950">Let Us Pray With You</h2>
              <p className="t-lead mt-3">
                Place your spiritual intentions, thanksgiving, and healing requests at the altar of Our Lady of Lourdes. Our resident priests and the Confraternity of the Rosary lift every petition daily during the Perpetual Novena.
              </p>
              <div className="card mt-6 !border-gold-400/40 !bg-gold-100/50 p-5">
                <div className="flex items-center gap-3">
                  <span className="icon-tile-gold"><span className="material-symbols-outlined text-[22px]">local_fire_department</span></span>
                  <h3 className="font-serif text-[1.1rem] font-semibold text-ink-950">Vigil Candle Offerings</h3>
                </div>
                <p className="t-small mt-2.5">
                  Every petition received is recorded in the Book of Intentions and remembered with a sanctuary vigil candle lit for 7 consecutive days.
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold-700">
                  <span className="material-symbols-outlined text-[18px]">done_all</span>
                  4,380 candles burning this month
                </p>
              </div>
              <p className="t-small mt-4 inline-flex items-start gap-2">
                <span className="material-symbols-outlined mt-0.5 shrink-0 text-[18px] text-maroon-600">lock</span>
                All prayer petitions are treated as sacred confidences and laid reverently before the Blessed Sacrament.
              </p>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={120}>
              <div className="card p-6 sm:p-8">
                {petitionSuccess ? (
                  <div className="py-8 text-center" role="status">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-maroon-600/10 text-maroon-700">
                      <span className="material-symbols-outlined text-3xl">check</span>
                    </span>
                    <h3 className="t-h3 mt-4 text-ink-950">Petition Received With Reverence</h3>
                    <p className="t-small mx-auto mt-2 max-w-sm">
                      Your prayer petition has been reverently recorded and will be placed at the altar of Our Lady of Lourdes.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handlePetitionSubmit}>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="label" htmlFor="petition-name">Your Full Name *</label>
                        <input id="petition-name" type="text" required value={petitionName} onChange={(e) => setPetitionName(e.target.value)} placeholder="e.g. Mariamma Joseph" className="input" autoComplete="name" />
                      </div>
                      <div>
                        <label className="label" htmlFor="petition-email">Email Address *</label>
                        <input id="petition-email" type="email" required value={petitionEmail} onChange={(e) => setPetitionEmail(e.target.value)} placeholder="name@domain.com" className="input" autoComplete="email" />
                      </div>
                    </div>
                    <div>
                      <label className="label" htmlFor="petition-category">Type of Petition</label>
                      <select id="petition-category" value={petitionCategory} onChange={(e) => setPetitionCategory(e.target.value)} className="input">
                        <option value="healing">Health &amp; Physical / Emotional Healing</option>
                        <option value="thanksgiving">Thanksgiving for Prayers Answered</option>
                        <option value="family">Peace in the Family &amp; Reconciliation</option>
                        <option value="souls">Repose of Deceased Souls (Requiem)</option>
                        <option value="vocation">Vocations, Employment &amp; Studies</option>
                        <option value="other">Special Intention / General Blessing</option>
                      </select>
                    </div>
                    <div>
                      <label className="label" htmlFor="petition-text">Your Prayer Petition *</label>
                      <textarea id="petition-text" rows={4} required value={petitionText} onChange={(e) => setPetitionText(e.target.value)} placeholder="Write your intention or prayer request here..." className="input resize-none" />
                    </div>
                    <div className="flex items-start gap-2.5">
                      <input type="checkbox" id="publicNovenaHome" checked={publicNovena} onChange={(e) => setPublicNovena(e.target.checked)} className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#75202c]" />
                      <label htmlFor="publicNovenaHome" className="cursor-pointer text-[13px] leading-relaxed text-ink-700">
                        Include my intention aloud during the Wednesday Perpetual Novena
                      </label>
                    </div>
                    <button type="submit" className="btn-primary w-full">
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      Submit Prayer Petition to the Altar
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. GALLERY PREVIEW                                           */}
      {/* ============================================================ */}
      <section className="bg-ivory-100" aria-label="Parish gallery">
        <div className="container-site section-pad">
          <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">Moments of Grace</span>
              <h2 className="t-h2 mt-3 text-balance text-ink-950">Glimpses of Parish Life</h2>
            </div>
            <button onClick={() => onNavigate('news-events')} className="link-arrow shrink-0">
              View Full Gallery <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {GALLERY_PHOTOS.map((photo, i) => (
              <Reveal key={photo.id} delay={(i % 3) * 70}>
                <figure className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-line bg-ivory-200 shadow-card" onClick={() => onNavigate('news-events')}>
                  <img src={photo.src} alt={photo.caption} loading="lazy" className="img-zoom h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-[13px] font-semibold text-ivory-50 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {photo.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. OFFERINGS                                                 */}
      {/* ============================================================ */}
      <section className="bg-ivory-50" aria-label="Offerings and stewardship">
        <div className="container-site section-pad">
          <SectionHeading
            eyebrow="Stewardship & Gratitude"
            title="Support the Church & Charitable Ministries"
            description="Your voluntary sacrificial offerings sustain our perpetual sanctuary, shelter homeless pilgrims, provide meals for impoverished families, and fund catechism materials for our youth."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { icon: 'volunteer_activism', title: 'Qurbana Offering / Intention', text: 'Book a Holy Qurbana for thanksgiving, deceased loved ones, or urgent personal intentions celebrated at our altar.', cta: 'Book Qurbana Offering', tab: 'mass-timings' as NavigationTab, featured: false },
              { icon: 'synagogue', title: 'Church & Campus Fund', text: 'Maintain our parish church, light perpetual vigil candles, and welcome all with dignity.', cta: 'Support Church Fund', tab: 'offerings' as NavigationTab, featured: true },
              { icon: 'soup_kitchen', title: 'Mercy Charity Outreach', text: 'Provides hot nutritious meals every Saturday for 300+ indigent brothers and sisters, medical medicines, and education aid for orphans.', cta: 'Donate to Mercy Fund', tab: 'offerings' as NavigationTab, featured: false },
            ].map((o, i) => (
              <Reveal key={o.title} delay={i * 80}>
                <article className={`flex h-full flex-col items-center p-7 text-center ${o.featured ? 'rounded-2xl border-2 border-gold-400/60 bg-white shadow-card-hover' : 'card'}`}>
                  <span className={`flex h-14 w-14 items-center justify-center rounded-full ${o.featured ? 'bg-maroon-600 text-ivory-50' : 'bg-maroon-600/10 text-maroon-700'}`}>
                    <span className="material-symbols-outlined text-[28px]">{o.icon}</span>
                  </span>
                  <h3 className="t-h3 mt-4 text-ink-950">{o.title}</h3>
                  <p className="t-small mt-2 flex-1">{o.text}</p>
                  <button onClick={() => onNavigate(o.tab)} className={`${o.featured ? 'btn-primary' : 'btn-outline'} btn-sm mt-6 w-full`}>
                    {o.cta}
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="card mt-6 flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <p className="inline-flex items-start gap-3 text-[13px] leading-relaxed text-ink-700">
                <span className="material-symbols-outlined shrink-0 text-[22px] text-maroon-600">verified_user</span>
                All donations are eligible for 80G tax receipts. Audited annual financial statements are openly published.
              </p>
              <button onClick={() => onNavigate('offerings')} className="btn-primary btn-sm shrink-0">
                Make an Offering <span className="material-symbols-outlined text-[18px]">favorite</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 13. VISIT US                                                  */}
      {/* ============================================================ */}
      <section className="bg-white" aria-label="Visit the church">
        <div className="container-site section-pad">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="img-frame group relative h-full min-h-[320px]">
                <img src={IMAGES.mainMarianSanctuary} alt="Main church interior" loading="lazy" className="img-zoom absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/60 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 serif-italic text-lg text-ivory-50">The main church welcomes all daily.</p>
              </div>
            </Reveal>
            <Reveal delay={120} className="flex flex-col justify-center">
              <span className="eyebrow">Plan Your Visit</span>
              <h2 className="t-h2 mt-3 text-balance text-ink-950">Visit the Church</h2>
              <p className="t-lead mt-3">
                Whether you come for daily Holy Qurbana, quiet adoration, or the Saturday novena, you are welcome here.
              </p>
              <dl className="mt-6 space-y-4">
                {[
                  { icon: 'location_on', dt: 'Address', dd: 'Kolapra – Thalayanadu Road, Thalayanadu P.O., Thodupuzha, Idukki, Kerala 685585' },
                  { icon: 'schedule', dt: 'Parish Office', dd: 'Mon–Sat, 9:00 AM – 5:00 PM' },
                  { icon: 'church', dt: 'Church Grounds', dd: 'Open Daily, 6:00 AM – 9:00 PM' },
                  { icon: 'call', dt: 'Phone', dd: '+91 4862 258 257' },
                ].map((row) => (
                  <div key={row.dt} className="flex items-start gap-4">
                    <span className="icon-tile"><span className="material-symbols-outlined text-[22px]">{row.icon}</span></span>
                    <div>
                      <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-500">{row.dt}</dt>
                      <dd className="mt-0.5 text-[15px] font-semibold text-ink-900">{row.dd}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Lourde+Matha+Church+Thalayanadu+Thodupuzha+Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span className="material-symbols-outlined text-[20px]">directions</span>
                  Get Directions
                </a>
                <button onClick={() => onNavigate('mass-timings')} className="btn-outline">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                  Plan Around Qurbana Times
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <DividerCross className="bg-ivory-50 py-2" />
    </div>
  );
};

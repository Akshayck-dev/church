import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { IMAGES } from '../data/parishData';
import { Reveal, PageHero } from '../components/ui';

interface MassTimingsScreenProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenAdorerModal: () => void;
  onOpenPrayerModal: () => void;
}

type Filter = 'all' | 'daily' | 'sunday' | 'confession' | 'adoration';

export const MassTimingsScreen: React.FC<MassTimingsScreenProps> = ({
  onNavigate,
  onOpenAdorerModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  // Mass Intention Form State
  const [intentName, setIntentName] = useState('');
  const [intentNature, setIntentNature] = useState('Repose of the Soul (Departed)');
  const [intentDate, setIntentDate] = useState('');
  const [intentTime, setIntentTime] = useState('06:30 AM Daily Holy Qurbana');
  const [offeredBy, setOfferedBy] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIntentName('');
      setIntentDate('');
      setOfferedBy('');
    }, 4000);
  };

  const handleDownloadPdf = () => {
    alert('Lourde Matha Church Liturgical Schedule PDF for 2026 has been generated. The download is ready.');
  };

  const filters: { id: Filter; label: string }[] = [
    { id: 'all', label: 'All Liturgies' },
    { id: 'daily', label: 'Daily Weekday Qurbana' },
    { id: 'sunday', label: 'Sunday & Feast Qurbanas' },
    { id: 'confession', label: 'Sacrament of Reconciliation' },
    { id: 'adoration', label: 'Perpetual Adoration' },
  ];

  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Liturgical Order • Ordinary Time"
        title="Holy Qurbana, Adoration & Confession Timings"
        description="Sacramental life at Lourde Matha Church. Join our parish family in solemn daily praise, ceaseless Eucharistic adoration, and the restorative grace of Reconciliation under the mantle of Our Lady of Lourdes."
        image={IMAGES.mainMarianSanctuary}
        imageAlt="Main church high altar"
      />

      {/* Next gathering + actions */}
      <section className="bg-ivory-50">
        <div className="container-site py-10 lg:py-14">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="card flex h-full flex-col justify-between gap-6 p-6 sm:p-8">
                <div>
                  <span className="eyebrow">Today's Liturgical Rhythm</span>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-500">Next Solemn Gathering</p>
                      <h2 className="t-h3 mt-1.5 !text-[1.35rem] text-ink-950">06:30 AM Morning Holy Qurbana</h2>
                      <p className="t-small mt-2">Main Altar • Homily by Fr. Sebastian Thumbamattam</p>
                    </div>
                    <span className="icon-tile"><span className="material-symbols-outlined text-[22px]">notifications_active</span></span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line-soft pt-4 text-[13px] text-ink-500">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-maroon-600">schedule</span>
                    Confession 30 mins before Qurbana
                  </span>
                  <span className="rounded-full bg-maroon-600/10 px-3 py-1 text-[12px] font-bold text-maroon-700">Church Open</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="live-dot h-2 w-2 rounded-full bg-maroon-500" aria-hidden="true" />
                    Local Time: <strong>IST (GMT+5:30)</strong>
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-5" delay={100}>
              <div className="flex h-full flex-col justify-center gap-3 rounded-2xl bg-maroon-900 p-6 text-ivory-100 sm:p-8">
                <h2 className="font-serif text-[1.3rem] font-semibold text-ivory-50">Plan Your Visit</h2>
                <p className="text-[14px] leading-relaxed text-ivory-200/85">
                  Request a Holy Qurbana intention for your loved ones, or download the full 2026 liturgical calendar.
                </p>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a href="#intentions-section" className="btn-gold flex-1">
                    <span className="material-symbols-outlined text-[20px]">church</span>
                    Request Qurbana Intention
                  </a>
                  <button onClick={handleDownloadPdf} className="btn-outline-light flex-1">
                    <span className="material-symbols-outlined text-[20px]">cloud_download</span>
                    Download Liturgical Calendar (PDF)
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Photographic strip */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { src: IMAGES.mainMarianSanctuary, alt: 'Main church high altar', kicker: 'Sacred Space', title: 'Main Church' },
              { src: IMAGES.adorationChapelMonstrance, alt: 'Eucharistic Adoration Chapel of Peace', kicker: '24/7 Monstrance', title: 'Adoration Chapel of Peace' },
              { src: IMAGES.grottoOurLadyOfGrace, alt: 'The Pilgrim Rosary Grotto', kicker: 'Midday Angelus', title: 'The Pilgrim Rosary Grotto' },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <figure className="group relative h-52 overflow-hidden rounded-2xl border border-line shadow-card">
                  <img src={p.src} alt={p.alt} loading="lazy" className="img-zoom h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-maroon-950/20 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-300">{p.kicker}</span>
                    <h3 className="mt-1 font-serif text-lg font-semibold text-ivory-50">{p.title}</h3>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-ivory-50 pb-2">
        <div className="container-site">
          <Reveal>
            <div className="card flex flex-col gap-2 p-2.5 sm:flex-row sm:items-center sm:justify-between" role="tablist" aria-label="Filter liturgies">
              <div className="flex flex-wrap gap-1.5">
                {filters.map((f) => (
                  <button
                    key={f.id}
                    role="tab"
                    aria-selected={activeFilter === f.id}
                    onClick={() => setActiveFilter(f.id)}
                    className={`cursor-pointer rounded-lg px-4 py-2 text-[13px] font-semibold transition-all ${
                      activeFilter === f.id
                        ? 'bg-maroon-600 text-ivory-50 shadow-sm'
                        : 'text-ink-700 hover:bg-ivory-100'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Schedule grid */}
      <section className="bg-ivory-50">
        <div className="container-site py-8 lg:py-10">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {(activeFilter === 'all' || activeFilter === 'daily') && (
              <Reveal className="lg:col-span-4">
                <article className="card flex h-full flex-col p-6 sm:p-7">
                  <header className="flex items-start justify-between border-b border-line-soft pb-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-maroon-600">Monday – Friday</p>
                      <h2 className="t-h3 mt-1 text-ink-950">Daily Liturgies</h2>
                    </div>
                    <span className="icon-tile"><span className="material-symbols-outlined text-[22px]">wb_twilight</span></span>
                  </header>
                  <p className="t-small mt-3">Begin and sanctify your workday with Eucharistic nourishment and midday Marian devotion.</p>
                  <div className="mt-4 flex-1 space-y-3">
                    {[
                      { time: '06:30 AM', place: 'Main Church', title: 'Morning Holy Qurbana', text: 'Holy Qurbana in Malayalam. Confession open 30 mins prior.' },
                      { time: '12:00 PM', place: 'Lourdes Grotto', title: 'Angelus & Midday Holy Rosary', text: 'Chanted Angelus, 5 decades of the Rosary, and intercessory blessings.' },
                    ].map((it) => (
                      <div key={it.time + it.title} className="rounded-xl border border-line-soft bg-ivory-100 p-4 transition-colors hover:bg-ivory-200/70">
                        <div className="flex items-center justify-between gap-2">
                          <span className="rounded-md bg-maroon-600 px-2.5 py-1 text-[12px] font-bold text-ivory-50">{it.time}</span>
                          <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-500">{it.place}</span>
                        </div>
                        <h3 className="mt-2.5 text-[15px] font-bold text-ink-950">{it.title}</h3>
                        <p className="t-small mt-1">{it.text}</p>
                      </div>
                    ))}
                  </div>
                  <footer className="mt-5 flex items-center justify-between border-t border-line-soft pt-4 text-[12px] text-ink-500">
                    <span>Church Doors Open 06:00 AM</span>
                    <span className="font-semibold text-maroon-600">Bells Tolled 3x Daily</span>
                  </footer>
                </article>
              </Reveal>
            )}

            {(activeFilter === 'all' || activeFilter === 'daily' || activeFilter === 'sunday') && (
              <Reveal className="lg:col-span-4" delay={80}>
                <article className="card flex h-full flex-col p-6 sm:p-7">
                  <header className="flex items-start justify-between border-b border-line-soft pb-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-600">Saturday Dedication</p>
                      <h2 className="t-h3 mt-1 text-ink-950">Marian Saturday &amp; Vigil</h2>
                    </div>
                    <span className="icon-tile-gold"><span className="material-symbols-outlined text-[22px]">flare</span></span>
                  </header>
                  <p className="t-small mt-3">Saturdays are consecrated to Our Lady, featuring solemn novena prayers and the anticipation of the Lord's Day.</p>
                  <div className="mt-4 flex-1 space-y-3">
                    {[
                      { time: '06:30 AM', place: 'Main Church', title: 'Memorial Qurbana of Our Lady', text: 'Commemoration of the Blessed Virgin Mary in quiet morning contemplation.' },
                      { time: '05:30 PM', place: 'Main Church', title: 'Sunday Vigil Holy Qurbana', text: "Fulfills Sunday obligation. Accompanied by the parish choir." },
                    ].map((it) => (
                      <div key={it.time + it.title} className="rounded-xl border border-line-soft bg-ivory-100 p-4 transition-colors hover:bg-ivory-200/70">
                        <div className="flex items-center justify-between gap-2">
                          <span className="rounded-md bg-gold-500 px-2.5 py-1 text-[12px] font-bold text-maroon-950">{it.time}</span>
                          <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-500">{it.place}</span>
                        </div>
                        <h3 className="mt-2.5 text-[15px] font-bold text-ink-950">{it.title}</h3>
                        <p className="t-small mt-1">{it.text}</p>
                      </div>
                    ))}
                  </div>
                  <footer className="mt-5 flex items-center justify-between border-t border-line-soft pt-4 text-[12px] text-ink-500">
                    <span>Novena Intentions Read Weekly</span>
                    <span className="font-semibold text-gold-700">Blessing with Relic</span>
                  </footer>
                </article>
              </Reveal>
            )}

            {(activeFilter === 'all' || activeFilter === 'sunday') && (
              <Reveal className="lg:col-span-4" delay={160}>
                <article className="card flex h-full flex-col p-6 sm:p-7">
                  <header className="flex items-start justify-between border-b border-line-soft pb-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-maroon-600">Lord's Day Celebration</p>
                      <h2 className="t-h3 mt-1 text-ink-950">Sunday Holy Qurbana</h2>
                    </div>
                    <span className="icon-tile"><span className="material-symbols-outlined text-[22px]">wb_sunny</span></span>
                  </header>
                  <p className="t-small mt-3">Two Sunday liturgies for early worshippers and the whole parish family.</p>
                  <div className="mt-4 flex-1 space-y-2.5">
                    {[
                      { title: '07:00 AM Morning Holy Qurbana', text: 'Quiet morning liturgy in Malayalam', tag: 'Dawn' },
                      { title: '09:30 AM Solemn Holy Qurbana', text: 'Parish Choir & Solemn Celebration', tag: 'Solemn', choral: true },
                    ].map((it) => (
                      <div key={it.title} className={`flex items-center justify-between gap-3 rounded-xl border p-3.5 ${it.choral ? 'border-gold-400/60 bg-gold-100/50' : 'border-line-soft bg-ivory-100'}`}>
                        <div>
                          <h3 className="text-[14px] font-bold text-ink-950">
                            {it.title}
                            {it.choral && (
                              <span className="ml-2 rounded bg-gold-500 px-1.5 py-0.5 align-middle text-[10px] font-bold uppercase text-maroon-950">Choral</span>
                            )}
                          </h3>
                          <p className="t-small mt-0.5">{it.text}</p>
                        </div>
                        <span className={`shrink-0 rounded-md px-2.5 py-1 text-[12px] font-bold ${it.choral ? 'bg-maroon-600 text-ivory-50' : 'bg-white text-maroon-700 ring-1 ring-line'}`}>
                          {it.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                  <footer className="mt-5 flex items-center justify-between border-t border-line-soft pt-4 text-[12px] text-ink-500">
                    <span>Catechism After 9:30 AM Qurbana</span>
                    <span className="font-semibold text-maroon-600">Coffee &amp; Fellowship After</span>
                  </footer>
                </article>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Reconciliation & Adoration */}
      {(activeFilter === 'all' || activeFilter === 'confession' || activeFilter === 'adoration') && (
        <section className="border-t border-line-soft bg-white">
          <div className="container-site pb-4 pt-6">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {(activeFilter === 'all' || activeFilter === 'confession') && (
                <Reveal>
                  <article className="card flex h-full flex-col p-6 sm:p-8">
                    <div className="flex items-center gap-4">
                      <span className="icon-tile !h-12 !w-12"><span className="material-symbols-outlined text-[24px]">lock_reset</span></span>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-maroon-600">Sacrament of Divine Mercy</p>
                        <h2 className="t-h3 mt-1 !text-[1.35rem] text-ink-950">Sacrament of Reconciliation</h2>
                      </div>
                    </div>
                    <p className="t-body mt-4">“Take courage, your sins are forgiven.” Approach the confessional with complete confidence in Christ's tender love and absolution.</p>
                    <div className="mt-5 space-y-3">
                      <div className="flex items-start gap-3.5 rounded-xl border border-line-soft bg-ivory-100 p-4">
                        <span className="material-symbols-outlined mt-0.5 text-[24px] text-maroon-600">schedule</span>
                        <div>
                          <h3 className="text-[15px] font-bold text-ink-950">Daily Before Every Holy Qurbana</h3>
                          <p className="t-small mt-1">Confessors are present inside the confessional boxes <strong>30 minutes prior</strong> to every Holy Qurbana.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3.5 rounded-xl border border-line-soft bg-ivory-100 p-4">
                        <span className="material-symbols-outlined mt-0.5 text-[24px] text-maroon-600">meeting_room</span>
                        <div>
                          <h3 className="text-[15px] font-bold text-ink-950">
                            Saturday Solemn Confessions
                            <span className="ml-2 rounded bg-maroon-600 px-2 py-0.5 align-middle text-[10px] font-bold uppercase text-ivory-50">Dedicated</span>
                          </h3>
                          <p className="t-small mt-1"><strong>5:00 PM – 6:00 PM</strong> in the church confessionals. Two priest confessors available continuously.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-col gap-3 rounded-xl bg-ivory-100 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="inline-flex items-center gap-2 text-[13px] text-ink-700">
                        <span className="material-symbols-outlined text-[20px] text-maroon-600">support_agent</span>
                        Need quiet spiritual counseling or an extended confession?
                      </p>
                      <button onClick={() => onNavigate('sacraments')} className="btn-primary btn-sm shrink-0">Book with Vicar</button>
                    </div>
                    <footer className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-line-soft pt-4 text-[12px] text-ink-500">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-maroon-600">verified_user</span>
                        Anonymous or Face-to-Face
                      </span>
                      <span className="font-semibold text-maroon-600">Examination of Conscience Guides Available</span>
                    </footer>
                  </article>
                </Reveal>
              )}

              {(activeFilter === 'all' || activeFilter === 'adoration') && (
                <Reveal delay={100}>
                  <article className="card flex h-full flex-col p-6 sm:p-8">
                    <div className="flex items-center gap-4">
                      <span className="icon-tile-gold !h-12 !w-12"><span className="material-symbols-outlined text-[24px]">local_fire_department</span></span>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-600">Corpus Christi Presence</p>
                        <h2 className="t-h3 mt-1 !text-[1.35rem] text-ink-950">Perpetual Adoration Chapel</h2>
                      </div>
                    </div>
                    <p className="t-body mt-4">The Blessed Sacrament is exposed for unceasing adoration day and night in the quiet south nave. Come sit in silent awe with Jesus in the Most Holy Eucharist.</p>

                    <div className="mt-5 rounded-xl border border-line-soft bg-ivory-100 p-4">
                      <div className="flex items-center justify-between border-b border-line-soft pb-3">
                        <p className="inline-flex items-center gap-2 text-[14px] font-bold text-ink-950">
                          <span className="live-dot h-2.5 w-2.5 rounded-full bg-gold-500" aria-hidden="true" />
                          Current Adoration Guard
                        </p>
                        <span className="rounded-full bg-gold-600 px-2.5 py-1 text-[11px] font-bold text-ivory-50">24 Hours / 7 Days</span>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-line-soft bg-white p-3.5">
                          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-500">Church Access</p>
                          <p className="mt-1 text-[14px] font-bold text-ink-950">Open 06:00 - 21:00</p>
                          <p className="text-[11px] text-ink-500">Unrestricted daytime entry</p>
                        </div>
                        <div className="rounded-xl border border-line-soft bg-white p-3.5">
                          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-500">Night Vigil</p>
                          <p className="mt-1 text-[14px] font-bold text-ink-950">Keycode Entry</p>
                          <p className="text-[11px] text-ink-500">Registered Adorers (21:00 - 06:00)</p>
                        </div>
                      </div>
                      <div className="mt-4 border-t border-line-soft pt-3">
                        <div className="flex items-center justify-between text-[12px] font-semibold text-ink-700">
                          <span>Adoration Guard Coverage</span>
                          <span className="text-gold-700">96% Hours Pledged</span>
                        </div>
                        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-ivory-200" role="progressbar" aria-valuenow={96} aria-valuemin={0} aria-valuemax={100} aria-label="Adoration guard coverage">
                          <div className="h-full w-[96%] rounded-full bg-gold-500" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col gap-3 rounded-xl border border-gold-400/40 bg-gold-100/50 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-[14px] font-bold text-ink-950">Pledge One Holy Hour Weekly</h3>
                        <p className="t-small mt-0.5">Join over 350 committed parishioners keeping holy watch.</p>
                      </div>
                      <button onClick={onOpenAdorerModal} className="btn-primary btn-sm shrink-0">Become an Adorer</button>
                    </div>
                    <footer className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-line-soft pt-4 text-[12px] text-ink-500">
                      <span>Adoration Chapel</span>
                      <span className="font-semibold text-gold-700">Chime every 15 mins</span>
                    </footer>
                  </article>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Mass intention booking */}
      <section className="scroll-mt-28 bg-ivory-50" id="intentions-section" aria-label="Request a Holy Qurbana intention">
        <div className="container-site py-12 lg:py-16">
          <Reveal>
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="bg-maroon-900 p-7 text-ivory-100 sm:p-10 lg:col-span-5">
                  <span className="eyebrow eyebrow-on-dark">Spiritual Gifts</span>
                  <h2 className="t-h2 mt-3 text-balance text-ivory-50">Offer a Holy Qurbana for Your Loved Ones</h2>
                  <p className="mt-4 text-[14px] leading-relaxed text-ivory-200/85">
                    The Holy Qurbana is the highest form of prayer and thanksgiving. Request an intention for the repose of a departed soul, birthday or wedding thanksgiving, recovery of health, or special personal needs.
                  </p>
                  <ol className="mt-6 space-y-3.5 text-[14px]">
                    {[
                      'Intentions read at your requested Qurbana date & printed in the parish bulletin.',
                      'Complimentary commemorative Marian Qurbana Card mailed upon request.',
                      'Stipends go directly toward parish maintenance & priestly ministries.',
                    ].map((step, i) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500 text-[12px] font-bold text-maroon-950">{i + 1}</span>
                        <span className="text-ivory-200/90">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="bg-ivory-100 p-6 sm:p-8 lg:col-span-7">
                  <h3 className="font-serif text-[1.25rem] font-semibold text-ink-950">Request Qurbana Intention Online</h3>
                  {bookingSuccess ? (
                    <div className="mt-4 rounded-2xl border border-line bg-white p-8 text-center" role="status">
                      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-maroon-600/10 text-maroon-700">
                        <span className="material-symbols-outlined text-3xl">check_circle</span>
                      </span>
                      <h4 className="mt-3 text-[16px] font-bold text-maroon-700">Intention Submitted to the Parish Office</h4>
                      <p className="t-small mx-auto mt-1.5 max-w-sm">
                        Our sacristan will record your intention for {intentDate || 'the next scheduled Holy Qurbana'} and send your confirmation email.
                      </p>
                    </div>
                  ) : (
                    <form className="mt-5 space-y-4" onSubmit={handleBookingSubmit}>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="label" htmlFor="intent-name">Intention For (Name) *</label>
                          <input id="intent-name" type="text" required value={intentName} onChange={(e) => setIntentName(e.target.value)} placeholder="e.g. Mariamma & Joseph" className="input !bg-white" />
                        </div>
                        <div>
                          <label className="label" htmlFor="intent-nature">Intention Nature</label>
                          <select id="intent-nature" value={intentNature} onChange={(e) => setIntentNature(e.target.value)} className="input !bg-white">
                            <option>Repose of the Soul (Departed)</option>
                            <option>Thanksgiving / Anniversaries</option>
                            <option>Good Health &amp; Healing</option>
                            <option>Special Intention / Petition</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="label" htmlFor="intent-date">Preferred Liturgy Date *</label>
                          <input id="intent-date" type="date" required value={intentDate} onChange={(e) => setIntentDate(e.target.value)} className="input !bg-white" />
                        </div>
                        <div>
                          <label className="label" htmlFor="intent-time">Preferred Qurbana Time</label>
                          <select id="intent-time" value={intentTime} onChange={(e) => setIntentTime(e.target.value)} className="input !bg-white">
                            <option>06:30 AM Daily Holy Qurbana</option>
                            <option>06:30 AM Saturday Holy Qurbana</option>
                            <option>05:30 PM Saturday Vigil Qurbana</option>
                            <option>07:00 AM Sunday Holy Qurbana</option>
                            <option>09:30 AM Sunday Solemn Holy Qurbana</option>
                            <option>Next Available Holy Qurbana</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="label" htmlFor="intent-offered-by">Offered By (Your Contact &amp; Email) *</label>
                        <input id="intent-offered-by" type="text" required value={offeredBy} onChange={(e) => setOfferedBy(e.target.value)} placeholder="Your full name and email for confirmation" className="input !bg-white" />
                      </div>
                      <div className="flex flex-col items-start justify-between gap-3 pt-1 sm:flex-row sm:items-center">
                        <p className="text-[13px] text-ink-500">Customary Stipend: <strong className="text-ink-900">₹100 – ₹500 (Voluntary)</strong></p>
                        <button type="submit" className="btn-primary w-full sm:w-auto">
                          <span className="material-symbols-outlined text-[20px]">send</span>
                          Submit Intention Request
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

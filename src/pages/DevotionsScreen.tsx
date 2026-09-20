import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { IMAGES } from '../data/parishData';
import { Reveal, PageHero, SectionHeading } from '../components/ui';

interface DevotionsScreenProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenPrayerModal: () => void;
}

export const DevotionsScreen: React.FC<DevotionsScreenProps> = ({
  onNavigate,
  onOpenPrayerModal,
}) => {
  const [candleType, setCandleType] = useState<'7-day' | '30-day'>('7-day');
  const [petitionerName, setPetitionerName] = useState('');
  const [votiveIntention, setVotiveIntention] = useState('');
  const [isConfidential, setIsConfidential] = useState(false);
  const [candleCount, setCandleCount] = useState(1482);
  const [votiveSubmitted, setVotiveSubmitted] = useState(false);

  const handleVotiveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCandleCount((prev) => prev + 1);
    setVotiveSubmitted(true);
    setTimeout(() => {
      setVotiveSubmitted(false);
      setPetitionerName('');
      setVotiveIntention('');
    }, 4500);
  };

  const devotions = [
    {
      icon: 'history_toggle_off',
      gold: false,
      badge: 'Every Wednesday',
      title: 'Perpetual Novena to Our Lady',
      text: 'Solemn Novena prayers to Our Lady of Perpetual Help, Benediction of the Most Blessed Sacrament, and veneration of the Marian Relic.',
      time: '6:30 PM IST',
      place: 'Main Church',
    },
    {
      icon: 'all_inclusive',
      gold: true,
      badge: 'First Saturday Monthly',
      title: 'Fatima Reparation & Rosary',
      text: 'In accord with Our Lady of Fatima: 15-minute guided meditation, Sung Rosary, Sacramental Confessions, and Holy Qurbana of Reparation.',
      time: '9:15 AM IST',
      place: 'Church Nave',
    },
    {
      icon: 'flare',
      gold: false,
      badge: 'Every Friday Evening',
      title: 'Candlelight Rosary Procession',
      text: 'An evocative outdoor candlelit procession circling the church grounds, chanting the Salve Regina and litanies under the stars.',
      time: '7:00 PM IST',
      place: 'Grotto Courtyard',
    },
    {
      icon: 'straighten',
      gold: false,
      badge: 'Fridays in Lent & Daily',
      title: 'Marian Way of the Cross',
      text: 'Accompany Mary on the Via Dolorosa along the outdoor stone stations carved from Jerusalem stone nestled amidst quiet pine woods.',
      time: '3:00 PM IST',
      place: 'Forest Path',
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Parish Devotion & Pilgrimage"
        title="Church of Our Lady of Lourdes & Marian Devotions"
        description="“A sanctuary of perpetual intercession, where weary souls find refuge, peace, and maternal grace under the mantle of the Mother of God.”"
        image={IMAGES.shrineStatueItalianMarble}
        imageAlt="Statue of Our Lady of Lourdes with serene hands outstretched"
      />

      {/* Intro: heritage summary, actions, stats + statue */}
      <section className="bg-ivory-50">
        <div className="container-site py-10 lg:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-7">
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-maroon-600/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-maroon-700">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      church
                    </span>
                    Parish Devotion &amp; Pilgrimage
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-700">
                    <span className="material-symbols-outlined text-[15px]">local_fire_department</span>
                    Perpetual Intercession Perpetualis
                  </span>
                </div>
                <span className="eyebrow">Under the Mantle of the Immaculate Heart</span>
                <p className="t-lead max-w-xl">
                  For nine decades, parishioners and pilgrims from across the eparchy have gathered at Thalayanadu to consecrate their burdens, light votive candles, and receive maternal consolation before the statue of Our Lady of Lourdes.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a href="#votive-candles" className="btn-primary">
                    <span className="material-symbols-outlined text-[20px]">wb_twilight</span>
                    Light a Votive Candle
                  </a>
                  <a href="#devotional-schedule" className="btn-outline">
                    <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                    Devotional Hours
                  </a>
                  <a href="#pilgrim-guide" className="link-arrow">
                    <span className="material-symbols-outlined text-[20px]">map</span>
                    Pilgrim's Guide
                  </a>
                </div>
                <dl className="grid max-w-lg grid-cols-3 gap-3">
                  {[
                    { value: '90+', label: 'Years of Grace' },
                    { value: '6:00 AM', label: 'Open Daily' },
                    { value: '30,000+', label: 'Vigil Candles / Yr' },
                  ].map((s) => (
                    <div key={s.label} className="card p-3.5 text-center sm:text-left">
                      <dt className="order-2 mt-1 block text-[10px] font-bold uppercase tracking-[0.12em] text-ink-500">{s.label}</dt>
                      <dd className="font-serif text-xl font-semibold text-maroon-700">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-5" delay={120}>
              <figure className="group relative mx-auto max-w-md">
                <div className="img-frame aspect-[4/5]">
                  <img
                    alt="Statue of Our Lady of Lourdes with serene hands outstretched"
                    loading="lazy"
                    className="img-zoom h-full w-full object-cover"
                    src={IMAGES.shrineStatueItalianMarble}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-maroon-950/85 via-transparent to-transparent p-6 text-ivory-50">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-300">
                      Sanctuary Focal Point
                    </span>
                    <p className="mt-1 font-serif text-xl font-semibold">Our Lady of Lourdes, Pray for Us</p>
                    <p className="mt-0.5 text-xs text-ivory-200/85">
                      Venerated Statue of Our Lady of Lourdes • Lourde Matha Church, Est. 1935
                    </p>
                  </div>
                </div>
                <figcaption className="card absolute -bottom-6 -left-2 flex max-w-xs items-center gap-3 p-3.5 sm:left-4">
                  <span className="icon-tile !h-10 !w-10">
                    <span className="material-symbols-outlined text-[20px]">notifications_active</span>
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink-950">Perpetual Novena</span>
                    <span className="block text-xs font-semibold text-maroon-600">Wednesdays at 6:30 PM</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Scripture accent band */}
      <div className="border-y border-line bg-ivory-100">
        <div className="container-site py-5">
          <Reveal className="mx-auto flex max-w-4xl items-center justify-center gap-4 text-center">
            <span className="hidden h-[2px] w-10 bg-gold-400 sm:block" aria-hidden="true" />
            <p className="serif-italic text-[15px] leading-relaxed text-ink-900 sm:text-base">
              “Behold, from now on all generations will call me blessed; for the Mighty One has done great things for me.”
              <span className="ml-2 text-xs font-semibold not-italic text-maroon-600">— Luke 1:48-49</span>
            </p>
            <span className="hidden h-[2px] w-10 bg-gold-400 sm:block" aria-hidden="true" />
          </Reveal>
        </div>
      </div>

      {/* History & miraculous heritage */}
      <section className="bg-ivory-50">
        <div className="container-site py-14 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <div className="flex flex-col gap-5">
                <span className="eyebrow">Sacred Heritage &amp; Veneration</span>
                <h2 className="t-h2 text-balance text-ink-950">
                  The Parish Church of Our Lady of Lourdes (Est. 1935)
                </h2>
                <div className="t-body space-y-4">
                  <p>
                    On 26 October 1935, Lourde Matha Church was established at Thalayanadu under the patronage of Our Lady of Lourdes and St. Sebastian, in the Eparchy of Kothamangalam. The founding families entrusted their new parish to the Mother of Mercy, and a statue of Our Lady of Lourdes was enshrined in the church with great devotion.
                  </p>
                  <p>
                    Over the decades, countless parishioners and pilgrims have gathered at the Lourdes Grotto to light candles, pray the rosary, and seek Our Lady's intercession. The church celebrates her annual perunnal (feast) in February with solemn processions, novena prayers, and the blessing of the sick.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-line-soft bg-ivory-100 p-4">
                    <span className="text-xs font-bold tracking-[0.12em] text-gold-700">1935</span>
                    <h3 className="mt-1 text-[15px] font-bold text-ink-950">Parish Established</h3>
                    <p className="t-small mt-1">
                      Blessing of the new parish under Our Lady of Lourdes.
                    </p>
                  </div>
                  <div className="rounded-xl border border-line-soft bg-ivory-100 p-4">
                    <span className="text-xs font-bold tracking-[0.12em] text-maroon-600">Since 1935</span>
                    <h3 className="mt-1 text-[15px] font-bold text-ink-950">Nine Decades of Grace</h3>
                    <p className="t-small mt-1">
                      Holy Qurbanas, novenas, and charitable works for the eparchy.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-6" delay={120}>
              <figure className="group img-frame relative aspect-video lg:aspect-[16/11]">
                <img
                  alt="Altar with golden votive candles glowing before the Holy Virgin"
                  loading="lazy"
                  className="img-zoom h-full w-full object-cover"
                  src={IMAGES.votiveSanctuaryAltar}
                />
                <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2 rounded-xl border border-line bg-ivory-50/95 p-3 shadow-card backdrop-blur">
                  <span className="inline-flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-maroon-600">verified</span>
                    <span className="text-sm font-bold text-ink-950">The Votive Sanctuary</span>
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-maroon-600">
                    400+ Perpetual Lights
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Weekly & monthly devotional services */}
      <section id="devotional-schedule" className="scroll-mt-28 bg-ivory-100">
        <div className="container-site py-14 lg:py-20">
          <SectionHeading
            eyebrow="Liturgical Calendar"
            title="Weekly & Monthly Devotional Services"
            description="Unite your heart in common liturgical prayer through our solemn devotions, novenas, and Marian processions."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {devotions.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <article className="card card-hover flex h-full flex-col justify-between gap-5 p-6">
                  <div className="flex flex-col gap-3">
                    <span className={d.gold ? 'icon-tile-gold' : 'icon-tile'}>
                      <span className="material-symbols-outlined text-[26px]">{d.icon}</span>
                    </span>
                    <span className="inline-flex w-fit items-center rounded-full bg-ivory-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-700 ring-1 ring-line">
                      {d.badge}
                    </span>
                    <h3 className="font-serif text-lg font-semibold leading-snug text-ink-950">{d.title}</h3>
                    <p className="t-small">{d.text}</p>
                  </div>
                  <footer className="flex items-center justify-between rounded-lg bg-ivory-100 px-3 py-2.5 text-xs font-bold">
                    <span className="text-maroon-700">{d.time}</span>
                    <span className="text-ink-500">{d.place}</span>
                  </footer>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive votive candle offering */}
      <section id="votive-candles" className="scroll-mt-28 bg-ivory-50">
        <div className="container-site py-14 lg:py-20">
          <Reveal>
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
                <div className="flex flex-col gap-5 border-b border-line bg-ivory-100 p-6 sm:p-8 lg:col-span-6 lg:border-b-0 lg:border-r">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold-500/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-700">
                    <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
                    Sacred Tradition
                  </span>
                  <h2 className="t-h2 text-balance text-ink-950">Light a Votive Candle Before Our Lady</h2>
                  <p className="t-body">
                    In Catholic piety, lighting a candle symbolizes continuing prayer. When you cannot be present physically at Thalayanadu, our sacristan lights a consecrated 7-day beeswax candle in your name before the statue of Our Lady of Lourdes.
                  </p>
                  <ul className="flex flex-col gap-4">
                    {[
                      {
                        icon: 'check_circle',
                        title: "Placed at Our Lady's Feet",
                        text: 'Your specific prayer request is printed into the altar binder placed at her altar.',
                      },
                      {
                        icon: 'check_circle',
                        title: 'Daily Holy Qurbana Mention',
                        text: 'Remembered during the Prayers of the Faithful during daily Holy Qurbana.',
                      },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <span className="material-symbols-outlined mt-0.5 text-[22px] text-maroon-600">{item.icon}</span>
                        <span>
                          <span className="block text-[15px] font-bold text-ink-950">{item.title}</span>
                          <span className="t-small mt-0.5 block">{item.text}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="card mt-1 flex items-center justify-between gap-3 p-4">
                    <span className="flex items-center gap-3">
                      <span className="live-dot flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20 text-gold-700">
                        <span className="material-symbols-outlined text-[22px]">light_mode</span>
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-ink-950">Active Vigil Lights</span>
                        <span className="t-small block">Illuminating the church this week</span>
                      </span>
                    </span>
                    <span className="font-serif text-2xl font-semibold text-gold-700">
                      {candleCount.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="bg-white p-6 sm:p-8 lg:col-span-6">
                  <div className="border-b-2 border-gold-400 pb-4">
                    <h3 className="font-serif text-xl font-semibold text-ink-950">Votive Intention Request</h3>
                    <p className="t-small mt-1">Select candle type and record your personal invocation.</p>
                  </div>

                  {votiveSubmitted ? (
                    <div className="mt-6 flex animate-fade-in items-start gap-3 rounded-xl bg-ivory-100 p-4" role="status">
                      <span className="material-symbols-outlined mt-0.5 text-[24px] text-maroon-600">verified</span>
                      <p className="text-[13px] leading-relaxed text-ink-700">
                        <strong className="text-ink-950">Deo Gratias!</strong> Your prayer intention has been registered. Our sacristan will light your candle this evening before Our Lady of Lourdes.
                      </p>
                    </div>
                  ) : (
                    <form className="mt-6 flex flex-col gap-4" onSubmit={handleVotiveSubmit}>
                      <fieldset>
                        <legend className="label">Select Offering Type</legend>
                        <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Candle offering type">
                          {(
                            [
                              { id: '7-day' as const, title: '7-Day Votive', price: '₹100 Offering' },
                              { id: '30-day' as const, title: '30-Day Sanctuary', price: '₹350 Offering' },
                            ]
                          ).map((opt) => {
                            const selected = candleType === opt.id;
                            return (
                              <button
                                key={opt.id}
                                type="button"
                                role="radio"
                                aria-checked={selected}
                                onClick={() => setCandleType(opt.id)}
                                className={`flex cursor-pointer flex-col items-center gap-0.5 rounded-xl border p-3.5 text-center transition-all ${
                                  selected
                                    ? 'border-maroon-600 bg-maroon-600/[0.07]'
                                    : 'border-line bg-ivory-50 hover:border-line-soft'
                                }`}
                              >
                                <span className={`text-sm font-bold ${selected ? 'text-maroon-700' : 'text-ink-950'}`}>
                                  {opt.title}
                                </span>
                                <span className="text-xs font-semibold text-gold-700">{opt.price}</span>
                              </button>
                            );
                          })}
                        </div>
                      </fieldset>

                      <div>
                        <label className="label" htmlFor="votive-name">
                          Petitioner's Full Name *
                        </label>
                        <input
                          id="votive-name"
                          type="text"
                          required
                          value={petitionerName}
                          onChange={(e) => setPetitionerName(e.target.value)}
                          placeholder="e.g. Mariamma Joseph"
                          className="input"
                        />
                      </div>

                      <div>
                        <label className="label" htmlFor="votive-intention">
                          Prayer Intention (Placed at Our Lady's Altar) *
                        </label>
                        <textarea
                          id="votive-intention"
                          rows={3}
                          required
                          value={votiveIntention}
                          onChange={(e) => setVotiveIntention(e.target.value)}
                          placeholder="Write your petition: for healing, reconciliation, thanksgivings, or peaceful passage..."
                          className="input resize-none"
                        />
                      </div>

                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          id="confidentialVotive"
                          checked={isConfidential}
                          onChange={(e) => setIsConfidential(e.target.checked)}
                          className="h-4 w-4 rounded accent-maroon-600"
                        />
                        <label htmlFor="confidentialVotive" className="cursor-pointer text-[13px] text-ink-500">
                          Keep intention confidential (for the priests only)
                        </label>
                      </div>

                      <button type="submit" className="btn-primary w-full !uppercase !tracking-[0.08em]">
                        <span className="material-symbols-outlined text-[20px]">wb_incandescent</span>
                        Confirm Offering &amp; Light Candle
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pilgrim's practical guide */}
      <section id="pilgrim-guide" className="scroll-mt-28 bg-ivory-100">
        <div className="container-site py-14 lg:py-20">
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex max-w-2xl flex-col gap-3">
              <span className="eyebrow">Pilgrimage Center</span>
              <h2 className="t-h2 text-balance text-ink-950">Plan Your Holy Visit</h2>
              <p className="t-body">
                Whether arriving individually for silent retreat or coordinating a diocesan bus pilgrimage, the church welcomes all souls with warm hospitality and sacred reverence.
              </p>
            </div>
            <button onClick={() => onNavigate('sacraments')} className="btn-primary shrink-0">
              <span className="material-symbols-outlined text-[20px]">group_add</span>
              Register Pilgrim Group
            </button>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            <Reveal delay={0}>
              <article className="card flex h-full flex-col gap-4 p-6">
                <span className="icon-tile">
                  <span className="material-symbols-outlined text-[22px]">schedule</span>
                </span>
                <h3 className="font-serif text-lg font-semibold text-ink-950">Church Hours</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: 'Main Church:', value: '6:00 AM – 9:00 PM' },
                    { label: 'Lourdes Grotto:', value: 'Open 24 Hours' },
                    { label: 'Confessions:', value: 'Daily 30m prior to Qurbana' },
                  ].map((row) => (
                    <li key={row.label} className="flex items-center justify-between gap-2 rounded-lg bg-ivory-100 px-3 py-2.5 text-[13px]">
                      <span className="text-ink-500">{row.label}</span>
                      <strong className="text-right text-ink-950">{row.value}</strong>
                    </li>
                  ))}
                </ul>
                <p className="t-small">
                  Perpetual adoration continues day and night in the Sacred Heart Oratory beside the Grotto.
                </p>
              </article>
            </Reveal>
            <Reveal delay={80}>
              <article className="card flex h-full flex-col gap-4 p-6">
                <span className="icon-tile-gold">
                  <span className="material-symbols-outlined text-[22px]">storefront</span>
                </span>
                <h3 className="font-serif text-lg font-semibold text-ink-950">Repository &amp; Holy Water Font</h3>
                <p className="t-small">
                  A sacred gift repository offers hand-knotted cord rosaries, consecrated olive wood crucifixes from Bethlehem, miraculous medals, and devotional missals.
                </p>
                <div className="mt-auto rounded-xl bg-ivory-100 p-4">
                  <h4 className="text-[13px] font-bold text-maroon-700">Lourdes Holy Water Cistern</h4>
                  <p className="t-small mt-1">
                    Pilgrims may bring flasks to draw blessed water from the sanctified granite fountain.
                  </p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={160}>
              <article className="card flex h-full flex-col gap-4 p-6">
                <span className="icon-tile">
                  <span className="material-symbols-outlined text-[22px]">accessible_forward</span>
                </span>
                <h3 className="font-serif text-lg font-semibold text-ink-950">Universal Accessibility</h3>
                <p className="t-small">
                  The church campus provides barrier-free access to the church and grotto, wheelchair accessible ramps leading directly to the statue pedestal, and assisted listening systems.
                </p>
                <ul className="flex flex-col gap-2.5">
                  {[
                    'Pilgrim picnic pavilions & quiet gardens',
                    'Designated motorcoach bus parking',
                    'Docent-led parish heritage tours',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[13px] text-ink-700">
                      <span className="material-symbols-outlined text-[18px] text-maroon-600">done</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials of grace */}
      <section className="bg-ivory-50">
        <div className="container-site py-14 lg:py-20">
          <SectionHeading
            eyebrow="Maternal Intercession"
            title="Testimonials of Grace"
            description="Praise for blessings, answered novenas, and renewed faith recorded by visiting pilgrims."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                quote:
                  '“During my mother\'s severe health crisis last winter, I climbed to this shrine in tears. Lighting the 7-day candle before Our Lady of Lourdes brought an immense wave of supernatural peace. Today, my mother is healed and kneeling beside me.”',
                name: 'Mariamma V.',
                place: 'Kothamangalam',
                date: 'Nov 2025',
              },
              {
                quote:
                  '“Our parish youth group made our very first walking pilgrimage here. The Friday evening Candlelight Rosary procession through the illuminated woods will stay with our teenagers for the rest of their lives. A true oasis of holy serenity.”',
                name: 'Thomas V.',
                place: 'Thodupuzha',
                date: 'Aug 2025',
              },
              {
                quote:
                  '“I had spent over twenty-two years separated from the Sacraments. Sitting in silent adoration in the Marian grotto, I felt drawn directly to the confessional. Father was so gentle and welcoming. I found Christ\'s mercy once again.”',
                name: 'Jinu Xavier',
                place: 'Thalayanadu',
                date: 'Feb 2026',
              },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="card card-hover flex h-full flex-col justify-between gap-5 p-6">
                  <div className="flex flex-col gap-3">
                    <span className="material-symbols-outlined text-[36px] text-gold-400" aria-hidden="true">
                      format_quote
                    </span>
                    <blockquote className="serif-italic text-[14px] leading-relaxed text-ink-900">
                      {t.quote}
                    </blockquote>
                  </div>
                  <figcaption className="flex items-center justify-between border-t border-line-soft pt-4">
                    <span>
                      <span className="block text-sm font-bold text-ink-950">{t.name}</span>
                      <span className="block text-[11px] text-ink-500">{t.place}</span>
                    </span>
                    <span className="text-xs font-semibold text-gold-700">{t.date}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final solemn pilgrimage invitation */}
      <section className="section-dark">
        <div className="container-site py-14 lg:py-20">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <span className="material-symbols-outlined text-[44px] text-gold-400" aria-hidden="true">
              favorite
            </span>
            <h2 className="t-h2 text-balance text-ivory-50">
              “Never was it known that anyone who fled to thy protection was left unaided.”
            </h2>
            <p className="serif-italic text-lg text-ivory-200/85">The Memorare of St. Bernard</p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              <button onClick={onOpenPrayerModal} className="btn-gold">
                Submit Prayer Intention
              </button>
              <a href="#votive-candles" className="btn-outline-light">
                Offer Votive Candle
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

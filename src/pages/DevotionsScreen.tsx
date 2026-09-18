import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { IMAGES } from '../data/parishData';

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

  return (
    <div className="flex flex-col w-full font-body-md text-[#071e28]">
      {/* Top Ambient Banner / Breadcrumb & Header Hero */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#e8f6ff] via-[#f4faff] to-[#ffffff] px-4 sm:px-6 lg:px-12 pt-8 pb-14">
        <div className="max-w-7xl mx-auto">
          {/* Liturgical Breadcrumb / Sanctuary Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d5ecfa] text-[#006780] font-label-sm text-[11px] uppercase tracking-widest font-semibold">
              <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                church
              </span>
              Marian Sanctuary &amp; Pilgrimage Centre
            </span>
            <span className="text-[#bec8cd] font-label-md">•</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ffdf98]/40 text-[#5e4706] font-label-sm text-[11px] font-semibold">
              <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
              Perpetual Intercession Perpetualis
            </span>
          </div>

          {/* Main Asymmetric Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="font-label-md text-xs uppercase tracking-[0.2em] text-[#006687] font-semibold">
                Under the Mantle of the Immaculate Heart
              </span>
              <h1 className="font-headline-lg lg:font-display-lg text-3xl sm:text-4xl lg:text-[50px] text-[#071e28] leading-tight font-serif font-semibold">
                Shrine of Our Lady of Grace &amp; Marian Devotions
              </h1>
              <p className="font-headline-sm text-base sm:text-lg italic text-[#006687] font-normal max-w-2xl leading-relaxed font-serif">
                “A sanctuary of perpetual intercession, where weary souls find refuge, peace, and maternal grace under the mantle of the Mother of God.”
              </p>
              <p className="font-body-lg text-sm sm:text-base text-[#3e484d] max-w-xl leading-relaxed">
                For over a century, pilgrims from across the diocese and beyond have traversed this holy sanctuary hill to consecrate their burdens, light votive candles, and receive maternal consolation before the venerated effigy of Our Lady.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#votive-candles"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#006780] hover:bg-[#006687] text-white font-label-md text-xs sm:text-sm font-semibold shadow-md transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">wb_twilight</span>
                  <span>Light a Votive Candle</span>
                </a>
                <a
                  href="#devotional-schedule"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#d5ecfa] text-[#071e28] font-label-md text-xs sm:text-sm font-semibold hover:bg-[#dbf1ff] transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  <span>Devotional Hours</span>
                </a>
                <a
                  href="#pilgrim-guide"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-transparent text-[#745b1b] font-label-md text-xs sm:text-sm font-semibold hover:bg-[#ffdf98]/30 transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">map</span>
                  <span>Pilgrim's Guide</span>
                </a>
              </div>

              {/* Quick Stat Tonal Bar */}
              <div className="pt-2 grid grid-cols-3 gap-3 max-w-lg">
                <div className="p-3 rounded-xl bg-[#ffffff] shadow-xs border border-[#dbf1ff]">
                  <div className="font-title-lg text-lg text-[#006780] font-bold">120+</div>
                  <div className="font-label-sm text-[10px] text-[#3e484d] uppercase font-semibold">Years of Grace</div>
                </div>
                <div className="p-3 rounded-xl bg-[#ffffff] shadow-xs border border-[#dbf1ff]">
                  <div className="font-title-lg text-lg text-[#006687] font-bold">6:00 AM</div>
                  <div className="font-label-sm text-[10px] text-[#3e484d] uppercase font-semibold">Open Daily</div>
                </div>
                <div className="p-3 rounded-xl bg-[#ffffff] shadow-xs border border-[#dbf1ff]">
                  <div className="font-title-lg text-lg text-[#745b1b] font-bold">30,000+</div>
                  <div className="font-label-sm text-[10px] text-[#3e484d] uppercase font-semibold">Vigil Candles / Yr</div>
                </div>
              </div>
            </div>

            {/* Featured Shrine Statue Artwork */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#d5ecfa] aspect-[4/5] max-w-md mx-auto border border-[#dbf1ff]">
                <img
                  alt="Statue of Our Lady of Grace with serene hands outstretched"
                  className="w-full h-full object-cover"
                  src={IMAGES.shrineStatueItalianMarble}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e333e]/85 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="font-label-sm text-[11px] tracking-widest uppercase text-[#ffdf98] mb-1 font-semibold">
                    Sanctuary Focal Point
                  </span>
                  <p className="font-headline-sm text-lg text-white font-serif font-semibold">
                    Regina Decor Carmeli et Gratiarum
                  </p>
                  <p className="font-body-sm text-xs text-[#d5ecfa]/90">
                    Carved Italian Marble Shrine Effigy • Consecrated 1904
                  </p>
                </div>
              </div>

              {/* Floating Liturgical Card Ornament */}
              <div className="absolute -bottom-6 -left-2 sm:left-4 bg-[#ffffff] rounded-2xl shadow-lg p-3.5 flex items-center gap-3 max-w-xs border border-[#dbf1ff]">
                <div className="w-10 h-10 rounded-full bg-[#67c7e8] text-[#005266] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">notifications_active</span>
                </div>
                <div>
                  <div className="font-title-md text-xs sm:text-sm text-[#071e28] font-bold leading-tight">
                    Perpetual Novena
                  </div>
                  <div className="font-body-sm text-xs text-[#006780] font-semibold">Wednesdays at 6:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Accent Anchor Quote */}
      <div className="w-full bg-[#e8f6ff] px-4 sm:px-6 lg:px-12 py-5 border-y border-[#dbf1ff]">
        <div className="max-w-4xl mx-auto flex items-center gap-4 justify-center text-center">
          <span className="w-8 h-[2px] bg-[#d7b76e] hidden sm:block"></span>
          <p className="font-headline-sm text-sm sm:text-base italic text-[#071e28] font-serif">
            “Behold, from now on all generations will call me blessed; for the Mighty One has done great things for me.”
            <span className="font-label-md text-xs not-italic text-[#006687] ml-2 font-semibold">— Luke 1:48-49</span>
          </p>
          <span className="w-8 h-[2px] bg-[#d7b76e] hidden sm:block"></span>
        </div>
      </div>

      {/* The History & Miraculous Heritage */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-14 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbf1ff] text-[#006780] font-label-sm text-xs uppercase tracking-wider font-semibold">
                <span className="material-symbols-outlined text-[16px]">history_edu</span>
                <span>Sacred Heritage &amp; Veneration</span>
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28] font-serif font-semibold">
                The Consecrated Shrine of Our Lady of Grace (A.D. 1904)
              </h2>
              <div className="space-y-3 font-body-md text-xs sm:text-sm text-[#3e484d] leading-relaxed">
                <p>
                  In the early winter of 1904, Father Gabriel Moretti and a devoted band of immigrant stonecutters established this mountain-top grotto following widespread reports of answered prayers during the severe regional influenza epidemic. The white marble effigy, gifted directly from a Tuscan cloistered convent, was solemnly consecrated by Archbishop Augustin in October of the same year.
                </p>
                <p>
                  Over twelve continuous decades, the shrine archives have recorded hundreds of attested spiritual reconciliations, unexpected medical restorations, and marital restorations. Pilgrims come from neighboring states to lay down written intentions beneath her maternal pedestal.
                </p>
              </div>

              {/* Timeline milestones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-[#e8f6ff] shadow-xs border border-[#dbf1ff]">
                  <span className="font-label-sm text-xs text-[#745b1b] font-bold tracking-wider">1904</span>
                  <h4 className="font-title-md text-sm text-[#071e28] font-bold mt-1">Solemn Consecration</h4>
                  <p className="font-body-sm text-xs text-[#3e484d] mt-1">
                    Archiepiscopal blessing &amp; perpetual vow of Marian thanksgiving.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#e8f6ff] shadow-xs border border-[#dbf1ff]">
                  <span className="font-label-sm text-xs text-[#006687] font-bold tracking-wider">1954</span>
                  <h4 className="font-title-md text-sm text-[#071e28] font-bold mt-1">Marian Year Elevation</h4>
                  <p className="font-body-sm text-xs text-[#3e484d] mt-1">
                    Designated as Diocesan Marian Shrine with plenary indulgence privileges.
                  </p>
                </div>
              </div>
            </div>

            {/* Secondary Shrine Visual Collage */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden bg-[#dbf1ff] shadow-xl aspect-video lg:aspect-[16/11] border border-[#dbf1ff]">
                <img
                  alt="Altar with golden votive candles glowing before the Holy Virgin"
                  className="w-full h-full object-cover"
                  src={IMAGES.votiveSanctuaryAltar}
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#ffffff]/95 backdrop-blur-md shadow-md border border-[#dbf1ff]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#006780] text-[20px]">verified</span>
                      <span className="font-title-md text-xs sm:text-sm text-[#071e28] font-bold">The Votive Sanctuary</span>
                    </div>
                    <span className="font-label-sm text-[11px] text-[#006687] uppercase tracking-wider font-semibold">
                      400+ Perpetual Lights
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly & Monthly Devotional Services Bento */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-14 bg-[#e8f6ff]" id="devotional-schedule">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-label-md text-xs uppercase tracking-widest text-[#006780] font-semibold">
              Liturgical Calendar
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28] font-serif font-semibold">
              Weekly &amp; Monthly Devotional Services
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-[#3e484d]">
              Unite your heart in common liturgical prayer through our solemn devotions, novenas, and Marian processions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Novena 1 */}
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-[#ffffff] shadow-xs hover:shadow-md transition-shadow border border-[#dbf1ff]">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#d5ecfa] text-[#006780] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">history_toggle_off</span>
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#c1e8ff] text-[#001e2b] font-label-sm text-[10px] uppercase font-semibold">
                  Every Wednesday
                </div>
                <h3 className="font-title-lg text-base text-[#071e28] font-bold">Perpetual Novena to Our Lady</h3>
                <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                  Solemn Novena prayers to Our Lady of Perpetual Help, Benediction of the Most Blessed Sacrament, and veneration of the Marian Relic.
                </p>
              </div>
              <div className="mt-4 pt-2 flex items-center justify-between bg-[#e8f6ff] p-2.5 rounded-lg text-xs font-semibold">
                <span className="text-[#006780]">6:30 PM CST</span>
                <span className="text-[#3e484d]">Main Shrine</span>
              </div>
            </div>

            {/* Devotion 2 */}
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-[#ffffff] shadow-xs hover:shadow-md transition-shadow border border-[#dbf1ff]">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#ffdf98]/60 text-[#745b1b] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">all_inclusive</span>
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#ffdf98] text-[#251a00] font-label-sm text-[10px] uppercase font-semibold">
                  First Saturday Monthly
                </div>
                <h3 className="font-title-lg text-base text-[#071e28] font-bold">Fatima Reparation &amp; Rosary</h3>
                <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                  In accord with Our Lady of Fatima: 15-minute guided meditation, Sung Rosary, Sacramental Confessions, and Holy Mass of Reparation.
                </p>
              </div>
              <div className="mt-4 pt-2 flex items-center justify-between bg-[#e8f6ff] p-2.5 rounded-lg text-xs font-semibold">
                <span className="text-[#745b1b]">9:15 AM CST</span>
                <span className="text-[#3e484d]">Shrine Nave</span>
              </div>
            </div>

            {/* Devotion 3 */}
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-[#ffffff] shadow-xs hover:shadow-md transition-shadow border border-[#dbf1ff]">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#d5ecfa] text-[#006780] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">flare</span>
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#dbf1ff] text-[#005d7c] font-label-sm text-[10px] uppercase font-semibold">
                  Every Friday Evening
                </div>
                <h3 className="font-title-lg text-base text-[#071e28] font-bold">Candlelight Rosary Procession</h3>
                <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                  An evocative outdoor candlelit procession circling the Marian Sanctuary grounds, chanting the Latin Salve Regina and litanies under the stars.
                </p>
              </div>
              <div className="mt-4 pt-2 flex items-center justify-between bg-[#e8f6ff] p-2.5 rounded-lg text-xs font-semibold">
                <span className="text-[#006780]">7:00 PM CST</span>
                <span className="text-[#3e484d]">Grotto Courtyard</span>
              </div>
            </div>

            {/* Devotion 4 */}
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-[#ffffff] shadow-xs hover:shadow-md transition-shadow border border-[#dbf1ff]">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#dbf1ff] text-[#006687] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">straighten</span>
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#dbf1ff] text-[#006687] font-label-sm text-[10px] uppercase font-semibold">
                  Fridays in Lent &amp; Daily
                </div>
                <h3 className="font-title-lg text-base text-[#071e28] font-bold">Marian Way of the Cross</h3>
                <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                  Accompany Mary on the Via Dolorosa along the outdoor stone stations carved from Jerusalem stone nestled amidst quiet pine woods.
                </p>
              </div>
              <div className="mt-4 pt-2 flex items-center justify-between bg-[#e8f6ff] p-2.5 rounded-lg text-xs font-semibold">
                <span className="text-[#006687]">3:00 PM CST</span>
                <span className="text-[#3e484d]">Forest Path</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Votive Candle Offering Section */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-14 bg-[#ffffff]" id="votive-candles">
        <div className="max-w-7xl mx-auto">
          <div className="p-6 lg:p-10 rounded-3xl bg-[#e8f6ff] shadow-lg border border-[#dbf1ff]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Devotional explanation & Real-time tally */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdf98]/40 text-[#5e4706] font-label-sm text-xs uppercase tracking-wider font-semibold">
                  <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
                  <span>Sacred Tradition</span>
                </div>

                <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28] font-serif font-semibold">
                  Light a Votive Candle Before Our Lady
                </h2>

                <p className="font-body-md text-xs sm:text-sm text-[#3e484d] leading-relaxed">
                  In Catholic piety, lighting a candle symbolizes continuing prayer. When you cannot be present physically on Sanctuary Hill, our sacristan lights a consecrated 7-day beeswax candle in your name before the Miraculous Shrine.
                </p>

                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#006780] mt-0.5">check_circle</span>
                    <div>
                      <h4 className="font-title-md text-sm text-[#071e28] font-semibold">Placed at Our Lady's Feet</h4>
                      <p className="font-body-sm text-xs text-[#3e484d]">
                        Your specific prayer request is printed into the altar binder placed at her altar.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#006780] mt-0.5">check_circle</span>
                    <div>
                      <h4 className="font-title-md text-sm text-[#071e28] font-semibold">Daily Holy Mass Mention</h4>
                      <p className="font-body-sm text-xs text-[#3e484d]">
                        Remembered during the Prayers of the Faithful during daily 8:00 AM Mass.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Virtual Candle Counter */}
                <div className="p-4 rounded-2xl bg-[#ffffff] shadow-xs flex items-center justify-between border border-[#dbf1ff]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ffdf98] text-[#251a00] flex items-center justify-center animate-pulse">
                      <span className="material-symbols-outlined text-[22px]">light_mode</span>
                    </div>
                    <div>
                      <div className="font-title-md text-sm text-[#071e28] font-bold">Active Vigil Lights</div>
                      <div className="font-body-sm text-xs text-[#3e484d]">Illuminating the Shrine this week</div>
                    </div>
                  </div>
                  <div className="font-headline-md text-2xl text-[#745b1b] font-serif font-bold">
                    {candleCount.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Right: Interactive Votive Form Card */}
              <div className="lg:col-span-6">
                <div className="bg-[#ffffff] rounded-2xl p-6 sm:p-8 shadow-md space-y-4 border border-[#dbf1ff]">
                  <div className="border-b-2 border-[#67c7e8] pb-3">
                    <h3 className="font-title-lg text-lg text-[#071e28] font-semibold">Votive Intention Request</h3>
                    <p className="font-body-sm text-xs text-[#3e484d]">Select candle type and record your personal invocation.</p>
                  </div>

                  {votiveSubmitted ? (
                    <div className="p-4 rounded-xl bg-[#dbf1ff] text-[#005d7c] flex items-start gap-3 animate-in fade-in">
                      <span className="material-symbols-outlined text-[#006780] text-[24px] mt-0.5">verified</span>
                      <p className="font-body-sm text-xs leading-relaxed">
                        <strong>Deo Gratias!</strong> Your prayer intention has been registered. The shrine sacristan will ignite your candle this evening before Our Lady of Grace.
                      </p>
                    </div>
                  ) : (
                    <form className="space-y-3.5" onSubmit={handleVotiveSubmit}>
                      <div>
                        <label className="block font-label-md text-xs text-[#071e28] mb-1 font-semibold">
                          Select Offering Type
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <label
                            onClick={() => setCandleType('7-day')}
                            className={`cursor-pointer p-3 rounded-xl flex flex-col items-center text-center transition-all border ${
                              candleType === '7-day'
                                ? 'bg-[#dbf1ff] border-[#006780] text-[#006780]'
                                : 'bg-[#e8f6ff] border-[#dbf1ff] text-[#071e28]'
                            }`}
                          >
                            <span className="font-title-md text-sm font-bold">7-Day Votive</span>
                            <span className="font-label-sm text-xs text-[#745b1b] font-semibold mt-0.5">$10 Offering</span>
                          </label>
                          <label
                            onClick={() => setCandleType('30-day')}
                            className={`cursor-pointer p-3 rounded-xl flex flex-col items-center text-center transition-all border ${
                              candleType === '30-day'
                                ? 'bg-[#dbf1ff] border-[#006780] text-[#006780]'
                                : 'bg-[#e8f6ff] border-[#dbf1ff] text-[#071e28]'
                            }`}
                          >
                            <span className="font-title-md text-sm font-bold">30-Day Sanctuary</span>
                            <span className="font-label-sm text-xs text-[#745b1b] font-semibold mt-0.5">$35 Offering</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block font-label-md text-xs text-[#071e28] mb-1 font-semibold">
                          Petitioner's Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={petitionerName}
                          onChange={(e) => setPetitionerName(e.target.value)}
                          placeholder="e.g. Maria Teresa Santos"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#ffffff] border border-[#bec8cd]/60 focus:ring-2 focus:ring-[#006780] text-[#071e28] text-xs sm:text-sm outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-label-md text-xs text-[#071e28] mb-1 font-semibold">
                          Prayer Intention (Placed at Our Lady's Altar) *
                        </label>
                        <textarea
                          rows={3}
                          required
                          value={votiveIntention}
                          onChange={(e) => setVotiveIntention(e.target.value)}
                          placeholder="Write your petition: for healing, reconciliation, thanksgivings, or peaceful passage..."
                          className="w-full px-4 py-2.5 rounded-xl bg-[#ffffff] border border-[#bec8cd]/60 focus:ring-2 focus:ring-[#006780] text-[#071e28] text-xs sm:text-sm outline-none resize-none"
                        ></textarea>
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="confidentialVotive"
                          checked={isConfidential}
                          onChange={(e) => setIsConfidential(e.target.checked)}
                          className="rounded accent-[#006780]"
                        />
                        <label htmlFor="confidentialVotive" className="font-body-sm text-xs text-[#3e484d] cursor-pointer">
                          Keep intention confidential (for the priests only)
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-[#006780] hover:bg-[#006687] text-white font-label-md text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 font-semibold cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">wb_incandescent</span>
                        <span>Confirm Offering &amp; Light Candle</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilgrim's Practical Guide & Amenities */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-14 bg-[#e8f6ff]" id="pilgrim-guide">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="font-label-md text-xs uppercase tracking-widest text-[#006780] font-semibold">
                Pilgrimage Center
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28] font-serif font-semibold">
                Plan Your Holy Visit
              </h2>
              <p className="font-body-md text-xs sm:text-sm text-[#3e484d]">
                Whether arriving individually for silent retreat or coordinating a diocesan bus pilgrimage, the shrine welcomes all souls with warm hospitality and sacred reverence.
              </p>
            </div>
            <button
              onClick={() => onNavigate('sacraments')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#006687] hover:bg-[#006780] text-white font-label-md text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">group_add</span>
              <span>Register Pilgrim Group</span>
            </button>
          </div>

          {/* Amenities Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Visiting Hours & Access */}
            <div className="p-6 rounded-2xl bg-[#ffffff] shadow-xs space-y-3 border border-[#dbf1ff]">
              <div className="w-10 h-10 rounded-xl bg-[#dbf1ff] text-[#006687] flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">schedule</span>
              </div>
              <h3 className="font-title-lg text-base text-[#071e28] font-bold">Sanctuary Hours</h3>
              <ul className="space-y-2 font-body-sm text-xs text-[#3e484d]">
                <li className="flex justify-between py-1.5 bg-[#e8f6ff] px-2.5 rounded-lg">
                  <span>Upper Sanctuary:</span>
                  <strong className="text-[#071e28]">6:00 AM – 9:00 PM</strong>
                </li>
                <li className="flex justify-between py-1.5 bg-[#e8f6ff] px-2.5 rounded-lg">
                  <span>Outdoor Grotto:</span>
                  <strong className="text-[#071e28]">Open 24 Hours</strong>
                </li>
                <li className="flex justify-between py-1.5 bg-[#e8f6ff] px-2.5 rounded-lg">
                  <span>Confessions:</span>
                  <strong className="text-[#071e28]">Daily 30m prior to Mass</strong>
                </li>
              </ul>
              <p className="font-body-sm text-xs text-[#3e484d] pt-1">
                Perpetual adoration continues day and night in the Sacred Heart Oratory beside the Grotto.
              </p>
            </div>

            {/* Pilgrim Piety Shop & Relics */}
            <div className="p-6 rounded-2xl bg-[#ffffff] shadow-xs space-y-3 border border-[#dbf1ff]">
              <div className="w-10 h-10 rounded-xl bg-[#ffdf98] text-[#745b1b] flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">storefront</span>
              </div>
              <h3 className="font-title-lg text-base text-[#071e28] font-bold">Repository &amp; Holy Water Font</h3>
              <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                A sacred gift repository offers hand-knotted cord rosaries, consecrated olive wood crucifixes from Bethlehem, miraculous medals, and devotional missals.
              </p>
              <div className="p-3 rounded-xl bg-[#dbf1ff] text-[#005d7c]">
                <div className="font-title-md text-xs font-bold">Lourdes Holy Water Cistern</div>
                <div className="font-body-sm text-xs mt-0.5">
                  Pilgrims may bring flasks to draw blessed water from the sanctified granite fountain.
                </div>
              </div>
            </div>

            {/* Hospitality & Universal Access */}
            <div className="p-6 rounded-2xl bg-[#ffffff] shadow-xs space-y-3 border border-[#dbf1ff]">
              <div className="w-10 h-10 rounded-xl bg-[#dbf1ff] text-[#006780] flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">accessible_forward</span>
              </div>
              <h3 className="font-title-lg text-base text-[#071e28] font-bold">Universal Accessibility</h3>
              <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                Sanctuary Hill provides barrier-free elevator access to all levels, wheelchair accessible ramps leading directly to the statue pedestal, and assisted listening systems.
              </p>
              <ul className="space-y-1.5 font-body-sm text-xs text-[#3e484d]">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#006780] text-[16px]">done</span>
                  <span>Pilgrim picnic pavilions &amp; quiet gardens</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#006780] text-[16px]">done</span>
                  <span>Designated motorcoach bus parking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#006780] text-[16px]">done</span>
                  <span>Docent-led historical shrine tours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials of Grace */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-14 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-label-md text-xs uppercase tracking-widest text-[#745b1b] font-semibold">
              Maternal Intercession
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28] font-serif font-semibold">
              Testimonials of Grace
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-[#3e484d]">
              Praise for blessings, answered novenas, and renewed faith recorded by visiting pilgrims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="p-6 rounded-2xl bg-[#ffffff] shadow-xs flex flex-col justify-between border border-[#dbf1ff]">
              <div className="space-y-3">
                <span className="material-symbols-outlined text-[#e3c378] text-[36px]">format_quote</span>
                <p className="font-body-md text-xs sm:text-sm text-[#071e28] italic leading-relaxed">
                  “During my mother's severe health crisis last winter, I climbed to this shrine in tears. Lighting the 7-day candle before Our Lady brought an immense wave of supernatural peace. Today, my mother is healed and kneeling beside me.”
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#d5ecfa] flex items-center justify-between">
                <div>
                  <div className="font-title-md text-xs sm:text-sm text-[#071e28] font-bold">Bernadette M.</div>
                  <div className="font-label-sm text-[11px] text-[#3e484d]">St. Louis, MO</div>
                </div>
                <span className="font-label-sm text-xs text-[#745b1b] font-semibold">Nov 2025</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 rounded-2xl bg-[#ffffff] shadow-xs flex flex-col justify-between border border-[#dbf1ff]">
              <div className="space-y-3">
                <span className="material-symbols-outlined text-[#e3c378] text-[36px]">format_quote</span>
                <p className="font-body-md text-xs sm:text-sm text-[#071e28] italic leading-relaxed">
                  “Our parish youth group made our very first walking pilgrimage here. The Friday evening Candlelight Rosary procession through the illuminated woods will stay with our teenagers for the rest of their lives. A true oasis of holy serenity.”
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#d5ecfa] flex items-center justify-between">
                <div>
                  <div className="font-title-md text-xs sm:text-sm text-[#071e28] font-bold">Deacon Gregory K.</div>
                  <div className="font-label-sm text-[11px] text-[#3e484d]">Holy Rosary Parish</div>
                </div>
                <span className="font-label-sm text-xs text-[#745b1b] font-semibold">Aug 2025</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 rounded-2xl bg-[#ffffff] shadow-xs flex flex-col justify-between border border-[#dbf1ff]">
              <div className="space-y-3">
                <span className="material-symbols-outlined text-[#e3c378] text-[36px]">format_quote</span>
                <p className="font-body-md text-xs sm:text-sm text-[#071e28] italic leading-relaxed">
                  “I had spent over twenty-two years separated from the Sacraments. Sitting in silent adoration in the Marian grotto, I felt drawn directly to the confessional. Father was so gentle and welcoming. I found Christ's mercy once again.”
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#d5ecfa] flex items-center justify-between">
                <div>
                  <div className="font-title-md text-xs sm:text-sm text-[#071e28] font-bold">Francis Xavier R.</div>
                  <div className="font-label-sm text-[11px] text-[#3e484d]">Pilgrim Seeker</div>
                </div>
                <span className="font-label-sm text-xs text-[#745b1b] font-semibold">Feb 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Solemn Pilgrimage Invitation Banner */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-14 bg-gradient-to-r from-[#006687] to-[#006780] text-white">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <span className="material-symbols-outlined text-[44px] text-[#67c7e8]">favorite</span>
          <h2 className="font-headline-lg lg:font-display-md text-2xl sm:text-3xl lg:text-4xl font-serif text-white font-semibold">
            “Never was it known that anyone who fled to thy protection was left unaided.”
          </h2>
          <p className="font-headline-sm text-base sm:text-lg italic text-[#c1e8ff] max-w-2xl mx-auto font-serif">
            The Memorare of St. Bernard
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenPrayerModal}
              className="px-6 py-3 rounded-xl bg-white text-[#006687] font-title-md text-xs sm:text-sm font-semibold shadow-md hover:bg-[#dbf1ff] transition-all cursor-pointer"
            >
              Submit Prayer Intention
            </button>
            <a
              href="#votive-candles"
              className="px-6 py-3 rounded-xl bg-[#67c7e8] text-[#005266] font-title-md text-xs sm:text-sm font-semibold hover:bg-white hover:text-[#006780] transition-all shadow-md"
            >
              Offer Sanctuary Candle
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

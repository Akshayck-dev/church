import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { IMAGES } from '../data/parishData';

interface MassTimingsScreenProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenAdorerModal: () => void;
  onOpenPrayerModal: () => void;
}

export const MassTimingsScreen: React.FC<MassTimingsScreenProps> = ({
  onNavigate,
  onOpenAdorerModal,
  onOpenPrayerModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'daily' | 'sunday' | 'confession' | 'adoration'>('all');
  
  // Mass Intention Form State
  const [intentName, setIntentName] = useState('');
  const [intentNature, setIntentNature] = useState('Repose of the Soul (Departed)');
  const [intentDate, setIntentDate] = useState('');
  const [intentTime, setIntentTime] = useState('06:30 AM Daily Morning Mass');
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
    alert("Sancta Maria Liturgical Schedule PDF for 2026 has been generated. The download is ready.");
  };

  return (
    <div className="flex flex-col w-full font-body-md text-[#071e28]">
      {/* Top Sanctuary Banner / Atmospheric Scrim */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#e8f6ff] via-[#f4faff] to-[#ffffff] pt-12 pb-16 px-4 sm:px-6 lg:px-12">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#67c7e8]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute left-1/3 -bottom-20 w-80 h-80 rounded-full bg-[#c1e8ff]/30 blur-2xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#dbf1ff] text-[#006780] font-label-sm text-xs tracking-wider uppercase shadow-2xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#006780] animate-pulse"></span>
              <span>Sanctuary Liturgical Order • Ordinary Time</span>
            </div>

            <h1 className="font-display-lg text-3xl sm:text-5xl lg:text-[52px] text-[#071e28] tracking-tight leading-none">
              Holy Mass, Adoration &amp; <span className="italic font-normal text-[#006687]">Confession</span> Timings
            </h1>

            <p className="font-body-lg text-base sm:text-lg text-[#3e484d] max-w-xl leading-relaxed">
              Sacramental life at Sancta Maria Shrine. Join our faith family in solemn daily praise, ceaseless Eucharistic adoration, and the restorative grace of Reconciliation under the mantle of Our Lady of Grace.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#intentions-section"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#006780] hover:bg-[#006687] text-white font-label-md text-xs sm:text-sm font-semibold shadow-md transition-all gap-2"
              >
                <span className="material-symbols-outlined text-base">church</span>
                <span>Request Mass Intention</span>
              </a>
              <button
                onClick={handleDownloadPdf}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#ffffff] hover:bg-[#dbf1ff] text-[#006687] font-label-md text-xs sm:text-sm font-semibold shadow-2xs border border-[#dbf1ff] transition-colors gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">cloud_download</span>
                <span>Download Liturgical Calendar (PDF)</span>
              </button>
            </div>
          </div>

          {/* Live Sanctuary Liturgical Highlight Badge */}
          <div className="w-full md:w-auto shrink-0">
            <div className="relative bg-[#ffffff]/90 backdrop-blur-md rounded-2xl p-6 shadow-xl max-w-sm border border-[#dbf1ff]">
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#d7b76e] text-[#5e4706] font-label-sm text-xs uppercase tracking-wider font-semibold">
                Today's Liturgical Rhythm
              </div>
              <div className="pt-2 flex items-center justify-between gap-4">
                <div>
                  <p className="font-label-sm text-[11px] uppercase text-[#6e797d] tracking-wider">Next Solemn Gathering</p>
                  <h4 className="font-headline-sm text-lg text-[#071e28] font-semibold">06:00 PM Evening Mass</h4>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#dbf1ff] flex items-center justify-center text-[#006780] shrink-0">
                  <span className="material-symbols-outlined text-2xl">notifications_active</span>
                </div>
              </div>
              <p className="font-body-sm text-xs text-[#3e484d] mt-2 leading-relaxed">
                Main Altar of the Immaculate Conception • Homily by Fr. Julian Varghese
              </p>
              <div className="mt-4 pt-3 border-t border-[#dbf1ff] flex items-center justify-between text-[#3e484d] font-label-sm text-xs">
                <span className="inline-flex items-center gap-1 text-[#006780] font-medium">
                  <span className="material-symbols-outlined text-sm">schedule</span> Confession at 5:30 PM
                </span>
                <span className="px-2 py-0.5 rounded bg-[#b7eaff] text-[#001f28] font-semibold">Sanctuary Open</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photographic Reverence Strip */}
      <section className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-12 -mt-6 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative group overflow-hidden rounded-2xl shadow-md bg-[#ffffff] h-48 border border-[#dbf1ff]">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Main Marian Sanctuary High Altar"
              src={IMAGES.mainMarianSanctuary}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e333e]/85 via-[#1e333e]/25 to-transparent flex flex-col justify-end p-4">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#b7eaff] font-semibold">Sacred Space</span>
              <h3 className="font-headline-sm text-lg text-white font-semibold">Main Marian Sanctuary</h3>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-md bg-[#ffffff] h-48 border border-[#dbf1ff]">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Eucharistic Adoration Chapel of Peace"
              src={IMAGES.adorationChapelMonstrance}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e333e]/85 via-[#1e333e]/25 to-transparent flex flex-col justify-end p-4">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#ffdf98] font-semibold">24/7 Monstrance</span>
              <h3 className="font-headline-sm text-lg text-white font-semibold">Adoration Chapel of Peace</h3>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-md bg-[#ffffff] h-48 border border-[#dbf1ff]">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="The Pilgrim Rosary Grotto"
              src={IMAGES.grottoOurLadyOfGrace}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e333e]/85 via-[#1e333e]/25 to-transparent flex flex-col justify-end p-4">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#c1e8ff] font-semibold">Midday Angelus</span>
              <h3 className="font-headline-sm text-lg text-white font-semibold">The Pilgrim Rosary Grotto</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filter Bar */}
      <section className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-12 mt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#ffffff] p-2.5 rounded-2xl shadow-sm border border-[#dbf1ff]">
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto" role="tablist">
            {[
              { id: 'all', label: 'All Liturgies' },
              { id: 'daily', label: 'Daily Weekday Mass' },
              { id: 'sunday', label: 'Sunday & Feast Masses' },
              { id: 'confession', label: 'Sacrament of Reconciliation' },
              { id: 'adoration', label: 'Perpetual Adoration' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl font-label-md text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#006780] text-white shadow-xs'
                    : 'text-[#3e484d] hover:bg-[#dbf1ff] hover:text-[#071e28]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-2 text-[#3e484d] px-3 py-1 font-body-sm text-xs">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#67c7e8]"></span>
            <span>Local Sanctuary Time: <strong>GMT+1</strong></span>
          </div>
        </div>
      </section>

      {/* Comprehensive Daily Liturgical Schedule Grid */}
      <section className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-12 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Weekday Column (Mon-Fri) */}
          {(activeFilter === 'all' || activeFilter === 'daily') && (
            <div className="lg:col-span-4 flex flex-col">
              <div className="bg-[#ffffff] rounded-2xl shadow-sm p-6 flex-1 flex flex-col justify-between border border-[#dbf1ff]">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#dbf1ff]">
                    <div>
                      <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#006780] font-semibold">
                        Monday – Friday
                      </span>
                      <h2 className="font-headline-md text-xl text-[#071e28] font-semibold">Daily Liturgies</h2>
                    </div>
                    <span className="material-symbols-outlined text-[#67c7e8] text-3xl">wb_twilight</span>
                  </div>
                  <p className="font-body-sm text-xs text-[#3e484d] mt-2 mb-4">
                    Begin and sanctify your workday with Eucharistic nourishment and noon Marian devotions.
                  </p>

                  <div className="space-y-3">
                    {/* Item 1 */}
                    <div className="p-4 rounded-xl bg-[#e8f6ff] transition-all hover:bg-[#dbf1ff] border border-[#dbf1ff]">
                      <div className="flex items-start justify-between">
                        <span className="px-2 py-0.5 rounded bg-[#006780] text-white font-label-sm text-xs font-bold">
                          06:30 AM
                        </span>
                        <span className="font-label-sm text-[11px] text-[#3e484d] uppercase font-medium">Main Sanctuary</span>
                      </div>
                      <h4 className="font-title-md text-sm text-[#071e28] font-semibold mt-2">Morning Praise &amp; Solemn Eucharist</h4>
                      <p className="font-body-sm text-xs text-[#3e484d] mt-1">Lauds followed by Holy Sacrifice. Confession open 30 mins prior.</p>
                    </div>

                    {/* Item 2 */}
                    <div className="p-4 rounded-xl bg-[#e8f6ff] transition-all hover:bg-[#dbf1ff] border border-[#dbf1ff]">
                      <div className="flex items-start justify-between">
                        <span className="px-2 py-0.5 rounded bg-[#dbf1ff] text-[#006780] font-label-sm text-xs font-bold">
                          12:00 PM
                        </span>
                        <span className="font-label-sm text-[11px] text-[#3e484d] uppercase font-medium">Grotto of Grace</span>
                      </div>
                      <h4 className="font-title-md text-sm text-[#071e28] font-semibold mt-2">Angelus &amp; Midday Holy Rosary</h4>
                      <p className="font-body-sm text-xs text-[#3e484d] mt-1">Chanted Angelus, 5 decades of the Rosary, pilgrim intercessory blessings.</p>
                    </div>

                    {/* Item 3 */}
                    <div className="p-4 rounded-xl bg-[#e8f6ff] transition-all hover:bg-[#dbf1ff] border border-[#dbf1ff]">
                      <div className="flex items-start justify-between">
                        <span className="px-2 py-0.5 rounded bg-[#006687] text-white font-label-sm text-xs font-bold">
                          06:00 PM
                        </span>
                        <span className="font-label-sm text-[11px] text-[#3e484d] uppercase font-medium">Main Sanctuary</span>
                      </div>
                      <h4 className="font-title-md text-sm text-[#071e28] font-semibold mt-2">Evening Mass with Homily</h4>
                      <p className="font-body-sm text-xs text-[#3e484d] mt-1">Reflective evening service with full liturgical homily &amp; blessings.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#dbf1ff] flex items-center justify-between text-[#3e484d] font-label-sm text-xs">
                  <span>Shrine Doors Open 06:00 AM</span>
                  <span className="text-[#006780] font-semibold">Bells Tolled 3x Daily</span>
                </div>
              </div>
            </div>
          )}

          {/* Saturday Column (Marian Dedication & Vigil) */}
          {(activeFilter === 'all' || activeFilter === 'daily' || activeFilter === 'sunday') && (
            <div className="lg:col-span-4 flex flex-col">
              <div className="bg-[#ffffff] rounded-2xl shadow-sm p-6 flex-1 flex flex-col justify-between border border-[#dbf1ff]">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#dbf1ff]">
                    <div>
                      <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#745b1b] font-semibold">
                        Saturday Dedication
                      </span>
                      <h2 className="font-headline-md text-xl text-[#071e28] font-semibold">Marian Saturday &amp; Vigil</h2>
                    </div>
                    <span className="material-symbols-outlined text-[#745b1b] text-3xl">flare</span>
                  </div>
                  <p className="font-body-sm text-xs text-[#3e484d] mt-2 mb-4">
                    Saturdays are consecrated to Our Lady, featuring solemn novena prayers and the anticipation of the Lord's Day.
                  </p>

                  <div className="space-y-3">
                    {/* Item 1 */}
                    <div className="p-4 rounded-xl bg-[#e8f6ff] transition-all hover:bg-[#dbf1ff] border border-[#dbf1ff]">
                      <div className="flex items-start justify-between">
                        <span className="px-2 py-0.5 rounded bg-[#d7b76e] text-[#5e4706] font-label-sm text-xs font-bold">
                          06:30 AM
                        </span>
                        <span className="font-label-sm text-[11px] text-[#3e484d] uppercase font-medium">Blessed Sacrament Altar</span>
                      </div>
                      <h4 className="font-title-md text-sm text-[#071e28] font-semibold mt-2">Memorial Mass of Our Lady</h4>
                      <p className="font-body-sm text-xs text-[#3e484d] mt-1">Commemoration of the Blessed Virgin Mary in quiet morning contemplation.</p>
                    </div>

                    {/* Item 2 */}
                    <div className="p-4 rounded-xl bg-[#e8f6ff] transition-all hover:bg-[#dbf1ff] border border-[#dbf1ff]">
                      <div className="flex items-start justify-between">
                        <span className="px-2 py-0.5 rounded bg-[#67c7e8] text-[#005266] font-label-sm text-xs font-bold">
                          10:00 AM
                        </span>
                        <span className="font-label-sm text-[11px] text-[#3e484d] uppercase font-medium">Solemn Basilica Floor</span>
                      </div>
                      <h4 className="font-title-md text-sm text-[#071e28] font-semibold mt-2">Healing Mass &amp; Marian Novena</h4>
                      <p className="font-body-sm text-xs text-[#3e484d] mt-1">Sacrament of the Anointing of the Sick and solemn petition reading.</p>
                    </div>

                    {/* Item 3 */}
                    <div className="p-4 rounded-xl bg-[#e8f6ff] transition-all hover:bg-[#dbf1ff] border border-[#dbf1ff]">
                      <div className="flex items-start justify-between">
                        <span className="px-2 py-0.5 rounded bg-[#006687] text-white font-label-sm text-xs font-bold">
                          05:00 PM
                        </span>
                        <span className="font-label-sm text-[11px] text-[#3e484d] uppercase font-medium">Main Sanctuary</span>
                      </div>
                      <h4 className="font-title-md text-sm text-[#071e28] font-semibold mt-2">Sunday Vigil Anticipated Mass</h4>
                      <p className="font-body-sm text-xs text-[#3e484d] mt-1">Fulfills Sunday obligation. Accompanied by organ choir prelude.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#dbf1ff] flex items-center justify-between text-[#3e484d] font-label-sm text-xs">
                  <span>Novena Intentions Read Weekly</span>
                  <span className="text-[#745b1b] font-semibold">Blessing with Relic</span>
                </div>
              </div>
            </div>
          )}

          {/* Sunday Obligation Column */}
          {(activeFilter === 'all' || activeFilter === 'sunday') && (
            <div className="lg:col-span-4 flex flex-col">
              <div className="bg-[#ffffff] rounded-2xl shadow-sm p-6 flex-1 flex flex-col justify-between border border-[#dbf1ff]">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#dbf1ff]">
                    <div>
                      <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#006780] font-semibold">
                        Lord's Day Celebration
                      </span>
                      <h2 className="font-headline-md text-xl text-[#071e28] font-semibold">Sunday Obligation</h2>
                    </div>
                    <span className="material-symbols-outlined text-[#006780] text-3xl">wb_sunny</span>
                  </div>
                  <p className="font-body-sm text-xs text-[#3e484d] mt-2 mb-4">
                    Four Sunday liturgies accommodating early pilgrims, multi-generational families, and evening worshipers.
                  </p>

                  <div className="space-y-2 text-xs">
                    {/* Item 1 */}
                    <div className="p-3 rounded-xl bg-[#e8f6ff] transition-all hover:bg-[#dbf1ff] flex items-center justify-between border border-[#dbf1ff]">
                      <div>
                        <h5 className="font-title-md text-sm text-[#071e28] font-semibold">06:00 AM Dawn Mass</h5>
                        <p className="font-body-sm text-xs text-[#3e484d]">Silent spoken Mass in peaceful dawn light</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-[#dbf1ff] text-[#006780] font-label-sm font-bold shrink-0">
                        Dawn
                      </span>
                    </div>

                    {/* Item 2 */}
                    <div className="p-3 rounded-xl bg-[#dbf1ff] transition-all hover:bg-[#d5ecfa] flex items-center justify-between shadow-2xs border border-[#67c7e8]">
                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="font-title-md text-sm text-[#006780] font-bold">08:00 AM Solemn High Mass</h5>
                          <span className="px-1.5 py-0.5 rounded bg-[#d7b76e] text-[#5e4706] text-[10px] font-bold uppercase">Choral</span>
                        </div>
                        <p className="font-body-sm text-xs text-[#3e484d]">Polyphonic Shrine Choir, Organ &amp; Incense</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-[#006780] text-white font-label-sm font-bold shrink-0">
                        Solemn
                      </span>
                    </div>

                    {/* Item 3 */}
                    <div className="p-3 rounded-xl bg-[#e8f6ff] transition-all hover:bg-[#dbf1ff] flex items-center justify-between border border-[#dbf1ff]">
                      <div>
                        <h5 className="font-title-md text-sm text-[#071e28] font-semibold">10:30 AM Youth &amp; Family Mass</h5>
                        <p className="font-body-sm text-xs text-[#3e484d]">Children's Liturgy of the Word in Hall</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-[#dbf1ff] text-[#006687] font-label-sm font-bold shrink-0">
                        Family
                      </span>
                    </div>

                    {/* Item 4 */}
                    <div className="p-3 rounded-xl bg-[#e8f6ff] transition-all hover:bg-[#dbf1ff] flex items-center justify-between border border-[#dbf1ff]">
                      <div>
                        <h5 className="font-title-md text-sm text-[#071e28] font-semibold">05:30 PM Evening Regional Mass</h5>
                        <p className="font-body-sm text-xs text-[#3e484d]">Bilingual worship (English &amp; Regional)</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-[#dbf1ff] text-[#6e797d] font-label-sm font-bold shrink-0">
                        Evening
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#dbf1ff] flex items-center justify-between text-[#3e484d] font-label-sm text-xs">
                  <span>Nursery Available (10:30 AM)</span>
                  <span className="text-[#006687] font-semibold">Coffee &amp; Fellowship After</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Focused Sacraments: Reconciliation & Perpetual Adoration */}
      {(activeFilter === 'all' || activeFilter === 'confession' || activeFilter === 'adoration') && (
        <section className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-12 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Reconciliation Feature Card */}
            {(activeFilter === 'all' || activeFilter === 'confession') && (
              <div className={`${activeFilter === 'confession' ? 'lg:col-span-12' : 'lg:col-span-6'}`}>
                <div className="bg-[#ffffff] rounded-3xl p-6 sm:p-8 shadow-lg h-full flex flex-col justify-between border border-[#dbf1ff]">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#c1e8ff] flex items-center justify-center text-[#006687]">
                        <span className="material-symbols-outlined text-2xl">lock_reset</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-xs uppercase tracking-widest text-[#006687] font-semibold">
                          Sacrament of Divine Mercy
                        </span>
                        <h3 className="font-headline-md text-xl text-[#071e28] font-semibold">Sacrament of Reconciliation</h3>
                      </div>
                    </div>

                    <p className="font-body-md text-xs sm:text-sm text-[#3e484d] leading-relaxed">
                      “Take courage, your sins are forgiven.” Approach the confessional with complete confidence in Christ's tender love and absolution.
                    </p>

                    <div className="space-y-3 pt-1">
                      <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#e8f6ff] border border-[#dbf1ff]">
                        <span className="material-symbols-outlined text-[#006780] mt-1 text-2xl">schedule</span>
                        <div className="space-y-1">
                          <h4 className="font-title-md text-xs sm:text-sm text-[#071e28] font-semibold">
                            Daily Before Every Holy Mass
                          </h4>
                          <p className="font-body-sm text-xs text-[#3e484d]">
                            Confessors are present inside the confessional boxes <strong>30 minutes prior</strong> to every morning and evening Mass.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#e8f6ff] border border-[#dbf1ff]">
                        <span className="material-symbols-outlined text-[#006687] mt-1 text-2xl">meeting_room</span>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-title-md text-xs sm:text-sm text-[#071e28] font-semibold">
                              Saturday Solemn Confessions
                            </h4>
                            <span className="px-2 py-0.5 rounded bg-[#006687] text-white text-[10px] font-bold">
                              Dedicated
                            </span>
                          </div>
                          <p className="font-body-sm text-xs text-[#3e484d]">
                            <strong>4:00 PM – 5:30 PM</strong> in the St. Joseph East Wing Confessionals. Two priest confessors available continuously.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#dbf1ff] text-[#071e28] flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="material-symbols-outlined text-[#006780] text-lg">support_agent</span>
                        <span>Need quiet spiritual counseling or an extended confession?</span>
                      </div>
                      <button
                        onClick={() => onNavigate('sacraments')}
                        className="shrink-0 px-3 py-1.5 rounded-lg bg-[#006780] hover:bg-[#006687] text-white font-label-sm text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Book with Vicar
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#dbf1ff] flex items-center justify-between text-[#3e484d] font-label-sm text-xs">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-[#006780]">verified_user</span> Anonymous or Face-to-Face
                    </span>
                    <span className="text-[#006780] font-semibold">Examination of Conscience Guides Available</span>
                  </div>
                </div>
              </div>
            )}

            {/* Perpetual Adoration & Vigil Feature Card */}
            {(activeFilter === 'all' || activeFilter === 'adoration') && (
              <div className={`${activeFilter === 'adoration' ? 'lg:col-span-12' : 'lg:col-span-6'}`}>
                <div className="bg-[#ffffff] rounded-3xl p-6 sm:p-8 shadow-lg h-full flex flex-col justify-between border border-[#dbf1ff]">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#ffdf98] flex items-center justify-center text-[#745b1b]">
                        <span className="material-symbols-outlined text-2xl">local_fire_department</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-xs uppercase tracking-widest text-[#745b1b] font-semibold">
                          Corpus Christi Presence
                        </span>
                        <h3 className="font-headline-md text-xl text-[#071e28] font-semibold">Perpetual Adoration Chapel</h3>
                      </div>
                    </div>

                    <p className="font-body-md text-xs sm:text-sm text-[#3e484d] leading-relaxed">
                      The Blessed Sacrament is exposed for unceasing adoration day and night in the quiet south nave. Come sit in silent awe with Jesus in the Most Holy Eucharist.
                    </p>

                    {/* Interactive Adoration Status Card */}
                    <div className="bg-[#e8f6ff] rounded-2xl p-4 border border-[#dbf1ff]">
                      <div className="flex items-center justify-between pb-3 border-b border-[#dbf1ff]">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-[#d7b76e] animate-pulse"></span>
                          <span className="font-title-md text-xs sm:text-sm text-[#071e28] font-semibold">
                            Current Adoration Guard
                          </span>
                        </div>
                        <span className="font-label-sm text-xs px-2.5 py-0.5 rounded-full bg-[#745b1b] text-white font-bold">
                          24 Hours / 7 Days
                        </span>
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-3">
                        <div className="p-3 bg-[#ffffff] rounded-xl shadow-xs border border-[#dbf1ff]">
                          <span className="font-label-sm text-[10px] text-[#3e484d] uppercase font-semibold">Shrine Access</span>
                          <p className="font-title-md text-xs sm:text-sm text-[#071e28] font-bold mt-0.5">Open 06:00 - 21:00</p>
                          <span className="text-[11px] text-[#6e797d]">Unrestricted daytime entry</span>
                        </div>
                        <div className="p-3 bg-[#ffffff] rounded-xl shadow-xs border border-[#dbf1ff]">
                          <span className="font-label-sm text-[10px] text-[#3e484d] uppercase font-semibold">Night Vigil</span>
                          <p className="font-title-md text-xs sm:text-sm text-[#071e28] font-bold mt-0.5">Keycode Entry</p>
                          <span className="text-[11px] text-[#6e797d]">Registered Adorers (21:00 - 06:00)</span>
                        </div>
                      </div>

                      {/* Visual Holy Hour Adorer Sparkline */}
                      <div className="mt-3 pt-2 border-t border-[#dbf1ff] flex flex-col gap-1.5">
                        <div className="flex items-center justify-between text-xs font-semibold text-[#3e484d]">
                          <span>Adoration Guard Coverage</span>
                          <span className="text-[#745b1b]">96% Hours Pledged</span>
                        </div>
                        <div className="w-full bg-[#dbf1ff] h-2.5 rounded-full overflow-hidden">
                          <div className="bg-[#745b1b] h-full rounded-full w-[96%] transition-all duration-1000"></div>
                        </div>
                      </div>
                    </div>

                    {/* Adorer Sign Up Micro-Callout */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#dbf1ff] border border-[#67c7e8]/40">
                      <div>
                        <h5 className="font-title-md text-xs sm:text-sm text-[#071e28] font-semibold">Pledge One Holy Hour Weekly</h5>
                        <p className="font-body-sm text-xs text-[#3e484d]">Join over 350 committed parishioners keeping holy watch.</p>
                      </div>
                      <button
                        onClick={onOpenAdorerModal}
                        className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#745b1b] hover:bg-[#5e4706] text-white font-label-md text-xs font-semibold shrink-0 shadow-xs transition-colors cursor-pointer"
                      >
                        Become an Adorer
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#dbf1ff] flex items-center justify-between text-[#3e484d] font-label-sm text-xs">
                    <span>St. John Paul II Adoration Wing</span>
                    <span className="text-[#745b1b] font-semibold">Chime every 15 mins</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Holy Mass Offering & Intentions Booking Section */}
      <section className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-12 mt-14 mb-16" id="intentions-section">
        <div className="bg-[#ffffff] rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden border border-[#dbf1ff]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#67c7e8]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dbf1ff] text-[#006780] font-label-sm text-xs uppercase font-semibold">
                <span className="material-symbols-outlined text-sm">favorite</span>
                <span>Spiritual Gifts</span>
              </div>

              <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28] leading-tight">
                Offer a Holy Mass for Your Loved Ones
              </h2>

              <p className="font-body-md text-xs sm:text-sm text-[#3e484d] leading-relaxed">
                The Holy Sacrifice of the Mass is the highest form of prayer and thanksgiving. Request an intention for the repose of a departed soul, birthday or wedding thanksgiving, recovery of health, or special personal needs.
              </p>

              <div className="space-y-2.5 pt-2 text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#dbf1ff] text-[#006780] flex items-center justify-center font-bold text-xs shrink-0">1</span>
                  <p className="text-[#071e28]">Intentions read at your requested Mass date &amp; printed in the parish bulletin.</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#dbf1ff] text-[#006780] flex items-center justify-center font-bold text-xs shrink-0">2</span>
                  <p className="text-[#071e28]">Complimentary commemorative Marian Mass Card mailed upon request.</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#dbf1ff] text-[#006780] flex items-center justify-center font-bold text-xs shrink-0">3</span>
                  <p className="text-[#071e28]">Stipends go directly toward shrine maintenance &amp; priestly ministries.</p>
                </div>
              </div>
            </div>

            {/* Interactive Mass Booking Mini-Form */}
            <div className="lg:col-span-7 bg-[#e8f6ff] p-6 sm:p-8 rounded-2xl shadow-inner border border-[#dbf1ff]">
              <h3 className="font-title-lg text-lg text-[#071e28] font-semibold mb-4">Request Mass Intention Online</h3>

              {bookingSuccess ? (
                <div className="p-6 rounded-2xl bg-white border border-[#dbf1ff] space-y-2 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#67c7e8]/30 text-[#006780] flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-2xl">check_circle</span>
                  </div>
                  <h4 className="font-title-md text-base text-[#006780] font-bold">Intention Submitted to the Shrine Office</h4>
                  <p className="font-body-sm text-xs text-[#3e484d]">
                    Our sacristan will record your intention for {intentDate || 'the next scheduled Mass'} and send your confirmation email.
                  </p>
                </div>
              ) : (
                <form className="space-y-3.5" onSubmit={handleBookingSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-label-sm text-xs uppercase tracking-wider text-[#3e484d] mb-1 font-semibold">
                        Intention For (Name) *
                      </label>
                      <input
                        type="text"
                        required
                        value={intentName}
                        onChange={(e) => setIntentName(e.target.value)}
                        placeholder="e.g. Maria Teresa &amp; Joseph"
                        className="w-full bg-[#ffffff] px-3.5 py-2.5 rounded-xl font-body-sm text-xs sm:text-sm text-[#071e28] focus:outline-none focus:ring-2 focus:ring-[#67c7e8] border border-[#dbf1ff]"
                      />
                    </div>
                    <div>
                      <label className="block font-label-sm text-xs uppercase tracking-wider text-[#3e484d] mb-1 font-semibold">
                        Intention Nature
                      </label>
                      <select
                        value={intentNature}
                        onChange={(e) => setIntentNature(e.target.value)}
                        className="w-full bg-[#ffffff] px-3.5 py-2.5 rounded-xl font-body-sm text-xs sm:text-sm text-[#071e28] focus:outline-none focus:ring-2 focus:ring-[#67c7e8] border border-[#dbf1ff]"
                      >
                        <option>Repose of the Soul (Departed)</option>
                        <option>Thanksgiving / Anniversaries</option>
                        <option>Good Health &amp; Healing</option>
                        <option>Special Intention / Petition</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-label-sm text-xs uppercase tracking-wider text-[#3e484d] mb-1 font-semibold">
                        Preferred Liturgy Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={intentDate}
                        onChange={(e) => setIntentDate(e.target.value)}
                        className="w-full bg-[#ffffff] px-3.5 py-2.5 rounded-xl font-body-sm text-xs sm:text-sm text-[#071e28] focus:outline-none focus:ring-2 focus:ring-[#67c7e8] border border-[#dbf1ff]"
                      />
                    </div>
                    <div>
                      <label className="block font-label-sm text-xs uppercase tracking-wider text-[#3e484d] mb-1 font-semibold">
                        Preferred Mass Time
                      </label>
                      <select
                        value={intentTime}
                        onChange={(e) => setIntentTime(e.target.value)}
                        className="w-full bg-[#ffffff] px-3.5 py-2.5 rounded-xl font-body-sm text-xs sm:text-sm text-[#071e28] focus:outline-none focus:ring-2 focus:ring-[#67c7e8] border border-[#dbf1ff]"
                      >
                        <option>06:30 AM Daily Morning Mass</option>
                        <option>10:00 AM Saturday Healing Mass</option>
                        <option>06:00 PM Daily Evening Mass</option>
                        <option>08:00 AM Sunday Choral High Mass</option>
                        <option>Next Available Daily Mass</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-label-sm text-xs uppercase tracking-wider text-[#3e484d] mb-1 font-semibold">
                      Offered By (Your Contact &amp; Email) *
                    </label>
                    <input
                      type="text"
                      required
                      value={offeredBy}
                      onChange={(e) => setOfferedBy(e.target.value)}
                      placeholder="Your full name and email for confirmation"
                      className="w-full bg-[#ffffff] px-3.5 py-2.5 rounded-xl font-body-sm text-xs sm:text-sm text-[#071e28] focus:outline-none focus:ring-2 focus:ring-[#67c7e8] border border-[#dbf1ff]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-[#3e484d] font-body-sm text-xs">
                      Customary Stipend: <strong>$10 - $25 (Voluntary)</strong>
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#006780] hover:bg-[#006687] text-white font-label-md text-xs font-semibold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-base">send</span>
                      <span>Submit Intention Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

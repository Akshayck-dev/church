import React from 'react';
import { NavigationTab } from '../types';
import { IMAGES } from '../data/parishData';

interface VicarParishScreenProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenPrayerModal: () => void;
}

export const VicarParishScreen: React.FC<VicarParishScreenProps> = ({ onNavigate, onOpenPrayerModal }) => {
  return (
    <div className="flex flex-col w-full font-body-md text-[#071e28]">
      {/* Top Header */}
      <section className="bg-gradient-to-b from-[#e8f6ff] via-[#f4faff] to-[#ffffff] px-4 sm:px-6 lg:px-12 pt-8 pb-12">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dbf1ff] text-[#006780] font-label-sm text-[11px] uppercase tracking-widest font-semibold">
              <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                church
              </span>
              Pastoral Leadership &amp; History
            </span>
            <span className="text-[#bec8cd] font-label-md">•</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ffdf98]/40 text-[#5e4706] font-label-sm text-[11px] font-semibold">
              Diocese of Sanctuary Hill
            </span>
          </div>

          <div className="space-y-3 max-w-3xl">
            <h1 className="font-headline-lg lg:font-display-lg text-3xl sm:text-4xl lg:text-[48px] text-[#071e28] font-serif font-semibold leading-tight">
              Our Pastoral Clergy &amp; 120-Year Heritage
            </h1>
            <p className="font-body-lg text-sm sm:text-base text-[#3e484d] leading-relaxed">
              Founded in 1904 to serve immigrant quarry families and Marian pilgrims, Sancta Maria Marian Shrine and Parish stands as a spiritual bastion of Roman Catholic faith, Eucharistic worship, and charitable service.
            </p>
          </div>
        </div>
      </section>

      {/* Vicar Profile Card */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-8 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#e8f6ff] shadow-md border border-[#dbf1ff]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-lg p-2 bg-white max-w-xs w-full border border-[#dbf1ff]">
                  <div className="rounded-xl overflow-hidden aspect-square bg-[#c7ddeb]">
                    <img
                      alt="Rev. Fr. Joseph Mathew, Parish Vicar"
                      className="w-full h-full object-cover"
                      src={IMAGES.vicarPortrait}
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="font-title-lg text-base text-[#071e28] font-bold">
                      Rev. Fr. Joseph Mathew
                    </h3>
                    <span className="font-label-sm text-xs text-[#006780] font-semibold block uppercase tracking-wider">
                      Parish Vicar &amp; Shrine Rector
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dbf1ff] text-[#006780] font-label-sm text-xs uppercase font-semibold">
                  <span>Ordained 1998 • Licentiate in Sacred Theology</span>
                </div>
                <h2 className="font-headline-md text-2xl text-[#071e28] font-serif font-bold">
                  A Message from Fr. Joseph Mathew
                </h2>
                <div className="space-y-3 font-body-md text-xs sm:text-sm text-[#3e484d] leading-relaxed">
                  <p>
                    “Welcome to Sancta Maria. Here, in the shadow of Our Lady of Grace, we strive to be a true family of God—nourished by the Bread of Angels, renewed in confession, and commissioned to bring the compassionate love of Christ to the poor and sorrowful.”
                  </p>
                  <p>
                    Fr. Joseph completed his priestly studies in Rome and served in diocesan seminary formation and hospital chaplaincy before being appointed Rector of Sancta Maria in 2018.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => onNavigate('sacraments')}
                    className="px-5 py-2.5 rounded-xl bg-[#006780] hover:bg-[#006687] text-white font-label-md text-xs font-semibold transition-colors shadow-xs cursor-pointer"
                  >
                    Request Meeting with Vicar
                  </button>
                  <button
                    onClick={onOpenPrayerModal}
                    className="px-5 py-2.5 rounded-xl bg-[#dbf1ff] text-[#006780] hover:bg-[#d5ecfa] font-label-md text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Send Private Prayer Petition
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pastoral Team & Council */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-label-md text-xs uppercase tracking-widest text-[#006780] font-semibold">
              Clergy &amp; Pastoral Council
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28] font-serif font-semibold">
              Pastoral Team &amp; Parish Officers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#e8f6ff] space-y-2 border border-[#dbf1ff]">
              <span className="text-[11px] font-bold text-[#745b1b] uppercase">Parochial Vicar</span>
              <h4 className="font-title-lg text-base text-[#071e28] font-bold">Rev. Fr. Julian Varghese</h4>
              <p className="font-body-sm text-xs text-[#3e484d]">
                Oversees Youth Catechesis, First Communion, and hospital sacramental visits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#e8f6ff] space-y-2 border border-[#dbf1ff]">
              <span className="text-[11px] font-bold text-[#745b1b] uppercase">Permanent Deacon</span>
              <h4 className="font-title-lg text-base text-[#071e28] font-bold">Deacon Gregory K. Adams</h4>
              <p className="font-body-sm text-xs text-[#3e484d]">
                Assists at Solemn High Masses, leads RCIA formation, and directs baptismal ministry.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#e8f6ff] space-y-2 border border-[#dbf1ff]">
              <span className="text-[11px] font-bold text-[#745b1b] uppercase">Parish Administrator</span>
              <h4 className="font-title-lg text-base text-[#071e28] font-bold">Sister Maria Teresa, OP</h4>
              <p className="font-body-sm text-xs text-[#3e484d]">
                Dominican Sister overseeing parish registry, shrine bookings, and sacristan team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Guidelines & Directions */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-[#e8f6ff]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="font-label-md text-xs uppercase tracking-widest text-[#006780] font-semibold">
              Location &amp; Access
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28] font-serif font-semibold">
              Visiting the Shrine &amp; Parish
            </h2>
            <div className="space-y-2 font-body-md text-xs sm:text-sm text-[#3e484d]">
              <p><strong>Address:</strong> 108 Ave Maria Boulevard, Marian Sanctuary Hill</p>
              <p><strong>Phone:</strong> +1 (800) 555-MARIA / +1 (800) 555-6274</p>
              <p><strong>Office Hours:</strong> Tuesday – Saturday, 9:00 AM – 4:00 PM</p>
              <p><strong>Sanctuary Gates:</strong> Open daily 6:00 AM – 9:00 PM</p>
            </div>
            <div className="p-4 rounded-xl bg-white text-xs text-[#3e484d] border border-[#dbf1ff]">
              <strong>Pilgrim Etiquette:</strong> Please maintain reverent silence in the main nave and silence all mobile telephones. Modest attire covering shoulders and knees is appreciated.
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-md bg-white aspect-[16/10] border border-[#dbf1ff] flex items-center justify-center relative">
              <img
                src={IMAGES.grottoOurLadyOfGrace}
                alt="Sanctuary grounds and entrance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5 text-white">
                <span className="font-title-md text-sm font-semibold">
                  Sanctuary Hill Courtyard &amp; Outdoor Grotto
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

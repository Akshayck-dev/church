import React from 'react';
import { NavigationTab } from '../types';
import { IMAGES } from '../data/parishData';
import { Reveal, PageHero } from '../components/ui';

interface VicarParishScreenProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenPrayerModal: () => void;
}

export const VicarParishScreen: React.FC<VicarParishScreenProps> = ({ onNavigate, onOpenPrayerModal }) => {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Pastoral Leadership & History"
        title="Our Pastoral Clergy & 90-Year Heritage"
        description="Established on 26 October 1935 under the patronage of Our Lady of Lourdes, Lourde Matha Church, Thalayanadu — തലയനാട് ലൂർദ്ദ് മാതാ പള്ളി — stands as a spiritual home of Syro-Malabar Catholic faith, Eucharistic worship, and charitable service in the Eparchy of Kothamangalam."
        image={IMAGES.vicarPortrait}
        imageAlt="Fr. Sebastian Thumbamattam, Parish Vicar"
        badge="Eparchy of Kothamangalam"
      />

      {/* Vicar profile card */}
      <section className="bg-ivory-50" aria-label="Message from the Vicar">
        <div className="container-site py-10 lg:py-14">
          <Reveal>
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 items-center gap-8 p-6 sm:p-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <figure className="mx-auto max-w-xs overflow-hidden rounded-2xl border border-line bg-white p-2.5 shadow-card">
                    <div className="aspect-square overflow-hidden rounded-xl bg-ivory-200">
                      <img alt="Fr. Sebastian Thumbamattam, Parish Vicar" className="img-zoom h-full w-full object-cover" src={IMAGES.vicarPortrait} loading="lazy" />
                    </div>
                    <figcaption className="mt-3 px-1 pb-1.5 text-center">
                      <h3 className="text-[16px] font-bold text-ink-950">Fr. Sebastian Thumbamattam</h3>
                      <span className="mt-0.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-maroon-600">
                        Parish Vicar
                      </span>
                    </figcaption>
                  </figure>
                </div>
                <div className="lg:col-span-8">
                  <span className="badge-gold">Eparchy of Kothamangalam • Thodupuzha Forane</span>
                  <h2 className="t-h2 mt-4 text-ink-950">A Message from Fr. Sebastian Thumbamattam</h2>
                  <div className="t-body mt-4 space-y-3.5">
                    <p className="font-serif text-[17px] italic leading-relaxed text-maroon-800">
                      “Welcome to Lourde Matha Church. Here, under the mantle of Our Lady of Lourdes, we strive to be a true family of God — nourished by the Holy Qurbana, renewed in confession, and sent forth to bring the compassionate love of Christ to the poor and the sorrowful.”
                    </p>
                    <p>
                      Fr. Sebastian serves as the vicar of Lourde Matha Church, Thalayanadu, shepherding the parish family of the Eparchy of Kothamangalam in faith, worship, and works of mercy.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button onClick={() => onNavigate('sacraments')} className="btn-primary">
                      Request Meeting with Vicar
                    </button>
                    <button onClick={onOpenPrayerModal} className="btn-outline">
                      Send Private Prayer Petition
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pastoral team & council */}
      <section className="border-t border-line-soft bg-white" aria-label="Pastoral team">
        <div className="container-site pb-12 lg:pb-16">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Clergy &amp; Pastoral Council</span>
              <h2 className="t-h2 mt-3 text-balance text-ink-950">Pastoral Team &amp; Parish Officers</h2>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { role: 'Assistant Vicar', name: 'Visiting Priests', text: 'The vicar is assisted by visiting priests of the Eparchy of Kothamangalam.' },
              { role: 'Parish Office', name: 'Parish Secretary', text: 'Manages the parish registry, Qurbana intention bookings, and sacramental records.' },
            ].map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div className="card h-full p-6 sm:p-7">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-700">{m.role}</span>
                  <h3 className="mt-2 font-serif text-[19px] font-semibold text-ink-950">{m.name}</h3>
                  <p className="t-small mt-2">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor guidelines & directions */}
      <section className="bg-maroon-900 text-ivory-100" aria-label="Visiting the church">
        <div className="container-site py-12 lg:py-16">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <span className="eyebrow eyebrow-on-dark">Location &amp; Access</span>
              <h2 className="t-h2 mt-3 text-ivory-50">Visiting the Church &amp; Parish</h2>
              <dl className="mt-6 space-y-2.5 text-[14px] leading-relaxed">
                {[
                  ['Address:', 'Kolapra – Thalayanadu Road, Thalayanadu P.O., Thodupuzha, Idukki, Kerala 685585'],
                  ['Phone:', '+91 4862 258 257'],
                  ['Office Hours:', 'Monday – Saturday, 9:00 AM – 5:00 PM'],
                  ['Church Gates:', 'Open daily 6:00 AM – 9:00 PM'],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-3 border-b border-white/10 pb-2.5">
                    <dt className="w-32 shrink-0 font-semibold text-gold-300">{k}</dt>
                    <dd className="text-ivory-200/90">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 rounded-xl border border-gold-400/30 bg-gold-500/10 p-4 text-[13px] leading-relaxed text-ivory-200/90">
                <strong className="text-gold-300">Pilgrim Etiquette:</strong> Please maintain reverent silence in the main nave and silence all mobile telephones. Modest attire covering shoulders and knees is appreciated.
              </div>
            </Reveal>
            <Reveal className="lg:col-span-6" delay={100}>
              <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img src={IMAGES.grottoOurLadyOfGrace} alt="Sanctuary grounds and entrance" className="img-zoom h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent" aria-hidden="true" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-[15px] font-semibold text-ivory-50">
                  Church Courtyard &amp; Lourdes Grotto
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { IMAGES } from '../data/parishData';
import { Reveal, PageHero } from '../components/ui';

interface LiveMassScreenProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenPrayerModal: () => void;
}

export const LiveMassScreen: React.FC<LiveMassScreenProps> = ({ onNavigate, onOpenPrayerModal }) => {
  const [activeCamera, setActiveCamera] = useState<'altar' | 'grotto' | 'choir'>('altar');
  const [isPlaying, setIsPlaying] = useState(true);
  const [copiedPrayer, setCopiedPrayer] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, name: 'Teresa M. (London)', text: 'Praying with you from the UK. May Our Lady bless us all.' },
    { id: 2, name: 'Brother Anthony (Chicago)', text: 'Deo Gratias. Peace to all pilgrims.' },
    { id: 3, name: 'Mariamma & Family (Kottayam)', text: 'Offering this Holy Qurbana for my grandmother Mariamma.' },
    { id: 4, name: 'Joseph D. (Toronto)', text: 'Lord hear our prayer through Mary’s intercession.' },
  ]);

  const cameraImages = {
    altar: IMAGES.liveStreamAltar,
    grotto: IMAGES.grottoOurLadyOfGrace,
    choir: IMAGES.sanctuaryInteriorPews,
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    setChatMessages((prev) => [
      ...prev,
      { id: Date.now(), name: 'You (Pilgrim)', text: chatMessage },
    ]);
    setChatMessage('');
  };

  const copySpiritualCommunion = () => {
    const prayer = `My Jesus, I believe that You are present in the Most Holy Sacrament. I love You above all things, and I desire to receive You into my soul. Since I cannot at this moment receive You sacramentally, come at least spiritually into my heart. I embrace You as if You were already there and unite myself wholly to You. Never permit me to be separated from You. Amen.`;
    navigator.clipboard?.writeText(prayer);
    setCopiedPrayer(true);
    setTimeout(() => setCopiedPrayer(false), 3000);
  };

  const cameras: { id: 'altar' | 'grotto' | 'choir'; label: string }[] = [
    { id: 'altar', label: 'Cam 1: High Altar' },
    { id: 'grotto', label: 'Cam 2: Lourdes Grotto' },
    { id: 'choir', label: 'Cam 3: Nave & Pews' },
  ];

  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Sanctuary Live Stream 1080p"
        live
        title="Live Eucharistic Liturgy & Perpetual Novena"
        description="Worship with our global pilgrim family in real time. Submit an altar intention, follow today's readings, or unite yourself spiritually when you cannot receive sacramentally."
        image={IMAGES.liveStreamAltar}
        imageAlt="Sanctuary Broadcast Feed"
        actions={
          <>
            <button onClick={onOpenPrayerModal} className="btn-gold">
              Submit Altar Intention
            </button>
            <button onClick={() => onNavigate('mass-timings')} className="btn-outline-light">
              Qurbana Timetable
            </button>
          </>
        }
      />

      {/* Main live stream experience */}
      <section className="bg-maroon-950 py-10 text-ivory-100 lg:py-14" aria-label="Live broadcast">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {/* Main video screen */}
            <Reveal className="lg:col-span-8">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
                <img src={cameraImages[activeCamera]} alt="Sanctuary Broadcast Feed" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/50 via-transparent to-maroon-950/30" aria-hidden="true" />

                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full bg-red-700 px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-ivory-50">LIVE</span>
                  <span className="rounded-full bg-black/60 px-3 py-1 text-[12px] font-semibold text-ivory-100 backdrop-blur">1,420 Online Now</span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label={isPlaying ? 'Pause live stream' : 'Play live stream'}
                    className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gold-500 text-maroon-950 shadow-xl transition-all hover:scale-105 hover:bg-gold-400"
                  >
                    <span className="material-symbols-outlined text-[36px]">
                      {isPlaying ? 'pause' : 'play_arrow'}
                    </span>
                  </button>
                </div>

                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-xl bg-maroon-950/70 p-2.5 text-[12px] text-ivory-200 backdrop-blur">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-gold-400">church</span>
                    <span>
                      Camera Angle: <strong className="text-ivory-50">{activeCamera === 'altar' ? 'High Altar' : activeCamera === 'grotto' ? 'Marian Grotto' : 'Sanctuary Nave'}</strong>
                    </span>
                  </div>
                  <div className="hidden items-center gap-3 text-ivory-200/70 sm:flex">
                    <span>Audio: Stereo HD</span>
                    <span>Bitrate: 6.2 Mbps</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2" role="tablist" aria-label="Camera angles">
                <span className="mr-1 text-[11px] font-bold uppercase tracking-[0.18em] text-ivory-200/60">Camera Angles:</span>
                {cameras.map((c) => (
                  <button
                    key={c.id}
                    role="tab"
                    aria-selected={activeCamera === c.id}
                    onClick={() => setActiveCamera(c.id)}
                    className={`cursor-pointer rounded-lg px-3.5 py-2 text-[13px] font-semibold transition-all ${
                      activeCamera === c.id
                        ? 'bg-gold-500 text-maroon-950'
                        : 'bg-white/10 text-ivory-100 hover:bg-white/20'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Prayer community chat */}
            <Reveal className="lg:col-span-4" delay={100}>
              <div className="flex h-[420px] flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-xl lg:h-[480px]">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h2 className="flex items-center gap-2 text-[15px] font-bold text-ivory-50">
                    <span className="material-symbols-outlined text-[20px] text-gold-400">forum</span>
                    Pilgrim Prayer Stream
                  </h2>
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-ivory-200/60">Live Intentions</span>
                </div>
                <div className="flex-1 space-y-2.5 overflow-y-auto py-3" aria-live="polite">
                  {chatMessages.map((msg) => (
                    <div key={msg.id} className="rounded-xl border border-white/[0.06] bg-white/[0.05] p-3">
                      <span className="block text-[12px] font-bold text-gold-300">{msg.name}</span>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-ivory-200/90">{msg.text}</p>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSendChat} className="flex gap-2 border-t border-white/10 pt-3">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Share a short prayer or amen..."
                    aria-label="Share a prayer"
                    className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/10 px-3.5 py-2.5 text-[13px] text-ivory-50 placeholder:text-ivory-200/40 focus:outline-none focus:ring-2 focus:ring-gold-400"
                  />
                  <button type="submit" className="btn-gold btn-sm shrink-0">
                    Send
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Readings & spiritual communion */}
      <section className="bg-ivory-50">
        <div className="container-site py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="card h-full p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="flex items-center gap-2.5 text-[17px] font-bold text-ink-950">
                    <span className="icon-tile !h-11 !w-11"><span className="material-symbols-outlined text-[22px]">favorite</span></span>
                    Act of Spiritual Communion
                  </h2>
                  <button onClick={copySpiritualCommunion} className="btn-outline btn-sm shrink-0">
                    {copiedPrayer ? 'Copied!' : 'Copy Prayer'}
                  </button>
                </div>
                <p className="t-small mt-4 italic text-gold-700">
                  For pilgrims participating from home who are unable to receive the Eucharist sacramentally.
                </p>
                <blockquote className="mt-3 rounded-xl border border-line-soft bg-ivory-100 p-5 text-[14px] italic leading-relaxed text-ink-800">
                  “My Jesus, I believe that You are present in the Most Holy Sacrament. I love You above all things, and I desire to receive You into my soul. Since I cannot at this moment receive You sacramentally, come at least spiritually into my heart. I embrace You as if You were already there and unite myself wholly to You. Never permit me to be separated from You. Amen.”
                </blockquote>
                <p className="t-small mt-2.5 text-right text-ink-500">— St. Alphonsus Liguori</p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={100}>
              <div className="card h-full p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3 border-b border-line-soft pb-4">
                  <div>
                    <span className="eyebrow">Liturgy of the Word</span>
                    <h2 className="t-h3 mt-1.5 text-ink-950">Today's Scripture Readings</h2>
                  </div>
                  <span className="shrink-0 rounded-full bg-maroon-600/10 px-3.5 py-1.5 text-[12px] font-bold text-maroon-700">Cycle B</span>
                </div>
                <div className="mt-5 space-y-5">
                  <div>
                    <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] text-gold-700">First Reading • Isaiah 61:10-11</h3>
                    <p className="t-body mt-1.5">“I will greatly rejoice in the Lord, my soul shall be joyful in my God; for he hath clothed me with the garments of salvation, he hath covered me with the robe of righteousness...”</p>
                  </div>
                  <div className="border-t border-line-soft pt-5">
                    <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] text-gold-700">Responsorial Psalm • Luke 1:46-55</h3>
                    <p className="mt-1.5 text-[14px] font-semibold leading-relaxed text-maroon-700">R. My soul magnifies the Lord, and my spirit rejoices in God my Savior.</p>
                  </div>
                  <div className="border-t border-line-soft pt-5">
                    <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] text-gold-700">Holy Gospel • John 2:1-11</h3>
                    <p className="t-body mt-1.5">“There was a wedding at Cana in Galilee, and the mother of Jesus was there. Jesus also was invited to the wedding with his disciples. When the wine ran out, the mother of Jesus said to him, ‘They have no wine...’”</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

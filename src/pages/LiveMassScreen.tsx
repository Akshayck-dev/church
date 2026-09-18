import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { IMAGES } from '../data/parishData';

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
    { id: 3, name: 'Maria & Family (Singapore)', text: 'Offering this Holy Mass for my grandmother Maria.' },
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

  return (
    <div className="flex flex-col w-full font-body-md text-[#071e28]">
      {/* Top Header */}
      <section className="bg-gradient-to-b from-[#e8f6ff] to-[#ffffff] px-4 sm:px-6 lg:px-12 pt-8 pb-6 border-b border-[#dbf1ff]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbf1ff] text-[#006780] font-label-sm text-xs uppercase tracking-wider font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-ping"></span>
              <span>Sanctuary Live Stream 1080p</span>
            </div>
            <h1 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28] font-serif font-semibold">
              Live Eucharistic Liturgy &amp; Perpetual Novena
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenPrayerModal}
              className="px-4 py-2 rounded-xl bg-[#67c7e8] hover:bg-[#006687] text-[#005266] hover:text-white font-label-md text-xs font-semibold transition-colors cursor-pointer"
            >
              Submit Altar Intention
            </button>
            <button
              onClick={() => onNavigate('mass-timings')}
              className="px-4 py-2 rounded-xl bg-[#dbf1ff] hover:bg-[#d5ecfa] text-[#006780] font-label-md text-xs font-semibold transition-colors cursor-pointer"
            >
              Mass Timetable
            </button>
          </div>
        </div>
      </section>

      {/* Main Live Stream Experience & Chat Hub */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-8 bg-[#071e28] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Video Screen */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video shadow-2xl border border-white/10">
              <img
                src={cameraImages[activeCamera]}
                alt="Sanctuary Broadcast Feed"
                className="w-full h-full object-cover"
              />

              {/* Top Overlays */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#ba1a1a] text-white text-xs font-bold font-label-sm">
                  LIVE
                </span>
                <span className="px-3 py-1 rounded-full bg-black/60 text-white text-xs backdrop-blur font-label-sm">
                  1,420 Online Now
                </span>
              </div>

              {/* Play Pause Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-[#67c7e8] text-[#005266] hover:bg-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
                >
                  <span className="material-symbols-outlined text-4xl">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
              </div>

              {/* Bottom Stream Status */}
              <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-xs text-white/90 bg-black/50 p-2 rounded-xl backdrop-blur">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#67c7e8] text-base">church</span>
                  <span>
                    Camera Angle: <strong>{activeCamera === 'altar' ? 'High Altar' : activeCamera === 'grotto' ? 'Marian Grotto' : 'Sanctuary Nave'}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white/70">Audio: Stereo HD</span>
                  <span className="text-white/70">Bitrate: 6.2 Mbps</span>
                </div>
              </div>
            </div>

            {/* Camera Angle Selector Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-white/70 mr-2 font-label-sm uppercase">Camera Angles:</span>
              <button
                onClick={() => setActiveCamera('altar')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  activeCamera === 'altar' ? 'bg-[#67c7e8] text-[#005266]' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Cam 1: High Altar
              </button>
              <button
                onClick={() => setActiveCamera('grotto')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  activeCamera === 'grotto' ? 'bg-[#67c7e8] text-[#005266]' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Cam 2: Grotto of Grace
              </button>
              <button
                onClick={() => setActiveCamera('choir')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  activeCamera === 'choir' ? 'bg-[#67c7e8] text-[#005266]' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Cam 3: Nave &amp; Pews
              </button>
            </div>
          </div>

          {/* Interactive Prayer Community Stream / Chat */}
          <div className="lg:col-span-4 flex flex-col bg-[#112833] rounded-2xl p-4 shadow-xl border border-white/10 h-[480px]">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#67c7e8] text-lg">forum</span>
                <h3 className="font-title-md text-sm font-semibold text-white">Pilgrim Prayer Stream</h3>
              </div>
              <span className="text-[11px] text-[#c1e8ff]">Live Intentions</span>
            </div>

            <div className="flex-1 overflow-y-auto py-3 space-y-2.5 text-xs">
              {chatMessages.map((msg) => (
                <div key={msg.id} className="p-2.5 rounded-xl bg-white/5 border border-white/5 space-y-0.5">
                  <span className="font-semibold text-[#67c7e8] block">{msg.name}</span>
                  <p className="text-[#e8f6ff]/90">{msg.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendChat} className="pt-3 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Share a short prayer or amen..."
                className="flex-1 px-3 py-2 rounded-xl bg-white/10 text-white text-xs placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-[#67c7e8]"
              />
              <button
                type="submit"
                className="px-3 py-2 rounded-xl bg-[#67c7e8] text-[#005266] font-bold text-xs hover:bg-white transition-colors cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Liturgical Readings & Spiritual Communion Section */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Act of Spiritual Communion Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-[#e8f6ff] shadow-md border border-[#dbf1ff] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#006780]">
                  <span className="material-symbols-outlined text-2xl">favorite</span>
                  <h3 className="font-title-lg text-base font-bold text-[#071e28]">Act of Spiritual Communion</h3>
                </div>
                <button
                  onClick={copySpiritualCommunion}
                  className="px-2.5 py-1 rounded-lg bg-white text-xs font-semibold text-[#006780] hover:bg-[#67c7e8] transition-colors shadow-2xs cursor-pointer"
                >
                  {copiedPrayer ? 'Copied!' : 'Copy Prayer'}
                </button>
              </div>
              <p className="font-headline-sm text-xs italic text-[#745b1b]">
                For pilgrims participating from home who are unable to receive the Eucharist sacramentally.
              </p>
              <blockquote className="font-body-md text-xs sm:text-sm text-[#3e484d] leading-relaxed italic bg-white/80 p-4 rounded-2xl border border-[#dbf1ff]">
                “My Jesus, I believe that You are present in the Most Holy Sacrament. I love You above all things, and I desire to receive You into my soul. Since I cannot at this moment receive You sacramentally, come at least spiritually into my heart. I embrace You as if You were already there and unite myself wholly to You. Never permit me to be separated from You. Amen.”
              </blockquote>
              <span className="font-label-sm text-[11px] text-[#6e797d] block text-right">
                — St. Alphonsus Liguori
              </span>
            </div>
          </div>

          {/* Today's Liturgical Scripture Readings */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-3xl bg-[#ffffff] shadow-md border border-[#dbf1ff] space-y-4">
              <div className="flex items-center justify-between border-b border-[#dbf1ff] pb-3">
                <div>
                  <span className="font-label-sm text-xs text-[#006780] uppercase tracking-wider font-semibold">
                    Liturgy of the Word
                  </span>
                  <h3 className="font-headline-md text-lg text-[#071e28] font-bold">
                    Today's Mass Readings
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#dbf1ff] text-[#006780] font-label-sm text-xs font-bold">
                  Cycle B
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="font-title-md text-xs font-bold text-[#745b1b] uppercase tracking-wider block">
                    First Reading • Isaiah 61:10-11
                  </span>
                  <p className="font-body-md text-xs text-[#3e484d] mt-1 leading-relaxed">
                    “I will greatly rejoice in the Lord, my soul shall be joyful in my God; for he hath clothed me with the garments of salvation, he hath covered me with the robe of righteousness...”
                  </p>
                </div>

                <div className="border-t border-[#dbf1ff]/60 pt-3">
                  <span className="font-title-md text-xs font-bold text-[#745b1b] uppercase tracking-wider block">
                    Responsorial Psalm • Luke 1:46-55
                  </span>
                  <p className="font-body-md text-xs text-[#006780] font-semibold mt-1">
                    R. My soul magnifies the Lord, and my spirit rejoices in God my Savior.
                  </p>
                </div>

                <div className="border-t border-[#dbf1ff]/60 pt-3">
                  <span className="font-title-md text-xs font-bold text-[#745b1b] uppercase tracking-wider block">
                    Holy Gospel • John 2:1-11
                  </span>
                  <p className="font-body-md text-xs text-[#3e484d] mt-1 leading-relaxed">
                    “There was a wedding at Cana in Galilee, and the mother of Jesus was there. Jesus also was invited to the wedding with his disciples. When the wine ran out, the mother of Jesus said to him, ‘They have no wine...’”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

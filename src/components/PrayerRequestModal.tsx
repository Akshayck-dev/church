import React, { useState } from 'react';

interface PrayerRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const PrayerRequestModal: React.FC<PrayerRequestModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = 'healing',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState(defaultCategory);
  const [intention, setIntention] = useState('');
  const [candleType, setCandleType] = useState<'none' | '7-day' | '30-day'>('7-day');
  const [confidential, setConfidential] = useState(false);
  const [publicNovena, setPublicNovena] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setIntention('');
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e333e]/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-[#ffffff] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8 border border-[#dbf1ff]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#dbf1ff] hover:bg-[#d5ecfa] text-[#071e28] flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#67c7e8]/30 text-[#006780] flex items-center justify-center mx-auto animate-bounce">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <h3 className="font-headline-md text-2xl text-[#071e28]">Deo Gratias! Intention Received</h3>
            <p className="font-body-md text-[#3e484d] max-w-md mx-auto">
              Your petition has been reverently registered. Our priests and the Rosary Confraternity will place it at the altar of Our Lady of Grace during the Perpetual Novena.
            </p>
            <div className="p-3 rounded-xl bg-[#e8f6ff] text-[#005d7c] font-label-md text-xs inline-block">
              Sanctuary Vigil Candle Lit • Weekly Memento in Holy Mass
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-[#dbf1ff] pb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ffdf98]/50 text-[#745b1b] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">local_fire_department</span>
              </div>
              <div>
                <span className="font-label-sm text-xs text-[#006780] uppercase tracking-wider font-semibold">
                  Altar of Our Lady of Grace
                </span>
                <h3 className="font-headline-sm text-xl text-[#071e28]">Submit Prayer Intention</h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-label-md text-xs text-[#071e28] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maria Teresa Santos"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f4faff] border border-[#bec8cd]/50 text-sm text-[#071e28] focus:outline-none focus:ring-2 focus:ring-[#006780]"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-xs text-[#071e28] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f4faff] border border-[#bec8cd]/50 text-sm text-[#071e28] focus:outline-none focus:ring-2 focus:ring-[#006780]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-label-md text-xs text-[#071e28] mb-1">Petition Intention Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f4faff] border border-[#bec8cd]/50 text-sm text-[#071e28] focus:outline-none focus:ring-2 focus:ring-[#006780]"
                >
                  <option value="healing">Recovery of Health & Physical Healing</option>
                  <option value="thanksgiving">Thanksgiving for Miracles & Prayers Answered</option>
                  <option value="family">Peace in Marriage & Family Reconciliation</option>
                  <option value="souls">Repose of Deceased Loved Souls (Requiem)</option>
                  <option value="vocation">Vocations, Employment & Academic Studies</option>
                  <option value="special">Special Protection & Urgent Personal Cross</option>
                </select>
              </div>

              <div>
                <label className="block font-label-md text-xs text-[#071e28] mb-1">Optional Votive Candle Offering</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setCandleType('none')}
                    className={`p-2.5 rounded-xl text-center border text-xs font-semibold transition-all ${
                      candleType === 'none'
                        ? 'bg-[#006780] text-white border-[#006780]'
                        : 'bg-[#f4faff] text-[#3e484d] border-[#dbf1ff]'
                    }`}
                  >
                    Prayer Only
                    <span className="block text-[10px] opacity-75">No candle</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCandleType('7-day')}
                    className={`p-2.5 rounded-xl text-center border text-xs font-semibold transition-all ${
                      candleType === '7-day'
                        ? 'bg-[#006780] text-white border-[#006780]'
                        : 'bg-[#f4faff] text-[#3e484d] border-[#dbf1ff]'
                    }`}
                  >
                    7-Day Votive
                    <span className="block text-[10px] text-[#ffdf98] font-bold">$10 Offering</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCandleType('30-day')}
                    className={`p-2.5 rounded-xl text-center border text-xs font-semibold transition-all ${
                      candleType === '30-day'
                        ? 'bg-[#006780] text-white border-[#006780]'
                        : 'bg-[#f4faff] text-[#3e484d] border-[#dbf1ff]'
                    }`}
                  >
                    30-Day Sanctuary
                    <span className="block text-[10px] text-[#ffdf98] font-bold">$35 Offering</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-label-md text-xs text-[#071e28] mb-1">Your Sacred Petition *</label>
                <textarea
                  rows={3}
                  required
                  value={intention}
                  onChange={(e) => setIntention(e.target.value)}
                  placeholder="Inscribe your personal petition to be placed before the feet of Our Lady of Grace..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f4faff] border border-[#bec8cd]/50 text-sm text-[#071e28] focus:outline-none focus:ring-2 focus:ring-[#006780] resize-none"
                ></textarea>
              </div>

              <div className="space-y-1.5 text-xs text-[#3e484d]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={confidential}
                    onChange={(e) => setConfidential(e.target.checked)}
                    className="rounded accent-[#006780]"
                  />
                  <span>Keep intention strictly confidential (for priest celebrants only)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={publicNovena}
                    onChange={(e) => setPublicNovena(e.target.checked)}
                    className="rounded accent-[#006780]"
                  />
                  <span>Read petition intentions during Wednesday Perpetual Novena</span>
                </label>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl bg-[#dbf1ff] text-[#071e28] hover:bg-[#d5ecfa] text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#006780] hover:bg-[#006687] text-white text-xs font-semibold shadow-md flex items-center gap-2 transition-all"
                >
                  <span className="material-symbols-outlined text-base">local_fire_department</span>
                  <span>Confirm & Offer Petition</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

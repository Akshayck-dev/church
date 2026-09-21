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

  const candleOptions: { id: 'none' | '7-day' | '30-day'; title: string; sub: string }[] = [
    { id: 'none', title: 'Prayer Only', sub: 'No candle' },
    { id: '7-day', title: '7-Day Votive', sub: '₹100 Offering' },
    { id: '30-day', title: '30-Day Sanctuary', sub: '₹350 Offering' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-maroon-950/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Submit prayer intention">
      <div className="card relative my-8 w-full max-w-lg p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-ivory-100 text-ink-900 transition-colors hover:bg-ivory-200"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {submitted ? (
          <div className="space-y-4 py-8 text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-gold-700">
              <span className="material-symbols-outlined text-[32px]">verified</span>
            </span>
            <h3 className="font-serif text-[1.5rem] font-semibold text-ink-950">Deo Gratias! Intention Received</h3>
            <p className="t-body mx-auto max-w-md">
              Your petition has been reverently registered. Our priests and the Rosary Confraternity will place it at the altar of Our Lady of Lourdes during the Perpetual Novena.
            </p>
            <p className="inline-block rounded-xl bg-ivory-100 px-4 py-2 text-[12px] font-semibold text-maroon-700">
              Sanctuary Vigil Candle Lit • Weekly Memento in Holy Qurbana
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3.5 border-b border-line-soft pb-4">
              <span className="icon-tile-gold !h-12 !w-12"><span className="material-symbols-outlined text-[24px]">local_fire_department</span></span>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-maroon-600">
                  Altar of Our Lady of Lourdes
                </span>
                <h3 className="mt-0.5 font-serif text-[1.35rem] font-semibold text-ink-950">Submit Prayer Intention</h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="label" htmlFor="prayer-name">Your Full Name *</label>
                  <input id="prayer-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Mariamma Joseph" className="input" />
                </div>
                <div>
                  <label className="label" htmlFor="prayer-email">Email Address *</label>
                  <input id="prayer-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@domain.com" className="input" />
                </div>
              </div>

              <div>
                <label className="label" htmlFor="prayer-category">Petition Intention Category</label>
                <select id="prayer-category" value={category} onChange={(e) => setCategory(e.target.value)} className="input">
                  <option value="healing">Recovery of Health & Physical Healing</option>
                  <option value="thanksgiving">Thanksgiving for Miracles & Prayers Answered</option>
                  <option value="family">Peace in Marriage & Family Reconciliation</option>
                  <option value="souls">Repose of Deceased Loved Souls (Requiem)</option>
                  <option value="vocation">Vocations, Employment & Academic Studies</option>
                  <option value="special">Special Protection & Urgent Personal Cross</option>
                </select>
              </div>

              <div>
                <span className="label" id="candle-label">Optional Votive Candle Offering</span>
                <div className="mt-1.5 grid grid-cols-3 gap-2" role="radiogroup" aria-labelledby="candle-label">
                  {candleOptions.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      role="radio"
                      aria-checked={candleType === c.id}
                      onClick={() => setCandleType(c.id)}
                      className={`cursor-pointer rounded-xl border p-2.5 text-center text-[12px] font-semibold transition-all ${
                        candleType === c.id
                          ? 'border-maroon-700 bg-maroon-700 text-ivory-50 shadow-sm'
                          : 'border-line bg-ivory-100 text-ink-700 hover:border-maroon-300'
                      }`}
                    >
                      {c.title}
                      <span className={`mt-0.5 block text-[10px] ${candleType === c.id ? 'text-gold-300' : 'text-gold-700'}`}>{c.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="label" htmlFor="prayer-intention">Your Sacred Petition *</label>
                <textarea id="prayer-intention" rows={3} required value={intention} onChange={(e) => setIntention(e.target.value)} placeholder="Inscribe your personal petition to be placed before the feet of Our Lady of Lourdes..." className="input resize-none"></textarea>
              </div>

              <div className="space-y-1.5 text-[13px] text-ink-700">
                <label className="flex cursor-pointer items-center gap-2">
                  <input type="checkbox" checked={confidential} onChange={(e) => setConfidential(e.target.checked)} className="h-4 w-4 accent-maroon-700" />
                  <span>Keep intention strictly confidential (for priest celebrants only)</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <input type="checkbox" checked={publicNovena} onChange={(e) => setPublicNovena(e.target.checked)} className="h-4 w-4 accent-maroon-700" />
                  <span>Read petition intentions during Wednesday Perpetual Novena</span>
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button type="button" onClick={onClose} className="btn-outline btn-sm">
                  Cancel
                </button>
                <button type="submit" className="btn-primary btn-sm">
                  <span className="material-symbols-outlined text-[18px]">local_fire_department</span>
                  Confirm & Offer Petition
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';

interface AdorerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdorerModal: React.FC<AdorerModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [timeWindow, setTimeWindow] = useState('Tuesday Midnight Watch (02:00 AM - 03:00 AM)');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setName('');
      setPhone('');
      setEmail('');
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-maroon-950/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Sign up as an adoration guardian">
      <div className="card relative w-full max-w-lg p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-ivory-100 text-ink-900 transition-colors hover:bg-ivory-200"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {isSuccess ? (
          <div className="space-y-3 py-6 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-700">
              <span className="material-symbols-outlined text-[32px]">verified</span>
            </span>
            <h3 className="font-serif text-[1.4rem] font-semibold text-ink-950">Adoration Guard Registered</h3>
            <p className="t-body mx-auto max-w-md">
              Thank you for keeping holy watch with our Lord in the Most Blessed Sacrament. The chapel coordinator will reach out with the 24-hour keycode and orientation booklet.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3.5 border-b border-line-soft pb-4">
              <span className="icon-tile-gold !h-11 !w-11"><span className="material-symbols-outlined text-[22px]">local_fire_department</span></span>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-700">
                  Perpetual Adoration Chapel
                </span>
                <h3 className="mt-0.5 font-serif text-[1.3rem] font-semibold text-ink-950">Sign Up as an Adoration Guardian</h3>
              </div>
            </div>

            <p className="t-body">
              Guardians commit to one assigned hour each week so that the Blessed Sacrament in our golden monstrance is never left unattended.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="label" htmlFor="adorer-name">Full Name *</label>
                <input id="adorer-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Mariamma Joseph" className="input" />
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="label" htmlFor="adorer-phone">Phone Number (For Gate Access) *</label>
                  <input id="adorer-phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98XXX XXXXX" className="input" />
                </div>
                <div>
                  <label className="label" htmlFor="adorer-email">Email Address *</label>
                  <input id="adorer-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@domain.com" className="input" />
                </div>
              </div>
              <div>
                <label className="label" htmlFor="adorer-window">Preferred Day &amp; Time Window *</label>
                <select id="adorer-window" value={timeWindow} onChange={(e) => setTimeWindow(e.target.value)} className="input">
                  <option>Tuesday Midnight Watch (02:00 AM - 03:00 AM)</option>
                  <option>Thursday Dawn Watch (05:00 AM - 06:00 AM)</option>
                  <option>Friday Midday (12:00 PM - 01:00 PM)</option>
                  <option>Saturday Night Guard (10:00 PM - 11:00 PM)</option>
                  <option>Sunday Early Morning (04:00 AM - 05:00 AM)</option>
                  <option>Substitute List (Flexible as needed)</option>
                </select>
              </div>
              <div className="flex justify-end gap-2.5 pt-2">
                <button type="button" onClick={onClose} className="btn-outline btn-sm">
                  Cancel
                </button>
                <button type="submit" className="btn-primary btn-sm">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                  Confirm My Commitment
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

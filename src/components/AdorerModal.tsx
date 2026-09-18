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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e333e]/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-[#ffffff] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-[#dbf1ff]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#dbf1ff] hover:bg-[#d5ecfa] text-[#071e28] flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#ffdf98] text-[#745b1b] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <h3 className="font-headline-sm text-xl text-[#071e28]">Adoration Guard Registered</h3>
            <p className="font-body-sm text-[#3e484d]">
              Thank you for keeping holy watch with our Lord in the Most Blessed Sacrament. The chapel coordinator will reach out with the 24-hour keycode and orientation booklet.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-[#dbf1ff] pb-3">
              <div className="w-10 h-10 rounded-full bg-[#ffdf98]/70 text-[#745b1b] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">local_fire_department</span>
              </div>
              <div>
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#745b1b] font-semibold">
                  Perpetual Adoration Chapel
                </span>
                <h3 className="font-headline-sm text-xl text-[#071e28]">Sign Up as an Adoration Guardian</h3>
              </div>
            </div>

            <p className="font-body-sm text-[#3e484d]">
              Guardians commit to one assigned hour each week so that the Blessed Sacrament in our golden monstrance is never left unattended.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block font-label-md text-xs text-[#071e28] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Maria Doe"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f4faff] border border-[#bec8cd]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#745b1b]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-label-md text-xs text-[#071e28] mb-1">Phone Number (For Gate Access) *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-1234"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f4faff] border border-[#bec8cd]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#745b1b]"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-xs text-[#071e28] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f4faff] border border-[#bec8cd]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#745b1b]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-label-md text-xs text-[#071e28] mb-1">Preferred Day & Time Window *</label>
                <select
                  value={timeWindow}
                  onChange={(e) => setTimeWindow(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f4faff] border border-[#bec8cd]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#745b1b]"
                >
                  <option>Tuesday Midnight Watch (02:00 AM - 03:00 AM)</option>
                  <option>Thursday Dawn Watch (05:00 AM - 06:00 AM)</option>
                  <option>Friday Midday (12:00 PM - 01:00 PM)</option>
                  <option>Saturday Night Guard (10:00 PM - 11:00 PM)</option>
                  <option>Sunday Early Morning (04:00 AM - 05:00 AM)</option>
                  <option>Substitute List (Flexible as needed)</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-[#dbf1ff] text-[#071e28] text-xs font-semibold hover:bg-[#d5ecfa]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#745b1b] text-white text-xs font-semibold hover:bg-[#5e4706] shadow-sm transition-all flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-base">check</span>
                  <span>Confirm My Commitment</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

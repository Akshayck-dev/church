import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { Reveal, PageHero } from '../components/ui';

interface OfferingsScreenProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenPrayerModal: () => void;
}

const FUNDS = [
  { id: 'shrine' as const, icon: 'synagogue', title: 'Church & Campus Care', tag: 'Primary Fund', text: 'Preserving the 1935 parish church, lighting perpetual vigil lamps, and welcoming parishioners.' },
  { id: 'mercy' as const, icon: 'soup_kitchen', title: 'Mercy Food Bank & Charity', tag: 'Poverty Relief', text: 'Feeding 300+ hungry individuals each Saturday and helping families in emergency crises.' },
  { id: 'mass' as const, icon: 'church', title: 'Holy Qurbana Stipend', tag: 'Stipend', text: 'Dedicated Holy Qurbana celebrated for your requested intentions and loved ones.' },
  { id: 'flowers' as const, icon: 'spa', title: 'Altar Flowers & Linens', tag: 'Adornment', text: 'Beautifying the altar of Our Lady with fresh floral arrangements and liturgical linens.' },
];

export const OfferingsScreen: React.FC<OfferingsScreenProps> = ({ onNavigate, onOpenPrayerModal }) => {
  const [selectedFund, setSelectedFund] = useState<'shrine' | 'mercy' | 'mass' | 'flowers'>('shrine');
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [success, setSuccess] = useState(false);

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setDonorName('');
      setDonorEmail('');
      setCustomAmount('');
    }, 4500);
  };

  const currentAmount = customAmount ? parseFloat(customAmount) || 0 : amount;

  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Sacred Offerings & Stewardship"
        title="Support the Church, Sacraments & Poor"
        description="“Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.” (2 Corinthians 9:7)"
        badge="80G Tax Receipts"
        actions={
          <>
            <button onClick={() => onNavigate('mass-timings')} className="btn-gold">
              <span className="material-symbols-outlined text-[20px]">church</span>
              Qurbana Intentions
            </button>
            <button onClick={onOpenPrayerModal} className="btn-outline-light">
              <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
              Prayer Petition
            </button>
          </>
        }
      />

      {/* Funds + form */}
      <section className="bg-ivory-50">
        <div className="container-site py-10 lg:py-14">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            {/* Funds explanation */}
            <Reveal className="lg:col-span-5">
              <span className="eyebrow">Designate Your Gift</span>
              <h2 className="t-h2 mt-3 text-ink-950">Select Your Area of Giving</h2>
              <p className="t-body mt-3">
                Every rupee contributed supports the preservation of Our Lady's sanctuary, priestly formation, sacred music, and compassionate outreach to those in need.
              </p>
              <div className="mt-6 space-y-3" role="radiogroup" aria-label="Giving funds">
                {FUNDS.map((f) => (
                  <button
                    key={f.id}
                    role="radio"
                    aria-checked={selectedFund === f.id}
                    onClick={() => setSelectedFund(f.id)}
                    className={`w-full cursor-pointer rounded-2xl border p-4 text-left transition-all ${
                      selectedFund === f.id
                        ? 'border-maroon-600 bg-white shadow-card ring-1 ring-maroon-600/20'
                        : 'border-line-soft bg-white/60 hover:border-maroon-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className={`icon-tile !h-10 !w-10 ${selectedFund === f.id ? '' : '!bg-ivory-200 !text-ink-500'}`}>
                          <span className="material-symbols-outlined text-[20px]">{f.icon}</span>
                        </span>
                        <h3 className="text-[15px] font-bold text-ink-950">{f.title}</h3>
                      </div>
                      <span className={`shrink-0 text-[12px] font-bold ${selectedFund === f.id ? 'text-maroon-700' : 'text-ink-400'}`}>{f.tag}</span>
                    </div>
                    <p className="t-small mt-2 pl-[52px]">{f.text}</p>
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Donation form card */}
            <Reveal className="lg:col-span-7" delay={100}>
              <div className="card space-y-5 p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line-soft pb-4">
                  <h3 className="font-serif text-[1.3rem] font-semibold text-ink-950">Online Offering Portal</h3>
                  <div className="flex gap-1 rounded-xl bg-ivory-100 p-1" role="tablist" aria-label="Giving frequency">
                    {(['one-time', 'monthly'] as const).map((f) => (
                      <button
                        key={f}
                        role="tab"
                        aria-selected={frequency === f}
                        onClick={() => setFrequency(f)}
                        className={`cursor-pointer rounded-lg px-3.5 py-1.5 text-[13px] font-semibold transition-all ${
                          frequency === f ? 'bg-maroon-700 text-ivory-50 shadow-sm' : 'text-ink-500 hover:text-ink-900'
                        }`}
                      >
                        {f === 'one-time' ? 'One-Time' : 'Monthly Sustainer'}
                      </button>
                    ))}
                  </div>
                </div>

                {success ? (
                  <div className="rounded-2xl bg-ivory-100 p-8 text-center" role="status">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-maroon-600/10 text-maroon-700">
                      <span className="material-symbols-outlined text-[32px]">verified</span>
                    </span>
                    <h4 className="mt-3 font-serif text-[1.35rem] font-semibold text-maroon-800">
                      May God Bless Your Sacrificial Giving!
                    </h4>
                    <p className="t-body mx-auto mt-1.5 max-w-md">
                      Your offering of <strong>₹{currentAmount}</strong> has been registered. An official tax receipt has been sent to your email.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleDonate} className="space-y-4">
                    <div>
                      <span className="label" id="amount-label">Select Amount (₹)</span>
                      <div className="mt-1.5 grid grid-cols-4 gap-2" role="radiogroup" aria-labelledby="amount-label">
                        {[500, 1000, 2000, 10000].map((val) => (
                          <button
                            type="button"
                            key={val}
                            role="radio"
                            aria-checked={amount === val && !customAmount}
                            onClick={() => { setAmount(val); setCustomAmount(''); }}
                            className={`cursor-pointer rounded-xl border py-2.5 text-[14px] font-bold transition-all ${
                              amount === val && !customAmount
                                ? 'border-maroon-700 bg-maroon-700 text-ivory-50 shadow-sm'
                                : 'border-line bg-ivory-100 text-ink-900 hover:border-maroon-400 hover:bg-ivory-200'
                            }`}
                          >
                            ₹{val}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="label" htmlFor="custom-amount">Or Enter Custom Amount</label>
                      <div className="relative mt-1.5">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[14px] font-bold text-ink-500" aria-hidden="true">₹</span>
                        <input id="custom-amount" type="number" min="1" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} placeholder="Other amount" className="input !pl-8" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="label" htmlFor="donor-name">Donor Name *</label>
                        <input id="donor-name" type="text" required value={donorName} onChange={(e) => setDonorName(e.target.value)} placeholder="Full Name" className="input" />
                      </div>
                      <div>
                        <label className="label" htmlFor="donor-email">Email Address (for Tax Receipt) *</label>
                        <input id="donor-email" type="email" required value={donorEmail} onChange={(e) => setDonorEmail(e.target.value)} placeholder="name@domain.com" className="input" />
                      </div>
                    </div>
                    <p className="flex items-center gap-2.5 rounded-xl bg-ivory-100 p-3.5 text-[13px] text-ink-700">
                      <span className="material-symbols-outlined text-[20px] text-maroon-600">lock</span>
                      256-bit SSL encrypted. 100% of your donation directly reaches the parish mission.
                    </p>
                    <button type="submit" className="btn-primary w-full !py-3.5 !text-[15px]">
                      <span className="material-symbols-outlined text-[22px]">volunteer_activism</span>
                      Confirm Offering of ₹{currentAmount}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { NavigationTab } from '../types';

interface OfferingsScreenProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenPrayerModal: () => void;
}

export const OfferingsScreen: React.FC<OfferingsScreenProps> = ({ onNavigate, onOpenPrayerModal }) => {
  const [selectedFund, setSelectedFund] = useState<'shrine' | 'mercy' | 'mass' | 'flowers'>('shrine');
  const [amount, setAmount] = useState<number>(50);
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
    <div className="flex flex-col w-full font-body-md text-[#071e28]">
      {/* Top Header */}
      <section className="bg-gradient-to-b from-[#e8f6ff] via-[#f4faff] to-[#ffffff] px-4 sm:px-6 lg:px-12 pt-8 pb-12">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dbf1ff] text-[#006780] font-label-sm text-[11px] uppercase tracking-widest font-semibold">
              <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                volunteer_activism
              </span>
              Sacred Offerings &amp; Stewardship
            </span>
            <span className="text-[#bec8cd] font-label-md">•</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ffdf98]/40 text-[#5e4706] font-label-sm text-[11px] font-semibold">
              Tax-Deductible 501(c)(3)
            </span>
          </div>

          <div className="space-y-3 max-w-3xl">
            <h1 className="font-headline-lg lg:font-display-lg text-3xl sm:text-4xl lg:text-[48px] text-[#071e28] font-serif font-semibold leading-tight">
              Support the Shrine, Sacraments &amp; Poor
            </h1>
            <p className="font-body-lg text-sm sm:text-base text-[#3e484d] leading-relaxed">
              “Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.” (2 Corinthians 9:7)
            </p>
          </div>
        </div>
      </section>

      {/* Main Offering Form & Funds Selection */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-10 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Funds Explanation */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-headline-md text-2xl text-[#071e28] font-serif font-bold">
              Select Your Area of Giving
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-[#3e484d] leading-relaxed">
              Every dollar contributed supports the preservation of Our Lady's sanctuary, priestly formation, sacred music, and compassionate outreach to those in need.
            </p>

            <div className="space-y-3">
              <div
                onClick={() => setSelectedFund('shrine')}
                className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                  selectedFund === 'shrine'
                    ? 'bg-[#dbf1ff] border-[#006780] shadow-xs'
                    : 'bg-[#e8f6ff] border-[#dbf1ff] hover:bg-[#dbf1ff]/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#006780]">synagogue</span>
                    <h4 className="font-title-md text-sm font-bold text-[#071e28]">Shrine &amp; Sanctuary Care</h4>
                  </div>
                  <span className="text-xs font-semibold text-[#006780]">Primary Fund</span>
                </div>
                <p className="font-body-sm text-xs text-[#3e484d] mt-1">
                  Preserving the 1904 marble shrine, lighting perpetual vigil lamps, and welcoming pilgrims.
                </p>
              </div>

              <div
                onClick={() => setSelectedFund('mercy')}
                className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                  selectedFund === 'mercy'
                    ? 'bg-[#dbf1ff] border-[#006780] shadow-xs'
                    : 'bg-[#e8f6ff] border-[#dbf1ff] hover:bg-[#dbf1ff]/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#745b1b]">soup_kitchen</span>
                    <h4 className="font-title-md text-sm font-bold text-[#071e28]">Mercy Food Bank &amp; Charity</h4>
                  </div>
                  <span className="text-xs font-semibold text-[#745b1b]">Poverty Relief</span>
                </div>
                <p className="font-body-sm text-xs text-[#3e484d] mt-1">
                  Feeding 300+ hungry individuals each Saturday and helping families in emergency crises.
                </p>
              </div>

              <div
                onClick={() => setSelectedFund('mass')}
                className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                  selectedFund === 'mass'
                    ? 'bg-[#dbf1ff] border-[#006780] shadow-xs'
                    : 'bg-[#e8f6ff] border-[#dbf1ff] hover:bg-[#dbf1ff]/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#006687]">church</span>
                    <h4 className="font-title-md text-sm font-bold text-[#071e28]">Holy Mass Stipend</h4>
                  </div>
                  <span className="text-xs font-semibold text-[#006687]">Stipend</span>
                </div>
                <p className="font-body-sm text-xs text-[#3e484d] mt-1">
                  Dedicated holy mass celebrated for your requested intentions and loved ones.
                </p>
              </div>

              <div
                onClick={() => setSelectedFund('flowers')}
                className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                  selectedFund === 'flowers'
                    ? 'bg-[#dbf1ff] border-[#006780] shadow-xs'
                    : 'bg-[#e8f6ff] border-[#dbf1ff] hover:bg-[#dbf1ff]/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#006780]">spa</span>
                    <h4 className="font-title-md text-sm font-bold text-[#071e28]">Altar Flowers &amp; Linens</h4>
                  </div>
                  <span className="text-xs font-semibold text-[#006780]">Adornment</span>
                </div>
                <p className="font-body-sm text-xs text-[#3e484d] mt-1">
                  Beautifying the altar of Our Lady with fresh floral arrangements and liturgical linens.
                </p>
              </div>
            </div>
          </div>

          {/* Donation Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#ffffff] rounded-3xl p-6 sm:p-8 shadow-lg border border-[#dbf1ff] space-y-5">
              <div className="flex items-center justify-between border-b border-[#dbf1ff] pb-3">
                <h3 className="font-title-lg text-lg text-[#071e28] font-bold">Online Offering Portal</h3>
                <div className="flex gap-1 bg-[#e8f6ff] p-1 rounded-xl">
                  <button
                    onClick={() => setFrequency('one-time')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                      frequency === 'one-time' ? 'bg-[#006780] text-white shadow-2xs' : 'text-[#3e484d]'
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    onClick={() => setFrequency('monthly')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                      frequency === 'monthly' ? 'bg-[#006780] text-white shadow-2xs' : 'text-[#3e484d]'
                    }`}
                  >
                    Monthly Sustainer
                  </button>
                </div>
              </div>

              {success ? (
                <div className="p-8 rounded-2xl bg-[#e8f6ff] text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#67c7e8]/30 text-[#006780] flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-3xl">verified</span>
                  </div>
                  <h4 className="font-headline-md text-xl text-[#006780] font-bold">
                    May God Bless Your Sacrificial Giving!
                  </h4>
                  <p className="font-body-md text-xs sm:text-sm text-[#3e484d]">
                    Your offering of <strong>${currentAmount}</strong> has been registered. An official tax receipt has been sent to your email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDonate} className="space-y-4">
                  {/* Amount Selector */}
                  <div>
                    <label className="block font-label-md text-xs text-[#071e28] mb-1.5 font-semibold">
                      Select Amount (USD)
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[25, 50, 100, 250].map((val) => (
                        <button
                          type="button"
                          key={val}
                          onClick={() => {
                            setAmount(val);
                            setCustomAmount('');
                          }}
                          className={`py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer border ${
                            amount === val && !customAmount
                              ? 'bg-[#006780] text-white border-[#006780] shadow-xs'
                              : 'bg-[#e8f6ff] text-[#071e28] border-[#dbf1ff] hover:bg-[#dbf1ff]'
                          }`}
                        >
                          ${val}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-label-md text-xs text-[#071e28] mb-1 font-semibold">
                      Or Enter Custom Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-2.5 text-[#3e484d] font-bold text-sm">$</span>
                      <input
                        type="number"
                        min="1"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Other amount"
                        className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-[#ffffff] border border-[#dbf1ff] text-xs sm:text-sm text-[#071e28] focus:ring-2 focus:ring-[#67c7e8] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-label-md text-xs text-[#071e28] mb-1 font-semibold">
                        Donor Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#ffffff] border border-[#dbf1ff] text-xs sm:text-sm text-[#071e28] focus:ring-2 focus:ring-[#67c7e8] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-label-md text-xs text-[#071e28] mb-1 font-semibold">
                        Email Address (for Tax Receipt) *
                      </label>
                      <input
                        type="email"
                        required
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        placeholder="name@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#ffffff] border border-[#dbf1ff] text-xs sm:text-sm text-[#071e28] focus:ring-2 focus:ring-[#67c7e8] outline-none"
                      />
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#e8f6ff] text-xs text-[#3e484d] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006780] text-base">lock</span>
                    <span>256-bit SSL encrypted. 100% of your donation directly reaches the parish mission.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#006780] hover:bg-[#006687] text-white font-label-md text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-lg">volunteer_activism</span>
                    <span>Confirm Offering of ${currentAmount}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

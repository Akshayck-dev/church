import React, { useState } from 'react';
import { NavigationTab, SacramentInfo } from '../types';
import { SACRAMENTS_DATA, IMAGES } from '../data/parishData';

interface SacramentsScreenProps {
  onNavigate: (tab: NavigationTab) => void;
  onSelectSacrament: (sacrament: SacramentInfo) => void;
}

export const SacramentsScreen: React.FC<SacramentsScreenProps> = ({
  onNavigate,
  onSelectSacrament,
}) => {
  const [consultantName, setConsultantName] = useState('');
  const [consultantEmail, setConsultantEmail] = useState('');
  const [consultantPhone, setConsultantPhone] = useState('');
  const [consultantTopic, setConsultantTopic] = useState('Spiritual Direction & Discernment');
  const [consultantDate, setConsultantDate] = useState('');
  const [consultantNotes, setConsultantNotes] = useState('');
  const [consultSuccess, setConsultSuccess] = useState(false);

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultSuccess(true);
    setTimeout(() => {
      setConsultSuccess(false);
      setConsultantName('');
      setConsultantEmail('');
      setConsultantPhone('');
      setConsultantNotes('');
    }, 4500);
  };

  const handleDownloadDoc = (docName: string) => {
    alert(`Downloading ${docName}. The PDF has been initiated.`);
  };

  return (
    <div className="flex flex-col w-full font-body-md text-[#071e28]">
      {/* Top Breadcrumb & Hero Header */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#e8f6ff] via-[#f4faff] to-[#ffffff] px-4 sm:px-6 lg:px-12 pt-8 pb-12">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dbf1ff] text-[#006780] font-label-sm text-[11px] uppercase tracking-widest font-semibold">
              <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                local_library
              </span>
              Pastoral Care &amp; Liturgical Life
            </span>
            <span className="text-[#bec8cd] font-label-md">•</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ffdf98]/40 text-[#5e4706] font-label-sm text-[11px] font-semibold">
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
              Seven Sacred Vessels of Grace
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="font-label-md text-xs uppercase tracking-[0.2em] text-[#006687] font-semibold">
                Sanctifying Life from Birth to Eternity
              </span>
              <h1 className="font-headline-lg lg:font-display-lg text-3xl sm:text-4xl lg:text-[48px] text-[#071e28] font-serif font-semibold leading-tight">
                Vessels of Divine Mercy &amp; Parish Pastoral Care
              </h1>
              <p className="font-headline-sm text-base sm:text-lg italic text-[#006687] font-serif leading-relaxed">
                “An outward sign instituted by Christ to give grace.”
              </p>
              <p className="font-body-lg text-sm sm:text-base text-[#3e484d] max-w-2xl leading-relaxed">
                The Seven Sacraments touch all the stages and all the important moments of Christian life: they give birth and increase, healing and mission to the Christian’s life of faith. Explore guidelines, scheduling, and pastoral preparation.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/10] bg-[#c7ddeb] border border-[#dbf1ff]">
                <img
                  alt="Priest administering the Holy Eucharist during Solemn Mass"
                  className="w-full h-full object-cover"
                  src={IMAGES.mainMarianSanctuary}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e333e]/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="font-label-sm text-xs text-[#ffdf98] uppercase tracking-wider font-semibold">
                    The Holy Mysteries
                  </span>
                  <p className="font-title-md text-sm text-white font-serif">
                    Celebrated Daily in Accordance with the Roman Rite
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Sacramental Callout Bar */}
      <section className="w-full px-4 sm:px-6 lg:px-12 -mt-4 mb-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#ba1a1a] to-[#93000a] text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">medical_services</span>
              </div>
              <div>
                <h3 className="font-title-md text-sm sm:text-base font-bold text-[#ffdad6]">
                  Urgent Sacramental Anointing (Viaticum)
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-white/90">
                  For parishioners in imminent danger of death or facing emergency surgery, our priests are available 24/7.
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <a
                href="tel:+18005556274"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#93000a] font-label-md text-xs sm:text-sm font-bold shadow-md hover:bg-[#ffdad6] transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Call Hotline: +1 (800) 555-6274 (Press 1)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Seven Liturgical Vessels */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-10 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-label-md text-xs uppercase tracking-widest text-[#006780] font-semibold">
              Sacramental Directory
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28] font-serif font-semibold">
              The Seven Sacraments of the Church
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-[#3e484d]">
              Select any Sacrament to view pastoral prerequisites, required documentation, preparation classes, and schedule requests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SACRAMENTS_DATA.map((sacrament) => (
              <div
                key={sacrament.key}
                className="p-6 rounded-2xl bg-[#ffffff] shadow-xs hover:shadow-md transition-all flex flex-col justify-between border border-[#dbf1ff] group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#dbf1ff] text-[#006780] group-hover:bg-[#67c7e8] group-hover:text-[#005266] flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined text-[28px]">{sacrament.icon}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#e8f6ff] text-[#006687] font-label-sm text-[10px] uppercase font-bold tracking-wider">
                      {sacrament.category}
                    </span>
                  </div>

                  <div>
                    <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#745b1b] font-semibold block">
                      {sacrament.category}
                    </span>
                    <h3 className="font-title-lg text-lg text-[#071e28] font-bold mt-0.5">
                      {sacrament.title}
                    </h3>
                  </div>

                  <p className="font-body-sm text-xs text-[#3e484d] leading-relaxed">
                    {sacrament.shortDesc}
                  </p>

                  <div className="p-3 rounded-xl bg-[#e8f6ff] text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-[#6e797d]">Schedule:</span>
                      <span className="font-semibold text-[#071e28] text-right">{sacrament.fullGuide.schedule}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#dbf1ff]">
                  <button
                    onClick={() => onSelectSacrament(sacrament)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#dbf1ff] hover:bg-[#006780] text-[#006780] hover:text-white font-label-md text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Guidelines &amp; Requirements</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RCIA / OCIA Spotlight Banner */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-[#e8f6ff]">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#ffffff] shadow-md border border-[#dbf1ff]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dbf1ff] text-[#006780] font-label-sm text-xs uppercase tracking-wider font-semibold">
                  <span className="material-symbols-outlined text-[16px]">explore</span>
                  Adult Faith Journey
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28] font-serif font-semibold">
                  Are You Seeking the Catholic Faith? (OCIA / RCIA)
                </h2>
                <p className="font-body-md text-xs sm:text-sm text-[#3e484d] leading-relaxed">
                  The Order of Christian Initiation for Adults is a welcoming spiritual pathway for unbaptized adults, as well as baptized Christians of other traditions seeking full communion with the Catholic Church. Classes meet weekly on Thursday evenings.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => alert("RCIA inquiry form opened. Classes begin September 2026.")}
                    className="px-6 py-2.5 rounded-xl bg-[#006780] hover:bg-[#006687] text-white font-label-md text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer"
                  >
                    Enroll in RCIA 2026
                  </button>
                  <button
                    onClick={() => alert("Please email rcia@sanctamaria-shrine.org to speak with the RCIA coordinator.")}
                    className="px-5 py-2.5 rounded-xl bg-[#dbf1ff] text-[#006780] hover:bg-[#d5ecfa] font-label-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Schedule Inquiry Conversation
                  </button>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3 p-5 rounded-2xl bg-[#e8f6ff] text-xs border border-[#dbf1ff]">
                <div className="flex items-center gap-2 font-bold text-[#071e28]">
                  <span className="material-symbols-outlined text-[#006780]">verified_user</span>
                  <span>RCIA Highlights</span>
                </div>
                <p className="text-[#3e484d]">
                  • No pressure or obligation to join<br />
                  • Personal mentor/sponsor provided<br />
                  • Sacraments received at Easter Vigil Mass
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pastoral Forms & Documents Downloads */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="font-label-md text-xs uppercase tracking-widest text-[#006780] font-semibold block">
                Official Forms
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28] font-serif font-semibold">
                Pastoral Office &amp; Sacramental Records
              </h2>
            </div>
            <p className="font-body-sm text-xs text-[#3e484d] max-w-sm">
              Need certified baptismal certificates, wedding checklists, or godparent affidavits? Download printable PDFs below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#e8f6ff] flex items-center justify-between border border-[#dbf1ff]">
              <div className="space-y-1">
                <span className="font-title-md text-xs sm:text-sm text-[#071e28] font-bold block">
                  Infant Baptism Form
                </span>
                <span className="text-[11px] text-[#6e797d]">PDF (240 KB)</span>
              </div>
              <button
                onClick={() => handleDownloadDoc('Infant_Baptism_Form_2026.pdf')}
                className="p-2 rounded-lg bg-white text-[#006780] hover:bg-[#67c7e8] hover:text-[#005266] transition-colors shadow-2xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">download</span>
              </button>
            </div>

            <div className="p-4 rounded-xl bg-[#e8f6ff] flex items-center justify-between border border-[#dbf1ff]">
              <div className="space-y-1">
                <span className="font-title-md text-xs sm:text-sm text-[#071e28] font-bold block">
                  Wedding Guidelines Packet
                </span>
                <span className="text-[11px] text-[#6e797d]">PDF (1.2 MB)</span>
              </div>
              <button
                onClick={() => handleDownloadDoc('Holy_Matrimony_Guidelines_2026.pdf')}
                className="p-2 rounded-lg bg-white text-[#006780] hover:bg-[#67c7e8] hover:text-[#005266] transition-colors shadow-2xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">download</span>
              </button>
            </div>

            <div className="p-4 rounded-xl bg-[#e8f6ff] flex items-center justify-between border border-[#dbf1ff]">
              <div className="space-y-1">
                <span className="font-title-md text-xs sm:text-sm text-[#071e28] font-bold block">
                  Godparent / Sponsor Affidavit
                </span>
                <span className="text-[11px] text-[#6e797d]">PDF (180 KB)</span>
              </div>
              <button
                onClick={() => handleDownloadDoc('Sponsor_Eligibility_Affidavit.pdf')}
                className="p-2 rounded-lg bg-white text-[#006780] hover:bg-[#67c7e8] hover:text-[#005266] transition-colors shadow-2xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">download</span>
              </button>
            </div>

            <div className="p-4 rounded-xl bg-[#e8f6ff] flex items-center justify-between border border-[#dbf1ff]">
              <div className="space-y-1">
                <span className="font-title-md text-xs sm:text-sm text-[#071e28] font-bold block">
                  Sacramental Record Request
                </span>
                <span className="text-[11px] text-[#6e797d]">PDF (150 KB)</span>
              </div>
              <button
                onClick={() => handleDownloadDoc('Sacramental_Record_Request.pdf')}
                className="p-2 rounded-lg bg-white text-[#006780] hover:bg-[#67c7e8] hover:text-[#005266] transition-colors shadow-2xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">download</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pastoral Consultation Booking Form */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-14 bg-[#e8f6ff]" id="consultation">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#ffffff] rounded-3xl p-6 sm:p-10 shadow-lg border border-[#dbf1ff]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dbf1ff] text-[#006780] font-label-sm text-xs uppercase font-semibold">
                  <span className="material-symbols-outlined text-sm">support_agent</span>
                  <span>Personal Meeting with Clergy</span>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#071e28] font-serif font-semibold">
                  Arrange a Pastoral Consultation
                </h2>
                <p className="font-body-md text-xs sm:text-sm text-[#3e484d] leading-relaxed">
                  Our priests are here to accompany you through moments of spiritual uncertainty, grief, marital discernment, or family crises. Request a private pastoral meeting with Fr. Joseph Mathew or associate priests.
                </p>

                <div className="p-4 rounded-2xl bg-[#e8f6ff] space-y-2 text-xs border border-[#dbf1ff]">
                  <div className="flex items-center gap-2 text-[#006780] font-bold">
                    <span className="material-symbols-outlined text-[18px]">lock</span>
                    <span>Absolute Sacramental Confidentiality</span>
                  </div>
                  <p className="text-[#3e484d]">
                    Every consultation is protected by canonical confidentiality and held in the quiet Pastoral Parlor.
                  </p>
                </div>
              </div>

              {/* Consultation Booking Form */}
              <div className="lg:col-span-7 bg-[#e8f6ff] p-6 sm:p-8 rounded-2xl border border-[#dbf1ff]">
                {consultSuccess ? (
                  <div className="p-6 rounded-2xl bg-white border border-[#dbf1ff] text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#67c7e8]/30 text-[#006780] flex items-center justify-center mx-auto">
                      <span className="material-symbols-outlined text-2xl">event_available</span>
                    </div>
                    <h4 className="font-title-md text-base text-[#006780] font-bold">Consultation Requested</h4>
                    <p className="font-body-sm text-xs text-[#3e484d]">
                      The Parish Secretary will review your request and confirm your appointment with Father within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-3.5" onSubmit={handleConsultSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-label-sm text-xs uppercase tracking-wider text-[#3e484d] mb-1 font-semibold">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={consultantName}
                          onChange={(e) => setConsultantName(e.target.value)}
                          placeholder="e.g. John Peter"
                          className="w-full bg-[#ffffff] px-3.5 py-2.5 rounded-xl font-body-sm text-xs sm:text-sm text-[#071e28] focus:outline-none focus:ring-2 focus:ring-[#67c7e8] border border-[#dbf1ff]"
                        />
                      </div>
                      <div>
                        <label className="block font-label-sm text-xs uppercase tracking-wider text-[#3e484d] mb-1 font-semibold">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={consultantEmail}
                          onChange={(e) => setConsultantEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full bg-[#ffffff] px-3.5 py-2.5 rounded-xl font-body-sm text-xs sm:text-sm text-[#071e28] focus:outline-none focus:ring-2 focus:ring-[#67c7e8] border border-[#dbf1ff]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-label-sm text-xs uppercase tracking-wider text-[#3e484d] mb-1 font-semibold">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={consultantPhone}
                          onChange={(e) => setConsultantPhone(e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-[#ffffff] px-3.5 py-2.5 rounded-xl font-body-sm text-xs sm:text-sm text-[#071e28] focus:outline-none focus:ring-2 focus:ring-[#67c7e8] border border-[#dbf1ff]"
                        />
                      </div>
                      <div>
                        <label className="block font-label-sm text-xs uppercase tracking-wider text-[#3e484d] mb-1 font-semibold">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={consultantDate}
                          onChange={(e) => setConsultantDate(e.target.value)}
                          className="w-full bg-[#ffffff] px-3.5 py-2.5 rounded-xl font-body-sm text-xs sm:text-sm text-[#071e28] focus:outline-none focus:ring-2 focus:ring-[#67c7e8] border border-[#dbf1ff]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-label-sm text-xs uppercase tracking-wider text-[#3e484d] mb-1 font-semibold">
                        Topic of Pastoral Consultation
                      </label>
                      <select
                        value={consultantTopic}
                        onChange={(e) => setConsultantTopic(e.target.value)}
                        className="w-full bg-[#ffffff] px-3.5 py-2.5 rounded-xl font-body-sm text-xs sm:text-sm text-[#071e28] focus:outline-none focus:ring-2 focus:ring-[#67c7e8] border border-[#dbf1ff]"
                      >
                        <option>Spiritual Direction &amp; Discernment</option>
                        <option>Marriage Convalidation / Preparation</option>
                        <option>Baptism Preparation Consultation</option>
                        <option>Grief, Bereavement &amp; Loss Support</option>
                        <option>Returning to the Sacraments After Long Absence</option>
                        <option>General Pastoral Counsel</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-label-sm text-xs uppercase tracking-wider text-[#3e484d] mb-1 font-semibold">
                        Brief Note (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={consultantNotes}
                        onChange={(e) => setConsultantNotes(e.target.value)}
                        placeholder="Any additional information you wish to share ahead of time..."
                        className="w-full bg-[#ffffff] px-3.5 py-2.5 rounded-xl font-body-sm text-xs sm:text-sm text-[#071e28] focus:outline-none focus:ring-2 focus:ring-[#67c7e8] border border-[#dbf1ff] resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-[#006780] hover:bg-[#006687] text-white font-label-md text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-lg">calendar_today</span>
                        <span>Submit Pastoral Consultation Request</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

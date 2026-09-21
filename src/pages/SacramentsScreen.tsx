import React, { useState } from 'react';
import { NavigationTab, SacramentInfo } from '../types';
import { SACRAMENTS_DATA, IMAGES } from '../data/parishData';
import { Reveal, PageHero, SectionHeading, DividerCross } from '../components/ui';

interface SacramentsScreenProps {
  onNavigate: (tab: NavigationTab) => void;
  onSelectSacrament: (sacrament: SacramentInfo) => void;
}

export const SacramentsScreen: React.FC<SacramentsScreenProps> = ({
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

  const docDownloads = [
    { title: 'Infant Baptism Form', size: 'PDF (240 KB)', file: 'Infant_Baptism_Form_2026.pdf' },
    { title: 'Wedding Guidelines Packet', size: 'PDF (1.2 MB)', file: 'Holy_Matrimony_Guidelines_2026.pdf' },
    { title: 'Godparent / Sponsor Affidavit', size: 'PDF (180 KB)', file: 'Sponsor_Eligibility_Affidavit.pdf' },
    { title: 'Sacramental Record Request', size: 'PDF (150 KB)', file: 'Sacramental_Record_Request.pdf' },
  ];

  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Pastoral Care & Liturgical Life"
        badge="Seven Sacred Vessels of Grace"
        kicker="Sanctifying Life from Birth to Eternity"
        title="Vessels of Divine Mercy & Parish Pastoral Care"
        description="“An outward sign instituted by Christ to give grace.” The Seven Sacraments touch all the stages and all the important moments of Christian life: they give birth and increase, healing and mission to the Christian's life of faith. Explore guidelines, scheduling, and pastoral preparation."
        image={IMAGES.mainMarianSanctuary}
        imageAlt="Priest administering the Holy Eucharist during Solemn Mass"
        imageCaption="The Holy Mysteries"
        imageCaptionSub="Celebrated Daily in the Syro-Malabar Rite"
      />

      {/* Emergency sacramental callout */}
      <section className="bg-ivory-50" aria-label="Urgent sacramental anointing">
        <div className="container-site py-8 lg:py-10">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-maroon-800 p-5 text-ivory-50 shadow-soft sm:p-6 md:flex-row">
              <div className="flex items-center gap-4 text-center md:text-left">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ivory-50/15 text-gold-300">
                  <span className="material-symbols-outlined text-[26px]">medical_services</span>
                </span>
                <div>
                  <h2 className="text-[1.05rem] font-bold text-ivory-50">Urgent Sacramental Anointing (Viaticum)</h2>
                  <p className="mt-0.5 text-[13px] leading-relaxed text-ivory-200/85">
                    For parishioners in imminent danger of death or facing emergency surgery, our priests are available 24/7.
                  </p>
                </div>
              </div>
              <a href="tel:+914862258257" className="btn-gold shrink-0">
                <span className="material-symbols-outlined text-[20px]">call</span>
                Call Hotline: +91 4862 258 257 (Press 1)
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The seven sacraments */}
      <section className="bg-white" aria-label="Sacramental directory">
        <div className="container-site py-12 lg:py-16">
          <SectionHeading
            eyebrow="Sacramental Directory"
            title="The Seven Sacraments of the Church"
            description="Select any Sacrament to view pastoral prerequisites, required documentation, preparation classes, and schedule requests."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SACRAMENTS_DATA.map((sacrament, i) => (
              <Reveal key={sacrament.key} delay={(i % 3) * 80} className="h-full">
                <article className="card card-hover flex h-full flex-col p-6">
                  <div className="flex-1 space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="icon-tile">
                        <span className="material-symbols-outlined text-[26px]">{sacrament.icon}</span>
                      </span>
                      <span className="rounded-full bg-ivory-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-maroon-600">
                        {sacrament.category}
                      </span>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-600">{sacrament.category}</p>
                      <h3 className="t-h3 mt-1 text-ink-950">{sacrament.title}</h3>
                    </div>
                    <p className="t-small">{sacrament.shortDesc}</p>
                    <div className="rounded-xl bg-ivory-100 p-3.5">
                      <div className="flex justify-between gap-3 text-[12px]">
                        <span className="shrink-0 font-semibold text-ink-500">Schedule:</span>
                        <span className="text-right font-semibold text-ink-900">{sacrament.fullGuide.schedule}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 border-t border-line-soft pt-4">
                    <button
                      onClick={() => onSelectSacrament(sacrament)}
                      className="btn-outline btn-sm w-full"
                    >
                      View Guidelines &amp; Requirements
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-ivory-50 pt-2">
        <DividerCross />
      </div>

      {/* RCIA / OCIA spotlight */}
      <section className="bg-ivory-50" aria-label="RCIA and OCIA">
        <div className="container-site py-12 lg:py-16">
          <Reveal>
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="p-7 sm:p-10 lg:col-span-8">
                  <span className="eyebrow">Adult Faith Journey</span>
                  <h2 className="t-h2 mt-3 text-balance text-ink-950">Are You Seeking the Catholic Faith? (OCIA / RCIA)</h2>
                  <p className="t-body mt-4">
                    The Order of Christian Initiation for Adults is a welcoming spiritual pathway for unbaptized adults, as well as baptized Christians of other traditions seeking full communion with the Catholic Church. Classes meet weekly on Thursday evenings.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      onClick={() => alert("RCIA inquiry form opened. Classes begin September 2026.")}
                      className="btn-primary"
                    >
                      Enroll in RCIA 2026
                    </button>
                    <button
                      onClick={() => alert("Please email lourdemathathalayanadu@gmail.com to speak with the RCIA coordinator.")}
                      className="btn-outline"
                    >
                      Schedule Inquiry Conversation
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-3 border-t border-line-soft bg-ivory-100 p-7 sm:p-10 lg:col-span-4 lg:border-l lg:border-t-0">
                  <p className="inline-flex items-center gap-2 font-bold text-ink-950">
                    <span className="material-symbols-outlined text-[20px] text-maroon-600">verified_user</span>
                    RCIA Highlights
                  </p>
                  <ul className="t-small list-disc space-y-1.5 pl-5">
                    <li>No pressure or obligation to join</li>
                    <li>Personal mentor/sponsor provided</li>
                    <li>Sacraments received at Easter Vigil Mass</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pastoral forms & document downloads */}
      <section className="bg-white" aria-label="Pastoral forms and documents">
        <div className="container-site py-12 lg:py-16">
          <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Official Forms</span>
              <h2 className="t-h2 mt-3 text-ink-950">Pastoral Office &amp; Sacramental Records</h2>
            </div>
            <p className="t-small max-w-sm">
              Need certified baptismal certificates, wedding checklists, or godparent affidavits? Download printable PDFs below.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {docDownloads.map((doc, i) => (
              <Reveal key={doc.title} delay={i * 70} className="h-full">
                <div className="card card-hover flex h-full items-center justify-between gap-3 p-5">
                  <div>
                    <h3 className="text-[14px] font-bold text-ink-950">{doc.title}</h3>
                    <p className="mt-1 text-[12px] text-ink-500">{doc.size}</p>
                  </div>
                  <button
                    onClick={() => handleDownloadDoc(doc.file)}
                    aria-label={`Download ${doc.title}`}
                    className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-ivory-100 text-maroon-700 transition-colors hover:bg-maroon-600 hover:text-ivory-50"
                  >
                    <span className="material-symbols-outlined text-[20px]">download</span>
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pastoral consultation booking */}
      <section className="scroll-mt-28 bg-ivory-50" id="consultation" aria-label="Arrange a pastoral consultation">
        <div className="container-site py-12 lg:py-16">
          <Reveal>
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="bg-maroon-900 p-7 text-ivory-100 sm:p-10 lg:col-span-5">
                  <span className="eyebrow eyebrow-on-dark">Personal Meeting with Clergy</span>
                  <h2 className="t-h2 mt-3 text-balance text-ivory-50">Arrange a Pastoral Consultation</h2>
                  <p className="mt-4 text-[14px] leading-relaxed text-ivory-200/85">
                    Our priests are here to accompany you through moments of spiritual uncertainty, grief, marital discernment, or family crises. Request a private pastoral meeting with Fr. Sebastian Thumbamattam.
                  </p>
                  <div className="mt-6 rounded-2xl bg-maroon-950/50 p-5 ring-1 ring-ivory-100/15">
                    <p className="inline-flex items-center gap-2 font-bold text-ivory-50">
                      <span className="material-symbols-outlined text-[20px] text-gold-300">lock</span>
                      Absolute Sacramental Confidentiality
                    </p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-ivory-200/80">
                      Every consultation is protected by canonical confidentiality and held in the quiet Pastoral Parlor.
                    </p>
                  </div>
                </div>
                <div className="bg-ivory-100 p-6 sm:p-8 lg:col-span-7">
                  {consultSuccess ? (
                    <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-line bg-white p-8 text-center" role="status">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon-600/10 text-maroon-700">
                        <span className="material-symbols-outlined text-3xl">event_available</span>
                      </span>
                      <h3 className="mt-3 text-[16px] font-bold text-maroon-700">Consultation Requested</h3>
                      <p className="t-small mt-1.5 max-w-sm">
                        The Parish Secretary will review your request and confirm your appointment with Father within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form className="space-y-4" onSubmit={handleConsultSubmit}>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="label" htmlFor="consult-name">Your Full Name *</label>
                          <input
                            id="consult-name"
                            type="text"
                            required
                            value={consultantName}
                            onChange={(e) => setConsultantName(e.target.value)}
                            placeholder="e.g. John Peter"
                            className="input !bg-white"
                          />
                        </div>
                        <div>
                          <label className="label" htmlFor="consult-email">Email Address *</label>
                          <input
                            id="consult-email"
                            type="email"
                            required
                            value={consultantEmail}
                            onChange={(e) => setConsultantEmail(e.target.value)}
                            placeholder="name@example.com"
                            className="input !bg-white"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="label" htmlFor="consult-phone">Phone Number *</label>
                          <input
                            id="consult-phone"
                            type="tel"
                            required
                            value={consultantPhone}
                            onChange={(e) => setConsultantPhone(e.target.value)}
                            placeholder="+91 98XXX XXXXX"
                            className="input !bg-white"
                          />
                        </div>
                        <div>
                          <label className="label" htmlFor="consult-date">Preferred Date</label>
                          <input
                            id="consult-date"
                            type="date"
                            value={consultantDate}
                            onChange={(e) => setConsultantDate(e.target.value)}
                            className="input !bg-white"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="label" htmlFor="consult-topic">Topic of Pastoral Consultation</label>
                        <select
                          id="consult-topic"
                          value={consultantTopic}
                          onChange={(e) => setConsultantTopic(e.target.value)}
                          className="input !bg-white"
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
                        <label className="label" htmlFor="consult-notes">Brief Note (Optional)</label>
                        <textarea
                          id="consult-notes"
                          rows={3}
                          value={consultantNotes}
                          onChange={(e) => setConsultantNotes(e.target.value)}
                          placeholder="Any additional information you wish to share ahead of time..."
                          className="input !bg-white resize-none"
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full">
                        <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                        Submit Pastoral Consultation Request
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

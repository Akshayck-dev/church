import React from 'react';
import { SACRAMENTS_DATA } from '../data/parishData';

interface SacramentModalProps {
  sacramentKey: string | null;
  onClose: () => void;
  onBookSacrament: (key: string) => void;
}

export const SacramentModal: React.FC<SacramentModalProps> = ({
  sacramentKey,
  onClose,
  onBookSacrament,
}) => {
  if (!sacramentKey) return null;
  const sacrament = SACRAMENTS_DATA.find((s) => s.key === sacramentKey);
  if (!sacrament) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-maroon-950/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${sacrament.title} guidelines`}>
      <div className="card relative my-8 w-full max-w-xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-ivory-100 text-ink-900 transition-colors hover:bg-ivory-200"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-3.5 border-b border-line-soft pb-4">
            <span className="icon-tile !h-12 !w-12"><span className="material-symbols-outlined text-[24px]">{sacrament.icon}</span></span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-maroon-600">
                {sacrament.category}
              </span>
              <h3 className="mt-0.5 font-serif text-[1.5rem] font-semibold text-ink-950">{sacrament.title} Guidelines</h3>
            </div>
          </div>

          <p className="t-body">
            {sacrament.fullGuide.description}
          </p>

          <div className="space-y-2.5 rounded-2xl border border-line-soft bg-ivory-100 p-4">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.14em] text-maroon-600">
              Prerequisites & Requirements
            </h4>
            <ul className="list-inside list-disc space-y-1.5 text-[13px] leading-relaxed text-ink-900">
              {sacrament.fullGuide.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-start gap-2.5 rounded-xl bg-ivory-100 p-3.5 text-[13px] text-maroon-800">
            <span className="material-symbols-outlined mt-0.5 text-[20px]">event</span>
            <div>
              <span className="block font-bold">Schedule & Celebration:</span>
              <span>{sacrament.fullGuide.schedule}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 pt-3 sm:flex-row">
            <button
              type="button"
              onClick={() => onBookSacrament(sacrament.key)}
              className="btn-primary flex-1"
            >
              Proceed to Pastoral Consultation & Registration
            </button>
            <button
              type="button"
              onClick={onClose}
              className="btn-outline"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

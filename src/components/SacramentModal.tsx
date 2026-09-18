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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e333e]/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-[#ffffff] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-[#dbf1ff] my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#dbf1ff] hover:bg-[#d5ecfa] text-[#071e28] flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b border-[#dbf1ff] pb-4">
            <div className="w-12 h-12 rounded-xl bg-[#67c7e8]/30 text-[#006780] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl">{sacrament.icon}</span>
            </div>
            <div>
              <span className="font-label-sm text-xs uppercase tracking-wider text-[#006687] font-semibold">
                {sacrament.category}
              </span>
              <h3 className="font-headline-md text-2xl text-[#071e28]">{sacrament.title} Guidelines</h3>
            </div>
          </div>

          <p className="font-body-md text-[#3e484d] leading-relaxed">
            {sacrament.fullGuide.description}
          </p>

          <div className="bg-[#f4faff] border border-[#dbf1ff] p-4 rounded-2xl space-y-2 text-sm">
            <h4 className="font-title-md text-xs uppercase tracking-wider text-[#006780] font-semibold">
              Prerequisites & Requirements
            </h4>
            <ul className="space-y-1.5 text-[#071e28] text-xs list-disc list-inside">
              {sacrament.fullGuide.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-[#e8f6ff] flex items-start gap-2.5 text-xs text-[#005d7c]">
            <span className="material-symbols-outlined text-base mt-0.5">event</span>
            <div>
              <span className="font-semibold block">Schedule & Celebration:</span>
              <span>{sacrament.fullGuide.schedule}</span>
            </div>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row gap-2.5">
            <button
              type="button"
              onClick={() => onBookSacrament(sacrament.key)}
              className="flex-1 py-3 px-4 rounded-xl bg-[#006780] hover:bg-[#006687] text-white font-label-md text-xs font-semibold text-center transition-colors shadow-sm"
            >
              Proceed to Pastoral Consultation & Registration
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-3 px-4 rounded-xl bg-[#dbf1ff] hover:bg-[#d5ecfa] text-[#071e28] font-label-md text-xs font-semibold text-center transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

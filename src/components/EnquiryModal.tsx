import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { LeadForm } from './LeadForm';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
  defaultPlotSize?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  source = 'Modal Popup',
  defaultPlotSize = ''
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
    >
      {/* Click backdrop to close */}
      <div className="fixed inset-0" onClick={onClose}></div>

      <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 max-w-lg w-full z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Header Bar */}
        <div className="bg-gradient-to-r from-[#0B3B2E] via-[#166534] to-[#0B3B2E] p-4 sm:p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#ECC850] text-[#0B3B2E] font-black text-sm flex items-center justify-center">
              VIP
            </div>
            <div>
              <h3 id="modal-headline" className="text-sm sm:text-base font-bold font-serif leading-tight">
                VIP Growth Town • Chengalpattu
              </h3>
              <p className="text-[11px] text-emerald-200">
                DTCP &amp; RERA Approved Villa Plots
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Enquiry Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Content */}
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          <LeadForm
            source={source}
            defaultPlotSize={defaultPlotSize}
            title="Get VIP Growth Town Details"
            submitButtonText="Submit Enquiry"
            compact={false}
            onSuccess={() => {}}
          />
        </div>

      </div>
    </div>
  );
};

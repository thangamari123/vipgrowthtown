import React, { useState, useEffect } from 'react';
import { X, Users, Download, Phone, MessageSquare, Trash2, Calendar, FileSpreadsheet } from 'lucide-react';
import { getSavedLeads, exportLeadsToCSV } from '../utils/leadStorage';
import { LeadSubmission } from '../types';
import { projectConfig } from '../data/projectData';

interface AdvisorConsoleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdvisorConsoleModal: React.FC<AdvisorConsoleModalProps> = ({ isOpen, onClose }) => {
  const [leads, setLeads] = useState<LeadSubmission[]>([]);

  useEffect(() => {
    if (isOpen) {
      setLeads(getSavedLeads());
    }
  }, [isOpen]);

  const handleClear = () => {
    if (confirm('Are you sure you want to clear stored leads from this browser session?')) {
      localStorage.removeItem('vip_growth_town_leads');
      setLeads([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="advisor-headline"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
    >
      <div className="fixed inset-0" onClick={onClose}></div>

      <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 max-w-4xl w-full z-10 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#0B3B2E] p-4 sm:p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ECC850] text-[#0B3B2E] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 id="advisor-headline" className="text-lg sm:text-xl font-bold font-serif">
                Sales Advisor Lead Management
              </h3>
              <p className="text-xs text-emerald-200">
                VIP Growth Town • {leads.length} Enquiries Captured
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportLeadsToCSV}
              disabled={leads.length === 0}
              className="bg-[#166534] hover:bg-[#1f7c42] disabled:opacity-50 text-white text-xs font-bold py-2 px-3.5 rounded-xl flex items-center gap-1.5 shadow cursor-pointer transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Lead Table / List */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {leads.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <Users className="w-12 h-12 mx-auto text-gray-300 mb-3" />
              <h4 className="text-base font-bold text-gray-700">No leads recorded yet</h4>
              <p className="text-xs text-gray-400 mt-1 max-w-sm mx-auto">
                When visitors submit forms on the landing page or modal, their enquiry will be recorded here and can be exported as CSV for your CRM.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {leads.map((lead) => {
                const waUrl = `https://wa.me/91${lead.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `Hello ${lead.name}, thank you for your interest in VIP Growth Town (Chengalpattu - Padalam). I am your VIP Housing property advisor.`
                )}`;

                return (
                  <div
                    key={lead.id}
                    className="bg-[#F7F8F5] rounded-2xl p-4 border border-[#DDE4DE] hover:border-[#166534] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#17201B] text-sm sm:text-base">
                          {lead.name}
                        </span>
                        <span className="text-[10px] font-bold bg-white text-[#166534] px-2 py-0.5 rounded-full border border-green-200">
                          {lead.plotSize || 'General'}
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono">
                          {lead.source}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
                        <span>📞 {lead.phone}</span>
                        {lead.email && <span>✉️ {lead.email}</span>}
                        <span className="text-gray-400 text-[11px]">
                          🕒 {new Date(lead.submittedAt).toLocaleString('en-IN')}
                        </span>
                      </div>

                      {lead.message && (
                        <p className="text-xs text-gray-600 italic mt-1 bg-white p-2 rounded-lg border border-gray-100">
                          "{lead.message}"
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2 px-3 rounded-xl flex items-center gap-1.5 shadow transition-all"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href={`tel:${lead.phone}`}
                        className="bg-[#0B3B2E] hover:bg-[#166534] text-white text-xs font-bold py-2 px-3 rounded-xl flex items-center gap-1.5 shadow transition-all"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {leads.length > 0 && (
          <div className="bg-gray-50 p-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
            <span>Data stored in browser session storage.</span>
            <button
              onClick={handleClear}
              className="text-red-500 hover:text-red-700 flex items-center gap-1 font-semibold cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Session Leads</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

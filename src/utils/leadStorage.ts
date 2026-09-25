import { LeadSubmission } from '../types';

const STORAGE_KEY = 'vip_growth_town_leads';

export function getSavedLeads(): LeadSubmission[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveLead(data: Omit<LeadSubmission, 'id' | 'submittedAt'>): LeadSubmission {
  const newLead: LeadSubmission = {
    ...data,
    id: 'LEAD-' + Date.now().toString(36).toUpperCase(),
    submittedAt: new Date().toISOString()
  };

  try {
    const existing = getSavedLeads();
    const updated = [newLead, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to store lead in localStorage:', err);
  }

  return newLead;
}

export function exportLeadsToCSV(): void {
  const leads = getSavedLeads();
  if (leads.length === 0) {
    alert('No leads recorded yet.');
    return;
  }

  const headers = ['ID', 'Date & Time', 'Name', 'Phone', 'Email', 'Preferred Plot Size', 'Preferred Time', 'Source', 'Message'];
  const rows = leads.map(l => [
    `"${l.id}"`,
    `"${new Date(l.submittedAt).toLocaleString('en-IN')}"`,
    `"${(l.name || '').replace(/"/g, '""')}"`,
    `"${l.phone}"`,
    `"${(l.email || '').replace(/"/g, '""')}"`,
    `"${l.plotSize || ''}"`,
    `"${l.preferredTime || ''}"`,
    `"${l.source}"`,
    `"${(l.message || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `VIP_Growth_Town_Leads_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

import React, { useState } from 'react';
import { Shield, CheckCircle2, AlertCircle, Loader2, ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { projectConfig } from '../data/projectData';
import { saveLead } from '../utils/leadStorage';

interface LeadFormProps {
  source?: string;
  defaultPlotSize?: string;
  title?: string;
  submitButtonText?: string;
  compact?: boolean;
  onSuccess?: () => void;
  className?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  source = 'Hero Lead Form',
  defaultPlotSize = '',
  title = 'Get Project Details',
  submitButtonText = 'Get Price & Availability',
  compact = false,
  onSuccess,
  className = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plotSize: defaultPlotSize,
    preferredTime: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const plotOptionsList = [
    '600 sq.ft',
    '800 sq.ft',
    '1000 sq.ft',
    '1200 sq.ft',
    '1500 sq.ft',
    '1800 sq.ft',
    '2400 sq.ft'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Strict Indian mobile number validation: 10 digits starting with 6, 7, 8, 9
    const cleanPhone = formData.phone.replace(/[\s\-+]/g, '');
    const standard10 = cleanPhone.startsWith('91') && cleanPhone.length === 12
      ? cleanPhone.slice(2)
      : cleanPhone;

    if (!cleanPhone) {
      newErrors.phone = 'Please enter your mobile number';
    } else if (!/^[6-9]\d{9}$/.test(standard10)) {
      newErrors.phone = 'Enter valid 10-digit Indian mobile (e.g. 9876543210)';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable submission with local persistence
    setTimeout(() => {
      saveLead({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        plotSize: formData.plotSize || 'Not specified',
        preferredTime: formData.preferredTime,
        message: formData.message.trim(),
        source: source
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSuccess) {
        onSuccess();
      }
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      plotSize: '',
      preferredTime: '',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

  if (isSuccess) {
    const whatsappUrl = `https://wa.me/${projectConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
      `Hello VIP Housing, I have submitted an enquiry for VIP Growth Town (Chengalpattu - Padalam). My Name: ${formData.name}, Preferred Plot: ${formData.plotSize || 'Various sizes'}. Please share the price list and brochure.`
    )}`;

    return (
      <div className={`bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-green-200 text-center ${className}`}>
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700 animate-bounce">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-[#0B3B2E] mb-2 font-serif">
          Thank you, {formData.name.split(' ')[0]}!
        </h3>
        <p className="text-sm text-gray-600 mb-5 leading-relaxed">
          Your enquiry has been received. Our VIP Housing property advisor will contact you at <strong className="text-gray-900">{formData.phone}</strong> shortly with exact plot pricing and layout details.
        </p>

        <div className="space-y-3 bg-[#F8F6EF] p-4 rounded-xl border border-[#DDE4DE] mb-5 text-left">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span>Project:</span>
            <span className="font-semibold text-gray-900">{projectConfig.projectName}</span>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span>Location:</span>
            <span className="font-semibold text-gray-900">{projectConfig.location}</span>
          </div>
          {formData.plotSize && (
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>Selected Size:</span>
              <span className="font-semibold text-[#166534]">{formData.plotSize}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect on WhatsApp Instantly</span>
          </a>

          <a
            href={`tel:${projectConfig.phone}`}
            className="w-full bg-[#0B3B2E] hover:bg-[#166534] text-white font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
          >
            <PhoneCall className="w-4 h-4 text-[#ECC850]" />
            <span>Direct Call: {projectConfig.phoneDisplay}</span>
          </a>

          <button
            onClick={handleReset}
            className="text-xs text-gray-500 hover:text-gray-800 underline mt-2 py-1"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-2xl shadow-2xl border border-[#DDE4DE] ${
        compact ? 'p-3.5 sm:p-5' : 'p-3.5 sm:p-7'
      } ${className}`}
    >
      <div className="mb-3 sm:mb-4">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#F8F6EF] border border-[#C9A227]/40 text-[#0B3B2E] text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1.5 sm:mb-2">
          <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9A227]" />
          <span>DTCP & RERA Approved</span>
        </div>
        <h3 className="text-lg sm:text-2xl font-bold text-[#0B3B2E] font-serif tracking-tight">
          {title}
        </h3>
        <p className="text-[11px] sm:text-xs text-[#66736B] mt-0.5 sm:mt-1">
          Instant pricing sheets, availability charts & layout brochure
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-2.5 sm:space-y-3.5">
        {/* Full Name */}
        <div>
          <label className="block text-[11px] sm:text-xs font-bold text-[#17201B] mb-0.5 sm:mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: '' });
            }}
            placeholder="e.g. Ramesh Kumar"
            className={`w-full px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs sm:text-sm rounded-xl border bg-gray-50/50 text-[#17201B] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.name
                ? 'border-red-400 focus:ring-red-200'
                : 'border-[#DDE4DE] focus:border-[#166534] focus:ring-green-100'
            }`}
          />
          {errors.name && (
            <p className="text-[11px] text-red-500 mt-0.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-[11px] sm:text-xs font-bold text-[#17201B] mb-0.5 sm:mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
              <span className="text-[11px] sm:text-xs font-semibold text-gray-500">+91</span>
            </div>
            <input
              type="tel"
              required
              maxLength={13}
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: '' });
              }}
              placeholder="73054 01438"
              className={`w-full pl-10 sm:pl-12 pr-3 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border bg-gray-50/50 text-[#17201B] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.phone
                  ? 'border-red-400 focus:ring-red-200'
                : 'border-[#DDE4DE] focus:border-[#166534] focus:ring-green-100'
              }`}
            />
          </div>
          {errors.phone && (
            <p className="text-[11px] text-red-500 mt-0.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email & Preferred Plot Size Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
          <div>
            <label className="block text-[11px] sm:text-xs font-bold text-[#17201B] mb-0.5 sm:mb-1">
              Email Address <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
              placeholder="name@gmail.com"
              className={`w-full px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs sm:text-sm rounded-xl border bg-gray-50/50 text-[#17201B] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? 'border-red-400 focus:ring-red-200'
                  : 'border-[#DDE4DE] focus:border-[#166534] focus:ring-green-100'
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-500 mt-0.5 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-[11px] sm:text-xs font-bold text-[#17201B] mb-0.5 sm:mb-1">
              Preferred Plot Size
            </label>
            <select
              value={formData.plotSize}
              onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
              className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs sm:text-sm rounded-xl border border-[#DDE4DE] bg-gray-50/50 text-[#17201B] focus:bg-white focus:outline-none focus:ring-2 focus:border-[#166534] focus:ring-green-100 transition-all cursor-pointer"
            >
              <option value="">Select Plot Size</option>
              {plotOptionsList.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message / Requirement */}
        {!compact && (
          <div>
            <label className="block text-[11px] sm:text-xs font-bold text-[#17201B] mb-0.5 sm:mb-1">
              Message / Notes <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Interested in corner plot / Site visit weekend"
              className="w-full px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm rounded-xl border border-[#DDE4DE] bg-gray-50/50 text-[#17201B] placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:border-[#166534] focus:ring-green-100 transition-all"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-1.5 sm:mt-2 bg-gradient-to-r from-[#166534] via-[#0B3B2E] to-[#166534] hover:from-[#1b7a3f] hover:to-[#0B3B2E] text-white font-bold py-2.5 sm:py-3 px-4 sm:px-5 rounded-xl shadow-lg shadow-green-900/20 hover:shadow-xl hover:shadow-green-900/30 flex items-center justify-center gap-2 text-xs sm:text-base transition-all duration-200 cursor-pointer disabled:opacity-75"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin text-[#ECC850]" />
              <span>Verifying Details...</span>
            </>
          ) : (
            <>
              <span>{submitButtonText}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ECC850]" />
            </>
          )}
        </button>

        {/* Privacy Note */}
        <p className="text-[10px] sm:text-[11px] text-[#66736B] text-center leading-tight pt-0.5 sm:pt-1">
          🔒 Your details are safe with us. Our property advisor will contact you shortly.
        </p>
      </form>
    </div>
  );
};

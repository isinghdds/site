import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, Sparkles, AlertCircle, Shield } from 'lucide-react';
import { practiceInfo, servicesList } from '../data/websiteData';

export default function AppointmentModal({ isOpen, onClose, initialService = '' }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialService || 'Checkup & Cleaning');
  const [patientType, setPatientType] = useState('new'); // 'new' | 'returning'
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (8:00 AM - 12:00 PM)');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    insurance: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden glass-panel">
        
        {/* Header */}
        <div className="p-6 sm:p-7 bg-gradient-to-br from-slate-800 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl teal-gradient-bg flex items-center justify-center text-white shadow-md">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-xl text-white">
                Request an Appointment
              </h3>
              <p className="text-xs text-teal-300 font-medium">Dr. Isha Singh, DDS Practice</p>
            </div>
          </div>

          <button
            onClick={resetForm}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-xl border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Step Progress Bar */}
            <div className="flex items-center justify-between gap-2 mb-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-1.5 rounded-full transition-all ${
                    step >= s ? 'teal-gradient-bg' : 'bg-slate-800'
                  }`}
                />
              ))}
            </div>

            {/* Step 1: Choose Service & Patient Type */}
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h4 className="font-heading font-bold text-lg text-white">
                  Step 1: Select Service & Patient Status
                </h4>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Patient Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPatientType('new')}
                      className={`p-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                        patientType === 'new'
                          ? 'teal-gradient-bg text-white border-teal-500 shadow-md'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                      }`}
                    >
                      ✨ New Patient
                    </button>
                    <button
                      type="button"
                      onClick={() => setPatientType('returning')}
                      className={`p-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                        patientType === 'returning'
                          ? 'teal-gradient-bg text-white border-teal-500 shadow-md'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                      }`}
                    >
                      👋 Returning Patient
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Service Requested
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full p-3.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                  >
                    <option value="Checkup & Cleaning">Preventive Cleanings & Exam</option>
                    <option value="Invisalign & Clear Aligners">Invisalign® & Clear Aligners</option>
                    <option value="Teeth Whitening">Professional Teeth Whitening</option>
                    <option value="Porcelain Veneers">Porcelain Veneers Consultation</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Crowns & Bridges">Crowns & Restorations</option>
                    <option value="Emergency Dental Relief">Same-Day Emergency Relief</option>
                    <option value="Other Consultation">Other Dental Consultation</option>
                  </select>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 text-xs font-bold text-white teal-gradient-bg rounded-xl hover:opacity-95 shadow-md"
                  >
                    Next: Select Date & Time →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Date & Time Window */}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h4 className="font-heading font-bold text-lg text-white">
                  Step 2: Preferred Time Frame
                </h4>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full p-3.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Preferred Time Window
                  </label>
                  <div className="space-y-2">
                    {[
                      'Morning (8:00 AM - 12:00 PM)',
                      'Afternoon (12:00 PM - 3:30 PM)',
                      'Late Afternoon (3:30 PM - 5:30 PM)'
                    ].map((t) => (
                      <label
                        key={t}
                        className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                          preferredTime === t
                            ? 'bg-teal-950/80 border-teal-500 text-teal-200'
                            : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <input
                          type="radio"
                          name="timeWindow"
                          checked={preferredTime === t}
                          onChange={() => setPreferredTime(t)}
                          className="accent-teal-500"
                        />
                        <span>{t}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-300 bg-slate-800 rounded-xl border border-slate-700"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-3 text-xs font-bold text-white teal-gradient-bg rounded-xl hover:opacity-95 shadow-md"
                  >
                    Next: Contact Details →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {step === 3 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h4 className="font-heading font-bold text-lg text-white">
                  Step 3: Patient Contact Details
                </h4>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Dental Insurance Provider (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Delta Dental, Cigna, Aetna, Self-Pay"
                    value={formData.insurance}
                    onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                    className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-300 bg-slate-800 rounded-xl border border-slate-700"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="px-7 py-3 text-xs font-extrabold text-white teal-gradient-bg rounded-xl shadow-lg hover:opacity-95"
                  >
                    Confirm & Request Appointment
                  </button>
                </div>
              </div>
            )}

          </form>
        ) : (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-white">
              Appointment Request Submitted!
            </h3>

            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name || 'Valued Patient'}</strong>. Our scheduling concierge will contact you at <strong className="text-teal-300">{formData.phone || practiceInfo.phone}</strong> shortly to confirm your visit with Dr. Isha Singh, DDS.
            </p>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-left text-xs space-y-1 max-w-md mx-auto">
              <p><strong className="text-slate-300">Service:</strong> {selectedService}</p>
              <p><strong className="text-slate-300">Preferred Date/Time:</strong> {preferredDate || 'Earliest Available'} ({preferredTime})</p>
              <p><strong className="text-slate-300">Practice:</strong> {practiceInfo.name} ({practiceInfo.phone})</p>
            </div>

            <button
              onClick={resetForm}
              className="px-7 py-3 text-xs font-bold text-white teal-gradient-bg rounded-xl shadow-md"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

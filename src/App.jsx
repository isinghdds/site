import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import TipsPage from './components/TipsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('about'); // 'about' | 'tips' | 'contact'
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onBookClick={() => setIsBookingOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6">
        {activeTab === 'about' && (
          <AboutPage
            onBookClick={() => setIsBookingOpen(true)}
            onExploreTips={() => setActiveTab('tips')}
          />
        )}

        {activeTab === 'tips' && (
          <TipsPage
            onBookClick={() => setIsBookingOpen(true)}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Appointment Request Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

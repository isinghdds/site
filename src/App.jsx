import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import TipsPage from './components/TipsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('about'); // 'about' | 'tips' | 'contact'

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-800 flex flex-col font-sans selection:bg-aura-800 selection:text-white">
      {/* Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 sm:px-6">
        {activeTab === 'about' && (
          <AboutPage
            onExploreTips={() => setActiveTab('tips')}
            onContactClick={() => setActiveTab('contact')}
          />
        )}

        {activeTab === 'tips' && (
          <TipsPage
            onContactClick={() => setActiveTab('contact')}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

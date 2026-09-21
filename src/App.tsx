import React, { useState, useEffect } from 'react';
import { NavigationTab, SacramentInfo } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PrayerRequestModal } from './components/PrayerRequestModal';
import { AdorerModal } from './components/AdorerModal';
import { SacramentModal } from './components/SacramentModal';

// Screens
import { HomeScreen } from './pages/HomeScreen';
import { MassTimingsScreen } from './pages/MassTimingsScreen';
import { DevotionsScreen } from './pages/DevotionsScreen';
import { SacramentsScreen } from './pages/SacramentsScreen';
import { NewsEventsScreen } from './pages/NewsEventsScreen';
import { LiveMassScreen } from './pages/LiveMassScreen';
import { VicarParishScreen } from './pages/VicarParishScreen';
import { OfferingsScreen } from './pages/OfferingsScreen';
import { AboutScreen } from './pages/AboutScreen';
import { ContactScreen } from './pages/ContactScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [isPrayerModalOpen, setIsPrayerModalOpen] = useState(false);
  const [isAdorerModalOpen, setIsAdorerModalOpen] = useState(false);
  const [selectedSacramentKey, setSelectedSacramentKey] = useState<string | null>(null);

  // Scroll to top whenever tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#071e28] selection:bg-[#67c7e8] selection:text-[#005266]">
      {/* Liturgical Top Navigation */}
      <Header
        currentTab={activeTab}
        onSelectTab={(tab: NavigationTab) => setActiveTab(tab)}
        onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className={`flex-1 w-full flex flex-col ${activeTab === 'home' ? '' : 'pt-28'}`}>
        {activeTab === 'home' && (
          <HomeScreen
            onNavigate={(tab: NavigationTab) => setActiveTab(tab)}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        )}

        {activeTab === 'about' && (
          <AboutScreen />
        )}

        {activeTab === 'contact' && (
          <ContactScreen />
        )}

        {activeTab === 'mass-timings' && (
          <MassTimingsScreen
            onNavigate={(tab: NavigationTab) => setActiveTab(tab)}
            onOpenAdorerModal={() => setIsAdorerModalOpen(true)}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        )}

        {activeTab === 'devotions-shrine' && (
          <DevotionsScreen
            onNavigate={(tab: NavigationTab) => setActiveTab(tab)}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        )}

        {activeTab === 'sacraments' && (
          <SacramentsScreen
            onNavigate={(tab: NavigationTab) => setActiveTab(tab)}
            onSelectSacrament={(sacrament: SacramentInfo) => setSelectedSacramentKey(sacrament.key)}
          />
        )}

        {activeTab === 'news-events' && (
          <NewsEventsScreen
            onNavigate={(tab: NavigationTab) => setActiveTab(tab)}
          />
        )}

        {activeTab === 'live-mass' && (
          <LiveMassScreen
            onNavigate={(tab: NavigationTab) => setActiveTab(tab)}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        )}

        {activeTab === 'vicar-parish' && (
          <VicarParishScreen
            onNavigate={(tab: NavigationTab) => setActiveTab(tab)}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        )}

        {activeTab === 'offerings' && (
          <OfferingsScreen
            onNavigate={(tab: NavigationTab) => setActiveTab(tab)}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        )}
      </main>

      {/* Sacred Marian Footer */}
      <Footer
        onNavigate={(tab: NavigationTab) => setActiveTab(tab)}
        onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
      />

      {/* Modals */}
      <PrayerRequestModal
        isOpen={isPrayerModalOpen}
        onClose={() => setIsPrayerModalOpen(false)}
      />

      <AdorerModal
        isOpen={isAdorerModalOpen}
        onClose={() => setIsAdorerModalOpen(false)}
      />

      <SacramentModal
        sacramentKey={selectedSacramentKey}
        onClose={() => setSelectedSacramentKey(null)}
        onBookSacrament={(key: string) => {
          setSelectedSacramentKey(null);
          alert(`Inquiry registered for ${key}. The parish office will contact you promptly.`);
        }}
      />
    </div>
  );
}

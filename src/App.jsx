import React from 'react';
import WalletBar from './components/WalletBar.jsx';
import HeroCasino from './components/HeroCasino.jsx';
import PromoMarquee from './components/PromoMarquee.jsx';
import GameGrid from './components/GameGrid.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Subtle vignette overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0.4)_45%,rgba(0,0,0,0.9)_100%)] mix-blend-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WalletBar />
        <HeroCasino />
        <PromoMarquee />
        <GameGrid />
      </div>

      {/* Soft gradient glow at the bottom */}
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-fuchsia-500/10 via-amber-400/5 to-transparent blur-2xl" />
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Coins, Star, Gift } from 'lucide-react';

const games = [
  {
    name: 'Blackjack Pro',
    desc: 'Classic 3:2, multi-hand',
    icon: Crown,
    accent: 'from-amber-400/15 to-fuchsia-500/15',
  },
  {
    name: 'Elite Roulette',
    desc: 'European single zero',
    icon: Star,
    accent: 'from-rose-500/15 to-amber-400/15',
  },
  {
    name: 'Ultra Slots',
    desc: 'High RTP jackpots',
    icon: Coins,
    accent: 'from-fuchsia-500/15 to-cyan-400/15',
  },
  {
    name: 'VIP Rewards',
    desc: 'Boosters & bonuses',
    icon: Gift,
    accent: 'from-cyan-400/15 to-amber-400/15',
  },
];

function ShineCard({ children }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70">
      {/* Subtle angled shine on hover */}
      <div className="pointer-events-none absolute -inset-x-10 -top-10 h-24 rotate-6 bg-gradient-to-r from-white/0 via-white/12 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </div>
  );
}

export default function GameGrid() {
  return (
    <section className="mt-8 mb-16">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Featured</h2>
        <button className="text-sm text-zinc-400 hover:text-white">See all</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {games.map((g, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <ShineCard>
              <div className={`h-28 bg-gradient-to-br ${g.accent}`} />
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700">
                    <g.icon className="h-5 w-5 text-amber-300" />
                  </div>
                  <div>
                    <p className="font-medium leading-tight">{g.name}</p>
                    <p className="text-sm text-zinc-400">{g.desc}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="text-sm text-amber-300 hover:text-amber-200">Play</button>
                  <button className="text-sm text-zinc-400 hover:text-white">Details</button>
                </div>
              </div>
            </ShineCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

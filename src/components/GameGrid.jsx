import React from 'react';
import { motion } from 'framer-motion';
import { Star, Gift, Rocket, ShieldCheck } from 'lucide-react';

const sponsors = [
  {
    name: 'NovaTech',
    desc: 'Yüksek dönüşüm • SaaS • B2B',
    icon: Rocket,
    accent: 'from-amber-400/15 to-fuchsia-500/15',
  },
  {
    name: 'Aurora Media',
    desc: 'Reklam ağı • CPL/CPA',
    icon: Star,
    accent: 'from-rose-500/15 to-amber-400/15',
  },
  {
    name: 'MetaGear',
    desc: 'E-ticaret • Donanım',
    icon: ShieldCheck,
    accent: 'from-fuchsia-500/15 to-cyan-400/15',
  },
  {
    name: 'Prime Offers',
    desc: 'Kampanya agregatörü',
    icon: Gift,
    accent: 'from-cyan-400/15 to-amber-400/15',
  },
];

function ShineCard({ children }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70">
      <div className="pointer-events-none absolute -inset-x-10 -top-10 h-24 rotate-6 bg-gradient-to-r from-white/0 via-white/12 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </div>
  );
}

export default function GameGrid() {
  return (
    <section className="mt-8 mb-16">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Öne Çıkan Sponsorlar</h2>
        <button className="text-sm text-zinc-400 hover:text-white">Tümünü Gör</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sponsors.map((g, i) => (
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
                  <button className="text-sm text-amber-300 hover:text-amber-200">İncele</button>
                  <button className="text-sm text-zinc-400 hover:text-white">Detaylar</button>
                </div>
              </div>
            </ShineCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

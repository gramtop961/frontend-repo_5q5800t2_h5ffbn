import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Trophy, Star, Coins } from 'lucide-react';

const items = [
  { icon: Gift, text: 'Özel Kuponlar ve Kodlar' },
  { icon: Coins, text: '%10-20 Komisyon Oranları' },
  { icon: Trophy, text: 'Performans Bazlı Bonuslar' },
  { icon: Star, text: 'Seçkin Marka İşbirlikleri' },
];

export default function PromoMarquee() {
  const row = (
    <div className="flex items-center gap-6 pr-6">
      {items.map(({ icon: Icon, text }, idx) => (
        <div key={idx} className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-sm text-zinc-200">
          <Icon className="h-4 w-4 text-amber-300" />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
      <div className="relative h-14 flex items-center">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          aria-hidden
        >
          {row}
          {row}
          {row}
          {row}
        </motion.div>
      </div>
    </div>
  );
}

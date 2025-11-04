import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroCasino() {
  return (
    <section className="relative mt-6 sm:mt-10 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60">
      <div className="relative h-[52vh] sm:h-[60vh]">
        {/* 3D Scene */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/G0i6ZIv4Vd1oW14L/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Overlay gradients that don't block pointer events */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)] bg-[conic-gradient(from_180deg,rgba(250,204,21,0.15),rgba(236,72,153,0.12),rgba(56,189,248,0.12),rgba(250,204,21,0.15))]" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="px-6 sm:px-10 py-12 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-black/40 px-3 py-1 text-xs text-amber-200 mb-4">
                <Crown className="h-3.5 w-3.5" />
                Premium Casino Experience
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Spin. Play. Win.
              </h1>
              <p className="mt-3 sm:mt-4 text-zinc-300 max-w-xl">
                Seamless gameplay, instant rewards, and a luxury dark theme. Where high rollers meet impeccable design.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <motion.button whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-fuchsia-500 px-5 py-3 text-black font-semibold">
                  <Rocket className="h-5 w-5" /> Play Now
                </motion.button>
                <motion.button whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-black/50 px-5 py-3 text-white">
                  Browse Games
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

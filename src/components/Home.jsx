import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Sparkles, Trophy } from 'lucide-react'

function GlowCard({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative rounded-2xl p-[1px] bg-gradient-to-r from-fuchsia-500/60 via-cyan-400/60 to-amber-400/60"
    >
      <motion.div
        className="rounded-2xl bg-zinc-950/80 border border-white/10 p-4 h-full"
        style={{
          backgroundImage:
            'radial-gradient(1200px 200px at 0% 0%, rgba(255,255,255,0.06), transparent), radial-gradient(1200px 200px at 100% 100%, rgba(255,255,255,0.04), transparent)'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <div className="pb-24">
      {/* Hero with Spline cover - dark fintech */}
      <section className="relative h-[340px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/G0i6ZIv4Vd1oW14L/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        {/* Gradient overlays should not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 max-w-md mx-auto px-4 h-full flex items-end pb-6"
        >
          <div className="w-full bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-lg font-semibold tracking-tight">Minimal · Siyah · Premium</h1>
                <p className="text-zinc-400 text-sm">Kartlarını parlat, ödülleri topla.</p>
              </div>
              <div className="bg-white/10 text-white rounded-xl px-3 py-2 text-center shadow">
                <p className="text-[11px] text-zinc-200">Toplam Ödül</p>
                <p className="text-lg font-bold flex items-center gap-1"><Trophy size={18} /> 0</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 space-y-4">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-sm font-medium text-zinc-400 mb-3">Öne Çıkanlar</h2>
          <div className="grid grid-cols-2 gap-3">
            <GlowCard delay={0.05}>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-fuchsia-500/15 text-fuchsia-300 flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white leading-tight">Anında Kazanç</p>
                  <p className="text-sm text-zinc-400">Hızlı görevler, hızlı token</p>
                </div>
              </div>
            </GlowCard>
            <GlowCard delay={0.1}>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-cyan-500/15 text-cyan-300 flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white leading-tight">Güvenli İşlemler</p>
                  <p className="text-sm text-zinc-400">Kurumsal seviye koruma</p>
                </div>
              </div>
            </GlowCard>
            <GlowCard delay={0.15}>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-amber-500/15 text-amber-300 flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white leading-tight">Premium Deneyim</p>
                  <p className="text-sm text-zinc-400">Akıcı ve şık arayüz</p>
                </div>
              </div>
            </GlowCard>
            <GlowCard delay={0.2}>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/15 text-emerald-300 flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white leading-tight">LED Geçişler</p>
                  <p className="text-sm text-zinc-400">Parıltılı kenar ve ışık oyunları</p>
                </div>
              </div>
            </GlowCard>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2"
        >
          <GlowCard>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-white">Günlük Bonus</p>
                <p className="text-sm text-zinc-400">Her gün giriş yap +10 Token</p>
              </div>
              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                className="px-3 py-2 text-sm font-medium rounded-lg bg-white text-black shadow"
              >
                Al
              </motion.button>
            </div>
          </GlowCard>
        </motion.section>
      </div>
    </div>
  )
}

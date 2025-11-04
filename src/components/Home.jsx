import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Sparkles, Trophy } from 'lucide-react'

export default function Home() {
  return (
    <div className="pb-24">
      {/* Hero with Spline cover */}
      <section className="relative h-[280px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        {/* Gradient overlays should not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 max-w-md mx-auto px-4 h-full flex items-end pb-6"
        >
          <div className="w-full bg-white/70 backdrop-blur rounded-2xl border border-white/60 p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-lg font-semibold tracking-tight">Hoş geldin 👋</h1>
                <p className="text-gray-600 text-sm">Görevleri yap, token kazan!</p>
              </div>
              <div className="bg-indigo-600 text-white rounded-xl px-3 py-2 text-center shadow">
                <p className="text-xs">Toplam Ödül</p>
                <p className="text-lg font-bold flex items-center gap-1"><Trophy size={18} /> 0</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <div className="max-w-md mx-auto px-4">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4"
        >
          <h2 className="text-sm font-medium text-gray-500 mb-3">Sponsorlar</h2>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="aspect-[3/2] rounded-xl overflow-hidden border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-sm"
              >
                <span className="text-gray-500 text-sm">Sponsor Görseli {i}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6"
        >
          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <div className="flex-1">
                <p className="font-medium">Günlük Bonus</p>
                <p className="text-sm text-gray-500">Her gün giriş yap +10 Token</p>
              </div>
              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                className="px-3 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white shadow"
              >
                Al
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

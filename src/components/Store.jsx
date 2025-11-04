import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BadgeCheck, Coins } from 'lucide-react'

function ProductCard({ title, desc, price, onBuy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-sm flex items-start gap-3"
    >
      <div className="h-12 w-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
        <BadgeCheck size={22} />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-white">{title}</p>
        <p className="text-sm text-zinc-400">{desc}</p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm font-medium text-zinc-200 inline-flex items-center gap-1">
            <Coins size={16} /> {price} Token
          </p>
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={onBuy}
            className="px-3 py-2 text-sm font-medium rounded-lg bg-white text-black"
          >
            Satın Al
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Store() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ username: '', userId: '', amount: 1 })

  const submit = () => {
    if (!form.username || !form.userId) return alert('Lütfen kullanıcı adı ve ID girin.')
    alert(`Sipariş oluşturuldu!\nÜrün: 50 Freespin\nAdet: ${form.amount}\nKullanıcı: @${form.username}\nID: ${form.userId}`)
    setOpen(false)
    setForm({ username: '', userId: '', amount: 1 })
  }

  return (
    <div className="max-w-md mx-auto px-4 pb-24 space-y-4">
      <ProductCard
        title="50 Freespin (Gamdom)"
        desc="1000 Token karşılığı geçerlidir"
        price={1000}
        onBuy={() => setOpen(true)}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60"
          >
            <motion.div
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              exit={{ y: 40 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-t-2xl p-5 space-y-3 text-white"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Satın Alma</h4>
                <button onClick={() => setOpen(false)} className="text-zinc-400">✕</button>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 5, 10].map((n) => (
                  <button
                    key={n}
                    onClick={() => setForm({ ...form, amount: n })}
                    className={`py-2 rounded-lg border ${
                      form.amount === n
                        ? 'bg-white text-black border-white'
                        : 'border-zinc-700 bg-zinc-800 hover:bg-zinc-700'
                    }`}
                  >
                    {n}x
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-zinc-400">Kullanıcı Adı</label>
                  <input
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    className="mt-1 w-full border border-zinc-700 bg-zinc-800 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="telegram kullanıcı adı"
                  />
                </div>
                <div>
                  <label className="text-sm text-zinc-400">User ID</label>
                  <input
                    value={form.userId}
                    onChange={(e) => setForm({ ...form, userId: e.target.value })}
                    className="mt-1 w-full border border-zinc-700 bg-zinc-800 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="örn: 123456"
                  />
                </div>
              </div>

              <button
                onClick={submit}
                className="w-full bg-emerald-500 text-black py-2.5 rounded-lg font-medium"
              >
                Satın Almayı Tamamla
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

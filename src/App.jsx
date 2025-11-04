import { useMemo, useState } from 'react'
import TabBar from './components/TabBar'
import Home from './components/Home'
import Tasks from './components/Tasks'
import Store from './components/Store'
import { Coins, User } from 'lucide-react'
import { motion } from 'framer-motion'

function AccountInline() {
  const mockUser = useMemo(
    () => ({
      username: 'telegram_user',
      userId: '123456789',
      joinedAt: new Date().toLocaleDateString('tr-TR'),
      tokens: 0,
      refs: 0,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=T+U&backgroundType=gradientLinear&fontFamily=Inter`
    }),
    []
  )

  return (
    <div className="max-w-md mx-auto px-4 pb-24 space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl p-5 text-white shadow border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black"
      >
        <div className="flex items-center gap-4">
          <img src={mockUser.avatar} alt="avatar" className="h-14 w-14 rounded-xl bg-white/5 ring-1 ring-white/10" />
          <div className="flex-1">
            <p className="text-xs text-zinc-400">Telegram</p>
            <p className="text-lg font-semibold flex items-center gap-2"><User size={18} /> @{mockUser.username}</p>
          </div>
          <div className="bg-white/10 rounded-xl px-3 py-2 text-center">
            <p className="text-[11px] text-zinc-200">Token</p>
            <p className="text-lg font-bold flex items-center gap-1"><Coins size={18} /> {mockUser.tokens}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="grid grid-cols-2 gap-3"
      >
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow">
          <p className="text-sm text-zinc-400">Davet Sayısı</p>
          <p className="text-2xl font-semibold text-white">{mockUser.refs}</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow">
          <p className="text-sm text-zinc-400">Kullanıcı ID</p>
          <p className="text-xl font-semibold text-white">{mockUser.userId}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow"
      >
        <p className="text-sm text-zinc-400">Üyelik Tarihi</p>
        <p className="text-lg font-semibold text-white">{mockUser.joinedAt}</p>
      </motion.div>
    </div>
  )
}

export default function App() {
  const [tab, setTab] = useState('home')

  return (
    <div className="min-h-screen bg-black text-white">
      {/* subtle vignette + grid */}
      <div className="pointer-events-none fixed inset-0 [background-image:radial-gradient(60%_60%_at_50%_10%,rgba(255,255,255,0.06),transparent),linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent)]" />
      <main className="relative pt-4">
        {tab === 'home' && <Home />}
        {tab === 'tasks' && <Tasks />}
        {tab === 'store' && <Store />}
        {tab === 'account' && <AccountInline />}
      </main>

      <TabBar current={tab} onChange={setTab} />
    </div>
  )
}

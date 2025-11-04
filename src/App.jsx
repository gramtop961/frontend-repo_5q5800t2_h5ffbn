import { useMemo, useState } from 'react'
import TabBar from './components/TabBar'
import Home from './components/Home'
import Tasks from './components/Tasks'
import Store from './components/Store'
import { Coins, User } from 'lucide-react'

function AccountInline() {
  const mockUser = useMemo(() => ({
    username: 'telegram_user',
    userId: '123456789',
    joinedAt: new Date().toLocaleDateString('tr-TR'),
    tokens: 0,
    refs: 0,
    avatar: `https://api.dicebear.com/7.x/initials/svg?seed=T+U`
  }), [])

  return (
    <div className="max-w-md mx-auto px-4 pb-24 space-y-4">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-5 text-white shadow">
        <div className="flex items-center gap-4">
          <img src={mockUser.avatar} alt="avatar" className="h-14 w-14 rounded-xl bg-white/20" />
          <div className="flex-1">
            <p className="text-sm text-white/90">Telegram</p>
            <p className="text-lg font-semibold flex items-center gap-2"><User size={18} /> @{mockUser.username}</p>
          </div>
          <div className="bg-white/20 rounded-xl px-3 py-2 text-center">
            <p className="text-xs">Token</p>
            <p className="text-lg font-bold flex items-center gap-1"><Coins size={18} /> {mockUser.tokens}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
          <p className="text-sm text-gray-500">Davet Sayısı</p>
          <p className="text-2xl font-semibold">{mockUser.refs}</p>
        </div>
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
          <p className="text-sm text-gray-500">Kullanıcı ID</p>
          <p className="text-xl font-semibold">{mockUser.userId}</p>
        </div>
      </div>

      <div className="rounded-2xl border bg-white p-4 shadow-sm">
        <p className="text-sm text-gray-500">Üyelik Tarihi</p>
        <p className="text-lg font-semibold">{mockUser.joinedAt}</p>
      </div>
    </div>
  )
}

export default function App() {
  const [tab, setTab] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <main className="pt-4">
        {tab === 'home' && <Home />}
        {tab === 'tasks' && <Tasks />}
        {tab === 'store' && <Store />}
        {tab === 'account' && <AccountInline />}
      </main>

      <TabBar current={tab} onChange={setTab} />
    </div>
  )
}

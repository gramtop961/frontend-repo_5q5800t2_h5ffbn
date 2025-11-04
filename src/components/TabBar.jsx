import { Home, ListChecks, ShoppingBag, User } from 'lucide-react'

function TabButton({ label, icon: Icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 flex-1 py-2 rounded-xl transition-colors ${
        active ? 'text-black bg-white' : 'text-zinc-400 hover:text-white hover:bg-white/10'
      }`}
    >
      <Icon size={20} />
      <span className="text-xs font-medium">{label}</span>
    </button>
  )
}

export default function TabBar({ current, onChange }) {
  return (
    <div className="fixed bottom-4 left-0 right-0 mx-auto max-w-md px-4 z-50">
      <div className="backdrop-blur bg-white/5 border border-white/10 rounded-2xl shadow-lg p-2 flex gap-2">
        <TabButton label="Ana Sayfa" icon={Home} active={current === 'home'} onClick={() => onChange('home')} />
        <TabButton label="Görevler" icon={ListChecks} active={current === 'tasks'} onClick={() => onChange('tasks')} />
        <TabButton label="Mağaza" icon={ShoppingBag} active={current === 'store'} onClick={() => onChange('store')} />
        <TabButton label="Hesabım" icon={User} active={current === 'account'} onClick={() => onChange('account')} />
      </div>
    </div>
  )
}

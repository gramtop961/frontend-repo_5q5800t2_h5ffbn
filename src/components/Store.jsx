import { useState } from 'react'
import { BadgeCheck, Coins } from 'lucide-react'

function ProductCard({ title, desc, price, onBuy }) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm flex items-start gap-3">
      <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
        <BadgeCheck size={22} />
      </div>
      <div className="flex-1">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{desc}</p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-700 inline-flex items-center gap-1"><Coins size={16} /> {price} Token</p>
          <button onClick={onBuy} className="px-3 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white">Satın Al</button>
        </div>
      </div>
    </div>
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

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
          <div className="w-full max-w-md bg-white rounded-t-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Satın Alma</h4>
              <button onClick={() => setOpen(false)} className="text-gray-500">✕</button>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {[1,2,3,5,10].map((n) => (
                <button key={n} onClick={() => setForm({ ...form, amount: n })} className={`py-2 rounded-lg border ${form.amount === n ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-50 hover:bg-gray-100'}`}>{n}x</button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-gray-600">Kullanıcı Adı</label>
                <input value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="telegram kullanıcı adı" />
              </div>
              <div>
                <label className="text-sm text-gray-600">User ID</label>
                <input value={form.userId} onChange={(e) => setForm({ ...form, userId: e.target.value })} className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="örn: 123456" />
              </div>
            </div>

            <button onClick={submit} className="w-full bg-green-600 text-white py-2.5 rounded-lg font-medium">
              Satın Almayı Tamamla
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

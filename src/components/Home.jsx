import { Sparkles, Trophy } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-md mx-auto pb-24">
      <header className="p-4">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-5 text-white shadow">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">Hoş geldin 👋</h1>
              <p className="text-white/90 text-sm">Görevleri yap, token kazan!</p>
            </div>
            <div className="bg-white/20 rounded-xl px-3 py-2 text-center">
              <p className="text-xs">Toplam Ödül</p>
              <p className="text-lg font-bold flex items-center gap-1"><Trophy size={18} /> 0</p>
            </div>
          </div>
        </div>
      </header>

      <section className="px-4">
        <h2 className="text-sm font-medium text-gray-500 mb-3">Sponsorlar</h2>
        <div className="grid grid-cols-2 gap-3">
          {[1,2,3,4].map((i) => (
            <div key={i} className="aspect-[3/2] rounded-xl overflow-hidden border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Sponsor Görseli {i}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 mt-6">
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Sparkles size={20} />
            </div>
            <div className="flex-1">
              <p className="font-medium">Günlük Bonus</p>
              <p className="text-sm text-gray-500">Her gün giriş yap +10 Token</p>
            </div>
            <button className="px-3 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white">Al</button>
          </div>
        </div>
      </section>
    </div>
  )
}

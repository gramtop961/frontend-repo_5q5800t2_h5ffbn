import { useState } from 'react'
import { CheckCircle2, ExternalLink, Gift, Users } from 'lucide-react'

function Section({ title, children }) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function TaskRow({ title, subtitle, actionText, onAction, secondary }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
        <Gift size={20} />
      </div>
      <div className="flex-1">
        <p className="font-medium leading-tight">{title}</p>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
      <div className="flex gap-2">
        {secondary && (
          <button onClick={secondary.onClick} className="px-3 py-2 text-sm rounded-lg border text-gray-700 hover:bg-gray-50">
            {secondary.label}
          </button>
        )}
        <button onClick={onAction} className="px-3 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white">
          {actionText}
        </button>
      </div>
    </div>
  )
}

export default function Tasks() {
  const [modal, setModal] = useState(null)
  const [form, setForm] = useState({ username: '', userId: '', site: '', amount: 1 })

  const openForm = (type) => {
    setModal(type)
  }

  const submit = () => {
    if (!form.username || !form.userId) return alert('Lütfen kullanıcı adı ve kullanıcı ID girin.')
    if (modal === 'sponsor' && !form.site) return alert('Lütfen site adını girin.')
    alert(`Gönderildi!\nTür: ${modal}\nKullanıcı: @${form.username}\nID: ${form.userId}\nSite: ${form.site || '-'}\nAdet: ${form.amount || '-'}`)
    setModal(null)
    setForm({ username: '', userId: '', site: '', amount: 1 })
  }

  return (
    <div className="max-w-md mx-auto px-4 pb-24 space-y-4">
      <Section title="Günlük Görevler">
        <TaskRow
          title="Telegram Kanalımıza Katıl"
          subtitle="+100 Token Kazan"
          actionText="Katıl"
          onAction={() => window.open('https://t.me', '_blank')}
          secondary={{ label: 'Onayla', onClick: () => openForm('daily-join') }}
        />
        <TaskRow
          title="İlk Referansını Getir"
          subtitle="10 arkadaşını davet et ve +200 Token kazan"
          actionText="Davet Linki"
          onAction={() => navigator.clipboard.writeText('https://t.me/yourbot?start=ref123').then(() => alert('Davet linki kopyalandı'))}
          secondary={{ label: 'Onayla', onClick: () => openForm('daily-ref') }}
        />
      </Section>

      <Section title="Sponsor Görevler">
        <TaskRow
          title="Belirlenen siteye kayıt ol"
          subtitle="Tamamlayınca +400 Token"
          actionText={<span className="inline-flex items-center gap-1">Göreve Git <ExternalLink size={14} /></span>}
          onAction={() => window.open('https://example.com', '_blank')}
          secondary={{ label: 'Tamamla', onClick: () => openForm('sponsor') }}
        />
      </Section>

      <Section title="Referans Görevi">
        <div className="rounded-xl border p-3 flex items-center justify-between">
          <div>
            <p className="font-medium">Arkadaşlarını Davet Et Token Kazan!</p>
            <p className="text-sm text-gray-500">Davet eden: +5 Token • Davet edilen: +25 Token</p>
          </div>
          <button
            className="px-3 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white"
            onClick={() => navigator.clipboard.writeText('https://t.me/yourbot?start=ref123').then(() => alert('Referans linkin kopyalandı'))}
          >
            Linki Kopyala
          </button>
        </div>
      </Section>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
          <div className="w-full max-w-md bg-white rounded-t-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Bilgileri Doldur</h4>
              <button onClick={() => setModal(null)} className="text-gray-500">✕</button>
            </div>

            {modal === 'purchase' && (
              <div className="grid grid-cols-3 gap-2">
                {[1,2,3,5,10].map((n) => (
                  <button key={n} onClick={() => setForm({ ...form, amount: n })} className={`py-2 rounded-lg border ${form.amount === n ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-50 hover:bg-gray-100'}`}>{n} Adet</button>
                ))}
              </div>
            )}

            {modal === 'sponsor' && (
              <div>
                <label className="text-sm text-gray-600">Site Adı</label>
                <input value={form.site} onChange={(e) => setForm({ ...form, site: e.target.value })} className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Örn: Gamdom" />
              </div>
            )}

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

            <button onClick={submit} className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2.5 rounded-lg font-medium">
              <CheckCircle2 size={18} /> Gönder
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

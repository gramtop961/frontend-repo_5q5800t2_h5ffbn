import React from 'react';
import { Coins, User, Plus } from 'lucide-react';

export default function WalletBar() {
  return (
    <header className="sticky top-4 z-20">
      <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl px-4 sm:px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-400 via-rose-500 to-fuchsia-600" />
          <div className="hidden sm:block">
            <p className="text-sm text-zinc-400">Balance</p>
            <p className="text-lg font-semibold tracking-tight">$8,420.55</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="inline-flex items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-3 sm:px-4 py-2 text-amber-300 hover:bg-amber-400/20 transition">
            <Coins className="h-4 w-4" />
            <span className="text-sm font-medium hidden sm:inline">Withdraw</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-amber-400 px-3 sm:px-4 py-2 text-black font-semibold shadow-[0_0_40px_rgba(249,115,22,0.25)]">
            <Plus className="h-4 w-4" />
            <span className="text-sm hidden sm:inline">Deposit</span>
          </button>
          <button className="ml-1 inline-flex items-center justify-center h-9 w-9 rounded-xl border border-zinc-800 bg-zinc-900/60">
            <User className="h-5 w-5 text-zinc-300" />
          </button>
        </div>
      </div>
    </header>
  );
}

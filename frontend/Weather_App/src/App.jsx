import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gradient-to-r from-purple-500 to-pink-500">
      <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
        🎉 Tailwind Works!
      </h1>
      
      <div className="flex gap-4">
        <button className="px-6 py-3 rounded-lg bg-white text-purple-600 font-semibold shadow hover:bg-gray-100">
          Button 1
        </button>
        <button className="px-6 py-3 rounded-lg bg-black text-white font-semibold shadow hover:bg-gray-800">
          Button 2
        </button>
      </div>

      <p className="text-white/90">
        If you see gradients, big fonts, colors, and hover effects → Tailwind is active.
      </p>
    </main>
  );
}

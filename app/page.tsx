"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [name, setName] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      router.push(`/result?name=${encodeURIComponent(name)}`)
    }
  }

  return (
    <div className="flex items-center justify-center h-full">
      <section className="text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to MatchMaker</h1>
          <p className="text-xl mb-8">Find your perfect match today!</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg text-black mb-4"
              required
            />
            <button
              type="submit"
              className="bg-white text-pink-500 px-6 py-2 rounded-lg font-bold hover:bg-pink-100 transition-colors"
            >
              Find My Match
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}


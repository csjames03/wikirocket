'use client'

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"

export default function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`/${search}/`)
    }
  return (
    <form onSubmit={handleSubmit} className="w-50 flex justify-center md:justify-between">
        <input 
            type="text" 
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
            placeholder="Search..."
            className="bg-white text-slate-950 p-2 w-80 text-xl rounded-xl"
        />
        <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
            🚀
        </button>
    </form>
  )
}

"use client"

import { useState, useEffect, use } from "react"
import { SupabaseContext } from "./supabaseContext"
import type { SupabaseClient } from "@supabase/supabase-js"
import { createBrowserClient } from '@supabase/ssr'

interface SupabaseProviderProp {
  children: React.ReactNode
}

export const SupabaseInitializer: React.FC<SupabaseProviderProp> = ({ children }) => {
  const [supabaseClient, setSupabaseClient] = useState<SupabaseClient | undefined>(undefined)
  useEffect(() => {
    setSupabaseClient(createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    ))
  }, [])
  return (
    <>
      <SupabaseContext.Provider value={supabaseClient}>
        {children}
      </SupabaseContext.Provider>
    </>
  )
}

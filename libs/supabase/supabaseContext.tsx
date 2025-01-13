'use client'

import { useContext, createContext } from 'react'
import { SupabaseClient } from '@supabase/supabase-js'
export const SupabaseContext = createContext<SupabaseClient | undefined>(
  undefined,
)

export function useSupabase() {
  const context = useContext(SupabaseContext)
  if (context === undefined) {
    return undefined
  }
  return context
}

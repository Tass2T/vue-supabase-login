import { createClient } from '@supabase/supabase-js'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('store', () => {
  const supabaseURL = import.meta.env.VITE_SUPABASE_PROJECT_URL
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

  const supabase = createClient(supabaseURL, supabaseAnonKey)

  return { supabase }
})

import { createClient } from '@supabase/supabase-js'
import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'

export const useAuthStore = defineStore('store', () => {
  const supabaseURL = import.meta.env.VITE_SUPABASE_PROJECT_URL
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
  const supabase = createClient(supabaseURL, supabaseAnonKey)
  const user: Ref<any> = ref(null)

  supabase.auth.onAuthStateChange((event) => {
    if (event === 'SIGNED_IN') {
      supabase.auth.getUser().then((res) => {
        user.value = res.data.user
      })
    }
  })

  const logWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent'
        }
      }
    })
  }
  const logOut = () => {
    supabase.auth.signOut()
  }

  return { logOut, logWithGoogle, user }
})

import { createClient } from '@supabase/supabase-js'
import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('store', () => {
  const supabaseURL = import.meta.env.VITE_SUPABASE_PROJECT_URL
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
  const supabase = createClient(supabaseURL, supabaseAnonKey)
  const authLoading = ref<boolean>(true)
  const loggedUser: Ref<any> = ref(null)
  const router = useRouter()

  router.beforeEach(async (to) => {
    const user = await supabase.auth.getUser()
    if (to.name !== 'login' && !user?.data?.user?.id) return '/login'
    if (to.name === 'login' && user?.data?.user?.id) return '/'
  })

  supabase.auth.onAuthStateChange((event) => {
    if (event === 'SIGNED_IN') {
      supabase.auth.getUser().then((res) => {
        loggedUser.value = res.data.user
      })
    } else if (event === 'SIGNED_OUT') {
      loggedUser.value = null
      router.push('/login')
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

  return { logOut, logWithGoogle, loggedUser, authLoading }
})

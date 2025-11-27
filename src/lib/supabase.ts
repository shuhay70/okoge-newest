import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// デバッグ用: ブラウザのコンソールに環境変数の状態を表示
if (typeof window !== 'undefined') {
  console.log('🔧 Supabase Config Check:', {
    url: supabaseUrl ? `Set (Starts with ${supabaseUrl.substring(0, 8)}...)` : 'MISSING ❌',
    key: supabaseAnonKey ? 'Set ✅' : 'MISSING ❌'
  })
}


const urlToUse = supabaseUrl || 'https://placeholder.supabase.co'
const keyToUse = supabaseAnonKey || 'placeholder-key'

export const supabase = createClient(urlToUse, keyToUse)

export type Survey = {
  id: string
  country: string
  reason: string
  number_of_people: string
  is_first_time: boolean
  created_at: string
}

export type OrderItem = {
  name: string
  price: number
  quantity: number
}

export type Order = {
  id: string
  items: OrderItem[]
  total_price: number
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  created_at: string
}
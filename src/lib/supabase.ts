import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cxpyennhhpktezblzlke.supabase.co' 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4cHllbm5oaHBrdGV6Ymx6bGtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNjAxNTcsImV4cCI6MjA3OTgzNjE1N30.J8fS5lRfHfnwNzdC9DsqSim9xo_LohiaXxgcD4RnkOY'

// デバッグログ
if (typeof window !== 'undefined') {
  console.log('🔧 Hardcode Check:', {
    url: supabaseUrl,
    key: supabaseAnonKey ? 'Set ✅' : 'MISSING ❌'
  })
}

// 確実にURLが入っている状態でクライアントを作成
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
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
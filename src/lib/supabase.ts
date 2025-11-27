//  Supabaseクライアントの設定
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 型定義
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

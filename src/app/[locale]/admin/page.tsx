"use client"

import { useState, useEffect } from "react"
import { supabase, Survey, Order } from "@/lib/supabase"

export default function AdminPage() {
  const [surveys, setSurveys] = useState<Survey[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [surveysData, ordersData] = await Promise.all([
        supabase.from('surveys').select('*').order('created_at', { ascending: false }),
        supabase.from('orders').select('*').order('created_at', { ascending: false })
      ])

      if (surveysData.data) setSurveys(surveysData.data)
      if (ordersData.data) setOrders(ordersData.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="text-center p-8">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-[#f4f5f2] p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center my-6">管理画面</h1>

        {/* アンケート結果 */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow">
          <h2 className="text-2xl font-bold mb-4">アンケート結果 ({surveys.length}件)</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">日時</th>
                  <th className="p-3 text-left">人数</th>
                  <th className="p-3 text-left">出身国</th>
                  <th className="p-3 text-left">きっかけ</th>
                  <th className="p-3 text-left">初めて</th>
                </tr>
              </thead>
              <tbody>
                {surveys.map((survey) => (
                  <tr key={survey.id} className="border-b">
                    <td className="p-3">{new Date(survey.created_at).toLocaleString('ja-JP')}</td>
                    <td className="p-3">{survey.number_of_people}</td>
                    <td className="p-3">{survey.country}</td>
                    <td className="p-3">{survey.reason}</td>
                    <td className="p-3">{survey.is_first_time ? 'はい' : 'いいえ'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 注文履歴 */}
        <div className="bg-white rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">注文履歴 ({orders.length}件)</h2>
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">
                    {new Date(order.created_at).toLocaleString('ja-JP')}
                  </span>
                  <span className="text-lg font-bold text-[#0d3859]">
                    ¥{order.total_price.toLocaleString()}
                  </span>
                </div>
                <div className="space-y-1">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="text-sm text-gray-600">
                      {item.name} × {item.quantity} - ¥{(item.price * item.quantity).toLocaleString()}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { supabase, Order } from "@/lib/supabase"
import { useTranslations } from "next-intl"
import { FaCheckCircle, FaClipboardList } from "react-icons/fa"
import { Link } from "@/i18n/routing"

export default function OrderConfirmationPage() {
  const params = useParams()
  const orderId = params.orderId as string
  const t = useTranslations("OrderConfirmation")
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrder()
  }, [orderId])

  const fetchOrder = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('id', orderId)
        .single()

      if (error) throw error
      setOrder(data)
    } catch (error) {
      console.error("Error fetching order:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f4f5f2] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0d3859] mx-auto"></div>
          <p className="mt-4 text-gray-600">読み込み中...</p>
        </div>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-[#f4f5f2] flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 text-center max-w-md">
          <p className="text-red-500 text-lg">注文が見つかりませんでした</p>
          <Link href="/menu" className="mt-4 inline-block text-[#0d3859] underline">
            メニューに戻る
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f4f5f2] p-4">
      <div className="max-w-2xl mx-auto">
        {/* 成功メッセージ */}
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-6 text-center">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-green-700 mb-2">
            {t("successTitle")}
          </h1>
          <p className="text-green-600">
            {t("successMessage")}
          </p>
        </div>

        {/* 店員への指示 */}
        <div className="bg-yellow-50 border-2 border-yellow-500 rounded-lg p-6 mb-6">
          <div className="flex items-start">
            <FaClipboardList className="text-yellow-600 text-3xl mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-yellow-800 mb-2">
                {t("staffInstructionTitle")}
              </h2>
              <p className="text-yellow-700 text-lg leading-relaxed">
                {t("staffInstruction")}
              </p>
            </div>
          </div>
        </div>

        {/* 注文内容 */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-[#0d3859] border-b-2 border-[#0d3859] pb-2">
            {t("orderDetails")}
          </h2>

          <div className="space-y-3 mb-6">
            {order.items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center border-b pb-3">
                <div className="flex-1">
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-gray-600">
                    ¥{item.price.toLocaleString()} × {item.quantity}
                  </p>
                </div>
                <p className="font-bold text-lg text-[#0d3859]">
                  ¥{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-[#0d3859] pt-4">
            <div className="flex justify-between items-center text-2xl font-bold">
              <span>{t("total")}</span>
              <span className="text-[#0d3859]">
                ¥{order.total_price.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* アクションボタン */}
        <div className="mt-[50px]">
          <Link 
            href="/menu"
            className="block w-full bg-[#0d3859] text-white py-4 rounded-lg font-bold text-lg text-center hover:bg-[#0d3859]/90 transition-colors"
          >
            {t("backToMenu")}
          </Link>
        </div>
      </div>
    </div>
  )
}
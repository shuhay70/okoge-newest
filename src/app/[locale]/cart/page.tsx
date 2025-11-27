"use client"

import { useTranslations } from "next-intl"
import { supabase } from "@/lib/supabase"
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa"
import { useCart } from "@/contexts/CartContext"
import { useState } from "react"
import { useRouter } from "@/i18n/routing"

export default function CartPage() {
  const t = useTranslations("Cart")
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmitOrder = async () => {
    if (cartItems.length === 0) {
      alert(t("cartEmpty"))
      return
    }

    setIsSubmitting(true)

    try {
      const { data, error } = await supabase
        .from('orders')
        .insert([
          {
            items: cartItems,
            total_price: totalPrice,
            status: 'pending'
          }
        ])
        .select()
        .single()

      if (error) throw error

      console.log("Order created:", data) // デバッグ用
      
      // 注文IDを持って確認画面へ遷移
      clearCart()
      router.push(`/order-confirmation/${data.id}`)
    } catch (error) {
      console.error("Error submitting order:", error)
      alert(t("orderError"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f4f5f2] p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center my-6 text-[#0d3859]">
          {t("title")}
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-gray-500 text-lg">{t("empty")}</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div 
                  key={item.name}
                  className="bg-white rounded-lg p-4 shadow flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600">
                      ¥{item.price.toLocaleString()} × {item.quantity}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.name, item.quantity - 1)}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <FaMinus />
                    </button>
                    <span className="font-bold text-lg w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.name, item.quantity + 1)}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <FaPlus />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 ml-2"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <div className="flex justify-between items-center text-xl font-bold mb-4">
                <span>{t("total")}</span>
                <span className="text-[#0d3859]">
                  ¥{totalPrice.toLocaleString()}
                </span>
              </div>

              <button
                onClick={handleSubmitOrder}
                disabled={isSubmitting}
                className="w-full bg-[#0d3859] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#0d3859]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? t("submitting") : t("placeOrder")}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
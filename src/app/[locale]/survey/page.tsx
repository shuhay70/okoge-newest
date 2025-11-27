"use client";

import { useState, useEffect  } from "react";
import { useRouter } from "@/i18n/routing";
import { supabase } from "@/lib/supabase";
import { useTranslations } from "next-intl";

export default function SurveyPage() {
  useEffect(() => {
    console.log('🔍 ENV CHECK:')
    console.log('SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log('SUPABASE_ANON_KEY exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  }, [])
  const t = useTranslations("Survey");
  const router = useRouter();
  const [number, setNumber] = useState("");
  const [country, setCountry] = useState("");
  const [reason, setReason] = useState("");
  const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
  const countries = [
    "South Korea",
    "China",
    "Taiwan",
    "USA",
    "Hong Kong",
    "Germany",
    "France",
    "UK",
    "Australia",
    "Canada",
    "Italy",
    "Spain",
    "Thailand",
    "Philippines",
    "Singapore",
    "Malaysia",
    "Indonesia",
    "India",
    "Vietnam",
    "Mexico",
    "Japan",
    "Other",
  ];

  const reasons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!reason || !country || !number || isFirstTime === null) {
      alert(t("pleaseComplete"));
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("surveys").insert([
        {
          country,
          reason,
          number_of_people: number,
          is_first_time: isFirstTime,
        },
      ]);

      if (error) throw error;

      // 注文画面へ遷移
      router.push("/menu");
    } catch (error) {
      console.error("Error submitting survey:", error);
      alert(t("submitError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f5f2] flex items-center justify-center p-4">
      <div className="bg-white rounded-[40px] p-8 max-w-md w-full shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#0d3859]">
          {t("title")}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-[45px]">
          {/* 人数選択 */}
          <div>
            <label className="block text-lg font-semibold mb-3">
              {t("numberQuestion")}
            </label>
            <select
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#0d3859] focus:outline-none"
              required
            >
              <option value="">{t("selectNumber")}</option>
              {numbers.map((c) => (
                <option key={c} value={c}>
                  {t(`numbers.${c}`)}
                </option>
              ))}
            </select>
          </div>

          {/* 出身国選択 */}
          <div>
            <label className="block text-lg font-semibold mb-3">
              {t("countryQuestion")}
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#0d3859] focus:outline-none"
              required
            >
              <option value="">{t("selectCountry")}</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {t(`countries.${c}`)}
                </option>
              ))}
            </select>
          </div>

          {/* もんじゃをどこで知ったか */}
          <div>
            <label className="block text-lg font-semibold mb-3">
              {t("Question1")}
            </label>
            <div className="space-y-2">
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#0d3859] focus:outline-none"
                required
              >
                <option value="">{t("selectCReason")}</option>
                {reasons.map((c) => (
                  <option key={c} value={c}>
                    {t(`reasons.${c}`)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* もんじゃ初体験か */}
          <div>
            <label className="block text-lg font-semibold mb-3">
              {t("Question2")}
            </label>
            <div className="space-y-2">
              <label className="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="firstTime"
                  checked={isFirstTime === true}
                  onChange={() => setIsFirstTime(true)}
                  className="mr-3 w-5 h-5"
                  required
                />
                <span>{t("yes")}</span>
              </label>
              <label className="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="firstTime"
                  checked={isFirstTime === false}
                  onChange={() => setIsFirstTime(false)}
                  className="mr-3 w-5 h-5"
                  required
                />
                <span>{t("no")}</span>
              </label>
            </div>
          </div>

          {/* 送信ボタン */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#505938] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#0d3859]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? t("submitting") : t("submit")}
          </button>
        </form>
      </div>
    </div>
  );
}

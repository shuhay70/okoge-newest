// src/app/[locale]/layout.tsx (サーバーコンポーネント)

// useMessages はインポートしない
import { NextIntlClientProvider } from "next-intl";
// getMessages をサーバーからインポート
import { getMessages } from "next-intl/server";
import "./globals.css";
// 新しく作成したクライアントコンポーネントをインポート
import ConditionalLayoutWrapper from "./components/ConditionalLayoutWrapper";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

// async 関数にする
export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  // サーバーサイドでメッセージを取得
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        {/* プロバイダーでクライアントコンポーネントをラップ */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* ラッパーコンポーネントを使用 */}
          <ConditionalLayoutWrapper>{children}</ConditionalLayoutWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

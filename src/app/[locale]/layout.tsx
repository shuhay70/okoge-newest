import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import ConditionalLayoutWrapper from "./components/ConditionalLayoutWrapper";
import { CartProvider } from "@/contexts/CartContext";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CartProvider>
            <ConditionalLayoutWrapper>{children}</ConditionalLayoutWrapper>
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
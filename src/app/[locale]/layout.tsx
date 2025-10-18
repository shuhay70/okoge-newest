import { NextIntlClientProvider } from "next-intl";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <NextIntlClientProvider>
          <Header />

          {children}

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

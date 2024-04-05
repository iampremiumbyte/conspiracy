import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "$Coinspiracy",
  description: "$Coinspiracy",
  icons: {
    icon: '/favicon.ico', // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CoinspiracySOL" />
        <meta name="twitter:creator" content="@CoinspiracySOL" />
        <meta name="twitter:title" content="$Coinspiracy" />
        <meta name="twitter:description" content="CoinspiracySOL site" />
        <meta name="twitter:image" content="https://coinspiracy.wtf/twitter.jpg" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

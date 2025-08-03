import AOSInitializer from "@/components/AOSInitializer";
import "./globals.css"
import { Inter } from "next/font/google";
import ReactQueryProvider from "./provider";
import { ToastContainer } from 'react-toastify';
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TTYZVHR9NE"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {` window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
              }
          gtag("js", new Date());

          gtag("config", "G-TTYZVHR9NE");`}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9169195841154004"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} ${inter.variable} antialiased`}>
        <AOSInitializer />
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
        <ToastContainer />
      </body>
    </html>
  );
}

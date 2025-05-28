import AOSInitializer from "@/components/AOSInitializer";
import "./globals.css"
import { Inter } from "next/font/google";
import ReactQueryProvider from "./provider";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} antialiased`}>
        <AOSInitializer />
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>

      </body>
    </html>
  );
}
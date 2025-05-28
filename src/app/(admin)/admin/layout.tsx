// app/(admin)/admin/layout.tsx

import AdminNavbar from "@/components/layouts/AdminNavbar";
import { Inter } from "next/font/google";
import React from "react";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <body className={`${inter.className} ${inter.variable} antialiased`}>
      <div className="flex h-screen bg-[#F9FAFB]">
        <aside className="basis-1/5 bg-black text-white py-8">
          <AdminNavbar />
        </aside>
        <main className="basis-4/5 flex flex-col h-screen overflow-y-scroll">
          {children}
        </main>
      </div>

    </body>
  );
}

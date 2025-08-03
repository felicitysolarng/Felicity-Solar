// app/(admin)/admin/layout.tsx

import AdminNavbar from "@/components/layouts/AdminNavbar";
import AdminRouteLayout from "@/layouts/AdminLayout";
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
    <AdminRouteLayout>
      <div className={`${inter.className} ${inter.variable} antialiased h-[99vh] overflow-hidden`}>
        <div className="flex h-screen overflow-hidden bg-[#F9FAFB] ">
          <aside className="basis-1/5 bg-black text-white py-8">
            <AdminNavbar />
          </aside>
          <main className="basis-4/5 flex flex-col">
            {children}
          </main>
        </div>

      </div>
    </AdminRouteLayout>

  );
}

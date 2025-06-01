
import { Metadata } from 'next'
import { Inter } from 'next/font/google';
import React from 'react'
import "../../../globals.css"



import Link from 'next/link';
import Image from 'next/image';
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: 'Admin Signup - Felicity Solar',
    description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
}

function AdminSignupPage() {
    return (
        <main className={`${inter.className} ${inter.variable} antialiased`}>
            <section className="bg-black dark:bg-gray-900 h-screen px-4 flex justify-center items-center flex-col">

                <div className="flex mb-6 items-center justify-center">
                    <Image src={"/logo.png"} alt='Felicity solar logo' width={180} height={120} />

                </div>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 py-8">
                    <div className="p-6 flex flex-col gap-y-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create Your Account
                        </h1>
                        <form className="space-y-4 md:space-y-7" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            <button type="submit" className="w-full bg-primary text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-12">Sign up</button>

                            <div className="flex justify-center items-center">
                                Already signup?  {" "}
                                <Link href="/auth/login" className="text-base font-inter font-medium text-primary hover:underline dark:text-primary ml-0.5">Login</Link>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default AdminSignupPage
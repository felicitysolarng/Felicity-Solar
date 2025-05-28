'use client';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
//import Cookies from 'js-cookie';

//type Props = {}

function Login() {
    const router = useRouter();


  /*   async function handleLogin() {
        const res = await fetch("https://your-php-api.com/login", {
            method: "POST",
            //body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await res.json();

        if (data.success && data.is_admin) {
            Cookies.set("auth-token", data.token); // cookie stores token
            Cookies.set("is-admin", "true");
            router.push("/admin/dashboard");
        } else {
            alert("Unauthorized or not an admin.");
        }
    } */
    return (
        <section className="bg-black dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 py-8">
                    <div className="p-6 flex flex-col gap-y-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Welcome Back
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
                            <div className="flex items-center justify-between">

                                <Link href="#" className="text-sm font-inter font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-12">Sign in</button>


                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Login
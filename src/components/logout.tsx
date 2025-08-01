"use client";
import React from 'react'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';



function Logout() {
    const router = useRouter();

    function logout() {
        Cookies.remove("token");
        localStorage.removeItem("token");
        router.push("/auth/login");
    }

    return (
        <div>

            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Logout
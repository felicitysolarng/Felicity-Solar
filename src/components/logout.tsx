import React from 'react'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

type Props = {}

function Logout({ }: Props) {
    const router = useRouter();

    function logout() {
        Cookies.remove("auth-token");
        Cookies.remove("is-admin");
        router.push("/auth/login");
    }

    return (
        <div>

            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Logout
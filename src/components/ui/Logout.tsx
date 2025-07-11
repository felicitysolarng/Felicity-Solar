'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        await fetch('http://localhost:3000/api'); // calls the route handler you created
        router.push('/auth/login'); // or wherever you want to redirect
    };

    return (
        <button onClick={handleLogout} className="px-4 hover:bg-red-500 bg-red-600/90 py-2 w-max mt-10 text-left text-white rounded">
            Logout
        </button>
    );
}

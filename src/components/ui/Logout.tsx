'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
    // const router = useRouter();

    const handleLogout = async () => {

        try {
            const response = await fetch(`/api/logout`, {
                method: "GET"
            });
            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.log(error);
        }
        // calls the route handler you created
        // router.push('/auth/login'); // or wherever you want to redirect
    };

    return (
        <button onClick={handleLogout} className="px-4 hover:bg-red-500 bg-red-600/90 py-2 w-max mt-10 text-left text-white rounded">
            Logout
        </button>
    );
}

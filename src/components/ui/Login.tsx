'use client';
//import { useRouter } from 'next/navigation';
//import Cookies from 'js-cookie';



function Login() {
   // const router = useRouter();


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
        <div>
            <form>
                <input type="text" />
            </form>
        </div>
    )
}

export default Login
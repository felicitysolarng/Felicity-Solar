"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/auth/login"); // redirect to login
    } else {
      setIsAuthenticated(true);
    }

    setChecking(false);
  }, [router]);

  if (checking) return <div>Checking authentication...</div>;

  return isAuthenticated ? <>{children}</> : null;
};

export default AdminLayout;

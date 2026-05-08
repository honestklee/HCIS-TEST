"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../../contexts/UserContext";

const protectedRoutes = [
  "/dashboard",
  "/employee-master-data",
  "/payroll-processing",
  "/disbursement-management",
  "/reports",
  "/profile",
  "/personal-dashboard",
];

export default function ProtectedRoute({ children }) {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Only check protection after loading is complete
    if (loading) return;

    // Check if current path is protected
    const currentPath = window.location.pathname;
    const isProtected = protectedRoutes.some(route => 
      currentPath.startsWith(route)
    );

    if (isProtected && !user) {
      // Redirect to login if accessing protected route without user
      router.push("/");
      return;
    }
  }, [user, loading, router]);

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If no user and trying to access protected route, show loading or redirect
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const isProtected = protectedRoutes.some(route => 
    currentPath.startsWith(route)
  );

  if (isProtected && !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

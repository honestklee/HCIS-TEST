import { NextRequest, NextResponse } from "next/server";
import { sessionCookieName, verifySessionToken } from "./lib/auth/session";

const protectedPrefixes = [
  "/dashboard",
  "/employee-master-data",
  "/payroll-processing",
  "/disbursement-management",
  "/reports",
  "/profile",
  "/personal-dashboard",
];

const publicRoutes = [
  "/",
  "/api/auth",
  "/api/auth/logout",
];

function isProtectedPath(pathname: string): boolean {
  return protectedPrefixes.some((prefix) => pathname.startsWith(prefix));
}

function isPublicRoute(pathname: string): boolean {
  return publicRoutes.some((route) => pathname === route);
}

export default async function middleware(request: NextRequest): Promise<NextResponse> {
  const { pathname } = request.nextUrl;
  
  console.log(`=== MIDDLEWARE CHECK ===`);
  console.log(`Path: ${pathname}`);
  console.log(`Method: ${request.method}`);
  console.log(`Cookies: ${request.cookies.getAll().map(c => c.name).join(', ')}`);
  
  // Allow public routes without auth checks
  if (isPublicRoute(pathname)) {
    console.log(`PUBLIC ROUTE: ${pathname} - allowing access`);
    const response = NextResponse.next();
    // Add cache control headers to prevent caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    console.log(`=== END MIDDLEWARE CHECK ===\n`);
    return response;
  }
  
  // Check protected routes
  if (isProtectedPath(pathname)) {
    const token = request.cookies.get(sessionCookieName)?.value;
    
    console.log(`PROTECTED ROUTE: ${pathname}`);
    console.log(`Token present: ${!!token}`);
    console.log(`Token value: ${token ? token.substring(0, 20) + '...' : 'none'}`);
    
    // No token - redirect to login immediately
    if (!token) {
      console.log(`❌ UNAUTHORIZED: No token found for ${pathname}`);
      const response = NextResponse.redirect(new URL("/", request.url));
      // Clear any potential auth cookies
      response.cookies.delete(sessionCookieName);
      response.cookies.delete('auth-token');
      response.cookies.delete('session');
      response.cookies.delete('user');
      // Add cache control headers
      response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      response.headers.set('Pragma', 'no-cache');
      response.headers.set('Expires', '0');
      return response;
    }

    // Verify token validity
    try {
      const payload = await verifySessionToken(token);
      console.log(`✅ AUTHORIZED: ${pathname} for user ${payload.sub}`);
      return NextResponse.next();
    } catch (error) {
      console.log(`❌ INVALID TOKEN: ${pathname} - ${error.message}`);
      const response = NextResponse.redirect(new URL("/", request.url));
      // Clear all auth cookies
      response.cookies.delete(sessionCookieName);
      response.cookies.delete('auth-token');
      response.cookies.delete('session');
      return response;
    }
  }

  // Any other routes - allow access with cache control
  console.log(`OTHER ROUTE: ${pathname} - allowing access`);
  console.log(`=== END MIDDLEWARE CHECK ===\n`);
  const response = NextResponse.next();
  // Add cache control headers to prevent caching
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  response.headers.set('Pragma', 'no-cache');
  response.headers.set('Expires', '0');
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

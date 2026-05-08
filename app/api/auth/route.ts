import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, createSessionToken, getSessionConfig, sessionCookieName } from "../../../lib/auth/session";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const authUsername = process.env.AUTH_USERNAME || "superadmin";
    const authPassword = process.env.AUTH_PASSWORD || "admin123";
    
    if (email === `${authUsername}@hcis.com` && password === authPassword) {
      const payload = {
        sub: "superadmin",
        email: "superadmin@hcis.com",
        name: "Super Admin",
        role: "admin"
      };

      const token = await createSessionToken(payload);
      const sessionConfig = getSessionConfig(token);

      const response = NextResponse.json({
        success: true,
        user: payload
      });

      response.cookies.set(sessionConfig);
      return response;
    }

    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET /api/auth/me
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get(sessionCookieName)?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: "No session token found" },
        { status: 401 }
      );
    }

    const payload = await verifySessionToken(token);
    
    return NextResponse.json({
      id: payload.sub,
      email: payload.email,
      name: payload.name || "User",
      role: payload.role
    });
  } catch (error) {
    console.error("Auth verification failed:", error);
    return NextResponse.json(
      { error: "Invalid session" },
      { status: 401 }
    );
  }
}

// DELETE /api/auth/logout
export async function DELETE(request: NextRequest) {
  try {
    const response = NextResponse.json({
      success: true,
      message: "Logged out successfully"
    });

    // Clear all possible auth cookies
    response.cookies.delete(sessionCookieName);
    response.cookies.delete('auth-token');
    response.cookies.delete('session');
    response.cookies.delete('user');
    
    // Add cache control headers to prevent caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('Surrogate-Control', 'no-store');
    
    // Clear site data for extra security
    response.headers.set('Clear-Site-Data', '"cache", "cookies", "storage", "executionContexts"');
    
    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

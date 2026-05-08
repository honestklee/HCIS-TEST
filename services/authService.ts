import { timingSafeEqual } from "node:crypto";
import { createSessionToken, verifySessionToken, CustomJWTPayload } from "../lib/auth/session";
import { validateLoginInput } from "../controllers/authController";

// Type for user data
interface User {
  username: string;
  role: string;
}

// Type for authentication result
interface AuthResult {
  success: boolean;
  user?: User;
  token?: string;
  message: string;
  field?: 'username' | 'password';
}

// Type for session verification result
interface SessionResult {
  success: boolean;
  user?: CustomJWTPayload;
  message: string;
}

// Mock user database (in real app, this would come from database)
const mockUsers: User[] = [
  { username: "superadmin", role: "admin" },
  { username: "admin", role: "admin" },
  { username: "user", role: "user" },
];

// Secure comparison function to prevent timing attacks
function safeCompare(left: string, right: string): boolean {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }
  return timingSafeEqual(leftBuffer, rightBuffer);
}

// Authenticate user with credentials
export async function authenticateUser(username: string, password: string): Promise<AuthResult> {
  try {
    // Validate input first
    const validation = validateLoginInput(username, password);
    if (!validation.success) {
      return {
        success: false,
        message: validation.message,
        field: validation.field
      };
    }

    // Check credentials against environment variables or mock database
    const expectedUsername = process.env.AUTH_USERNAME ?? "superadmin";
    const expectedPassword = process.env.AUTH_PASSWORD ?? "210626";

    const isAuthorized = safeCompare(username, expectedUsername) && 
                        safeCompare(password, expectedPassword);

    if (!isAuthorized) {
      return {
        success: false,
        message: "Username atau password salah"
      };
    }

    // Create session token for authenticated user
    const user = mockUsers.find(u => u.username === username) || { username, role: "admin" };
    const token = await createSessionToken({ 
      sub: user.username, 
      role: user.role 
    });

    return {
      success: true,
      user,
      token,
      message: "Authentication successful"
    };

  } catch (error) {
    console.error("Authentication error:", error);
    return {
      success: false,
      message: "Authentication service error"
    };
  }
}

// Verify user session
export async function verifyUserSession(token: string): Promise<SessionResult> {
  try {
    if (!token) {
      return {
        success: false,
        message: "No token provided"
      };
    }

    const user = await verifySessionToken(token);
    
    return {
      success: true,
      user,
      message: "Session valid"
    };

  } catch (error) {
    console.error("Session verification error:", error);
    return {
      success: false,
      message: "Invalid or expired session"
    };
  }
}

// Get user from session token
export async function getUserFromSession(token: string): Promise<User | null> {
  try {
    const session = await verifyUserSession(token);
    return session.success ? { 
      username: session.user!.sub, 
      role: session.user!.role 
    } : null;
  } catch {
    return null;
  }
}

// Check if user has specific role
export function hasRole(user: User | null, requiredRole: string): boolean {
  if (!user) return false;
  return user.role === requiredRole;
}

// Check if user is admin
export function isAdmin(user: User | null): boolean {
  return hasRole(user, "admin");
}

// Export types for use in other files
export type { User, AuthResult, SessionResult };

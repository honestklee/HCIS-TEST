import { SignJWT, jwtVerify, JWTPayload } from "jose";

const SESSION_COOKIE_NAME = "hcis_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 1;

// Extended JWT payload interface with additional properties
interface CustomJWTPayload extends JWTPayload {
  sub: string;
  role: string;
}

// Type for session config
interface SessionConfig {
  name: string;
  value: string;
  httpOnly: boolean;
  sameSite: "strict" | "lax" | "none";
  secure: boolean;
  path: string;
  maxAge: number;
}

function getSecret(): Uint8Array {
  const secret = process.env.AUTH_JWT_SECRET;
  if (!secret) {
    throw new Error("AUTH_JWT_SECRET is not configured");
  }
  return new TextEncoder().encode(secret);
}

export async function createSessionToken(payload: CustomJWTPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_SECONDS}s`)
    .sign(getSecret());
}

export async function verifySessionToken(token: string): Promise<CustomJWTPayload> {
  const { payload } = await jwtVerify(token, getSecret());
  return payload as CustomJWTPayload;
}

export function getSessionConfig(token: string): SessionConfig {
  return {
    name: SESSION_COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  };
}

export const sessionCookieName = SESSION_COOKIE_NAME;

// Export the custom JWT payload type for use in other files
export type { CustomJWTPayload };

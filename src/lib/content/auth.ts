import { createHmac, timingSafeEqual } from "node:crypto";

/** Fixed pad length used so PIN comparisons run over constant-size buffers regardless of input length. */
const PAD_LENGTH = 64;

// Reads ADMIN_PIN from the environment, throwing a clear error if it's unset rather than silently accepting any PIN.
export function requireAdminEnv(): string {
  const pin = process.env.ADMIN_PIN;
  if (!pin) {
    throw new Error("ADMIN_PIN environment variable is not set. Add it to .env.local (see .env.example).");
  }
  return pin;
}

// Timing-safe comparison of a submitted PIN against ADMIN_PIN, padded to a fixed length to avoid leaking length via timing.
export function verifyAdminPin(pin: string): boolean {
  const expected = requireAdminEnv();
  const a = Buffer.from(pin.padEnd(PAD_LENGTH, "\0"));
  const b = Buffer.from(expected.padEnd(PAD_LENGTH, "\0"));
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export const ADMIN_SESSION_COOKIE = "oc_admin_session";

// Derives the session cookie value as HMAC-SHA256(ADMIN_PIN, "admin-session") so the raw PIN is never stored in the cookie.
export function signAdminSession(): string {
  const pin = requireAdminEnv();
  return createHmac("sha256", pin).update("admin-session").digest("hex");
}

// Checks a cookie value against the current signed session token, timing-safe.
export function isValidAdminSession(value: string | undefined): boolean {
  if (!value) return false;
  const expected = signAdminSession();
  const a = Buffer.from(value);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

"use client";

import Link from "next/link";
import { useState } from "react";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
  LoginOutlined,
  SafetyCertificateOutlined,
  SecurityScanOutlined,
  UserOutlined,
  VerifiedOutlined,
} from "@ant-design/icons";
import { useUser } from "../../contexts/UserContext";

export default function LoginForm() {
  const { updateUser } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function togglePasswordVisibility(event) {
    event.preventDefault();
    setShowPassword((prev) => !prev);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email: `${username.trim()}@hcis.com`, password: password.trim() }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Login gagal");
        return;
      }

      // Save user data to context
      updateUser(data.user);

      window.location.href = "/dashboard";
    } catch {
      setError("Tidak dapat terhubung ke server");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="font-label-md text-on-surface-variant block" htmlFor="username">
          Username
        </label>
        <div className="relative group">
          <UserOutlined className="absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" />
          <input
            className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-sm text-on-surface placeholder:text-outline/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            id="username"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Masukan Username"
            type="text"
            value={username}
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="font-label-md text-on-surface-variant block" htmlFor="password">
            Password
          </label>
          <Link className="font-label-sm text-primary hover:underline transition-all" href="/two-step-verification">
            Forgot Password?
          </Link>
        </div>
        <div className="relative group">
          <LockOutlined className="absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" />
          <input
            className="w-full pl-10 pr-12 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-sm text-on-surface placeholder:text-outline/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            id="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="••••••••••••"
            type={showPassword ? "text" : "password"}
            value={password}
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={togglePasswordVisibility}
            type="button"
          >
            {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/30"
          id="remember"
          name="remember"
          type="checkbox"
        />
        <label className="font-body-sm text-on-surface-variant cursor-pointer" htmlFor="remember">
          Remember this device
        </label>
      </div>

      {error ? <p className="text-error text-sm">{error}</p> : null}

      <button
        className="w-full bg-primary text-on-primary font-label-md py-4 rounded-lg shadow-sm hover:bg-primary-container active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
        disabled={loading}
        type="submit"
      >
        <LoginOutlined />
        {loading ? "Signing in..." : "Sign In to HCIS"}
      </button>

      <footer className="mt-12 pt-8 border-t border-outline-variant/30 text-center">
        <p className="font-label-sm text-on-surface-variant mb-4">Secured by Mandiri Enterprise Identity</p>
        <div className="flex justify-center gap-4">
          <VerifiedOutlined className="text-outline text-[20px]" />
          <SecurityScanOutlined className="text-outline text-[20px]" />
          <SafetyCertificateOutlined className="text-outline text-[20px]" />
        </div>
      </footer>
    </form>
  );
}

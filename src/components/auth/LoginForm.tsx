"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import PasswordInput from "./PasswordInput";
import styles from "./login.module.css";

function safeCallback(url: string | null) {
  if (!url || !url.startsWith("/") || url.startsWith("//")) return "/dashboard";
  return url;
}

function LoginFormInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = safeCallback(searchParams.get("callbackUrl"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email: email.trim().toLowerCase(),
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password. Please try again.");
        setLoading(false);
        return;
      }

      router.push(callbackUrl);
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && <p className={styles.formError}>{error}</p>}

      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </label>

      <PasswordInput
        label="Password"
        name="password"
        value={password}
        onChange={setPassword}
        autoComplete="current-password"
        required
        placeholder="Your password"
      />

      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading ? "Signing in..." : "Sign in"}
      </button>

      <p className={styles.switchText}>
        New here?{" "}
        <Link href="/signup" className={styles.switchLink}>
          Create an account
        </Link>
      </p>
      <p className={styles.switchText}>
        <Link href="/" className={styles.switchLink}>
          ← Back to home
        </Link>
      </p>
    </form>
  );
}

export default function LoginForm() {
  return (
    <Suspense fallback={<p className={styles.switchText}>Loading…</p>}>
      <LoginFormInner />
    </Suspense>
  );
}

"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./login.module.css";

function LoginNoticesMessage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const registered = searchParams.get("registered");

  if (registered === "1") {
    return (
      <p className={styles.formSuccess}>
        Account created successfully. Please sign in to continue.
      </p>
    );
  }

  if (!error) return null;

  return (
    <p className={styles.formError} style={{ marginBottom: 0 }}>
      Sign-in failed. Please check your email and password.
    </p>
  );
}

export default function LoginError() {
  return (
    <Suspense fallback={null}>
      <LoginNoticesMessage />
    </Suspense>
  );
}

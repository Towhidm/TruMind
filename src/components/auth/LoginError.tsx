"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function LoginErrorMessage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  if (!error) return null;

  return (
    <p
      style={{
        marginBottom: 16,
        padding: "10px 12px",
        borderRadius: 10,
        background: "#fef2f2",
        color: "#b91c1c",
        fontSize: 13,
        textAlign: "center",
      }}
    >
      Sign-in failed. Please try again with Google.
    </p>
  );
}

export default function LoginError() {
  return (
    <Suspense fallback={null}>
      <LoginErrorMessage />
    </Suspense>
  );
}

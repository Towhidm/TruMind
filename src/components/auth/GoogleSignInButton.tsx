"use client";

import { signIn } from "next-auth/react";
import { Button } from "antd";
import Image from "next/image";

export default function GoogleSignInButton() {
  return (
    <Button
      block
      size="large"
      icon={
        <Image
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          width={20}
          height={20}
        />
      }
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      style={{
        height: 48,
        fontWeight: 600,
        borderRadius: 12,
      }}
    >
      Continue with Google
    </Button>
  );
}

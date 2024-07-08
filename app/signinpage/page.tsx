"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={async () => {
          await signIn("google");
        }}
      >
        Login with Google
      </button>
      
    </div>
  );
}
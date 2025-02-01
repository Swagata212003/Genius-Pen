

"use client";  // Mark this as a Client Component

import { useAuth } from "@clerk/nextjs";  // Clerk hook for authentication
import { useRouter } from "next/navigation";  // Updated import
import { useEffect } from "react";

export default function Home() {
  const { isSignedIn } = useAuth();  // Get the sign-in status
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      // Redirect to the dashboard if signed in
      router.push("/dashboard");
    } else {
      // Redirect to the sign-in page if not signed in
      router.push("/sign-in");
    }
  }, [isSignedIn, router]);

  // Optional: Render nothing as users will be redirected immediately
  return null;
}

"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login"); // redirect to login if not logged in
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <main className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">
        Welcome, {session?.user?.name || "User"} 👋
      </h1>
    </main>
  );
}

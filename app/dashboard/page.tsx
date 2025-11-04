"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface UserData {
  name?: string;
  email?: string;
  picture?: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);

  // Load user info from localStorage when component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        console.error("Invalid user data in localStorage");
      }
    } else {
      // No user found, redirect to login
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-500">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Welcome, {user.name || "User"} 👋
      </h1>

      {user.picture ? (
        <Image
          src={user.picture}
          alt="User Avatar"
          width={120}
          height={120}
          className="rounded-full shadow-md mb-6"
        />
      ) : (
        <Image
          src={user.picture || "https://randomuser.me/api/portraits/men/75.jpg"}
          alt="User Avatar"
          width={120}
          height={120}
          className="rounded-full shadow-md mb-6"
        />


      )}

      <p className="text-gray-600 text-lg mb-8">{user.email}</p>

      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    </div>
  );
}

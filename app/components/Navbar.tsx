"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useTheme } from "../context/ThemeContext";
import { Menu } from "lucide-react"; // menu icon

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const { data: session } = useSession();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      {/* Left Section - Menu + Logo */}
      <div className="navbar-left">
        <button onClick={onMenuClick} className="menu-button" aria-label="Toggle Sidebar">
          <Menu size={22} />
        </button>
        <h1 className="logo">My App</h1>
      </div>

      {/* Right Section - Theme + Auth Controls */}
      <div className="navbar-right">
        <button onClick={toggleTheme} className="nav-btn">
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>

        {session ? (
          <>
            <span className="welcome">Welcome, {session.user?.name}</span>
            <button onClick={() => signOut()} className="nav-btn">
              Logout
            </button>
          </>
        ) : (
          <button onClick={() => signIn("google")} className="nav-btn">
            Login with Google
          </button>
        )}
      </div>
    </nav>
  );
}

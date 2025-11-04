"use client";

import React from "react";
import Link from "next/link";

interface SidebarProps {
  onVisibilityChange: (visible: boolean) => void;
}

const Sidebar = ({ onVisibilityChange }: SidebarProps) => {
  const handleClose = () => {
    onVisibilityChange(false);
  };

  return (
    <aside className="sidebar">
      {/* Close button */}
      <h2
        className="close-btn"
        style={{
          justifySelf: "end",
          position: "fixed",
          top: "-54px",
          marginTop: "60px",
          cursor: "pointer",
          right: "10px",
          fontSize: "20px",
        }}
        onClick={handleClose}
      >
        ×
      </h2>

      {/* Navigation Links */}
      <nav className="sidebar-links">
        <Link href="/" className="nav-link">
          <h2>🏠 Home</h2>
        </Link>

        <Link href="/about" className="nav-link">
          <h2>ℹ️ About</h2>
        </Link>

        <Link href="/latest-cars" className="nav-link">
          <h2>🚗 Latest Cars</h2>
        </Link>

        <Link href="/News" className="nav-link">
          <h2>📰 News</h2>
        </Link>

        <Link href="/notes" className="nav-link">
          <h2>📝 Notes</h2>
        </Link>

        <Link href="/feedback" className="nav-link">
          <h2>💬 Feedback</h2>
        </Link>

        <Link href="/login" className="nav-link">
          <h2>🔐 Login</h2>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;

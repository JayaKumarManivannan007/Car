"use client";

import { useState } from "react";
import { SessionProvider } from "next-auth/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./context/ThemeContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const clientId =
  "560017485744-b4m24o3499vfaj9ls9ebqf6ugd2jfb8t.apps.googleusercontent.com";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => setSidebarVisible((prev) => !prev);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProvider>
          <GoogleOAuthProvider clientId={clientId}>
            <ThemeProvider>
              <Navbar onMenuClick={toggleSidebar} />
              <div className={`layout ${!sidebarVisible ? "sidebar-hidden" : ""}`}>
                {sidebarVisible && (
                  <Sidebar onVisibilityChange={(v) => setSidebarVisible(v)} />
                )}
                <main className="main-content">{children}</main>
              </div>
              <Footer />
            </ThemeProvider>
          </GoogleOAuthProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

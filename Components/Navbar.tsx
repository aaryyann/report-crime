"use client";
import Link from "next/link";
import { useState } from "react";
import "../public/crimePulse.webp";
import MobileMenu from "./MobileMenu";
// import MobileMenu

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <Link href={"/"} className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 items-center justify-center">
                  <img src="crimePulse.webp" alt="" />
                </div>
                <span className="text-lg font-semibold text-white">
                  CrimePulse
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Link
                href={"/submit-report"}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Submit Report
              </Link>
              <Link
                href={"/track-report"}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Track Report
              </Link>
              <Link
                href={"/how-it-work"}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                How It Works
              </Link>
              <Link
                href={"/resources"}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Resources
              </Link>
            </div>

            {/* Emergency Button */}
            <div className="flex items-center space-x-4">
              <Link
                href={"/contact"}
                className="hidden md:block text-sm text-zinc-500 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <button className="group flex h-9 items-center gap-2 rounded-full bg-red-500/10 pl-4 pr-5 font-medium text-red-500 ring-1 ring-inset ring-red-500/20 transition-all hover:bg-red-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
                Emergency : 102
              </button>
            </div>

            {/* Mobile Veiw */}
            <button
              className="md:hidden p-2 text-zinc-400 hover:text-white"
              onClick={() => {
                setIsMobileMenuOpen(true);
              }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
       isOpen = {isMobileMenuOpen}
       onClose={() => {
        setIsMobileMenuOpen(false);
       }}
      ></MobileMenu>
    </>
  );
}

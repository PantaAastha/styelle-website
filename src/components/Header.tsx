"use client";

import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change / anchor click
  const closeMenu = () => setMobileOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-md border-b border-[var(--border)]" : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="Styelle Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain mix-blend-multiply"
            priority
          />
          <span className="text-xl font-medium tracking-tight">Styelle</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          <Link href="/#what-we-do" className="text-foreground/70 hover:text-accent transition-colors">
            Our Vision
          </Link>
          <Link href="/#how-it-works" className="text-foreground/70 hover:text-accent transition-colors">
            How it Works
          </Link>
          <Button href="/#contact" variant="outline" size="sm">
            Contact
          </Button>
        </nav>

        {/* Hamburger button (mobile) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] group"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-5 h-[2px] bg-foreground rounded transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-foreground rounded transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-foreground rounded transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile nav panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-64 border-t border-[var(--border)]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4 bg-background/95 backdrop-blur-md">
          <Link
            href="/#what-we-do"
            onClick={closeMenu}
            className="py-3 px-4 rounded-xl text-foreground/80 hover:bg-accent/10 hover:text-accent transition-colors font-medium"
          >
            Our Vision
          </Link>
          <Link
            href="/#how-it-works"
            onClick={closeMenu}
            className="py-3 px-4 rounded-xl text-foreground/80 hover:bg-accent/10 hover:text-accent transition-colors font-medium"
          >
            How it Works
          </Link>
          <Link
            href="/#contact"
            onClick={closeMenu}
            className="py-3 px-4 rounded-xl text-foreground/80 hover:bg-accent/10 hover:text-accent transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

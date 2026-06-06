import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border)] bg-background">
      {/* Decorative thin accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Styelle Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain mix-blend-multiply"
              />
              <span className="font-medium text-lg">Styelle / StyledTogether</span>
            </div>
            <p className="text-sm text-foreground/50 text-center md:text-left">
              Built for thoughtful, coordinated style discovery.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm font-medium text-foreground/70">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms
            </Link>
            <a href="mailto:freesiamoss@gmail.com" className="hover:text-accent transition-colors">
              freesiamoss@gmail.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[var(--border)] text-center text-xs text-foreground/40">
          © {new Date().getFullYear()} Styelle. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

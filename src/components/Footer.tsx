import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 md:px-6 border-t border-black/5 bg-background">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-medium text-lg">Styelle / StyledTogether</span>
          <p className="text-sm text-foreground/60 text-center md:text-left">
            Built for thoughtful, coordinated style discovery.
          </p>
        </div>
        <div className="flex gap-6 text-sm font-medium text-foreground/80">
          <Link href="/privacy" className="hover:text-accent transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-accent transition-colors">
            Terms
          </Link>
          <a href="mailto:hello@styelle.style" className="hover:text-accent transition-colors">
            hello@styelle.style
          </a>
        </div>
      </div>
    </footer>
  );
}

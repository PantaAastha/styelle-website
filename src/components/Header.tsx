import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src="/logo.png" alt="Styelle Logo" width={40} height={40} className="w-10 h-10 object-contain mix-blend-multiply" priority />
          <span className="text-xl font-medium tracking-tight">Styelle</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          <Link href="/#what-we-do" className="text-foreground/80 hover:text-accent transition-colors">
            Our Vision
          </Link>
          <Link href="/#how-it-works" className="text-foreground/80 hover:text-accent transition-colors">
            How it Works
          </Link>
          <Button href="/#contact" variant="outline" size="sm">
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
}

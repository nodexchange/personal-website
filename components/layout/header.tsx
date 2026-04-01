"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { NetworkLogo } from "@/components/ui/network-logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/book", label: "Book" },
  { href: "/mentorship", label: "Mentorship" },
  { href: "/speaking", label: "Speaking" },
  { href: "/workshops", label: "Workshops" },
  { href: "/stack", label: "Stack" },
];

const featuredNav = {
  href: "/agentic-playbook",
  label: "Agentic Playbook",
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[70px] transition-all duration-300",
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <Container className="flex h-full items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold text-foreground hover:text-foreground/80 transition-colors"
          >
            <NetworkLogo size={28} />
            Marcin Wojtala
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Featured: Agentic Playbook */}
            <Link
              href={featuredNav.href}
              className="text-sm font-medium px-4 py-2 rounded-full bg-[var(--featured-bg)] text-[var(--featured-text)] border border-[var(--featured-border)] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              {featuredNav.label}
            </Link>

            {/* Theme toggle */}
            <ThemeToggle />
          </nav>

          {/* Mobile theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={cn(
                    "w-full h-0.5 bg-foreground transition-all duration-300 origin-center",
                    isMobileMenuOpen && "rotate-45 translate-y-[9px]"
                  )}
                />
                <span
                  className={cn(
                    "w-full h-0.5 bg-foreground transition-all duration-300",
                    isMobileMenuOpen && "opacity-0 scale-0"
                  )}
                />
                <span
                  className={cn(
                    "w-full h-0.5 bg-foreground transition-all duration-300 origin-center",
                    isMobileMenuOpen && "-rotate-45 -translate-y-[9px]"
                  )}
                />
              </div>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu content */}
        <nav className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className={cn(
                "text-2xl font-semibold text-foreground hover:text-foreground/70 transition-all duration-300",
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              )}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 80 + 100}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* Featured: Agentic Playbook - Mobile */}
          <Link
            href={featuredNav.href}
            onClick={handleLinkClick}
            className={cn(
              "text-2xl font-semibold px-6 py-3 rounded-full bg-[var(--featured-bg)] text-[var(--featured-text)] border border-[var(--featured-border)] transition-all duration-300",
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
            style={{
              transitionDelay: isMobileMenuOpen ? `${navItems.length * 80 + 100}ms` : "0ms",
            }}
          >
            {featuredNav.label}
          </Link>
        </nav>
      </div>
    </>
  );
}

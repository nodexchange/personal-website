import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";

const socialLinks = [
  {
    href: "https://github.com/nodexchange",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/martinwojtala/",
    label: "LinkedIn",
  },
  {
    href: "mailto:1985mars@gmail.com",
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/16758689.png"
              alt="Martin Wojtala"
              width={32}
              height={32}
              className="rounded-full"
            />
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Martin Wojtala. All rights reserved.
            </p>
          </div>

          <nav className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}

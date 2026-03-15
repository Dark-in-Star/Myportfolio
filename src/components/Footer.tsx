import Link from "next/link";
import { Heart,  Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Dark-in-Star", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sounak-guha-70075a203/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/_darkinstar",
    label: "Instagram",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image 
                            src="/logo.png"
                              alt="Logo"
                              width={40}
                              height={40}
                              className="w-10 h-10"
                          />
              <span className="font-mono font-bold gradient-text">
                Sounak Guha
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Every great developer you know got there by solving problems which
              they were unqualified to solve until they actually did it.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-foreground">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg glass hover:bg-primary/20 hover:border-primary/30 hover:text-primary transition-all duration-200 text-muted-foreground"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Want to give me an opportunity?
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {year} Sounak Guha. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" />{" "}
            using Next.js, Three.js &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

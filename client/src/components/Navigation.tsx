import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "About" },
    { href: "/publications", label: "Publications" },
    { href: "/projects", label: "Projects" },
    { href: "/cv", label: "CV" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight hover:opacity-70 transition-opacity">
          Manyi Yao
        </Link>

        <div className="flex items-center gap-1 sm:gap-6">
          {links.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href} className="relative px-3 py-2 text-lg font-medium transition-colors hover:text-primary">
                <span className={cn(
                  "relative z-10",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}>
                  {link.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-secondary rounded-md -z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Twitter, Mail, Linkedin } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      <Navigation />

      <main className="pt-24 pb-16 px-6 max-w-6xl mx-auto min-h-[calc(100vh-80px)]">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-border/40 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Manyi Yao. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/GYeow" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/manyi-yao-438812141/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:myao014@ucr.edu" className="hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Layout } from "@/components/Layout";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="py-24 text-center">
        <p className="font-mono text-sm text-muted-foreground mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Page not found</h1>
        <p className="text-lg text-muted-foreground font-light mb-10">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </div>
    </Layout>
  );
}

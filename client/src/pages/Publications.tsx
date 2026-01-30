import { Layout } from "@/components/Layout";
import { publications } from "@/content/data";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { AuthorList } from "@/components/AuthorList";

export default function Publications() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      <div className="flex items-end justify-between mb-12 border-b border-border pb-6">
        <div>
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">Publications</h1>
          {/* <p className="text-muted-foreground">Peer-reviewed conference papers and journals.</p> */}
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {publications.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground italic">
            No publications added yet.
          </div>
        ) : (
          publications.map((pub) => (
            <motion.div
              key={pub.id}
              variants={item}
              className="group relative pl-8 border-l-2 border-border/50 hover:border-primary transition-colors"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary transition-colors" />

              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {pub.title}
              </h2>

              <div className="text-muted-foreground mb-2 font-light">
                <AuthorList authors={pub.authors} />
              </div>

              <div className="flex items-center gap-3 text-sm">
                <span className="font-mono font-medium text-primary bg-primary/5 px-2 py-0.5 rounded">
                  {pub.venue} {pub.year}
                </span>

                {(pub.pdf || pub.link) && (
                  <a
                    href={pub.pdf || pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>PDF</span>
                  </a>
                )}
              </div>

              {pub.abstract && (
                <p className="mt-3 text-sm text-muted-foreground/80 leading-relaxed max-w-3xl hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-300">
                  {pub.abstract}
                </p>
              )}
            </motion.div>
          ))
        )}
      </motion.div>
    </Layout>
  );
}

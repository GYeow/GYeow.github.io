import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Download, FileText } from "lucide-react";
import { Link } from "wouter";
import ReactMarkdown from "react-markdown";
import aboutContent from "@/content/about.md?raw";
import { news, publications } from "@/content/data";
import { AuthorList } from "@/components/AuthorList";

export default function About() {
  const selectedPublications = publications.filter(p => p.selected);

  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6" {...props} />,
                p: ({ node, ...props }) => <p className="text-lg text-muted-foreground leading-relaxed font-light mb-6" {...props} />,
                a: ({ node, ...props }) => <a className="font-medium text-primary underline underline-offset-4" target="_blank" rel="noopener noreferrer" {...props} />
              }}
            >
              {aboutContent}
            </ReactMarkdown>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link href="/publications" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:translate-x-1">
              View Publications <ArrowRight className="w-4 h-4" />
            </Link>

            <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground border border-border rounded-lg font-medium hover:bg-secondary/80 transition-all">
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>

            {/* <Link href="/cv" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground border border-border rounded-lg font-medium hover:bg-secondary/80 transition-all">
              Download CV <Download className="w-4 h-4" />
            </Link> */}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full md:w-1/3 shrink-0 max-w-[240px] md:max-w-none mx-auto"
        >
          <div className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden shadow-xl border border-border/50">
            {/* Unsplash image for profile */}
            {/* handsome young asian student wearing glasses studying in library */}
            <img
              src="/prof_pic.jpg"
              alt="Manyi Yao"
              className="w-full h-full object-cover"
            />
          </div>

          {/* <div className="mt-8 space-y-4">
            <h3 className="font-serif font-semibold text-lg">Education</h3>
            <ul className="space-y-4">
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                <div className="font-medium">Ph.D. Computer Science</div>
                <div className="text-sm text-muted-foreground">UC Riverside • 2023 - Present</div>
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-muted-foreground before:rounded-full">
                <div className="font-medium">M.S. Computer Engineering</div>
                <div className="text-sm text-muted-foreground">UC Riverside • 2021 - 2023</div>
              </li>
            </ul>
          </div> */}
        </motion.div>
      </div>

      <div className="mt-20 space-y-20">
        {/* News Section */}
        {news.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 border-b border-border pb-4">News</h2>
            <div className="space-y-6">
              {news.map((item) => (
                <div key={item.id} className="flex gap-6 items-start">
                  <span className="text-sm font-mono text-muted-foreground whitespace-nowrap pt-1 min-w-[100px]">{item.date}</span>
                  <div className="flex-1 text-muted-foreground text-lg">
                    <ReactMarkdown
                      components={{
                        a: ({ node, ...props }) => <a className="font-medium text-primary hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer" {...props} />,
                        p: ({ node, ...props }) => <p className="leading-relaxed" {...props} />
                      }}
                    >
                      {item.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Selected Publications */}
        {selectedPublications.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 border-b border-border pb-4">Selected Publications</h2>
            <div className="space-y-8">
              {selectedPublications.map((pub) => (
                <div key={pub.id} className="group">
                  <h3 className="font-serif font-semibold text-xl hover:text-primary transition-colors">
                    {pub.link ? (
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{pub.title}</a>
                    ) : (
                      pub.title
                    )}
                  </h3>
                  <div className="text-muted-foreground mt-2 text-lg font-light">
                    <AuthorList authors={pub.authors} />
                  </div>
                  <div className="flex gap-4 mt-3 text-sm">
                    <span className="font-mono font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-full border border-primary/20">
                      {pub.venue} {pub.year}
                    </span>
                    {(pub.pdf || pub.link) && (
                      <a href={pub.pdf || pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                        <FileText className="w-4 h-4" /> PDF
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}

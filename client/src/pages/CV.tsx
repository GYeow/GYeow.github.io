import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AuthorList } from "@/components/AuthorList";

import { useMemo } from "react";
import cvContent from "@/content/cv.md?raw";
import { parseCVMarkdown } from "@/lib/markdownUtils";

export default function CV() {
    const { intro, education, experience, service, awards, patents } = useMemo(() => parseCVMarkdown(cvContent), []);

    return (
        <Layout>
            <div className="max-w-3xl mx-auto py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    {/* Header */}
                    <div className="space-y-4">
                        <h1 className="text-4xl font-serif font-bold text-primary">Curriculum Vitae</h1>
                        <p className="text-muted-foreground text-lg">
                            {intro}
                        </p>
                    </div>

                    <Separator />

                    {/* Education */}
                    <section className="space-y-8">
                        <h2 className="text-2xl font-serif font-semibold flex items-center gap-3">
                            Education
                        </h2>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                    className="relative pl-8 border-l-2 border-border/50"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                                    <div className="space-y-2">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                            <h3 className="text-xl font-medium">{edu.degree}</h3>
                                            <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded">{edu.year}</span>
                                        </div>
                                        <div className="text-lg text-primary/80">{edu.institution}</div>
                                        {edu.advisor && (
                                            <div className="text-sm text-muted-foreground">Advisors: {edu.advisor}</div>
                                        )}
                                        <p className="text-muted-foreground leading-relaxed pt-2 whitespace-pre-line">{edu.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <Separator />

                    {/* Experience */}
                    <section className="space-y-8">
                        <h2 className="text-2xl font-serif font-semibold flex items-center gap-3">
                            Experience
                        </h2>
                        <div className="space-y-10">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 + 0.4 }}
                                    className="group relative pl-8 border-l-2 border-border/50 hover:border-primary/50 transition-colors"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-muted-foreground group-hover:border-primary transition-colors" />
                                    <div className="space-y-2">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                            <h3 className="text-xl font-medium">{exp.role}</h3>
                                            {exp.year && (
                                                <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded">{exp.year}</span>
                                            )}
                                        </div>
                                        {exp.company && (
                                            <div className="text-lg text-primary/80">{exp.company}</div>
                                        )}
                                        <p className="text-muted-foreground leading-relaxed pt-2 whitespace-pre-line">{exp.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <Separator />

                    {/* Service */}
                    {service.length > 0 && (
                        <>
                            <section className="space-y-8">
                                <h2 className="text-2xl font-serif font-semibold flex items-center gap-3">
                                    Service
                                </h2>
                                <div className="space-y-10">
                                    {service.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 + 0.5 }}
                                            className="group relative pl-8 border-l-2 border-border/50 hover:border-primary/50 transition-colors"
                                        >
                                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-muted-foreground group-hover:border-primary transition-colors" />
                                            <div className="space-y-2">
                                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                                    <h3 className="text-xl font-medium">{item.role}</h3>
                                                    {item.year && (
                                                        <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded">{item.year}</span>
                                                    )}
                                                </div>
                                                {item.company && (
                                                    <div className="text-lg text-primary/80">{item.company}</div>
                                                )}
                                                <p className="text-muted-foreground leading-relaxed pt-2 whitespace-pre-line">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                            <Separator />
                        </>
                    )}

                    {/* Patents */}
                    {patents.length > 0 && (
                        <>
                            <section className="space-y-6">
                                <h2 className="text-2xl font-serif font-semibold">Patents</h2>
                                <ul className="space-y-6 pl-2">
                                    {patents.map((patent, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 + 0.6 }}
                                            className="leading-relaxed text-lg"
                                        >
                                            <span className="text-muted-foreground/90">
                                                <AuthorList authors={patent.authors} />.
                                            </span>
                                            <span className="font-serif font-medium mx-1.5 text-foreground/90">
                                                {patent.url ? (
                                                    <a href={patent.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline underline-offset-4 transition-colors">
                                                        {patent.title}
                                                    </a>
                                                ) : (
                                                    patent.title
                                                )}
                                            </span>
                                            <span className="text-sm font-mono text-muted-foreground">
                                                {patent.number}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </section>
                            <Separator />
                        </>
                    )}

                    {/* Awards */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-serif font-semibold">Awards & Honors</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {awards.map((award, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 + 0.7 }}
                                    className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-colors"
                                >
                                    <h3 className="font-medium text-lg mb-1">{award.title}</h3>
                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <span>{award.organization}</span>
                                        <Badge variant="secondary" className="font-mono text-xs whitespace-nowrap">{award.year}</Badge>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </motion.div>
            </div>
        </Layout>
    );
}

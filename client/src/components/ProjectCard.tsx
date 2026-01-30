import { Project } from "@shared/schema";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-border transition-all shadow-sm hover:shadow-xl h-full flex flex-col cursor-pointer"
    >
      <div className="aspect-video overflow-hidden bg-muted flex-shrink-0">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif font-semibold text-lg leading-tight group-hover:text-primary/80 transition-colors">
            {project.title}
          </h3>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
        </div>

        <div className="relative mt-2 text-sm text-muted-foreground leading-relaxed flex-grow">
          <p className="line-clamp-4">
            {project.description}
          </p>
        </div>

        {project.tags && project.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-border/30">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border/50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}

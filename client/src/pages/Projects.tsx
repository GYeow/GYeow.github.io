import { Layout } from "@/components/Layout";
import { projects } from "@/content/data";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <Layout>
      <div className="flex items-end justify-between mb-12">
        <div>
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">Project Gallery</h1>
          {/* <p className="text-muted-foreground">Side projects, experiments, and open source contributions.</p> */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.length === 0 ? (
          <div className="col-span-full text-center py-12 text-muted-foreground italic">
            No projects to showcase yet.
          </div>
        ) : (
          projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))
        )}
      </div>
    </Layout>
  );
}

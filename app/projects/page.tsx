import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-2">My Work</h2>

      <p className="text-md mb-6">
        <span className="font-semibold">Note:</span> Backend services are
        temporarily disabled in all projects to reduce hosting costs. Full
        end-to-end demos can be made available upon request.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </div>
  );
}

import ProjectCard from "./components/ProjectCard";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </div>
  );
}

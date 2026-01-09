<<<<<<< HEAD
import Image from "next/image";
import { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      {project.image && (
        <div className="relative w-full h-60 mb-2 rounded overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-2 block"
      >
        View Project
      </a>
    </div>
  );
}
=======
import { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      {project.image && (
        <img src={project.image} alt={project.title} className="mb-2 w-full h-40 object-cover rounded" />
      )}
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">
        View Project
      </a>
    </div>
  );
}
>>>>>>> e7b500a4787e9b495d567a5254f9d942c3897de8

import { Skill } from "@/lib/data";

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col items-center gap-2 p-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
      {skill.icon && <img src={skill.icon} alt={skill.name} className="w-10 h-10" />}
      <span className="font-medium">{skill.name}</span>
    </div>
  );
}

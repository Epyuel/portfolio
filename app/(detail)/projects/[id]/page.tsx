import { notFound} from "next/navigation";
import { projectsData } from "@/lib/data";
import { FaReact, FaNodeJs, FaPython, FaArrowLeft } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";
import Image from "next/image";

const iconMap: Partial<Record<string, JSX.Element>> = {
  React: <FaReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
  Express: <FaNodeJs className="text-[#68A063]" />,
  MongoDB: <SiMongodb className="text-[#4DB33D]" />,
  Tailwind: <SiTailwindcss className="text-[#38B2AC]" />,
  Python: <FaPython className="text-[#FFD43B]" />,
  TypeScript: <SiTypescript className="text-[#4264ff]" />,
  Firebase: <SiFirebase className="text-[#f8ab39]" />,
};

export async function generateStaticParams() {
  return projectsData.map((p) => ({ id: p.id }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-4 sm:p-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <Image
          src={project.imageUrl.src}
          alt={project.title}
          width={500}
          height={100}
          className="w-full !h-auto rounded-2xl mb-8 border border-gray-300 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
        />

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <a href="/"><FaArrowLeft className="text-xl text-blue-500 hover:text-[1.4rem] cursor-pointer"/></a>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {project.title}
            </h1>
          </div>

          <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
            {project.description}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-colors duration-300 flex items-center gap-2"
                >
                  {iconMap[tag] ?? null}
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

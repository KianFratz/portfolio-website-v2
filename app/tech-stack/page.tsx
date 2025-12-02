import {
  ArrowLeft,
  ChartColumnStacked,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const frontendStack = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Vite",
  "Prettier",
  "Shadcn UI",
];

const backendStack = [
  "Node.js",
  "Python",
  "Java",
  "PHP",
  "FastAPI",
  "Spring Boot",
  "Laravel",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "JWT",
  "REST APIs",

];

const developerTools = [
  "Git",
  "GitHub",
  "VS Code",
  "JetBrains IntelliJ",
  "PyCharm",
  "Discord",
  "Docker",
  "Postman",
  "Cursor"
];

const llms = [
  "Claude",
  "ChatGPT",
  "Gemini",
  "DeepSeek",
];

function TechStack() {
  return (
    <div className="h-full font-sans items-center min-h-screen bg-zinc-50 dark:bg-black mx-56 px-4 py-8">
      <div className="">
        <div className="items-center pt-4">
          <Link href="/" className="flex items-center">
            <ArrowLeft size={16} />
            <span className="pl-2">Back to Home</span>
          </Link>
        </div>

        <div className="flex mt-4">
          <h1 className="text-3xl font-bold">Tech Stack</h1>
        </div>
      </div>

      <div className="text-gray-300 leading-relaxed mt-10">
        {/* frontend */}
        <div>
          <span className="text-2xl font-bold">Frontend</span>
          <div className="flex flex-wrap mt-4 gap-2">
            {frontendStack.map((tech) => (
              <div
                key={tech}
                className="flex items-center border border-white rounded-lg pl-4 pr-4 mb-1"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* backend */}
        <div className="pt-8">
          <span className="text-2xl font-bold">Backend</span>
          <div className="flex flex-wrap gap-2 mt-4">
            {backendStack.map((tech) => (
              <div
                key={tech}
                className="flex items-center border border-white rounded-lg pl-4 pr-4 mb-1"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>


        {/* developer tools */}
        <div className="pt-8">
          <span className="text-2xl font-bold">Developer Tools</span>
          <div className="flex flex-wrap gap-2 mt-4">
            {developerTools.map((tech) => (
              <div
                key={tech}
                className="flex items-center border border-white rounded-lg pl-4 pr-4 mb-1"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* ai tools */}
        <div className="pt-8">
          <span className="text-2xl font-bold">AI (Artificial Intelligence)</span>
          <div className="flex flex-wrap gap-2 mt-4">
            {llms.map((tech) => (
              <div
                key={tech}
                className="flex items-center border border-white rounded-lg pl-4 pr-4 mb-1"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;

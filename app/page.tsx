import { Button } from "@/components/ui/button";
import SimpleTimeline from "@/components/ui/verticalTimeLine";
import {
  ArrowLeft,
  ArrowLeftSquare,
  BriefcaseBusiness,
  ChartColumnStacked,
  ChevronRight,
  FlaskConical,
  Map,
  MapPin,
  SunsetIcon,
} from "lucide-react";
import Link from "next/link";

const frontendStack = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
];

const backendStack = [
  "Node.js",
  "Python",
  "Java",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
];

export default function Home() {
  return (
    <div className="mx-56 mt-12 min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Hero section */}
      <header className="flex gap-6">
        <div className="">
          <img
            src="IMG20250503173534.jpg"
            alt="Kian Fratz"
            className="w-46 h-46 rounded-lg object-cover shrink"
          />
        </div>
        <div className="pt-2">
          <span className="text-2xl font-bold ">Kian Fratz</span>
          <div className="flex items-center gap-2 pt-1">
            <MapPin size={16} />
            Cebu City, Philippines
          </div>
          <div className="pt-4 text-lg">Aspiring Software Engineer</div>
        </div>
      </header>

      <main className="grid grid-cols-2 gap-2">
        {/* About section */}
        <div className="flex flex-col">
          <div className="mt-10 p-4 w-full border rounded-lg border-gray-700 bg-zinc-900">
            {/* About heading */}
            <div className="flex items-center gap-2 mb-4">
              <BriefcaseBusiness size={16} />
              <span className="text-xl font-bold">About</span>
            </div>

            <div className="text-gray-300 leading-relaxed">
              I'm Kian Fratz, an aspiring software engineer with a passion for
              technology and innovation. Currently pursuing a degree in
              Information Technology at the University of Cebu Lapu-Lapu and
              Mandaue, I am eager to apply my skills to real-world challenges
              and contribute to meaningful projects.
            </div>
          </div>

          {/* Tech stack */}
          <div className="mt-2 p-4 border rounded-lg border-gray-700 bg-zinc-900 w-full">
            <div className="text-gray-300 leading-relaxed">
              {/* frontend */}
              <div className="flex items-center gap-2 mb-4">
                <ChartColumnStacked size={16} />
                <span className="font-bold text-xl">Tech Stack</span>

                <Link href={"/tech-stack"} className="ml-auto">
                  <Button className="cursor-pointer hover:text-black hover:bg-white ">
                    <ArrowLeft />
                    <span>View All</span>
                  </Button>
                </Link>
              </div>
              <span className="text-md font-bold">Frontend</span>
              <div className="flex flex-wrap mt-2 gap-2">
                {frontendStack.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center border border-gray-700 rounded-lg pl-2 pr-2 mb-2"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              {/* backend */}
              <span className="text-md font-bold">Backend</span>
              <div className="flex flex-wrap mt-2 gap-2">
                {backendStack.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center border border-gray-700 rounded-lg pl-2 pr-2 mb-2"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 w-full border rounded-lg border-gray-700 bg-zinc-900 mt-10">
          {/* Experience */}
          <div className="">
            {/* About heading */}
            <div className="flex items-center gap-2 mb-4">
              <BriefcaseBusiness size={16} />
              <span className="text-xl font-bold">Experience</span>
            </div>

            {/* Vertical Timeline experience */}
            <div className="pt-2">
              <SimpleTimeline />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
